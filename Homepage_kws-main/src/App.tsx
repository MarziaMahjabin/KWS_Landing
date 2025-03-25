import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import OurWorks from "./pages/our_works";
import Career from "./pages/Career";
import Launch from "./pages/Launch";
import CostCalculator from "./pages/costcalculator";
import NotFound from "./pages/NotFound";
import AboutUsPage from "./pages/about_us";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<OurWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Career />} />
          <Route path="/services" element={<Launch />} />
          <Route path="/cost-calculator" element={<CostCalculator />} />
          <Route path="/about" element={<AboutUsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
