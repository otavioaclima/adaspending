
import React from 'react';
import HeroSection from '@/components/teaser/HeroSection';
import TeaserHeader from '@/components/teaser/TeaserHeader';
import FeaturesSection from '@/components/teaser/FeaturesSection';
import VisualElementsSection from '@/components/teaser/VisualElementsSection';
import AboutSection from '@/components/teaser/AboutSection';
import WhoWeAreSection from '@/components/teaser/WhoWeAreSection';
import HowItWorksSection from '@/components/teaser/HowItWorksSection';
import FaqSection from '@/components/teaser/FaqSection';
import Footer from '@/components/teaser/Footer';

const Teaser = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <TeaserHeader />
      <HeroSection />
      <FeaturesSection />
      <VisualElementsSection />
      <AboutSection />
      <HowItWorksSection />
      <WhoWeAreSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Teaser;
