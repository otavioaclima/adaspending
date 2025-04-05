
import React from 'react';

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How <span className="text-cardano-blue">ADAspending</span> Works
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cardano-blue text-white font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Data Collection</h4>
                  <p className="text-gray-600">We collect and process data directly from the Cardano blockchain and public treasury records.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cardano-blue text-white font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Data Analysis</h4>
                  <p className="text-gray-600">Our algorithms categorize and analyze the data to identify patterns and trends in spending.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cardano-blue text-white font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Visualization</h4>
                  <p className="text-gray-600">Data is transformed into intuitive charts and graphs that make complex information easy to understand.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cardano-blue text-white font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">User Access</h4>
                  <p className="text-gray-600">You get access to all this information through our user-friendly dashboard and search tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
