import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-hawaii.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful Hawaiian property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-6 animate-fade-up">
            Sell Your Property Simply. Confidently. On Your Terms.
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Get a Fair,{" "}
            <span className="text-gradient-gold">All-Cash Offer</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-primary-foreground/90 max-w-xl mb-4 leading-relaxed animate-fade-up font-medium" style={{ animationDelay: "0.2s" }}>
            No Fees. No Repairs. No Stress.
          </p>

          <p className="text-lg text-primary-foreground/70 max-w-xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.25s" }}>
            We buy properties in Hawai'i — as-is, on your timeline, with zero out-of-pocket costs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Get Your Cash Offer
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Schedule a Free Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground">$0</p>
                <p className="text-sm text-primary-foreground/70 mt-1">Fees or Commissions</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground">As-Is</p>
                <p className="text-sm text-primary-foreground/70 mt-1">No Repairs Needed</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground">Cash</p>
                <p className="text-sm text-primary-foreground/70 mt-1">Fast & Reliable Close</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
