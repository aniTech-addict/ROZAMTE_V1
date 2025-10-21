import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingProvider, useLoading } from "@/hooks/use-loading";
import LoadingAnimation from "@/components/LoadingAnimation";
import { useEffect } from "react";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import PlatformFeatures from "./pages/PlatformFeatures";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isPageLoading } = useLoading();
  const location = useLocation();

  useEffect(() => {
    // Show loading animation during route changes
    if (location.pathname) {
      // The loading will be handled by the context
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/platform-features" element={<PlatformFeatures />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Page Loading Overlay */}
      {isPageLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <LoadingAnimation size="lg" />
            <p className="text-sm text-muted-foreground animate-pulse">Loading...</p>
          </div>
        </div>
      )}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <LoadingProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="grain-texture">
              <AppContent />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LoadingProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
