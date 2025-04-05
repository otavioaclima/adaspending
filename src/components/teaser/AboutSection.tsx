
import React from 'react';
import { Globe, Search, Info } from 'lucide-react';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
