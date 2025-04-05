
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Award, Search, ChevronRight, Globe, Info, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Teaser = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Search, Track, Explore Cardano spending by industry, over time",
    "Analyze, Download Cardano spending by recipient, by agency",
    "Visualize, Understand Cardano treasury allocation trends"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cardano-blue to-cardano-teal py-20 px-4 md:py-32">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center mb-8">
            <img 
              src="/lovable-uploads/257db3dc-2214-4178-afd2-70760c3899c4.png" 
              alt="ADAspending Graph Logo" 
              className="h-32 md:h-40 mb-4 animate-fade-in" 
            />
            <img 
              src="/lovable-uploads/e4da4614-7cea-4f9c-853c-3f019f7932ca.png" 
              alt="ADAspending Logo" 
              className="h-16 md:h-20" 
            />
          </div>
          
          <div className="h-24 md:h-28 flex items-center justify-center mb-6">
            <h1 
              className="text-4xl md:text-6xl font-bold text-white animate-fade-in transition-all duration-500"
              key={currentPhraseIndex} // Add key to trigger animation on phrase change
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
      
      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Bringing Transparency to <span className="text-cardano-blue">Cardano Funding</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-cardano-blue/10 text-cardano-blue rounded-full mb-4">
                <Database className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Track Funds</h3>
              <p className="text-gray-600">
                Monitor how treasury funds are distributed across different projects and initiatives within the Cardano ecosystem.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-cardano-teal/10 text-cardano-teal rounded-full mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Review Proposals</h3>
              <p className="text-gray-600">
                Explore funded proposals with detailed information about recipients, requested amounts, and project outcomes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-cardano-coral/10 text-cardano-coral rounded-full mb-4">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analyze Data</h3>
              <p className="text-gray-600">
                Gain insights through interactive visualizations showing treasury spending patterns and fund allocation trends.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why <span className="text-cardano-blue">ADAspending</span> Matters
              </h2>
              
              <p className="text-gray-700 mb-6 text-lg">
                Community governance and treasury management are central to Cardano's decentralized ecosystem. 
                ADAspending provides the transparency needed for community members to understand how funds are allocated.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="min-w-8 mt-1 mr-3 text-cardano-blue">
                    <Globe className="h-6 w-6" />
                  </div>
                  <span className="text-gray-700">Public access to comprehensive funding data</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-8 mt-1 mr-3 text-cardano-blue">
                    <Search className="h-6 w-6" />
                  </div>
                  <span className="text-gray-700">Searchable database of all proposals and recipients</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-8 mt-1 mr-3 text-cardano-blue">
                    <Info className="h-6 w-6" />
                  </div>
                  <span className="text-gray-700">Detailed insights on fund allocation and outcomes</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
              <div className="aspect-video rounded-lg bg-cardano-blue/90 flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
                  <p className="mb-6">
                    Our complete dashboard with in-depth analytics, proposal tracking, and more
                  </p>
                  <p className="text-sm opacity-75">
                    Q2 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
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
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/e4da4614-7cea-4f9c-853c-3f019f7932ca.png" 
                alt="ADAspending Logo" 
                className="h-10" 
              />
              <p className="mt-2 text-gray-400 text-sm">
                An open data source for treasury spending on the Cardano blockchain.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                Platform
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} ADAspending.com. All data is sourced from the public Cardano blockchain.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Teaser;
