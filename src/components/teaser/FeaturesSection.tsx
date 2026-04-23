
import React from 'react';
import { BarChart3, Award, Database, Users, ChartLine, Search } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Bringing Transparency to <span className="text-cardano-blue">Cardano Funding</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          ADAspending provides a comprehensive solution for community members to understand how treasury funds are allocated and utilized within the Cardano ecosystem.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-cardano-blue/10 text-cardano-blue rounded-full mb-4">
              <Database className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Track Funds</h3>
            <p className="text-gray-600">
              Monitor how treasury funds are distributed across different projects and initiatives within the Cardano ecosystem.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-cardano-teal/10 text-cardano-teal rounded-full mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Review Projects</h3>
            <p className="text-gray-600">
              Explore funded projects with detailed information about vendors, requested amounts, and project outcomes.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-cardano-coral/10 text-cardano-coral rounded-full mb-4">
              <BarChart3 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Analyze Data</h3>
            <p className="text-gray-600">
              Gain insights through interactive visualizations showing treasury spending patterns and fund allocation trends.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-cardano-blue/10 text-cardano-blue rounded-full mb-4">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Search & Filter</h3>
            <p className="text-gray-600">
              Easily search and filter through funding data by categories, vendors, and time periods to find exactly what you're looking for.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-cardano-teal/10 text-cardano-teal rounded-full mb-4">
              <ChartLine className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Historical Trends</h3>
            <p className="text-gray-600">
              View historical spending data and trends over time to better understand the evolution of Cardano treasury management.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-cardano-coral/10 text-cardano-coral rounded-full mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community Insights</h3>
            <p className="text-gray-600">
              Understand how the community is making decisions about fund allocation and which areas are receiving the most support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
