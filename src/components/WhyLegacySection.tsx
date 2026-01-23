import { Check, Award, Clock, Handshake } from "lucide-react";

const WhyLegacySection = () => {
  const benefits = [
    "Deep understanding of Hawai'i's unique market dynamics",
    "Personalized strategies, never one-size-fits-all",
    "Transparent fee structures with no hidden costs",
    "Regular communication and portfolio updates",
    "Strong local network and community ties",
    "Commitment to sustainable, ethical investing",
  ];

  const stats = [
    {
      icon: Award,
      value: "A+",
      label: "BBB Rating",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Client Support",
    },
    {
      icon: Handshake,
      value: "500+",
      label: "Happy Clients",
    },
  ];

  return (
    <section id="why-legacy" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Your Success is Our Legacy
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              In a world of distant financial firms, we're proud to be your neighbors. When you partner with Legacy Equity Group, you get more than advisors—you get advocates who are invested in our shared community.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <p className="font-serif text-4xl font-bold text-primary-foreground">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/70">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLegacySection;
