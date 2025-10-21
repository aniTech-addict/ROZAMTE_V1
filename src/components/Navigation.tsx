import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToogle";
import { useTheme } from "@/components/ThemeProvider";

const Navigation = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>("");

  useEffect(() => {
    // Determine active navigation based on current route
    if (location.pathname === "/platform-features") {
      setActiveNav("about");
    } else if (location.pathname === "/" || location.pathname === "/signup") {
      // Check if we're on home page and which section might be active
      const hash = location.hash;
      if (hash === "#how-it-works") {
        setActiveNav("how-it-works");
      } else if (hash === "#faq") {
        setActiveNav("faq");
      } else {
        setActiveNav("home");
      }
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-16 w-auto items-center justify-center">
                <img
                  src={theme === 'dark' ? "/ROZMATE-white.png" : "/ROZMATE-blue.png"}
                  alt="Rozmate Logo"
                  className="h-12 w-auto transition-opacity duration-300"
                />
              </div>
              
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/platform-features"
                className={`relative text-sm font-medium transition-all duration-300 ${
                  activeNav === "about"
                    ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : "text-muted-foreground hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                }`}
              >
                About Us
              </Link>

              <a
                href="#how-it-works"
                className={`relative text-sm font-medium transition-all duration-300 ${
                  activeNav === "how-it-works"
                    ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : "text-muted-foreground hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                }`}
              >
                How It Works
              </a>
              <span className="text-sm font-medium text-muted-foreground/60 cursor-not-allowed">
                Jobs (Coming Soon)
              </span>
              <a
                href="#faq"
                className={`relative text-sm font-medium transition-all duration-300 ${
                  activeNav === "faq"
                    ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : "text-muted-foreground hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                }`}
              >
                FAQ
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
           
            <Button asChild className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold btn-interactive">
              <Link to="/signup">Join Waitlist</Link>
            </Button>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
