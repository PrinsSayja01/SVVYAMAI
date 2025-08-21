
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import BusinessGrowthPredictor from "./pages/BusinessGrowthPredictor";
import LeadGenerationGame from "./pages/LeadGenerationGame";
import AIPersonaGenerator from "./pages/AIPersonaGenerator";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import UseCase3DCarousel from "./pages/UseCase3DCarousel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="svvyam-ai-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/business-growth-predictor" element={<BusinessGrowthPredictor />} />
            <Route path="/lead-generation-game" element={<LeadGenerationGame />} />
            <Route path="/ai-persona-generator" element={<AIPersonaGenerator />} />
            <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
            <Route path="/use-case-3d-carousel" element={<UseCase3DCarousel />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
