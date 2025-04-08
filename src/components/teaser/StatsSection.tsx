import React from 'react';
import { BarChart3, TrendingUp, Award, FileText, PieChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart as ReChartsPieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// Treasury stats
const treasuryStats = {
  treasurySizeADA: 1000000000,
  treasurySizeUSD: 1000000000,
  totalFundsAwarded: 56000000,
  totalProposals: 1350,
  fundedProposals: 981,
  voterParticipation: 26.8
};

// Proposal distribution data
const categoryData = [{
  name: 'Core',
  value: 25,
  fill: '#0033AD'
}, {
  name: 'Governance Support',
  value: 10,
  fill: '#1BAAD6'
}, {
  name: 'Marketing and Innovation',
  value: 33,
  fill: '#FF5733'
}, {
  name: 'Research',
  value: 8,
  fill: '#8884D8'
}, {
  name: 'None of these',
  value: 9,
  fill: '#82ca9d'
}];
const committeeData = [{
  name: 'Growth and Marketing',
  value: 18,
  fill: '#0033AD'
}, {
  name: 'Budget',
  value: 2,
  fill: '#1BAAD6'
}, {
  name: 'Membership & Community',
  value: 11,
  fill: '#FF5733'
}, {
  name: 'Civics',
  value: 2,
  fill: '#8884D8'
}, {
  name: 'Open Source',
  value: 20,
  fill: '#82ca9d'
}, {
  name: 'Product',
  value: 13,
  fill: '#ffc658'
}, {
  name: 'Technical Steering',
  value: 15,
  fill: '#8dd1e1'
}, {
  name: 'None',
  value: 2,
  fill: '#a4de6c'
}, {
  name: 'Unsure',
  value: 2,
  fill: '#d0ed57'
}];

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
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name,
    value
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Only render labels for slices with enough space
    if (percent < 0.05) return null;
    return <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize="12" fontWeight="600">
        {`${name}: ${value}`}
      </text>;
  };
  return <div className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
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

      {/* New Proposals Distribution Section */}
      <div className="mb-6">
        
        
      </div>

      
    </div>;
};
export default StatsSection;
