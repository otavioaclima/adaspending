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
import InformationArchitecture from "./pages/InformationArchitecture";
import Wireframe from "./pages/Wireframe";
import TechRequirements from "./pages/TechRequirements";
import UserStories from "./pages/UserStories";
import DesignSystem from "./pages/DesignSystem";
import UIDesign from "./pages/UIDesign";
import { AnalyticsProvider } from "./components/AnalyticsProvider";
import Proposals from "./pages/Proposals";

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
            <Route path="/proposals" element={<Proposals />} />
            <Route path="/proposals/:id" element={<ProposalDetail />} />
            <Route path="/recipients" element={<Recipients />} />
            <Route path="/recipients/:id" element={<RecipientDetail />} />
            <Route path="/explorer" element={<SpendingExplorer />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/governance/:id" element={<ProposalDetail />} />
            <Route path="/architecture" element={<InformationArchitecture />} />
            <Route path="/wireframe" element={<Wireframe />} />
            <Route path="/tech-requirements" element={<TechRequirements />} />
            <Route path="/user-stories" element={<UserStories />} />
            <Route path="/design-system" element={<DesignSystem />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnalyticsProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
