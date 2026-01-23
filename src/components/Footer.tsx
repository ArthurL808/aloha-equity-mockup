const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Equity Investments", href: "#services" },
      { label: "Real Estate", href: "#services" },
      { label: "Business Advisory", href: "#services" },
      { label: "Wealth Planning", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Disclosures", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-lg">L</span>
              </div>
              <div>
                <p className="font-serif font-semibold text-primary-foreground text-lg leading-tight">Legacy Equity</p>
                <p className="text-xs text-primary-foreground/70 tracking-wider">GROUP LLC</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Building lasting wealth for Hawai'i's families and businesses since 2004. Your trusted local equity partner.
            </p>
            <p className="text-primary-foreground/50 text-xs">
              Registered Investment Advisor
              <br />
              Member SIPC
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Legacy Equity Group LLC. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-xs text-center md:text-right">
              Securities offered through Legacy Equity Group LLC. Investment advisory services offered through Legacy Wealth Advisors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
