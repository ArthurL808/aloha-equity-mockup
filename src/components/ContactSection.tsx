import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyAddress: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
            Get Started
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Your Cash Offer Today
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            There's no obligation and no pressure—just real answers. Fill out the form below or give us a call.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Tell Us About Your Property
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="(808) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Property Address
                </label>
                <Input
                  placeholder="123 Aloha St, Honolulu, HI"
                  value={formData.propertyAddress}
                  onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Tell Us More (Optional)
                </label>
                <Textarea
                  placeholder="Any details about the property or your situation..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full">
                Get My Cash Offer
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info & CTA */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Prefer to Talk?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're here to answer your questions. No pressure, no obligation—just a straightforward conversation about your options.
              </p>
            </div>

            <div className="space-y-4">
              <a href="tel:808-497-8919" className="flex items-center gap-4 p-6 bg-gradient-sunset rounded-xl hover:shadow-soft transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground text-sm">(808) 497-8919</p>
                </div>
              </a>

              <a href="mailto:LEG.LLC24@gmail.com" className="flex items-center gap-4 p-6 bg-gradient-sunset rounded-xl hover:shadow-soft transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground text-sm">LEG.LLC24@gmail.com</p>
                  <p className="text-muted-foreground text-sm">info@legacyequitygroup.com</p>
                </div>
              </a>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-center">
              <p className="text-primary-foreground/80 text-sm mb-3">Ready to get started?</p>
              <p className="font-serif text-2xl font-bold text-primary-foreground mb-4">
                Talk to a Specialist
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="tel:808-497-8919">
                  Call (808) 497-8919
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
