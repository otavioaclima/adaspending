import React, { useState } from 'react';
import { BarChart3, PieChart as PieChartIcon, Map, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/layout/Layout';
import { treasuryStats, fundRounds, proposals } from '@/data/mockData';
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

const SpendingExplorer = () => {
  const [chartType, setChartType] = useState('category');
  const [timeframe, setTimeframe] = useState('all');
  
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Spending Explorer</h1>
        <p className="text-lg text-gray-600">
          Visualize and analyze treasury spending patterns and distributions
        </p>
      </div>
      
      {/* Chart Type Selector */}
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
          {/* Chart Controls */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Chart Type</label>
                  <Select value={chartType} onValueChange={setChartType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select chart type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="category">Funding by Category</SelectItem>
                      <SelectItem value="round">Funding by Round</SelectItem>
                      <SelectItem value="time">Funding Over Time</SelectItem>
                      <SelectItem value="scatter">Proposal Amount vs Votes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="w-full sm:w-1/2">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Time Frame</label>
                  <Select value={timeframe} onValueChange={setTimeframe}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time frame" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="latest">Latest Fund Round</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Chart Display */}
          <Card>
            <CardHeader>
              <CardTitle>
                {chartType === 'category' && 'Funding by Category'}
                {chartType === 'round' && 'Funding by Round'}
                {chartType === 'time' && 'Funding Over Time'}
                {chartType === 'scatter' && 'Proposal Amount vs Votes'}
              </CardTitle>
              <CardDescription>
                {chartType === 'category' && 'Distribution of funding across different proposal categories'}
                {chartType === 'round' && 'Budget and proposal count by fund round'}
                {chartType === 'time' && 'Monthly funding trends over time'}
                {chartType === 'scatter' && 'Relationship between proposal amount and vote count'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                {chartType === 'category' && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => `${value}%`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                )}
                
                {chartType === 'round' && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={fundingByRound}
                      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" orientation="left" stroke="#0033AD" />
                      <YAxis yAxisId="right" orientation="right" stroke="#1BAAD6" />
                      <Tooltip 
                        formatter={(value: number, name: string) => [
                          name === 'budget' ? `${value.toLocaleString()} ADA` : value.toLocaleString(),
                          name === 'budget' ? 'Budget' : 
                          name === 'proposals' ? 'Total Proposals' : 'Approved Proposals'
                        ]}
                      />
                      <Legend />
                      <Bar yAxisId="left" dataKey="budget" name="Budget (ADA)" fill="#0033AD" />
                      <Bar yAxisId="right" dataKey="proposals" name="Total Proposals" fill="#1BAAD6" />
                      <Bar yAxisId="right" dataKey="approvedProposals" name="Approved Proposals" fill="#00C49F" />
                    </BarChart>
                  </ResponsiveContainer>
                )}
                
                {chartType === 'time' && (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={monthlyFunding}
                      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value: number) => `${value.toLocaleString()} ADA`} />
                      <Line 
                        type="monotone" 
                        dataKey="amount" 
                        name="Funding Amount" 
                        stroke="#0033AD" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
                
                {chartType === 'scatter' && (
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart
                      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="amount" 
                        name="Requested Amount (ADA)" 
                        type="number"
                        domain={['auto', 'auto']}
                        label={{ value: 'Requested Amount (ADA)', position: 'insideBottomRight', offset: -10 }}
                      />
                      <YAxis 
                        dataKey="votes" 
                        name="Yes Votes" 
                        type="number" 
                        label={{ value: 'Yes Votes', angle: -90, position: 'insideLeft' }}
                      />
                      <ZAxis dataKey="name" name="Proposal" />
                      <Tooltip 
                        cursor={{ strokeDasharray: '3 3' }}
                        formatter={(value: any, name: string, props: any) => {
                          if (name === 'Requested Amount (ADA)') {
                            return [`${value.toLocaleString()} ADA`, name];
                          }
                          if (name === 'Yes Votes') {
                            return [value.toLocaleString(), name];
                          }
                          return [value, name];
                        }}
                      />
                      <Legend />
                      <Scatter 
                        name="Approved Proposals" 
                        data={proposalScatterData.filter(p => p.approved)} 
                        fill="#00C49F"
                      />
                      <Scatter 
                        name="Rejected Proposals" 
                        data={proposalScatterData.filter(p => !p.approved)} 
                        fill="#FF8042"
                      />
                    </ScatterChart>
                  </ResponsiveContainer>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Data Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Data Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-cardano-blue/10 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Total Treasury Size</h3>
                  <p className="text-2xl font-bold text-cardano-blue">
                    {treasuryStats.totalFundsAvailable.toLocaleString()} ADA
                  </p>
                </div>
                
                <div className="p-4 bg-cardano-teal/10 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Total Funds Awarded</h3>
                  <p className="text-2xl font-bold text-cardano-teal">
                    {treasuryStats.totalFundsAwarded.toLocaleString()} ADA
                  </p>
                </div>
                
                <div className="p-4 bg-green-100 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Funded Proposals</h3>
                  <p className="text-2xl font-bold text-green-600">
                    {treasuryStats.fundedProposals.toLocaleString()}
                  </p>
                </div>
                
                <div className="p-4 bg-purple-100 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Percentage Awarded</h3>
                  <p className="text-2xl font-bold text-purple-600">
                    {((treasuryStats.totalFundsAwarded / treasuryStats.totalFundsAvailable) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="map">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
              <CardDescription>
                Interactive map showing the global distribution of treasury funding (Mapbox Globe)
              </CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center bg-gray-50">
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
            <CardContent className="h-auto bg-gray-50">
              <SpendingTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default SpendingExplorer;
