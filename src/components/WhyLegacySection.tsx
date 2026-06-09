import heroImage from "@/assets/hero-hawaii.jpg";

const WhyLegacySection = () => {
  return (
    <>
      <section className="band" id="why">
        <div className="wrap why-grid">
          <div className="reveal">
            <span className="eyebrow">Why Legacy Equity Group</span>
            <h2 style={{ fontSize: "clamp(28px,3.6vw,42px)", color: "var(--forest-deep)", marginTop: 16 }}>
              We're not just buying properties - we're helping people move forward.
            </h2>
            <div className="why-list">
              <div className="row">
                <div className="chk">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div className="rt">
                  <b>Honest, no-pressure approach</b>
                  <span>Real answers and clear options - never a hard sell.</span>
                </div>
              </div>

              <div className="row">
                <div className="chk">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div className="rt">
                  <b>Clear communication, start to finish</b>
                  <span>You'll always know exactly where things stand.</span>
                </div>
              </div>

              <div className="row">
                <div className="chk">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div className="rt">
                  <b>Local market knowledge</b>
                  <span>Hawai'i is home - we understand these islands and their communities.</span>
                </div>
              </div>

              <div className="row">
                <div className="chk">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div className="rt">
                  <b>Reliable closings with real solutions</b>
                  <span>All-cash offers mean no financing delays or surprises.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="why-visual reveal">
            <img src={heroImage} alt="Lush Hawaiian coastline" />
            <div className="badge">
              <div className="q">"We handle the details. You stay in control."</div>
              <div className="src">What's your legacy?</div>
            </div>
          </div>
        </div>
      </section>

      <section className="band" id="situations">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">Who We Help</span>
            <h2>We buy properties in any situation</h2>
            <p className="intro">If you're unsure whether we're a fit, we're happy to talk - no obligation, no pressure, just real answers.</p>
          </div>

          <div className="sit-grid">
            <div className="sit reveal">
              <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg></div>
              <h4>A fast, simple sale</h4>
              <p>Homeowners who want to skip the listing, showings, and waiting.</p>
            </div>
            <div className="sit reveal">
              <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5" /><path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3" /></svg></div>
              <h4>Inherited &amp; probate</h4>
              <p>Properties passed down that you'd rather not manage or maintain.</p>
            </div>
            <div className="sit reveal">
              <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
              <h4>Rental properties</h4>
              <p>Tired landlords ready to step away from tenants and upkeep.</p>
            </div>
            <div className="sit reveal">
              <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg></div>
              <h4>Properties needing repairs</h4>
              <p>Sell as-is - no fixing, cleaning, or staging required.</p>
            </div>
            <div className="sit reveal">
              <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
              <h4>Tight timelines</h4>
              <p>Owners facing life changes who need to move quickly and cleanly.</p>
            </div>
            <div className="sit reveal" style={{ background: "var(--forest)", borderColor: "var(--forest)" }}>
              <div className="ic" style={{ borderColor: "rgba(255,255,255,.3)" }}><svg viewBox="0 0 24 24" fill="none" stroke="var(--leaf-bright)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
              <h4 style={{ color: "#fff" }}>Not sure? Let's talk</h4>
              <p style={{ color: "rgba(255,255,255,.8)" }}>Every situation is different. Tell us about yours and we'll give it to you straight.</p>
            </div>
          </div>

          <p className="sit-note reveal">
            Don't see your situation? <a href="#contact">Reach out anyway &rarr;</a>
          </p>
        </div>
      </section>

      <section className="band legacy">
        <div className="wrap reveal">
          <div className="mono">Established in Hawai'i</div>
          <h2>
            Every property has a story. We help you write the <em>next chapter</em>.
          </h2>
          <p>
            At Legacy Equity Group, we believe selling your property should feel clear, fair, and respectful of what it meant to
            you. Whatever your reason for selling, we're here to make the path forward simple - so you can focus on what comes
            next.
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyLegacySection;
