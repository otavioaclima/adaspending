
import React from 'react';
import { BarChart3, Award, Database } from 'lucide-react';

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;
