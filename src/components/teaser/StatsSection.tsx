
import React from 'react';
import { BarChart3, TrendingUp, Award, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Treasury stats
const treasuryStats = {
  treasurySizeADA: 1600000000,
  treasurySizeUSD: 1600000000,
  totalFundsAwarded: 56000000,
  totalProposals: 1350,
  fundedProposals: 981,
  voterParticipation: 26.8
};

const StatsSection = () => {
  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  // Format currency
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Treasury Size Card */}
        <Card className="bg-blue-50 border-blue-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-500">Total Treasury Size</h3>
              <BarChart3 className="h-5 w-5 text-cardano-blue" />
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(treasuryStats.treasurySizeUSD)}</p>
              <p className="text-sm text-gray-500">{formatNumber(treasuryStats.treasurySizeADA)} ADA</p>
            </div>
          </CardContent>
        </Card>

        {/* Total Funds Awarded Card */}
        <Card className="bg-teal-50 border-teal-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-500">Total Funds Awarded</h3>
              <TrendingUp className="h-5 w-5 text-cardano-teal" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(treasuryStats.totalFundsAwarded)}</p>
            </div>
          </CardContent>
        </Card>

        {/* Total Proposals Card */}
        <Card className="bg-purple-50 border-purple-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-500">Total Proposals</h3>
              <FileText className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{formatNumber(treasuryStats.totalProposals)}</p>
            </div>
          </CardContent>
        </Card>

        {/* Funded Proposals Card */}
        <Card className="bg-red-50 border-red-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-500">Funded Proposals</h3>
              <Award className="h-5 w-5 text-cardano-coral" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{formatNumber(treasuryStats.fundedProposals)}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatsSection;
