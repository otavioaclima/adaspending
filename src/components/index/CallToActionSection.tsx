
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToActionSection = () => {
  return (
    <section className="mb-8">
      <div className="bg-gradient-to-r from-cardano-blue/10 to-cardano-teal/10 rounded-lg p-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          Start Exploring Cardano's Treasury
        </h2>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          Search proposals, track recipients, analyze treasury spending, and engage with the Cardano community governance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link to="/awards">
              <Search className="h-4 w-4 mr-2" />
              Search Proposals
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/recipients">
              <Users className="h-4 w-4 mr-2" />
              View Recipients
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/explorer">
              <BarChart3 className="h-4 w-4 mr-2" />
              Spending Explorer
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
