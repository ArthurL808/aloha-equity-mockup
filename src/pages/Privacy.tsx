import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./offer.css";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Legacy Equity Group";
  }, []);

  return (
    <div className="offer">
      <header className="offer-head">
        <Link to="/" className="offer-brand">Legacy Equity Group</Link>
      </header>

      <main className="offer-prose">
        <h1>Privacy Policy</h1>
        <p className="offer-updated">Legacy Equity Group, LLC</p>

        <h2>What we collect</h2>
        <p>
          When you fill out a form on this site we collect your name, email address, phone number and
          details about the property you are asking about, such as its address, condition and your
          timeline for selling. We also record which ad or link brought you here.
        </p>

        <h2>Why we collect it</h2>
        <p>
          We use it to contact you about your property and to prepare an offer. That is the only reason
          we ask for it.
        </p>

        <h2>We do not sell your information</h2>
        <p>
          We do not sell or rent your information. We share it only with the service providers that help
          us run our business, such as the systems we use to store contact details and send our own team
          notifications, and only so they can do that work for us.
        </p>

        <h2>How to have your information deleted</h2>
        <p>
          Email <a href="mailto:Leg.llc24@gmail.com">Leg.llc24@gmail.com</a> and ask us to delete your
          information. We will remove it from our systems and confirm once it is done.
        </p>

        <h2>Contact</h2>
        <p>
          Legacy Equity Group, LLC
          <br />
          <a href="mailto:Leg.llc24@gmail.com">Leg.llc24@gmail.com</a>
          <br />
          Nikova <a href="tel:+18084978919">(808) 497-8919</a>
        </p>

        <p className="offer-back">
          <Link to="/offer">&larr; Back to the cash offer form</Link>
        </p>
      </main>
    </div>
  );
};

export default Privacy;
