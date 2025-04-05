
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, User, Users, Building, Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layout/Layout';
import ProposalCard from '@/components/ui/ProposalCard';
import { recipients, proposals } from '@/data/mockData';

const RecipientDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipient = recipients.find(r => r.id === id);
  
  if (!recipient) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Recipient Not Found</h1>
          <p className="text-gray-600 mb-6">The recipient you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/recipients">Back to Recipients</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  // Get recipient's proposals
  const recipientProposals = proposals.filter(p => recipient.proposals.includes(p.id));
  
  // Determine icon based on recipient type
  const RecipientIcon = 
    recipient.type === 'organization' ? Building :
    recipient.type === 'team' ? Users : User;
  
  // Calculate success rate
  const successRate = recipient.proposalsSubmitted > 0 
    ? Math.round((recipient.proposalsApproved / recipient.proposalsSubmitted) * 100) 
    : 0;
  
  return (
    <Layout>
      <div className="mb-6">
        <Link to="/recipients" className="inline-flex items-center text-sm text-cardano-blue hover:underline mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Recipients
        </Link>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-cardano-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
              <RecipientIcon className="h-8 w-8 text-cardano-blue" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{recipient.name}</h1>
              <p className="text-gray-600 capitalize">{recipient.type}</p>
            </div>
          </div>
          
          {recipient.website && (
            <Button asChild variant="outline">
              <a href={recipient.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Website
              </a>
            </Button>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Section */}
          {recipient.description && (
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{recipient.description}</p>
              </CardContent>
            </Card>
          )}
          
          {/* Proposals Section */}
          <Card>
            <CardHeader>
              <CardTitle>Proposals</CardTitle>
              <CardDescription>
                {recipientProposals.length} {recipientProposals.length === 1 ? 'proposal' : 'proposals'} by this recipient
              </CardDescription>
            </CardHeader>
            <CardContent>
              {recipientProposals.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recipientProposals.map(proposal => (
                    <ProposalCard 
                      key={proposal.id}
                      id={proposal.id}
                      title={proposal.title}
                      category={proposal.category}
                      requestedAmount={proposal.requestedAmount}
                      status={proposal.status}
                      fundRound={proposal.fundRound}
                      recipient={proposal.recipient}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Award className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No proposals found for this recipient</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stats Card */}
          <Card>
            <CardHeader>
              <CardTitle>Funding Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Total Funding Received</p>
                  <p className="text-2xl font-bold text-cardano-blue">
                    {recipient.totalFunded.toLocaleString()} ADA
                  </p>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Proposals Submitted</p>
                    <p className="text-xl font-bold text-gray-900">
                      {recipient.proposalsSubmitted}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Proposals Approved</p>
                    <p className="text-xl font-bold text-green-600">
                      {recipient.proposalsApproved}
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Success Rate</p>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className={`h-4 rounded-full ${
                          successRate > 66 ? 'bg-green-500' : 
                          successRate > 33 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${successRate}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{successRate}%</span>
                  </div>
                </div>
              </div>
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
                  <p className="text-sm text-gray-500 mb-1">Type</p>
                  <p className="font-medium text-gray-900 capitalize">{recipient.type}</p>
                </div>
                
                {recipient.location && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="font-medium text-gray-900">{recipient.location}</p>
                  </div>
                )}
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">First Proposal</p>
                  <p className="font-medium text-gray-900">Fund 8 (2023)</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Latest Proposal</p>
                  <p className="font-medium text-gray-900">Fund 10 (2023)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default RecipientDetail;
