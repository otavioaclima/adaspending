
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-cardano-blue to-cardano-teal rounded-lg text-white p-6 md:p-10 mb-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/977f5d38-73cb-4780-adac-737740e44017.png" 
              alt="ADAspending Logo" 
              className="h-16 md:h-20" 
            />
          </div>
          ADA Spending Dashboard
        </h1>
        <p className="text-lg md:text-xl mb-6 opacity-90">
          ADAspending is an open data source for treasury spending on the Cardano blockchain.
          Explore decentralized funding awards, track proposals, follow ADA flows, and understand how the community allocates public blockchain funds.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-xl">
          <div className="flex-grow">
            <Input className="bg-white/20 border-white/30 placeholder:text-white/70 text-white" placeholder="Search proposals, recipients, or categories..." />
          </div>
          <Button className="bg-white text-cardano-blue hover:bg-white/90">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
