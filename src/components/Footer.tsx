import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Legacy Equity Group LLC" className="h-14 w-14 object-contain rounded-lg" />
            <div>
              <p className="font-serif font-semibold text-primary-foreground text-lg leading-tight">Legacy Equity</p>
              <p className="text-xs text-primary-foreground/70 tracking-wider">GROUP</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="tel:808-497-8919" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
              <Phone className="w-4 h-4" />
              (808) 497-8919
            </a>
            <a href="mailto:LEG.LLC24@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
              <Mail className="w-4 h-4" />
              LEG.LLC24@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Legacy Equity Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
