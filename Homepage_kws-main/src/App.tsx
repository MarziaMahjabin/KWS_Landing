import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CostCalculatorProvider } from "@/context/CostCalculatorContext";
import Home from "./pages/home";
import Contact from "./pages/contact";
import OurWorks from "./pages/our_works";
import Career from "./pages/Career";
import Launch from "./pages/Launch";
import CostCalculator from "./pages/costcalculator";
import CostCalculatorForm from "./pages/costcalculator_form";
import CostEstimateFinal from "./pages/cost_estimate_final";
import NotFound from "./pages/NotFound";
import AboutUsPage from "./pages/about_us";
import ChatWidget from "./components/chat/ChatWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CostCalculatorProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<OurWorks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Career />} />
            <Route path="/services" element={<Launch />} />
            <Route path="/cost-calculator" element={<CostCalculator />} />
            <Route path="/cost-calculator/form" element={<CostCalculatorForm />} />
            <Route path="/cost-calculator/estimate" element={<CostEstimateFinal />} />
            <Route path="/about" element={<AboutUsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatWidget />
        </BrowserRouter>
      </CostCalculatorProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
