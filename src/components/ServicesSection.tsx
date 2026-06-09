const ServicesSection = () => {
  return (
    <section className="band" id="process">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">How It Works</span>
          <h2>A simple, three-step process</h2>
          <p className="intro">Selling should not be complicated. We handle the details so you can move forward with confidence.</p>
        </div>

        <div className="steps">
          <div className="step reveal">
            <div className="num">STEP 01</div>
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M9 14h6M9 18h4" />
              </svg>
            </div>
            <h3>Tell us about your property</h3>
            <p>Share a few details by form or phone. It takes a couple of minutes, and there is no obligation.</p>
            <div className="rule" />
          </div>

          <div className="step reveal">
            <div className="num">STEP 02</div>
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1v22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3>Receive a fair cash offer</h3>
            <p>We review the details and present a transparent, all-cash offer with no hidden costs.</p>
            <div className="rule" />
          </div>

          <div className="step reveal">
            <div className="num">STEP 03</div>
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
                <path d="m9 16 2 2 4-4" />
              </svg>
            </div>
            <h3>Close on your schedule</h3>
            <p>Pick the closing date that works for you and walk away with cash - stress-free.</p>
            <div className="rule" />
          </div>
        </div>

        <div className="steps-cta reveal">
          <a className="btn btn-primary" href="#contact">
            Start With Your Property <span className="arr">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
