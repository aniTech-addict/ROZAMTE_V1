import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLoading } from "@/hooks/use-loading";
import LoadingAnimation from "@/components/LoadingAnimation";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { startLoading, stopLoading } = useLoading();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    startLoading("Joining newsletter...");
    // Simulate API call
    setTimeout(() => {
      stopLoading();
      toast.success("Successfully joined the newsletter!");
      setEmail("");
    }, 2000);
  };
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Waitlist
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sign up to be the first to know when Rozmate launches. Get notified.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="john@gmail.com"
              className="flex-1 bg-background"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={false}
            />
            <Button
              type="submit"
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
              disabled={false}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
