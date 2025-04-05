import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Users, Award, FileCheck, Clock, ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import StatCard from '@/components/ui/StatCard';
import ProposalCard from '@/components/ui/ProposalCard';
import Layout from '@/components/layout/Layout';
import { treasuryStats, proposals, fundRounds } from '@/data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
const Index = () => {
  const formattedTotalFunds = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(treasuryStats.totalFundsAvailable);
  const formattedAwardedFunds = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(treasuryStats.totalFundsAwarded);

  // Get the latest fund round data
  const latestFundRound = fundRounds[fundRounds.length - 1];

  // Get recent proposals (active and approved)
  const recentProposals = proposals.filter(p => p.status === 'active' || p.status === 'approved').sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 4);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#BFBFBF'];
  return <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cardano-blue to-cardano-teal rounded-lg text-white p-6 md:p-10 mb-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">ADAspending is an open data source for treasury spending on the Cardano blockchain.
Explore decentralized funding awards, track proposals, follow ADA flows, and understand how the community allocates public blockchain funds.</p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-xl">
            <div className="flex-grow">
              <Input className="bg-white/20 border-white/30 placeholder:text-white/70 text-white" placeholder="Search proposals, recipients, or categories..." />
            </div>
            <Button className="bg-white text-cardano-blue hover:bg-white/90">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </section>
      
      {/* Key Stats Section */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Treasury Size" value={formattedTotalFunds} icon={<BarChart3 className="h-5 w-5" />} className="bg-cardano-blue/10 border-cardano-blue/30" />
          <StatCard title="Total Funds Awarded" value={formattedAwardedFunds} icon={<TrendingUp className="h-5 w-5" />} className="bg-cardano-teal/10 border-cardano-teal/30" />
          <StatCard title="Funded Proposals" value={treasuryStats.fundedProposals} icon={<Award className="h-5 w-5" />} className="bg-cardano-coral/10 border-cardano-coral/30" />
          <StatCard title="Voter Participation" value={`${treasuryStats.averageVoterParticipation}%`} change="2.1% from last round" positive={true} icon={<Users className="h-5 w-5" />} className="bg-purple-100 border-purple-300" />
        </div>
      </section>
      
      {/* Current Fund Round */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Current Fund Round</h2>
          <Link to="/governance" className="text-cardano-blue hover:text-cardano-blue/80 flex items-center text-sm font-medium">
            View all fund rounds <ChevronRight className="h-4 w-4 ml-1" />
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
              <Link to={`/governance/${latestFundRound.id}`}>
                View Fund Round Details
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
      
      {/* Charts Section */}
      <section className="mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Category Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Funding by Category</CardTitle>
              <CardDescription>Distribution of approved proposals by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={treasuryStats.categoryDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label={({
                    name,
                    percent
                  }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                      {treasuryStats.categoryDistribution.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip formatter={(value: number) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Fund Rounds History */}
          <Card>
            <CardHeader>
              <CardTitle>Historical Fund Rounds</CardTitle>
              <CardDescription>Budget and proposal count by fund round</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={fundRounds} margin={{
                  top: 10,
                  right: 10,
                  left: 10,
                  bottom: 20
                }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#0033AD" />
                    <YAxis yAxisId="right" orientation="right" stroke="#1BAAD6" />
                    <Tooltip />
                    <Bar yAxisId="left" dataKey="totalBudget" name="Budget (ADA)" fill="#0033AD" />
                    <Bar yAxisId="right" dataKey="proposals" name="Proposals" fill="#1BAAD6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Recent Proposals */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Recent Proposals</h2>
          <Link to="/awards" className="text-cardano-blue hover:text-cardano-blue/80 flex items-center text-sm font-medium">
            View all proposals <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentProposals.map(proposal => <ProposalCard key={proposal.id} id={proposal.id} title={proposal.title} category={proposal.category} requestedAmount={proposal.requestedAmount} status={proposal.status} fundRound={proposal.fundRound} recipient={proposal.recipient} />)}
        </div>
      </section>
      
      {/* Call to Action */}
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
    </Layout>;
};
export default Index;