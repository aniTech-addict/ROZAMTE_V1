import { Layers, Banknote, ShieldCheck } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const features = [
  {
    icon: Layers,
    title: "All-in-One Platform",
    description: "The only platform that serves Blue, White, Pink, and Freelance workers together."
  },
  {
    icon: Banknote,
    title: "Integrated Payments",
    description: "Guarantees payment security through escrow-like mechanisms... solving the problem of delayed or missing payments."
  },
  {
    icon: ShieldCheck,
    title: "Compliance First",
    description: "Builds legal and tax compliance (like GST, TDS, EPF, ESI) directly into its processes, a huge value for businesses."
  }
];

const FeatureCommunication = () => {
  const { theme } = useTheme();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-muted text-muted-foreground">
             Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
             Rozmate Platform Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
             Comprehensive workforce solutions designed for the Indian market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCommunication;
