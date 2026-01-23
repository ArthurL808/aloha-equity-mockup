import { TrendingUp, Building, Briefcase, PiggyBank, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Equity Investments",
      description: "Strategic investments in local and diversified equity portfolios designed for long-term growth and wealth preservation.",
      features: ["Portfolio Management", "Risk Assessment", "Market Analysis"],
    },
    {
      icon: Building,
      title: "Real Estate Equity",
      description: "Opportunities in Hawai'i's unique real estate market, from residential developments to commercial properties.",
      features: ["Property Analysis", "Development Projects", "REITs"],
    },
    {
      icon: Briefcase,
      title: "Business Advisory",
      description: "Expert guidance for local businesses seeking capital, expansion opportunities, or succession planning.",
      features: ["Capital Raising", "M&A Advisory", "Exit Strategies"],
    },
    {
      icon: PiggyBank,
      title: "Wealth Planning",
      description: "Comprehensive wealth management strategies to protect and grow your family's financial legacy for generations.",
      features: ["Estate Planning", "Tax Optimization", "Retirement Planning"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-ocean">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Equity Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From individual investors to growing businesses, we offer a full spectrum of equity services tailored to Hawai'i's market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 border border-border/50"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
