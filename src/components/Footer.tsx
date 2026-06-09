import logoTransparent from "@/assets/logo-transparent.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <div className="fb-top">
              <img src={logoTransparent} alt="Legacy Equity Group LLC" />
              <span>
                <b>Legacy Equity Group</b>
                <span>Hawai'i · LLC</span>
              </span>
            </div>
            <p>Fair, all-cash offers for Hawai'i property owners. Sell simply, confidently, and on your terms.</p>
          </div>

          <div className="fcol">
            <h5>Explore</h5>
            <a href="#process">How It Works</a>
            <a href="#why">Why Us</a>
            <a href="#situations">Who We Help</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="fcol">
            <h5>Get in touch</h5>
            <a href="tel:8084978919">(808) 497-8919</a>
            <a href="mailto:info@legacyequitygroup.com">info@legacyequitygroup.com</a>
            <span>All Hawaiian Islands</span>
          </div>
        </div>

        <div className="fbar">
          <p>&copy; {currentYear} Legacy Equity Group LLC. All rights reserved.</p>
          <span className="ftag">What's your legacy?</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
