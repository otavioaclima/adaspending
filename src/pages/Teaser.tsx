
import React from 'react';
import HeroSection from '@/components/teaser/HeroSection';
import FeaturesSection from '@/components/teaser/FeaturesSection';
import VisualElementsSection from '@/components/teaser/VisualElementsSection';
import AboutSection from '@/components/teaser/AboutSection';
import QuemSomosSection from '@/components/teaser/QuemSomosSection';
import HowItWorksSection from '@/components/teaser/HowItWorksSection';
import FaqSection from '@/components/teaser/FaqSection';
import CtaSection from '@/components/teaser/CtaSection';
import Footer from '@/components/teaser/Footer';

const Teaser = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <VisualElementsSection />
      <AboutSection />
      <QuemSomosSection />
      <HowItWorksSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Teaser;
