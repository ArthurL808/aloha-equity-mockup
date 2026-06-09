import heroImage from "@/assets/hero-hawaii.jpg";

const HeroSection = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img src={heroImage} alt="Aerial view of a lush green Hawaiian coastline at golden hour" />
      </div>

      <div className="wrap">
        <div className="hero-inner">
          <span className="eyebrow">Hawai'i Property Buyers</span>
          <h1>
            Sell your property simply, on <em>your terms</em>.
          </h1>
          <p className="sub">A fair, all-cash offer for your Hawai'i home - no fees, no repairs, no pressure.</p>
          <p className="lead">We buy properties across the islands as-is and close on the timeline that works for you.</p>
          <div className="hero-actions">
            <a className="btn btn-leaf" href="#contact">
              Get Your Cash Offer <span className="arr">&rarr;</span>
            </a>
            <a className="btn btn-ghost" href="#process">
              See How It Works
            </a>
          </div>

          <div className="hero-stats">
            <div className="st">
              <b>$0</b>
              <span>Fees &amp; commissions</span>
            </div>
            <div className="st">
              <b>As-Is</b>
              <span>No repairs needed</span>
            </div>
            <div className="st">
              <b>Cash</b>
              <span>Fast, reliable close</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cue" aria-hidden="true">
        <span>Scroll</span>
        <div className="mouse">
          <i />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
