
import React, { useState, useEffect } from 'react';
import { ChevronRight, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const isMobile = useIsMobile();
  const phrases = ["Search and explore Cardano treasury spending by industry and recipient", "Track and analyze Cardano funding across time and categories", "Bring transparency to community fund allocation on Cardano"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return <section className="relative bg-gradient-to-br from-cardano-blue to-cardano-teal py-6 px-4 md:py-16">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center mb-6">
          <img 
            alt="ADAspending Graph Logo" 
            className="h-40 md:h-28 mb-4 animate-fade-in object-contain w-auto max-w-full" 
            src="/lovable-uploads/1b553c01-58c1-4454-8098-2be801352be8.png" 
          />
        </div>
        
        <div className="h-20 md:h-24 flex items-center justify-center mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-white animate-fade-in transition-all duration-500" key={currentPhraseIndex}>
            {phrases[currentPhraseIndex]}
          </h1>
        </div>
        
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6 leading-relaxed">
          An open data source for tracking treasury spending on the Cardano blockchain.
          Bringing transparency and accountability to community funds.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-white text-cardano-blue hover:bg-white/90">
            <Link to="/">
              Launch Coming Soon
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
          
          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <span className="text-white/80">Follow us on:</span>
            <a 
              href="https://x.com/ADAspending_com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-white/80 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
