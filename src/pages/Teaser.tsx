
import React from 'react';
import HeroSection from '@/components/teaser/HeroSection';
import FeaturesSection from '@/components/teaser/FeaturesSection';
import AboutSection from '@/components/teaser/AboutSection';
import CtaSection from '@/components/teaser/CtaSection';
import Footer from '@/components/teaser/Footer';

const Teaser = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Teaser;
