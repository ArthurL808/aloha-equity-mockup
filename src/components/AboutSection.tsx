import { Clock, DollarSign, Home, Banknote } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Clock,
      title: "We Work on Your Timeline",
      description: "Need to close quickly? Want more time to plan your next move? We adjust to your schedule—whether that's days, weeks, or months.",
    },
    {
      icon: DollarSign,
      title: "No Fees. Ever.",
      description: "When you sell to us, you pay zero out-of-pocket costs. No realtor commissions, no escrow fees, no closing costs. The offer we make is the amount you receive.",
    },
    {
      icon: Home,
      title: "Sell As-Is",
      description: "No repairs. No cleaning. No staging. We buy properties exactly as they are, in any condition.",
    },
    {
      icon: Banknote,
      title: "All-Cash Offers",
      description: "Our all-cash offers eliminate financing delays and uncertainty, allowing for faster and more reliable closings.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
            Why Homeowners Choose Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            How We Make Selling Easy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Selling a property doesn't have to be complicated or overwhelming. At Legacy Equity Group, we specialize in creating a smooth, transparent, and stress-free selling experience—so you can move forward with confidence.
          </p>
        </div>

        <p className="text-center text-accent font-semibold text-lg mb-16">
          We handle the details. You stay in control.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-sunset flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Border */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
