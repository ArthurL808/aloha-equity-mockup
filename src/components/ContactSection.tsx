import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";

type FormState = {
  name: string;
  phone: string;
  email: string;
  addr: string;
  msg: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  addr: "",
  msg: "",
};

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const ContactSection = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const setField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, boolean>> = {};

    if (!form.name.trim()) nextErrors.name = true;
    if (!form.addr.trim()) nextErrors.addr = true;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) nextErrors.email = true;
    if (form.phone.replace(/\D/g, "").length < 10) nextErrors.phone = true;

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    if (!WEB3FORMS_ACCESS_KEY) {
      toast({
        title: "Missing API key",
        description: "VITE_WEB3FORMS_ACCESS_KEY is not configured.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Property Inquiry from ${form.name}`,
          from_name: "Legacy Equity Group Website",
          name: form.name,
          email: form.email,
          phone: form.phone,
          property_address: form.addr,
          message: form.msg || "No additional details provided",
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
      setForm(initialForm);
      setErrors({});
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly at (808) 497-8919.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="band" id="contact">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Get Started</span>
          <h2>Request your cash offer</h2>
          <p className="intro">No obligation and no pressure - just real answers. Fill out the form below or give us a call.</p>
        </div>

        <div className="contact-grid">
          <div className="form-card reveal">
            {!isSubmitted ? (
              <form onSubmit={onSubmit} noValidate>
                <h3>Tell us about your property</h3>
                <p className="fsub">We typically respond within one business day.</p>

                <div className="frow">
                  <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Kahale"
                      value={form.name}
                      onChange={(event) => setField("name", event.target.value)}
                      style={errors.name ? { borderColor: "#c0492f", boxShadow: "0 0 0 4px rgba(192,73,47,.10)" } : undefined}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(808) 555-0123"
                      value={form.phone}
                      onChange={(event) => setField("phone", event.target.value)}
                      style={errors.phone ? { borderColor: "#c0492f", boxShadow: "0 0 0 4px rgba(192,73,47,.10)" } : undefined}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(event) => setField("email", event.target.value)}
                    style={errors.email ? { borderColor: "#c0492f", boxShadow: "0 0 0 4px rgba(192,73,47,.10)" } : undefined}
                  />
                </div>

                <div className="field">
                  <label htmlFor="addr">Property address</label>
                  <input
                    id="addr"
                    name="addr"
                    type="text"
                    placeholder="123 Aloha St, Honolulu, HI"
                    value={form.addr}
                    onChange={(event) => setField("addr", event.target.value)}
                    style={errors.addr ? { borderColor: "#c0492f", boxShadow: "0 0 0 4px rgba(192,73,47,.10)" } : undefined}
                  />
                </div>

                <div className="field">
                  <label htmlFor="msg">
                    Tell us more <span style={{ color: "var(--faint)", fontWeight: 400 }}>(optional)</span>
                  </label>
                  <textarea
                    id="msg"
                    name="msg"
                    rows={3}
                    placeholder="Any details about the property or your situation..."
                    value={form.msg}
                    onChange={(event) => setField("msg", event.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-leaf" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Get My Cash Offer "}
                  {!isSubmitting && <span className="arr">&rarr;</span>}
                </button>
                <p className="form-note">By submitting, you agree to be contacted about your property. We never share your information.</p>
              </form>
            ) : (
              <div className="form-success show">
                <div className="ok">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3>Thank you!</h3>
                <p>We've received your information and will be in touch within one business day.</p>
                <button
                  className="btn btn-outline"
                  style={{ marginTop: 22 }}
                  onClick={() => {
                    setIsSubmitted(false);
                    setErrors({});
                  }}
                  type="button"
                >
                  Submit another property
                </button>
              </div>
            )}
          </div>

          <div className="contact-aside reveal">
            <a className="cinfo" href="tel:8084978919">
              <div className="ci">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="ct">
                <b>Call us</b>
                <span>(808) 497-8919</span>
              </div>
            </a>

            <a className="cinfo" href="mailto:info@legacyequitygroup.com">
              <div className="ci">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </div>
              <div className="ct">
                <b>Email us</b>
                <span>info@legacyequitygroup.com</span>
                <span className="sm">LEG.LLC24@gmail.com</span>
              </div>
            </a>

            <div className="cinfo">
              <div className="ci">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="ct">
                <b>Service area</b>
                <span>All Hawaiian Islands</span>
              </div>
            </div>

            <div className="cbox">
              <div className="cb-lab">Prefer to talk?</div>
              <h4>Speak with a specialist</h4>
              <a className="btn btn-leaf" href="tel:8084978919">
                Call (808) 497-8919
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
