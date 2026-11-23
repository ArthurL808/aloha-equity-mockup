import { useEffect } from "react";
import { Link } from "react-router-dom";
import QuizForm from "@/components/offer/QuizForm";
import "./offer.css";

const BENEFITS = [
  {
    title: "A fair cash offer",
    body: "No agent commissions and no lowball games. You see the number and the math behind it.",
  },
  {
    title: "No repairs or cleaning",
    body: "We buy as-is. Leave what you do not want and skip the contractors entirely.",
  },
  {
    title: "You pick the closing date",
    body: "Close when it suits you, whether that is a few weeks out or a few months.",
  },
];

const HOW_IT_WORKS = [
  { step: "1", title: "Tell us about your home", body: "Answer five quick questions. It takes about a minute." },
  { step: "2", title: "Get your cash offer", body: "We look at the property and come back with a real number." },
  { step: "3", title: "Close and get paid", body: "Pick your date, sign, and the funds are on their way." },
];

const SITUATIONS = [
  { title: "Behind on payments", body: "Facing foreclosure or falling behind on the mortgage." },
  { title: "Costs piling up", body: "HOA fees, property taxes or repairs adding up faster than you can cover." },
  { title: "Inherited property", body: "A home from probate or one you are managing from out of state." },
  { title: "Life changes", body: "A divorce, a move off island, or a tenant who has become a problem." },
];

const Offer = () => {
  useEffect(() => {
    document.title = "Get a Fair Cash Offer on Your Oʻahu Home | Legacy Equity Group";
  }, []);

  return (
    <div className="offer">
      <header className="offer-head">
        <span className="offer-brand">Legacy Equity Group</span>
      </header>

      <main>
        <section className="offer-hero">
          <h1>Get a Fair Cash Offer on Your O&#699;ahu Home</h1>
          <p className="offer-sub">
            No agents, no fees, no repairs. We buy houses in any condition across O&#699;ahu.
          </p>
          <p className="offer-cue">Answer 5 quick questions below</p>

          <QuizForm />

          <ul className="offer-badges">
            <li>No Obligation</li>
            <li>100% Free</li>
            <li>Any Condition</li>
          </ul>
        </section>

        <section className="offer-band">
          <div className="offer-cards">
            {BENEFITS.map((item) => (
              <article key={item.title} className="offer-card">
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="offer-band offer-band-tint">
          <h2 className="offer-h2">How it works</h2>
          <ol className="offer-steps">
            {HOW_IT_WORKS.map((item) => (
              <li key={item.step}>
                <span className="offer-step-num" aria-hidden="true">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="offer-band">
          <h2 className="offer-h2">We buy in situations like these</h2>
          <div className="offer-cards offer-cards-4">
            {SITUATIONS.map((item) => (
              <article key={item.title} className="offer-card offer-card-sm">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/*
          Testimonials stay out until Niko supplies real ones, with real names
          and real permission. Do not add placeholder reviews, star counts or
          review totals here.
        */}
      </main>

      <footer className="offer-foot">
        <p className="offer-foot-name">Legacy Equity Group, LLC</p>
        <p className="offer-foot-contact">
          Nikova <a href="tel:+18084978919">(808) 497-8919</a>
          <span aria-hidden="true"> &middot; </span>
          Anthony <a href="tel:+18083978531">(808) 397-8531</a>
        </p>
        <p>
          <Link to="/privacy">Privacy Policy</Link>
        </p>
      </footer>
    </div>
  );
};

export default Offer;
