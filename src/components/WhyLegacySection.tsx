import { Check, Home, Key, Wrench, Users, Clock } from "lucide-react";

const WhyLegacySection = () => {
  const benefits = [
    "Honest, no-pressure approach",
    "Clear communication from start to finish",
    "Local market knowledge",
    "Reliable closings with real solutions",
  ];

  const whoWeHelp = [
    { icon: Home, label: "Homeowners looking for a fast, simple sale" },
    { icon: Key, label: "Inherited or probate properties" },
    { icon: Users, label: "Rental properties" },
    { icon: Wrench, label: "Properties needing repairs" },
    { icon: Clock, label: "Owners facing life changes or tight timelines" },
  ];

  return (
    <section id="why-legacy" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Who We Help */}
          <div>
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Who We Help
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              We Buy Properties in Any Situation
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
              If you're unsure whether we're a fit, we're happy to talk. There's no obligation and no pressure—just real answers.
            </p>

            <ul className="space-y-4">
              {whoWeHelp.map((item, index) => (
                <li key={index} className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-primary-foreground">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Legacy */}
          <div>
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Why Legacy Equity Group
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
              We're not just buying properties—we're helping people move forward.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-primary-foreground text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLegacySection;
