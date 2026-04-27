
import React, { Suspense, lazy } from 'react';
import TeaserHeader from '@/components/teaser/TeaserHeader';
import HeroSection from '@/components/teaser/HeroSection';

// Lazy load sections below the fold
const FeaturesSection = lazy(() => import('@/components/teaser/FeaturesSection'));
const VisualElementsSection = lazy(() => import('@/components/teaser/VisualElementsSection'));
const AboutSection = lazy(() => import('@/components/teaser/AboutSection'));
const WhoWeAreSection = lazy(() => import('@/components/teaser/WhoWeAreSection'));
const HowItWorksSection = lazy(() => import('@/components/teaser/HowItWorksSection'));
const FaqSection = lazy(() => import('@/components/teaser/FaqSection'));
const Footer = lazy(() => import('@/components/teaser/Footer'));

const SectionPlaceholder = () => (
  <div className="w-full h-64 bg-slate-50 dark:bg-[#020617] animate-pulse flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cardano-blue border-t-transparent rounded-full animate-spin" />
  </div>
);

const Teaser = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <TeaserHeader />
      <HeroSection />
      
      <Suspense fallback={<SectionPlaceholder />}>
        <FeaturesSection />
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <VisualElementsSection />
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <HowItWorksSection />
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <WhoWeAreSection />
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <FaqSection />
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Teaser;
