import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="border-t border-border bg-background">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={theme === 'dark' ? "/ROZMATE-white.png" : "/ROZMATE-blue.png"}
                  alt="Rozmate Logo"
                  className="h-18 w-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Organizing India's employment market through technology, transparency, and trust.
              </p>
            </div>

            {/* Platform Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-base">Platform</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300 block hover:translate-x-1 relative group">
                    <span className="relative z-10">About Us</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-all duration-300 block hover:translate-x-1 relative group">
                    <span className="relative z-10">How It Works</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground/60 cursor-not-allowed block">
                    Jobs (Coming Soon)
                  </span>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-base">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-primary transition-all duration-300 block hover:translate-x-1 relative group">
                    <span className="relative z-10">FAQ</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
                <li>
                  <Link to="/signup" className="text-muted-foreground hover:text-primary transition-all duration-300 block hover:translate-x-1 relative group">
                    <span className="relative z-10">Waitlist</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 block hover:translate-x-1 relative group">
                    <span className="relative z-10">Contact Support</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-base">Contact Us</h3>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:rozmatee@gmail.com" className="hover:text-primary transition-colors duration-300">
                    rozmatee@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:+917990392731" className="hover:text-primary transition-colors duration-300">
                    +91 79903 92731
                  </a>
                </div>
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <div className="text-sm leading-relaxed">
                    <p>C/702, Ganesh Opera,</p>
                    <p>Opposite Sadguru Vatika Bungalows,</p>
                    <p>Near Sargam Vatika Flat, M.G. Road,</p>
                    <p>Nikol, Ahmedabad, Gujarat – 382350, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-base">Connect</h3>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/roz-mate/"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 p-3 hover:bg-primary/10 rounded-lg border border-transparent hover:border-primary/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/rozmate_in/"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 p-3 hover:bg-primary/10 rounded-lg border border-transparent hover:border-primary/20"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Legal & Copyright Bar */}
      <div className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-sm font-medium">
              © 2025 Rozmate. All rights reserved.
            </p>
            <div className="flex items-center space-x-8">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium hover:translate-x-1 relative group">
                <span className="relative z-10">Privacy Policy</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium hover:translate-x-1 relative group">
                <span className="relative z-10">Terms of Service</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
