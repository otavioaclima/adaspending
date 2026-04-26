
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Teaser = lazy(() => import("./pages/Teaser"));

// Lazy load other pages
const Vendors = lazy(() => import("./pages/Vendors"));
const VendorDetail = lazy(() => import("./pages/VendorDetail"));
const SpendingExplorer = lazy(() => import("./pages/SpendingExplorer"));
const NotFound = lazy(() => import("./pages/NotFound"));
const InformationArchitecture = lazy(() => import("./pages/InformationArchitecture"));
const Wireframe = lazy(() => import("./pages/Wireframe"));
const TechRequirements = lazy(() => import("./pages/TechRequirements"));
const UserStories = lazy(() => import("./pages/UserStories"));
const DesignSystem = lazy(() => import("./pages/DesignSystem"));
const UIDesign = lazy(() => import("./pages/UIDesign"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Analytics = lazy(() => import("./pages/Analytics"));
const TreasuryDonations = lazy(() => import("./pages/TreasuryDonations"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const About = lazy(() => import("./pages/About"));

import { AnalyticsProvider } from "./components/AnalyticsProvider";
import { ThemeProvider } from "./components/theme-provider";
import { LanguageProvider } from "./contexts/LanguageContext";
import FeedbackModal from "./components/layout/FeedbackModal";
import ScrollToTop from "./components/layout/ScrollToTop";
import BackToTop from "./components/layout/BackToTop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Elegant loading fallback
const LoadingFallback = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white/20 dark:bg-black/20 backdrop-blur-[2px] z-[100]">
    <div className="w-8 h-8 border-2 border-cardano-blue border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ThemeProvider defaultTheme="light" storageKey="adaspending-theme">
            <AnalyticsProvider>
              <Suspense fallback={<LoadingFallback />}>
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
                  <Route path="/cookies" element={<CookiePolicy />} />
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
              </Suspense>
              <FeedbackModal />
              <BackToTop />
            </AnalyticsProvider>
          </ThemeProvider>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
