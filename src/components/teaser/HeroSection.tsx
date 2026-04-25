
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const isMobile = useIsMobile();
  
  const phrases = [
    t('teaser.hero.phrases.0'),
    t('teaser.hero.phrases.1'),
    t('teaser.hero.phrases.2')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0a0c2e] to-[#020412] py-12 px-4 md:py-24 min-h-[80vh] flex items-center">
      <div className="container mx-auto text-center">
        <Link to="/" className="flex flex-col items-center mb-8">
          <img 
            alt="ADAspending Graph Logo" 
            className="h-28 md:h-28 mb-4 animate-fade-in object-contain w-auto max-w-full hover:opacity-90 transition-opacity" 
            src="/assets/1b553c01-58c1-4454-8098-2be801352be8.png" 
            fetchpriority="high"
          />
        </Link>

        <div className="h-20 md:h-24 flex items-center justify-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white animate-fade-in transition-all duration-500" key={currentPhraseIndex}>
            {phrases[currentPhraseIndex]}
          </h1>
        </div>

        <p className="text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed text-base md:text-lg">
          {t('teaser.hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20 sm:mb-24">
          <Button asChild size="lg" className="bg-white text-[#0033AD] hover:bg-white/90 px-8 py-6 text-lg font-bold shadow-xl transition-all hover:scale-105">
            <Link to="/overview">
              {t('teaser.hero.start_exploring')}
              <ChevronRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>

          <Link to="/about" className="text-white/80 hover:text-white font-medium transition-colors border-b border-white/20 hover:border-white pb-0.5">
            {t('teaser.hero.learn_more')}
          </Link>
        </div>

        {/* Scroll Down Animation */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center animate-bounce cursor-pointer" onClick={scrollToNextSection}>
          <div className="flex flex-col items-center text-white/90 hover:text-white transition-colors">
            <span className="text-sm mb-1">{t('teaser.hero.scroll')}</span>
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
