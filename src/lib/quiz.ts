// Quiz definition for the /offer landing page.
//
// NOTE: the point values live in api/lead.ts, not here. Scoring is done on the
// server so it can't be tampered with from the browser. If you add or rename a
// choice value below, update the POINTS table in api/lead.ts to match.

export type QuizChoice = { value: string; label: string };

export type ChoiceStepId = "condition" | "timeline" | "motivation";

export type ChoiceStep = {
  id: ChoiceStepId;
  kind: "choice";
  question: string;
  choices: QuizChoice[];
};

export type QuizStep =
  | ChoiceStep
  | { id: "property"; kind: "property"; question: string }
  | { id: "contact"; kind: "contact"; question: string };

export const PROPERTY_TYPES: QuizChoice[] = [
  { value: "single_family", label: "Single family home" },
  { value: "condo_townhouse", label: "Condo or townhouse" },
  { value: "multi_family", label: "Multi-family (2-4 units)" },
  { value: "vacant_land", label: "Vacant land" },
  { value: "other", label: "Other" },
];

export const STEPS: QuizStep[] = [
  {
    id: "condition",
    kind: "choice",
    question: "What condition is the property in?",
    choices: [
      { value: "good", label: "Good / move-in ready" },
      { value: "needs_work", label: "Needs some work" },
      { value: "major_repairs", label: "Major repairs needed" },
      { value: "not_sure", label: "Not sure" },
    ],
  },
  {
    id: "timeline",
    kind: "choice",
    question: "How soon do you need to sell?",
    choices: [
      { value: "asap", label: "As soon as possible" },
      { value: "1_3_months", label: "Within 1 to 3 months" },
      { value: "3_6_months", label: "3 to 6 months" },
      { value: "exploring", label: "Just exploring my options" },
    ],
  },
  {
    id: "motivation",
    kind: "choice",
    question: "What's your motivation for selling?",
    choices: [
      { value: "foreclosure", label: "Foreclosure / financial issues" },
      { value: "divorce", label: "Going through a divorce" },
      { value: "inherited", label: "Inherited the property" },
      { value: "landlord", label: "Tired of being a landlord" },
      { value: "relocating", label: "Relocating / moving" },
      { value: "repairs", label: "Too many repairs needed" },
      { value: "downsizing", label: "Downsizing" },
      { value: "other", label: "Other" },
    ],
  },
  { id: "property", kind: "property", question: "Where is the property located?" },
  { id: "contact", kind: "contact", question: "Where should we send your offer?" },
];

export const TOTAL_STEPS = STEPS.length;

export type QuizAnswers = {
  condition: string;
  timeline: string;
  motivation: string;
  street: string;
  city: string;
  zip: string;
  propertyType: string;
  name: string;
  email: string;
  phone: string;
};

export const EMPTY_ANSWERS: QuizAnswers = {
  condition: "",
  timeline: "",
  motivation: "",
  street: "",
  city: "",
  zip: "",
  propertyType: "",
  name: "",
  email: "",
  phone: "",
};

export function choiceLabel(stepId: ChoiceStepId, value: string): string {
  const step = STEPS.find((s) => s.id === stepId);
  if (!step || step.kind !== "choice") return "";
  return step.choices.find((c) => c.value === value)?.label ?? "";
}

export function propertyTypeLabel(value: string): string {
  return PROPERTY_TYPES.find((t) => t.value === value)?.label ?? "";
}

export type Utm = { source: string; medium: string; campaign: string; content: string };

export const EMPTY_UTM: Utm = { source: "", medium: "", campaign: "", content: "" };

/** Read the utm values off the page address. Called once on load.
 *  content is the ad creative, so two creatives in one campaign stay apart. */
export function readUtm(search: string): Utm {
  const params = new URLSearchParams(search);
  return {
    source: params.get("utm_source") ?? "",
    medium: params.get("utm_medium") ?? "",
    campaign: params.get("utm_campaign") ?? "",
    content: params.get("utm_content") ?? "",
  };
}

export const isEmail = (value: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value.trim());
export const isPhone = (value: string) => value.replace(/\D/g, "").length >= 10;
