/**
 * Lead handler for the /offer quiz.
 *
 * Runs server side so the Follow Up Boss key and the Telegram bot token never
 * reach the browser. Both come from Vercel environment variables:
 *   FOLLOW_UP_BOSS_API_KEY, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
 *
 * Order of work: Follow Up Boss first (one retry), then the Telegram alert.
 * The caller only shows the thank-you screen when at least one of the two
 * accepted the lead, so a lead is never silently dropped. If Follow Up Boss
 * failed, the Telegram message says so in its first line.
 */

export const config = { maxDuration: 20 };

const FUB_ENDPOINT = "https://api.followupboss.com/v1/events";
const MAX_FIELD = 300;

/**
 * Scoring. Mirrors the choice values in src/lib/quiz.ts. Urgency and distress
 * score highest, so "as soon as possible" plus "foreclosure" lands at the top
 * and "just exploring my options" at the bottom.
 */
const POINTS: Record<string, Record<string, number>> = {
  condition: { good: 1, needs_work: 3, major_repairs: 4, not_sure: 2 },
  timeline: { asap: 5, "1_3_months": 3, "3_6_months": 2, exploring: 0 },
  motivation: {
    foreclosure: 5,
    divorce: 4,
    inherited: 4,
    landlord: 3,
    relocating: 3,
    repairs: 3,
    downsizing: 2,
    other: 1,
  },
};

const CAMPAIGN_LABELS: Record<string, string> = {
  situations_behind: "Behind on payments",
  situations_inherited: "Inherited a house",
  situations_landlord: "Done being a landlord",
  situations_relocating: "Relocating",
  situations_condition: "House full, needs work",
};

type Body = {
  answers?: Record<string, unknown>;
  labels?: Record<string, unknown>;
  utm?: Record<string, unknown>;
  website?: unknown; // honeypot, must stay empty
};

const clean = (value: unknown): string =>
  typeof value === "string" ? value.trim().slice(0, MAX_FIELD) : "";

function scoreLead(answers: Record<string, string>) {
  let total = 0;
  for (const key of ["condition", "timeline", "motivation"]) {
    total += POINTS[key]?.[answers[key]] ?? 0;
  }
  const label = total >= 10 ? "Hot" : total >= 6 ? "Warm" : "Cold";
  return { total, label };
}

function adSituation(campaign: string, source: string): string {
  if (CAMPAIGN_LABELS[campaign]) return CAMPAIGN_LABELS[campaign];
  if (campaign.startsWith("situations_")) {
    const rest = campaign.slice("situations_".length).replace(/_/g, " ").trim();
    if (rest) return rest;
  }
  return `none (source: ${source || "direct"})`;
}

function splitName(full: string) {
  const parts = full.split(/\s+/).filter(Boolean);
  if (parts.length < 2) return { firstName: full || "Unknown", lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

async function postJson(
  url: string,
  init: Record<string, unknown>,
  timeoutMs: number,
): Promise<{ ok: boolean; status: number; body: string }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...init, signal: controller.signal } as RequestInit);
    const body = await response.text();
    return { ok: response.ok, status: response.status, body: body.slice(0, 500) };
  } catch (error) {
    return { ok: false, status: 0, body: String(error) };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Minimal shape of the Vercel Node request and response objects. Declared here
 * so the file needs no extra dependency to typecheck.
 */
type LeadRequest = { method?: string; body?: unknown };
type LeadResponse = {
  status: (code: number) => LeadResponse;
  json: (payload: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

export default async function handler(req: LeadRequest, res: LeadResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method_not_allowed" });
  }

  const fubKey = process.env.FOLLOW_UP_BOSS_API_KEY;
  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChat = process.env.TELEGRAM_CHAT_ID;

  if (!fubKey && !tgToken) {
    console.error("lead: no FOLLOW_UP_BOSS_API_KEY and no TELEGRAM_BOT_TOKEN set");
    return res.status(500).json({ ok: false, error: "not_configured" });
  }

  let body: Body = {};
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body ?? {});
  } catch {
    return res.status(400).json({ ok: false, error: "bad_json" });
  }

  // Bots fill every field they find. Real visitors never see this one.
  if (clean(body.website)) {
    return res.status(200).json({ ok: true });
  }

  const a = (body.answers ?? {}) as Record<string, unknown>;
  const l = (body.labels ?? {}) as Record<string, unknown>;
  const u = (body.utm ?? {}) as Record<string, unknown>;

  const answers = {
    condition: clean(a.condition),
    timeline: clean(a.timeline),
    motivation: clean(a.motivation),
    street: clean(a.street),
    city: clean(a.city),
    zip: clean(a.zip),
    propertyType: clean(a.propertyType),
    name: clean(a.name),
    email: clean(a.email),
    phone: clean(a.phone),
  };

  if (!answers.name || !answers.email || !answers.phone) {
    return res.status(400).json({ ok: false, error: "missing_contact" });
  }

  const labels = {
    condition: clean(l.condition) || answers.condition,
    timeline: clean(l.timeline) || answers.timeline,
    motivation: clean(l.motivation) || answers.motivation,
    propertyType: clean(l.propertyType) || answers.propertyType,
  };

  const utm = {
    source: clean(u.source),
    medium: clean(u.medium),
    campaign: clean(u.campaign),
    content: clean(u.content),
  };

  const { total, label } = scoreLead(answers);
  const address = [answers.street, answers.city, answers.zip].filter(Boolean).join(", ");

  const detailLines = [
    `Condition: ${labels.condition || "not given"}`,
    `Timeline: ${labels.timeline || "not given"}`,
    `Motivation: ${labels.motivation || "not given"}`,
    `Property: ${address || "not given"}`,
    `Property type: ${labels.propertyType || "not given"}`,
    `Score: ${total} (${label})`,
    `utm_source: ${utm.source || "none"}`,
    `utm_medium: ${utm.medium || "none"}`,
    `utm_campaign: ${utm.campaign || "none"}`,
    `utm_content: ${utm.content || "none"}`,
  ];

  // ---- 1. Follow Up Boss -------------------------------------------------
  let fubOk = false;
  let fubDetail = "no key configured";

  if (fubKey) {
    const { firstName, lastName } = splitName(answers.name);
    const payload = {
      source: "Legacy Equity Group Quiz",
      type: "Seller Inquiry",
      message: detailLines.join("\n"),
      person: {
        firstName,
        lastName,
        emails: [{ value: answers.email }],
        phones: [{ value: answers.phone }],
        tags: ["Quiz Lead", label],
        ...(address
          ? {
              addresses: [
                {
                  street: answers.street,
                  city: answers.city,
                  code: answers.zip,
                  state: "HI",
                  country: "US",
                },
              ],
            }
          : {}),
      },
    };

    const init = {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${fubKey}:`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    let attempt = await postJson(FUB_ENDPOINT, init, 5000);
    // One retry, but only for a network blip or a Follow Up Boss outage.
    // A 4xx means the payload is wrong and retrying changes nothing.
    if (!attempt.ok && (attempt.status === 0 || attempt.status >= 500)) {
      attempt = await postJson(FUB_ENDPOINT, init, 5000);
    }
    fubOk = attempt.ok;
    fubDetail = `${attempt.status} ${attempt.body}`;
    if (!fubOk) console.error("lead: follow up boss rejected the lead:", fubDetail);
  }

  // ---- 2. Telegram -------------------------------------------------------
  let telegramOk = false;

  if (tgToken && tgChat) {
    const header = label === "Hot" ? "\u{1F525} NEW QUIZ LEAD: HOT" : `NEW QUIZ LEAD: ${label.toUpperCase()}`;
    const lines = [
      ...(fubKey && !fubOk ? ["NOT SAVED TO FOLLOW UP BOSS, ADD BY HAND"] : []),
      header,
      `AD SITUATION: ${adSituation(utm.campaign, utm.source)}`,
      "",
      `Name: ${answers.name}`,
      `Phone: ${answers.phone}`,
      `Email: ${answers.email}`,
      "",
      ...detailLines,
    ];

    const sent = await postJson(
      `https://api.telegram.org/bot${tgToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Plain text on purpose: no parse_mode means a visitor cannot break
        // the message with stray markup characters.
        body: JSON.stringify({ chat_id: tgChat, text: lines.join("\n") }),
      },
      5000,
    );
    telegramOk = sent.ok;
    if (!telegramOk) console.error("lead: telegram send failed:", sent.status, sent.body);
  }

  if (!fubOk && !telegramOk) {
    return res.status(502).json({ ok: false, error: "delivery_failed" });
  }

  return res.status(200).json({ ok: true, crm: fubOk, alert: telegramOk, label });
}
