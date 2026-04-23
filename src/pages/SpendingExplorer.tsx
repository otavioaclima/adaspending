import React, { useState } from 'react';
import { BarChart3, PieChart as PieChartIcon, Map, FileText } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/layout/Layout';
import { treasuryStats, fundRounds, proposals } from '@/data/mockData';
import { getNetworkState, lovelaceToAda } from '@/services/cardanoscan';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Scatter,
  ScatterChart,
  ZAxis
} from 'recharts';
import SpendingMap from "@/components/spending/SpendingMap";
import SpendingTable from "@/components/spending/SpendingTable";
import ChartSection from "@/components/spending/ChartSection";
import DataSummarySection from "@/components/spending/DataSummarySection";

const SpendingExplorer = () => {
  const [chartType, setChartType] = useState('category');
  const [timeframe, setTimeframe] = useState('all');
  
  const { data: networkState } = useQuery({
    queryKey: ['networkState'],
    queryFn: getNetworkState,
  });

  const totalFundsAvailable = networkState ? lovelaceToAda(networkState.treasury) : treasuryStats.totalFundsAvailable;

  // Calculate category distribution
  const categoryData = treasuryStats.categoryDistribution;
  
  // Calculate funding by round
  const fundingByRound = fundRounds.map(round => ({
    name: round.name,
    budget: round.totalBudget,
    proposals: round.proposals,
    approvedProposals: round.approvedProposals
  }));
  
  // Calculate funding over time (monthly)
  const monthlyFunding = [
    { month: 'Jan 2023', amount: 3500000 },
    { month: 'Feb 2023', amount: 2800000 },
    { month: 'Mar 2023', amount: 4200000 },
    { month: 'Apr 2023', amount: 3900000 },
    { month: 'May 2023', amount: 5200000 },
    { month: 'Jun 2023', amount: 4800000 },
    { month: 'Jul 2023', amount: 3700000 },
    { month: 'Aug 2023', amount: 4100000 },
    { month: 'Sep 2023', amount: 5500000 },
    { month: 'Oct 2023', amount: 6200000 },
    { month: 'Nov 2023', amount: 5800000 },
    { month: 'Dec 2023', amount: 6400000 },
    { month: 'Jan 2024', amount: 5900000 },
  ];
  
  // Scatter plot data for proposal amount vs votes
  const proposalScatterData = proposals
    .filter(p => p.status !== 'pending')
    .map(p => ({
      name: p.title.substring(0, 20) + '...',
      amount: p.requestedAmount,
      votes: p.yesVotes,
      approved: p.status === 'approved' || p.status === 'active' || p.status === 'completed',
      category: p.category
    }));
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#BFBFBF'];
  
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Spending Explorer</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Visualize and analyze treasury spending patterns and distributions
        </p>
      </div>
      
      <Tabs defaultValue="charts" className="mb-6">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="charts" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span>Charts</span>
          </TabsTrigger>
          <TabsTrigger value="map" className="flex items-center gap-2">
            <Map className="h-4 w-4" />
            <span>Map View</span>
          </TabsTrigger>
          <TabsTrigger value="table" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Data Table</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="charts" className="space-y-6">
          <ChartSection
            chartType={chartType}
            setChartType={setChartType}
            timeframe={timeframe}
            setTimeframe={setTimeframe}
            categoryData={categoryData}
            fundingByRound={fundingByRound}
            monthlyFunding={monthlyFunding}
            proposalScatterData={proposalScatterData}
          />
          <DataSummarySection treasuryStats={{ ...treasuryStats, totalFundsAvailable }} />
        </TabsContent>
        
        <TabsContent value="map">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
              <CardDescription>
                Interactive map showing the global distribution of treasury funding (Mapbox Globe)
              </CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center bg-gray-50 dark:bg-gray-900/50">
              <SpendingMap height="340px" />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="table">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Data Table View</CardTitle>
              <CardDescription>
                Detailed tabular data of proposals (sortable)
              </CardDescription>
            </CardHeader>
            <CardContent className="h-auto bg-gray-50 dark:bg-gray-900/50">
              <SpendingTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default SpendingExplorer;
