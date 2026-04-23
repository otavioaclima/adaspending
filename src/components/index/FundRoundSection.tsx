
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { fundRounds } from '@/data/mockData';

const FundRoundSection = () => {
  // Get the latest fund round data
  const latestFundRound = fundRounds[fundRounds.length - 1];

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Current Fund Round</h2>
        <Link to="/proposals" className="text-cardano-blue hover:text-cardano-blue/80 flex items-center text-sm font-medium">
          View all proposals <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>{latestFundRound.name}</CardTitle>
          <CardDescription>
            Active from {new Date(latestFundRound.startDate).toLocaleDateString()} to {new Date(latestFundRound.endDate).toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Total Budget</p>
              <p className="text-2xl font-bold text-cardano-blue">
                {latestFundRound.totalBudget.toLocaleString()} ADA
              </p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Proposals</p>
              <p className="text-2xl font-bold text-cardano-blue">
                {latestFundRound.proposals.toLocaleString()}
              </p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Voter Participation</p>
              <p className="text-2xl font-bold text-cardano-blue">
                {latestFundRound.participation}%
              </p>
            </div>
          </div>
          
          <Button asChild className="w-full">
            <Link to="/proposals">
              View Fund Round Proposals
            </Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default FundRoundSection;
