import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-hawaii.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful Hawaiian coastline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm text-primary-foreground/90 font-medium">
              Proudly Serving Hawai'i
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Building Wealth,
            <br />
            <span className="text-gradient-gold">Preserving Legacy</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Your trusted local partner for strategic equity investments. We help Hawai'i families and businesses grow their wealth with personalized, community-focused solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground">20+</p>
                <p className="text-sm text-primary-foreground/70 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground">$50M+</p>
                <p className="text-sm text-primary-foreground/70 mt-1">Assets Managed</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground">100%</p>
                <p className="text-sm text-primary-foreground/70 mt-1">Local Focus</p>
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
