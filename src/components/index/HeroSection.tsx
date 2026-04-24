
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#000111] rounded-3xl text-white py-16 md:py-24 mb-10 shadow-2xl">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cardano-blue/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cardano-blue to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="/assets/257db3dc-2214-4178-afd2-70760c3899c4.png" 
              alt="ADAspending Logo" 
              className="relative h-24 md:h-32 w-auto animate-pulse-slow"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
          Cardano <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cardano-blue">Treasury</span> Explorer
        </h1>
        
        <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Providing real-time transparency and deep insights into the Cardano community treasury. 
          Track funding, explore projects, and follow the flow of community funds.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-2xl flex flex-col md:flex-row gap-3 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
            <div className="flex-grow flex items-center px-4">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
              <Input 
                className="bg-transparent border-none focus-visible:ring-0 placeholder:text-gray-500 text-white text-lg h-12" 
                placeholder="Search vendors, projects, or categories..." 
              />
            </div>
            <Button className="bg-cardano-blue hover:bg-blue-600 text-white px-8 h-12 rounded-xl font-bold transition-all hover:scale-105 active:scale-95">
              Search
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs md:text-sm text-gray-400">
            <span className="text-gray-500">Trending:</span>
            <button className="hover:text-white transition-colors">#Catalyst</button>
            <span className="opacity-20">•</span>
            <button className="hover:text-white transition-colors">#Intersect</button>
            <span className="opacity-20">•</span>
            <button className="hover:text-white transition-colors">#Vendors</button>
            <span className="opacity-20">•</span>
            <button className="hover:text-white transition-colors">#Allocation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
