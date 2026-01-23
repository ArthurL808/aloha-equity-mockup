import { Heart, Users, Shield } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We're rooted in Hawai'i. Our success is measured by the prosperity we bring to our local families and businesses.",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Transparency guides every decision. We build lasting relationships through honest communication and ethical practices.",
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "No generic solutions here. We take the time to understand your unique goals and craft strategies tailored to you.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
            About Legacy Equity Group
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Rooted in Aloha,
            <br />
            Driven by Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Legacy Equity Group LLC was founded with a simple mission: to help Hawai'i's families and businesses build lasting wealth. As a locally owned and operated firm, we understand the unique opportunities and challenges of investing in our island community.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-sunset flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
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
