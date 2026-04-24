import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

import Vendors from "./pages/Vendors";
import VendorDetail from "./pages/VendorDetail";
import SpendingExplorer from "./pages/SpendingExplorer";
import Teaser from "./pages/Teaser";
import NotFound from "./pages/NotFound";
import InformationArchitecture from "./pages/InformationArchitecture";
import Wireframe from "./pages/Wireframe";
import TechRequirements from "./pages/TechRequirements";
import UserStories from "./pages/UserStories";
import DesignSystem from "./pages/DesignSystem";
import UIDesign from "./pages/UIDesign";
import { AnalyticsProvider } from "./components/AnalyticsProvider";
import { ThemeProvider } from "./components/theme-provider";

import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Analytics from "./pages/Analytics";
import TreasuryDonations from "./pages/TreasuryDonations";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Accessibility from "./pages/Accessibility";
import About from "./pages/About";

import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ThemeProvider defaultTheme="light" storageKey="adaspending-theme">
            <AnalyticsProvider>
              <Routes>
                <Route path="/overview" element={<Index />} />
                <Route path="/" element={<Teaser />} />

                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/vendors" element={<Vendors />} />
                <Route path="/vendors/:id" element={<VendorDetail />} />
                <Route path="/explorer" element={<SpendingExplorer />} />
                <Route path="/donations" element={<TreasuryDonations />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/accessibility" element={<Accessibility />} />
                <Route path="/about" element={<About />} />
                <Route path="/architecture" element={<InformationArchitecture />} />
                <Route path="/wireframe" element={<Wireframe />} />
                <Route path="/tech-requirements" element={<TechRequirements />} />
                <Route path="/user-stories" element={<UserStories />} />
                <Route path="/design-system" element={<DesignSystem />} />
                <Route path="/ui-design" element={<UIDesign />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnalyticsProvider>
          </ThemeProvider>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
