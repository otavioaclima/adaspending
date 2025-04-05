
import React from 'react';
import { Link } from 'react-router-dom';
import { Vote, ChevronRight, Users, Calendar, BarChart3, FileText, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import { fundRounds } from '@/data/mockData';

const Governance = () => {
  // Sort fund rounds by date, most recent first
  const sortedFundRounds = [...fundRounds].sort((a, b) => 
    new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
  
  // Current active fund round
  const activeFundRound = sortedFundRounds.find(round => 
    new Date() >= new Date(round.startDate) && new Date() <= new Date(round.endDate)
  );
  
  // Next upcoming fund round (if any)
  const upcomingFundRound = sortedFundRounds.find(round => 
    new Date() < new Date(round.startDate)
  );
  
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Governance</h1>
        <p className="text-lg text-gray-600">
          Explore funding rounds, voting records, and treasury governance
        </p>
      </div>
      
      {/* Active Fund Round Card (if any) */}
      {activeFundRound && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Active Fund Round</h2>
          <Card className="border-cardano-blue border-2">
            <CardHeader className="bg-cardano-blue/5">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-cardano-blue">{activeFundRound.name}</CardTitle>
                  <CardDescription>
                    Now active until {new Date(activeFundRound.endDate).toLocaleDateString()}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-cardano-blue text-white">Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-cardano-blue/10 rounded-lg text-center">
                  <h3 className="text-sm font-medium text-gray-700 mb-1">Total Budget</h3>
                  <p className="text-2xl font-bold text-cardano-blue">
                    {activeFundRound.totalBudget.toLocaleString()} ADA
                  </p>
                </div>
                
                <div className="p-4 bg-cardano-teal/10 rounded-lg text-center">
                  <h3 className="text-sm font-medium text-gray-700 mb-1">Proposals</h3>
                  <p className="text-2xl font-bold text-cardano-teal">
                    {activeFundRound.proposals.toLocaleString()}
                  </p>
                </div>
                
                <div className="p-4 bg-purple-100 rounded-lg text-center">
                  <h3 className="text-sm font-medium text-gray-700 mb-1">Voter Participation</h3>
                  <div className="flex flex-col items-center">
                    <p className="text-2xl font-bold text-purple-700 mb-1">
                      {activeFundRound.participation}%
                    </p>
                    <Progress value={activeFundRound.participation} className="w-3/4 h-2" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button asChild>
                  <Link to={`/governance/${activeFundRound.id}`}>
                    View Details
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Vote className="h-4 w-4 mr-2" />
                    Participate in Voting
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* Upcoming Fund Round (if any) */}
      {upcomingFundRound && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Fund Round</h2>
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{upcomingFundRound.name}</CardTitle>
                  <CardDescription>
                    Starting on {new Date(upcomingFundRound.startDate).toLocaleDateString()}
                  </CardDescription>
                </div>
                <Badge variant="outline">Upcoming</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-1">Total Budget</h3>
                <p className="text-xl font-bold text-gray-900">
                  {upcomingFundRound.totalBudget.toLocaleString()} ADA
                </p>
              </div>
              
              <Button variant="outline" asChild className="w-full">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-4 w-4 mr-2" />
                  Add to Calendar
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* Past Fund Rounds */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Past Fund Rounds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedFundRounds
            .filter(round => new Date(round.endDate) < new Date())
            .map(round => (
              <Card key={round.id}>
                <CardHeader>
                  <CardTitle>{round.name}</CardTitle>
                  <CardDescription>
                    {new Date(round.startDate).toLocaleDateString()} - {new Date(round.endDate).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Budget</p>
                      <p className="font-bold text-gray-900">{round.totalBudget.toLocaleString()} ADA</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Proposals</p>
                      <p className="font-bold text-gray-900">{round.proposals} total</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Approved</p>
                      <p className="font-bold text-green-600">{round.approvedProposals} proposals</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Participation</p>
                      <p className="font-bold text-purple-600">{round.participation}%</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild className="w-full">
                    <Link to={`/governance/${round.id}`} className="flex items-center justify-center">
                      View Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
      
      {/* Governance Resources */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Governance Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Vote className="h-5 w-5 text-cardano-blue" />
                How Voting Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Learn about the Cardano treasury governance process, voting mechanisms, and how proposals are selected for funding.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="w-full">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-cardano-teal" />
                Submit a Proposal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Guidelines and resources for submitting your own proposal to receive funding from the Cardano treasury.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="w-full">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Guidelines
                </a>
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                DRep Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Information about Delegated Representatives (DReps) and how they participate in the Cardano governance process.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="w-full">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Explore DReps
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      {/* Latest Governance Stats */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Governance Statistics</h2>
        <Card>
          <CardHeader>
            <CardTitle>Key Metrics</CardTitle>
            <CardDescription>Overall treasury governance statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Average Voter Participation</h3>
                <div className="flex items-end gap-2">
                  <p className="text-2xl font-bold text-gray-900">26.8%</p>
                  <p className="text-sm text-green-600">↑ 2.1%</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">Compared to previous round</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Proposal Success Rate</h3>
                <div className="flex items-end gap-2">
                  <p className="text-2xl font-bold text-gray-900">23.4%</p>
                  <p className="text-sm text-red-600">↓ 1.2%</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">Proposals approved vs submitted</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Active DReps</h3>
                <div className="flex items-end gap-2">
                  <p className="text-2xl font-bold text-gray-900">382</p>
                  <p className="text-sm text-green-600">↑ 28</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">Active in the last round</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">ADA Staked for Voting</h3>
                <div className="flex items-end gap-2">
                  <p className="text-2xl font-bold text-gray-900">12.8B</p>
                  <p className="text-sm text-green-600">↑ 800M</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">ADA actively participating in governance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Governance;
