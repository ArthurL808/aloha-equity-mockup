import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ChoiceStep,
  EMPTY_ANSWERS,
  EMPTY_UTM,
  PROPERTY_TYPES,
  QuizAnswers,
  STEPS,
  TOTAL_STEPS,
  Utm,
  choiceLabel,
  isEmail,
  isPhone,
  propertyTypeLabel,
  readUtm,
} from "@/lib/quiz";
import { trackOnce } from "@/lib/pixel";

type Status = "idle" | "sending" | "done" | "failed";
type Errors = Partial<Record<keyof QuizAnswers, string>>;

const QuizForm = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(EMPTY_ANSWERS);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [utm, setUtm] = useState<Utm>(EMPTY_UTM);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const hasStarted = useRef(false);
  const didMount = useRef(false);

  // Read the campaign values once, before any navigation can strip them.
  useEffect(() => {
    setUtm(readUtm(window.location.search));
  }, []);

  // Move focus to the new question so screen readers and phones both follow along.
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    headingRef.current?.focus();
  }, [step, status]);

  const current = STEPS[step];

  /**
   * Pull the live DOM values rather than React state, because autofill on a
   * phone often skips onChange. Only fields actually present in the current
   * form are returned, so moving between steps never blanks an earlier answer.
   */
  const FIELD_NAMES = ["street", "city", "zip", "propertyType", "name", "email", "phone"] as const;

  const readForm = (): Partial<QuizAnswers> => {
    if (!formRef.current) return {};
    const data = new FormData(formRef.current);
    const values: Partial<QuizAnswers> = {};
    for (const field of FIELD_NAMES) {
      if (data.has(field)) values[field] = String(data.get(field) ?? "").trim();
    }
    return values;
  };

  const answerChoice = (stepId: ChoiceStep["id"], value: string) => {
    if (!hasStarted.current) {
      hasStarted.current = true;
      trackOnce("InitiateCheckout");
    }
    setAnswers((prev) => ({ ...prev, [stepId]: value }));
    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS - 1));
  };

  const goBack = () => {
    if (current.kind !== "choice") {
      setAnswers((prev) => ({ ...prev, ...readForm() }));
    }
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const submitProperty = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = readForm();
    const next: Errors = {};
    if (!values.street) next.street = "Enter the property address";
    if (!values.city) next.city = "Enter the city";
    if (!/^\d{5}$/.test(values.zip ?? "")) next.zip = "Enter a 5 digit zip code";
    if (!values.propertyType) next.propertyType = "Choose a property type";

    setAnswers((prev) => ({ ...prev, ...values }));
    setErrors(next);
    if (Object.keys(next).length === 0) setStep((prev) => prev + 1);
  };

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const values = readForm();
    const merged = { ...answers, ...values } as QuizAnswers;
    const next: Errors = {};
    if (!merged.name) next.name = "Enter your name";
    if (!isEmail(merged.email)) next.email = "Enter a valid email address";
    if (!isPhone(merged.phone)) next.phone = "Enter a 10 digit phone number";

    setAnswers(merged);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: merged,
          labels: {
            condition: choiceLabel("condition", merged.condition),
            timeline: choiceLabel("timeline", merged.timeline),
            motivation: choiceLabel("motivation", merged.motivation),
            propertyType: propertyTypeLabel(merged.propertyType),
          },
          utm,
          website: formRef.current
            ? String(new FormData(formRef.current).get("website") ?? "")
            : "",
        }),
      });

      const result = await response.json().catch(() => ({ ok: false }));
      if (!response.ok || !result.ok) throw new Error("delivery failed");

      trackOnce("Lead");
      setStatus("done");
    } catch {
      setStatus("failed");
    }
  };

  if (status === "done") {
    return (
      <div className="quiz quiz-done" aria-live="polite">
        <div className="quiz-check" aria-hidden="true">&#10003;</div>
        <h2 ref={headingRef} tabIndex={-1}>You&rsquo;re all set!</h2>
        <p>
          Nikova <a href="tel:+18084978919">(808) 497-8919</a> or Anthony{" "}
          <a href="tel:+18083978531">(808) 397-8531</a> will call you shortly.
        </p>
        <p className="quiz-note">Please save our numbers so you know it&rsquo;s us.</p>
      </div>
    );
  }

  const progress = Math.round(((step + 1) / TOTAL_STEPS) * 100);

  return (
    <div className="quiz">
      <div className="quiz-progress">
        <div className="quiz-progress-head">
          <span>Step {step + 1} of {TOTAL_STEPS}</span>
          {step > 0 && (
            <button type="button" className="quiz-back" onClick={goBack}>
              &larr; Back
            </button>
          )}
        </div>
        <div
          className="quiz-bar"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={TOTAL_STEPS}
          aria-valuenow={step + 1}
          aria-label={`Step ${step + 1} of ${TOTAL_STEPS}`}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>

      <h2 className="quiz-q" ref={headingRef} tabIndex={-1}>
        {current.question}
      </h2>

      {current.kind === "choice" && (
        <div className="quiz-choices">
          {current.choices.map((choice) => (
            <button
              key={choice.value}
              type="button"
              className={`quiz-choice${answers[current.id] === choice.value ? " is-picked" : ""}`}
              onClick={() => answerChoice(current.id, choice.value)}
            >
              {choice.label}
            </button>
          ))}
        </div>
      )}

      {current.kind === "property" && (
        <form key="property" ref={formRef} onSubmit={submitProperty} noValidate>
          <div className="quiz-field">
            <label htmlFor="street">Street address</label>
            <input
              id="street"
              name="street"
              type="text"
              autoComplete="street-address"
              defaultValue={answers.street}
              aria-invalid={Boolean(errors.street)}
            />
            {errors.street && <span className="quiz-error">{errors.street}</span>}
          </div>

          <div className="quiz-row">
            <div className="quiz-field">
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="address-level2"
                defaultValue={answers.city}
                aria-invalid={Boolean(errors.city)}
              />
              {errors.city && <span className="quiz-error">{errors.city}</span>}
            </div>
            <div className="quiz-field">
              <label htmlFor="zip">Zip code</label>
              <input
                id="zip"
                name="zip"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={5}
                autoComplete="postal-code"
                defaultValue={answers.zip}
                aria-invalid={Boolean(errors.zip)}
              />
              {errors.zip && <span className="quiz-error">{errors.zip}</span>}
            </div>
          </div>

          <div className="quiz-field">
            <label htmlFor="propertyType">Property type</label>
            <select
              id="propertyType"
              name="propertyType"
              defaultValue={answers.propertyType}
              aria-invalid={Boolean(errors.propertyType)}
            >
              <option value="">Choose one</option>
              {PROPERTY_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.propertyType && <span className="quiz-error">{errors.propertyType}</span>}
          </div>

          <button type="submit" className="btn btn-leaf quiz-submit">
            Continue
          </button>
        </form>
      )}

      {current.kind === "contact" && (
        <form key="contact" ref={formRef} onSubmit={submitLead} noValidate>
          <div className="quiz-field">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              defaultValue={answers.name}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <span className="quiz-error">{errors.name}</span>}
          </div>

          <div className="quiz-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              defaultValue={answers.email}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <span className="quiz-error">{errors.email}</span>}
          </div>

          <div className="quiz-field">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              defaultValue={answers.phone}
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone && <span className="quiz-error">{errors.phone}</span>}
          </div>

          {/* Honeypot. Hidden from people, irresistible to bots. */}
          <div className="quiz-hp" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <button type="submit" className="btn btn-leaf quiz-submit" disabled={status === "sending"}>
            {status === "sending"
              ? "Sending..."
              : status === "failed"
                ? "Send it again"
                : "Get My Cash Offer"}
          </button>

          {status === "failed" && (
            <p className="quiz-failed" role="alert">
              We couldn&rsquo;t send that through. Your answers are still here, tap the button to try again,
              or call us at <a href="tel:+18084978919">(808) 497-8919</a>.
            </p>
          )}

          <p className="quiz-consent">
            By submitting, you agree to be contacted about your property.
          </p>
        </form>
      )}
    </div>
  );
};

export default QuizForm;
