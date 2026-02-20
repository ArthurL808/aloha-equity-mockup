import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s()+-]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  propertyAddress: z.string().min(5, "Please enter the property address"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Replace with your Web3Forms access key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Property Inquiry from ${data.name}`,
          from_name: "Legacy Equity Group Website",
          name: data.name,
          email: data.email,
          phone: data.phone,
          property_address: data.propertyAddress,
          message: data.message || "No additional details provided",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        reset();
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 24 hours.",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly at (808) 497-8919.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-accent mb-4" />
                <h4 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Thank You!
                </h4>
                <p className="text-muted-foreground mb-6">
                  We've received your information and will be in touch within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Property
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      {...register("name")}
                      className={`bg-background ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(808) 555-0123"
                      {...register("phone")}
                      className={`bg-background ${errors.phone ? "border-destructive" : ""}`}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                    className={`bg-background ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="propertyAddress" className="text-sm font-medium text-foreground mb-2 block">
                    Property Address *
                  </label>
                  <Input
                    id="propertyAddress"
                    placeholder="123 Aloha St, Honolulu, HI"
                    {...register("propertyAddress")}
                    className={`bg-background ${errors.propertyAddress ? "border-destructive" : ""}`}
                  />
                  {errors.propertyAddress && (
                    <p className="text-destructive text-xs mt-1">{errors.propertyAddress.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Tell Us More (Optional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Any details about the property or your situation..."
                    rows={4}
                    {...register("message")}
                    className="bg-background resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get My Cash Offer
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
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
              <p className="text-primary-foreground/90 text-sm mb-3">Ready to get started?</p>
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
