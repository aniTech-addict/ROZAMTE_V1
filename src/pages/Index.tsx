import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import FeatureCommunication from "@/components/FeatureCommunication";
import FeatureGrid from "@/components/FeatureGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronUp } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Unobserve after animation to prevent re-triggering
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted/30 z-50">
        <div
          className="h-full bg-gradient-primary transition-all duration-300 ease-out"
          style={{ width: `${Math.min((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
        />
      </div>

      {/* Scroll to Top Button */}
      {scrollY > 400 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 btn-interactive"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}

      <main>
        {/* Hero Section */}
        <section id="hero" className={`relative pt-32 pb-20 overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient-xy" />

          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

          <div className="container relative mx-auto px-4">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="mb-8 flex items-center gap-3 animate-fade-in">
                <div className="flex h-12 w-auto items-center justify-center">
                  <img
                    src={theme === 'dark' ? "/ROZMATE-mark-white.png" : "/ROZMATE-mark--blue.png"}
                    alt="Rozmate Mark"
                    className="h-10 w-auto transition-opacity duration-300"
                  />
                </div>
                <span className="text-lg text-muted-foreground font-medium">India's Workforce Platform</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up leading-tight">
                One stop for
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  every Job.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
                Rozmate is an all-in-one technology platform that connects job seekers with employers across all segments of the Indian workforce, while also handling secure payments and ensuring legal compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg h-12 px-8 text-lg font-semibold rounded-xl btn-interactive">
                  Join Waitlist
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted transition-all duration-300 hover:scale-105 hover:shadow-lg h-12 px-8 text-lg font-semibold rounded-xl">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className={`animate-on-scroll transition-all duration-1000 ${isLoaded ? 'animate-in animate-delay-200' : ''}`}
        >
          <FeatureCommunication />
        </section>

        <section
          id="how-it-works"
          className={`animate-on-scroll transition-all duration-1000 ${isLoaded ? 'animate-in animate-delay-400' : ''}`}
        >
          <FeatureGrid />
        </section>

       

        <section
          id="faq"
          className={`animate-on-scroll transition-all duration-1000 ${isLoaded ? 'animate-in animate-delay-600' : ''}`}
        >
          <FAQ />
        </section>

        <section className={`animate-on-scroll transition-all duration-1000 ${isLoaded ? 'animate-in animate-delay-700' : ''}`}>
          <Newsletter />
        </section>

      </main>

      <div className={`animate-on-scroll transition-all duration-1000 ${isLoaded ? 'animate-in animate-delay-800' : ''}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
