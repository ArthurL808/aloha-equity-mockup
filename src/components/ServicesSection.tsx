import { FileText, DollarSign, CalendarCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const steps = [
    {
      icon: FileText,
      number: "1",
      title: "Tell Us About Your Property",
      description: "Fill out our short form or give us a call. No obligations.",
    },
    {
      icon: DollarSign,
      number: "2",
      title: "Receive Your Cash Offer",
      description: "We'll review the details and present a fair, transparent cash offer.",
    },
    {
      icon: CalendarCheck,
      number: "3",
      title: "Close on Your Schedule",
      description: "Choose your closing date and walk away with cash—stress free.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-ocean">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Simple 3-Step Process
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 border border-border/50 text-center relative"
            >
              {/* Step Number */}
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                <span className="text-2xl font-serif font-bold text-primary-foreground">{step.number}</span>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Arrow connector (not on last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-4 z-10">
                  <ArrowRight className="w-8 h-8 text-accent/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gold" size="xl">
            Get Your Cash Offer
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
