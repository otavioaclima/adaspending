
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, FileText, Clock, CheckCircle, AlertCircle, Users, Wallet, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { proposals } from '@/data/mockData';

const statusIcons = {
  approved: CheckCircle,
  active: Clock,
  completed: CheckCircle,
  pending: Clock,
  rejected: AlertCircle
};

const statusColors = {
  approved: 'bg-green-100 text-green-800',
  active: 'bg-blue-100 text-blue-800',
  completed: 'bg-purple-100 text-purple-800',
  pending: 'bg-yellow-100 text-yellow-800',
  rejected: 'bg-red-100 text-red-800'
};

const ProposalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const proposal = proposals.find(p => p.id === id);
  
  if (!proposal) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-12">
          <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Proposal Not Found</h1>
          <p className="text-gray-600 mb-6">The proposal you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/proposals">Back to Proposals</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const StatusIcon = statusIcons[proposal.status];
  const voteTotalCount = proposal.yesVotes + proposal.noVotes;
  const yesPercentage = voteTotalCount > 0 ? Math.round((proposal.yesVotes / voteTotalCount) * 100) : 0;
  
  return (
    <Layout>
      <div className="mb-6">
        <Link to="/proposals" className="inline-flex items-center text-sm text-cardano-blue hover:underline mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Proposals
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">{proposal.fundRound}</Badge>
              <Badge variant="outline">{proposal.category}</Badge>
              <Badge className={statusColors[proposal.status]}>
                <StatusIcon className="h-3.5 w-3.5 mr-1" />
                {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
              </Badge>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{proposal.title}</h1>
          </div>
          
          {proposal.status !== 'rejected' && proposal.status !== 'pending' && (
            <div className="flex flex-col sm:flex-row gap-2">
              <Button asChild variant="outline" size="sm">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on Block Explorer
                </a>
              </Button>
              <Button asChild size="sm">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2" />
                  View Full Proposal
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overview Card */}
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">{proposal.abstract}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Requested Amount</h3>
                  <p className="text-xl font-bold text-cardano-blue">
                    {proposal.requestedAmount.toLocaleString()} ADA
                  </p>
                </div>
                {proposal.fundedAmount && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Funded Amount</h3>
                    <p className="text-xl font-bold text-green-600">
                      {proposal.fundedAmount.toLocaleString()} ADA
                    </p>
                  </div>
                )}
              </div>
              
              <Separator className="my-6" />
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Voting Results</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-cardano-blue h-4 rounded-full" 
                      style={{ width: `${yesPercentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{yesPercentage}%</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <div>Yes: {proposal.yesVotes.toLocaleString()} votes</div>
                  <div>No: {proposal.noVotes.toLocaleString()} votes</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Milestones Card */}
          {proposal.milestones && proposal.milestones.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Milestones</CardTitle>
                <CardDescription>Progress tracking for this proposal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {proposal.milestones.map((milestone, index) => {
                    const isCompleted = milestone.status === 'completed';
                    const isInProgress = milestone.status === 'in-progress';
                    
                    return (
                      <div key={index} className="relative">
                        {/* Timeline connector */}
                        {index < proposal.milestones!.length - 1 && (
                          <div className="absolute left-3.5 top-6 bottom-0 w-0.5 bg-gray-200" />
                        )}
                        
                        <div className="flex gap-4">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                            isCompleted ? 'bg-green-100 text-green-600' : 
                            isInProgress ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
                          }`}>
                            {isCompleted ? (
                              <CheckCircle className="h-5 w-5" />
                            ) : (
                              <Clock className="h-5 w-5" />
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900">{milestone.title}</h4>
                                <p className="text-sm text-gray-600">{milestone.description}</p>
                              </div>
                              <Badge className={`${
                                isCompleted ? 'bg-green-100 text-green-800' : 
                                isInProgress ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {milestone.status === 'completed' ? 'Completed' : 
                                  milestone.status === 'in-progress' ? 'In Progress' : 'Pending'}
                              </Badge>
                            </div>
                            
                            <p className="text-xs text-gray-500 mt-1">
                              Due: {new Date(milestone.dueDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Links and Resources */}
          {proposal.links && proposal.links.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Links & Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {proposal.links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-cardano-blue hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recipient Card */}
          <Card>
            <CardHeader>
              <CardTitle>Recipient</CardTitle>
            </CardHeader>
            <CardContent>
              <Link to={`/vendors/${proposal.recipientId}`} className="block">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-cardano-blue/10 rounded-full w-10 h-10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-cardano-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{proposal.recipient}</h3>
                    <p className="text-sm text-cardano-blue">View recipient profile</p>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
          
          {/* Details Card */}
          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Fund Round</h3>
                  <p className="font-medium text-gray-900">{proposal.fundRound}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Category</h3>
                  <p className="font-medium text-gray-900">{proposal.category}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Submitted Date</h3>
                  <p className="font-medium text-gray-900">
                    {new Date(proposal.createdAt).toLocaleDateString()}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Last Updated</h3>
                  <p className="font-medium text-gray-900">
                    {new Date(proposal.updatedAt).toLocaleDateString()}
                  </p>
                </div>
                
                {proposal.transactionHash && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Transaction Hash</h3>
                    <p className="font-medium text-gray-900 break-all">
                      <a 
                        href="#" 
                        className="text-cardano-blue hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {proposal.transactionHash.substring(0, 10)}...
                        {proposal.transactionHash.substring(proposal.transactionHash.length - 6)}
                        <ExternalLink className="inline h-3 w-3 ml-1" />
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProposalDetail;
