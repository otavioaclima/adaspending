
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Awards from "./pages/Awards";
import ProposalDetail from "./pages/ProposalDetail";
import Recipients from "./pages/Recipients";
import RecipientDetail from "./pages/RecipientDetail";
import SpendingExplorer from "./pages/SpendingExplorer";
import Governance from "./pages/Governance";
import Teaser from "./pages/Teaser";
import NotFound from "./pages/NotFound";
import { AnalyticsProvider } from "./components/AnalyticsProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsProvider>
          <Routes>
            <Route path="/dashboard" element={<Index />} />
            <Route path="/" element={<Teaser />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/proposals/:id" element={<ProposalDetail />} />
            <Route path="/recipients" element={<Recipients />} />
            <Route path="/recipients/:id" element={<RecipientDetail />} />
            <Route path="/explorer" element={<SpendingExplorer />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/governance/:id" element={<ProposalDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnalyticsProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
