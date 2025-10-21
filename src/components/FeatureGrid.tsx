import { Button } from "@/components/ui/button";
import { HardHat, Briefcase, Heart, Laptop } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const features = [
  {
    icon: HardHat,
    title: "Blue Collar",
    description: "For daily wage workers, labourers, plumbers, drivers, and the contractors who hire them...",
  },
  {
    icon: Briefcase,
    title: "White Collar",
    description: "For professionals like engineers, accountants, and office staff, and the companies that hire them.",
  },
  {
    icon: Heart,
    title: "Pink Collar",
    description: "For roles predominantly filled by women, such as nurses, beauticians, and care workers.",
  },
  {
    icon: Laptop,
    title: "No Collar (Gig/Freelance)",
    description: "For freelancers, students, and part-time workers taking on short-term projects or gigs.",
  },
];

const FeatureGrid = () => {
  const { theme } = useTheme();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background animate-gradient" />
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-muted text-muted-foreground">
            Employment Categories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Platform for Every Collar
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Rozmate uniquely serves all four major employment categories in one platform:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className={`h-8 w-8 group-hover:scale-110 transition-transform duration-300 ${theme === 'dark' ? 'text-white' : 'text-primary'}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <a href='/signup'>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Register Now
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
