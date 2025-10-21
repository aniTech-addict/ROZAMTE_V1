import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import introVideo from "@/assets/intro.mp4";
import {
  Search,
  Banknote,
  Percent,
  User,
  UserCheck,
  ShieldCheck,
  Wallet,
  Briefcase,
  UserPlus,
  Handshake,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const PlatformFeatures = () => {
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

      <main>
        {/* Page Hero Section */}
        <section className={`relative pt-32 pb-20 overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient-xy" />

          {/* Enhanced background elements for better light mode visibility */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
          <div className={`absolute top-1/3 right-1/3 w-64 h-64 rounded-full blur-3xl animate-float ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/15'}`} />

          <div className="container relative mx-auto px-4">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 text-sm font-medium px-4 py-2 animate-fade-in">
                Platform Features
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up leading-tight">
                The All-in-One Ecosystem for{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  India's Workforce.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
                We built a single, trusted ecosystem that solves the biggest problems in the Indian job market: fragmented hiring, payment delays, and complex legal compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Video Introduction Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                <video
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-auto max-w-full rounded-xl shadow-2xl"
                  style={{ maxWidth: '100%', height: 'auto', minHeight: '400px' }}
                >
                  <source src={introVideo} type="video/mp4" />
                  Your browser does not support the video tag. Please update your browser or try a different one to view this video content.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Features for WORKERS Section */}
        <section className={`py-20 animate-on-scroll transition-all duration-1000 ${isLoaded ? 'animate-in animate-delay-200' : ''}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">For Our Workforce</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Find better work, get paid faster, and build your career on a platform built for you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Pair 1 */}
              <div className="space-y-8">
                {/* Feature 1: Find Your Next Job */}
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Access All Job Types, In One App</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Stop juggling apps. Whether you're a labourer, driver, engineer, nurse, or a freelancer, Rozmate has verified jobs for you. Find daily, monthly, or project-based work.
                  </p>
                </div>

                {/* Feature 2: Guaranteed, Fast Payments */}
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Banknote className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Get Paid on Time, Every Time.</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    No more chasing payments. Employers pay into a secure system before you start. We release the money to your bank account instantly, the moment the job is done.
                  </p>
                </div>
              </div>

              {/* Pair 2 */}
              <div className="space-y-8">
                {/* Feature 3: Keep What You Earn */}
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Percent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Radical, Transparent Low Fees</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We're on your side. We charge a 1-2% commission. That's it. It's significantly lower than the 10-20% other platforms charge, so you take home more of your money.
                  </p>
                </div>

                {/* Feature 4: Build Your Digital Career */}
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Your Professional, Verified Profile</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Create a detailed profile with your KYC, skills, and work history. This isn't just a resume; it's a verified, trusted portfolio that top employers can find instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features for EMPLOYERS Section */}
        <section className={`py-20 ${theme === 'dark' ? 'bg-muted/30' : 'bg-muted/20'} animate-on-scroll transition-all duration-1000 ${isLoaded ? 'animate-in animate-delay-400' : ''}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">For Our Employers</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Hire verified talent faster, automate all your compliance, and manage your entire workforce in one place.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Pair 1 */}
              <div className="space-y-8">
                {/* Feature 1: Hire Verified Talent, Instantly */}
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <UserCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Access a Verified All-Collar Talent Pool</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Stop guessing. Hire KYC-verified talent from every category: Blue Collar, White Collar, Pink Collar, and No Collar. Our system suggests the perfect match or you can browse and post jobs.
                  </p>
                </div>

                {/* Feature 2: Automate Your Compliance */}
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Automated GST, TDS, & Labour Law Compliance</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Forget the complex paperwork. Our platform is 'Compliance-First.' We automatically build legal and tax compliance—like GST, TDS, EPF, and ESI—directly into the payment process.
                  </p>
                </div>
              </div>

              {/* Pair 2 */}
              <div className="space-y-8">
                {/* Feature 3: Secure, Streamlined Payments */}
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Wallet className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Secure Escrow & Simple Payroll</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Manage all payouts from one dashboard. Fund jobs via our secure escrow mechanism to build trust. We handle the secure disbursement to the worker, giving you a clean, simple, and auditable trail.
                  </p>
                </div>

                {/* Feature 4: The All-in-One Management Hub */}
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Manage Your Entire Workforce</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    This is your one-stop solution. Post jobs, manage contracts, communicate with workers, approve milestones, and handle payments—all without leaving the platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Unifying Workflow Section */}
        <section className={`py-20 animate-on-scroll transition-all duration-1000 ${isLoaded ? 'animate-in animate-delay-600' : ''}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Simple, Unifying Workflow</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1: Onboard */}
              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserPlus className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <Badge variant="outline" className="text-lg px-3 py-1">Step 1</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Onboard</h3>
                  <p className="text-muted-foreground">
                    Users register as either a Worker or an Employer and create a detailed profile.
                  </p>
                </CardContent>
              </Card>

              {/* Step 2: Connect */}
              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <Badge variant="outline" className="text-lg px-3 py-1">Step 2</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Connect</h3>
                  <p className="text-muted-foreground">
                    Employers post jobs. Workers browse and apply, or the platform's system suggests matches.
                  </p>
                </CardContent>
              </Card>

              {/* Step 3: Work */}
              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <Badge variant="outline" className="text-lg px-3 py-1">Step 3</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Work</h3>
                  <p className="text-muted-foreground">
                    The hired person completes the job, whether it's for a day, a month, or a project.
                  </p>
                </CardContent>
              </Card>

              {/* Step 4: Pay */}
              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Banknote className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <Badge variant="outline" className="text-lg px-3 py-1">Step 4</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Pay</h3>
                  <p className="text-muted-foreground">
                    The employer pays Rozmate. Rozmate then securely disburses the money to the worker after deducting a small platform fee.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final Call to Action Section */}
        <section className={`relative py-20 overflow-hidden animate-on-scroll transition-all duration-1000 ${isLoaded ? 'animate-in animate-delay-700' : ''}`}>
          {/* Enhanced background with multiple layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
          <div className="absolute inset-0 bg-gradient-primary opacity-5" />

          {/* Animated background elements */}
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl animate-float" />

          <div className="container relative mx-auto px-4">
            <Card className="max-w-4xl mx-auto text-center p-12 bg-background/90 backdrop-blur-md border border-border/50 shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2 bg-primary/10 text-primary border-primary/20">
                    Join the Revolution
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                    Ready to Join the Future of Work?
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                  Sign up for the waitlist today. Stop managing chaos and start building with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 h-14 px-10 text-lg font-semibold rounded-xl btn-interactive group"
                  >
                    Join Waitlist
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105 h-14 px-8 text-lg font-semibold rounded-xl"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <div className={`animate-on-scroll transition-all duration-1000 ${isLoaded ? 'animate-in animate-delay-800' : ''}`}>
        <Footer />
      </div>
    </div>
  );
};

export default PlatformFeatures;