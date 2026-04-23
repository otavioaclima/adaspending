
import React from 'react';
import { Globe, Search, Info, ChartBar, Clock, Link } from 'lucide-react';

const AboutSection = () => {
  return <section className="py-20 px-4 bg-white">
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
                <span className="text-gray-700">Searchable database of all projects and vendors</span>
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
                <span className="text-gray-700">Connections between projects, vendors, and outcomes</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-8 mt-1 mr-3 text-cardano-blue">
                  <Info className="h-6 w-6" />
                </div>
                <span className="text-gray-700">Detailed insights on fund allocation and outcomes</span>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                alt="Cardano Blockchain Technology" 
                className="w-full h-auto object-contain max-h-[300px]" 
                src="/assets/af43cb7f-1898-49c4-8d04-6a7e036cee61.png" 
              />
            </div>
            <p className="text-cardano-blue font-medium text-lg mt-4 text-center">Transparent governance for a decentralized future</p>
          </div>
        </div>
      </div>
    </section>;
};

export default AboutSection;
