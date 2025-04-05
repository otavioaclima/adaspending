
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-cardano-blue to-cardano-teal text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Explore ADAspending Today
        </h2>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Be among the first to access our platform and discover how Cardano's treasury is being utilized
        </p>
        
        <Button asChild size="lg" className="bg-white text-cardano-blue hover:bg-white/90">
          <Link to="/">
            Access Platform <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
