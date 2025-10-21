import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-12 text-center shadow-card overflow-hidden">
          {/* Card gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-gradient-xy opacity-50" />
          <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enhance your team's productivity with Acme
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Write in threads, focus, and collaborate without video calls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Register Now
            </Button>
            
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
