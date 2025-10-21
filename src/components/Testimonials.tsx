import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Our team's productivity soared with this messaging tool. Its simplicity fosters quick decision-making and seamless collaboration, essential for our fast-paced product development.",
    author: "Emily Rodriguez",
    role: "Emily Rodriguez, PinPoint",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
  },
  {
    quote: "With this tool, our team's workflow has become more efficient and organized. We spend less time navigating complex interfaces and more time focusing on what matters: delivering quality products to our customers.",
    author: "David Patel",
    role: "David Patel, Hues",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    quote: "We've seen a dramatic improvement in our team collaboration since integrating this platform. The seamless integration with our existing tools and the intuitive interface have made our workflow much smoother.",
    author: "Rachel Kim",
    role: "Rachel Kim, ProLine",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 overflow-hidden animate-on-scroll">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-background animate-gradient" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="container relative mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What our clients say</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`animate-on-scroll rounded-2xl border border-border bg-card p-8 transition-all ${
                index === currentIndex ? "ring-2 ring-primary" : ""
              }`}
            >
              <p className="text-xl mb-8 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
