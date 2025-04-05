
import React from 'react';
import { Globe, Search, Info, ChartBar, Clock, Link } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
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
                  <ChartBar className="h-6 w-6" />
                </div>
                <span className="text-gray-700">Interactive visualizations and data analytics</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-8 mt-1 mr-3 text-cardano-blue">
                  <Clock className="h-6 w-6" />
                </div>
                <span className="text-gray-700">Historical trends and timeline analysis</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-8 mt-1 mr-3 text-cardano-blue">
                  <Link className="h-6 w-6" />
                </div>
                <span className="text-gray-700">Connections between projects, recipients, and outcomes</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-8 mt-1 mr-3 text-cardano-blue">
                  <Info className="h-6 w-6" />
                </div>
                <span className="text-gray-700">Detailed insights on fund allocation and outcomes</span>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/2c4f875e-42d5-46d5-a340-7955b881717a.png" 
                alt="Cardano Blockchain Technology" 
                className="w-full object-cover h-[300px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cardano-blue/80 to-transparent p-4">
                <p className="text-white font-medium text-lg">Transparent governance for a decentralized future</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
