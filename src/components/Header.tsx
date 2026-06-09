import { useEffect, useState } from "react";
import logoTransparent from "@/assets/logo-transparent.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: "How It Works", href: "#process" },
    { label: "Why Us", href: "#why" },
    { label: "Who We Help", href: "#situations" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header id="hdr" className={`${isScrolled ? "scrolled" : "on-dark"}`}>
        <div className="wrap nav">
          <a href="#top" className="brand" aria-label="Legacy Equity Group home">
            <img src={logoTransparent} alt="Legacy Equity Group LLC" />
            <span className="bt">
              <b>Legacy Equity Group</b>
              <span>Hawai'i · LLC</span>
            </span>
          </a>

          <nav className="menu">
            {navLinks.map((link) => (
              <a key={link.label} className="link" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <a className="phone" href="tel:8084978919">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (808) 497-8919
            </a>
            <a className="btn btn-leaf" href="#contact">
              Get Your Cash Offer
            </a>
          </div>

          <button className="burger" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      <div className={`drawer ${isMenuOpen ? "open" : ""}`} id="drawer">
        <div className="dtop">
          <b>Legacy Equity Group</b>
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="dfoot">
          <a className="btn btn-leaf" href="#contact" onClick={() => setIsMenuOpen(false)}>
            Get Your Cash Offer
          </a>
          <a className="btn btn-ghost" href="tel:8084978919" onClick={() => setIsMenuOpen(false)}>
            Call (808) 497-8919
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
