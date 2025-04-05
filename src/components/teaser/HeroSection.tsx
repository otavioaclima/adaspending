
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Search and explore Cardano spending by industry, recipient over time",
    "Track and Analyze Cardano spending to communit"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 5000); // Changed from 3000 to 5000 milliseconds (5 seconds)
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-cardano-blue to-cardano-teal py-20 px-4 md:py-32">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center mb-8">
          <img 
            src="/lovable-uploads/257db3dc-2214-4178-afd2-70760c3899c4.png" 
            alt="ADAspending Graph Logo" 
            className="h-40 md:h-52 mb-4 animate-fade-in" 
          />
        </div>
        
        <div className="h-24 md:h-28 flex items-center justify-center mb-6">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white animate-fade-in transition-all duration-500"
            key={currentPhraseIndex}
          >
            {phrases[currentPhraseIndex]}
          </h1>
        </div>
        
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
          An open data source for tracking treasury spending on the Cardano blockchain.
          Bringing transparency and accountability to community funds.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-cardano-blue hover:bg-white/90">
            <Link to="/">
              Explore Platform
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Link to="#features">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
