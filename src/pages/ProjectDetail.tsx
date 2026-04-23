
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Users, 
  Wallet, 
  TrendingUp,
  Briefcase,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layout/Layout';
import { intersectProjects } from '@/data/intersectData';

const getStatusIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed':
      return CheckCircle;
    case 'paused':
      return Clock;
    default:
      return Briefcase;
  }
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'paused':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    default:
      return 'bg-blue-100 text-blue-800 border-blue-200';
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = intersectProjects.find(p => p.id === id);
  
  if (!project) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-12">
          <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Project Not Found</h1>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist in the Intersect Treasury database.</p>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const StatusIcon = getStatusIcon(project.status);
  const spentPercentage = (project.amountSpent / project.totalAmount) * 100;
  
  return (
    <Layout>
      <div className="mb-6">
        <Link to="/projects" className="inline-flex items-center text-sm text-cardano-blue hover:underline mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Projects
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">Intersect Treasury Contract 1</Badge>
              <Badge className={getStatusColor(project.status)}>
                <StatusIcon className="h-3.5 w-3.5 mr-1" />
                {project.status}
              </Badge>
              <span className="text-xs text-gray-400 font-mono ml-2">ID: {project.id}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{project.projectName}</h1>
          </div>
          
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <a href="https://treasury.sundae.fi/instances/9e65e4ed7d6fd86fc4827d2b45da6d2c601fb920e8bfd794b8ecc619?projectState=Active" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Source (Sundae)
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description Card */}
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {project.description || "No detailed description available for this project."}
              </p>
            </CardContent>
          </Card>

          {/* Financial Card */}
          <Card>
            <CardHeader>
              <CardTitle>Financial Execution</CardTitle>
              <CardDescription>Budget and spending breakdown for this project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Total Project Budget</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-cardano-blue">₳{project.totalAmount.toLocaleString()}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Total Amount Spent</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-orange-600">₳{project.amountSpent.toLocaleString()}</span>
                    <span className="text-sm font-medium text-gray-400">({spentPercentage.toFixed(1)}%)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-600">Execution Progress</span>
                  <span className="text-cardano-blue">{spentPercentage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-cardano-blue h-full transition-all duration-500 ease-out" 
                    style={{ width: `${spentPercentage}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Milestones Card */}
          {project.milestones && project.milestones.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Project Milestones</CardTitle>
                <CardDescription>Payment schedule and evidence of completion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {project.milestones.map((milestone, index) => (
                    <div key={milestone.id} className="relative pl-8">
                      {/* Timeline Line */}
                      {index < project.milestones!.length - 1 && (
                        <div className="absolute left-[11px] top-6 bottom-[-32px] w-0.5 bg-gray-100" />
                      )}
                      
                      {/* Milestone Dot */}
                      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center z-10 ${
                        milestone.status.toLowerCase() === 'withdrawn' ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        {milestone.status.toLowerCase() === 'withdrawn' && (
                          <CheckCircle className="h-3 w-3 text-white" />
                        )}
                      </div>

                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <h4 className="text-base font-bold text-gray-900">{milestone.title}</h4>
                          <Badge variant="outline" className={
                            milestone.status.toLowerCase() === 'withdrawn' 
                              ? 'bg-green-50 text-green-700 border-green-200' 
                              : 'bg-gray-50 text-gray-600'
                          }>
                            {milestone.status}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-xs font-medium">
                          <div className="flex items-center text-gray-500">
                            <Wallet className="h-3.5 w-3.5 mr-1" />
                            ₳{milestone.amount.toLocaleString()}
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            Unlock: {milestone.unlockDate}
                          </div>
                        </div>

                        {milestone.evidence && (
                          <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                            <div className="flex items-center gap-2">
                              <div className="p-2 bg-white rounded-md shadow-sm">
                                <FileText className="h-4 w-4 text-blue-600" />
                              </div>
                              <span className="text-sm font-semibold text-gray-700">{milestone.evidence.title}</span>
                            </div>
                            <div className="flex gap-2 w-full sm:w-auto">
                              {milestone.evidence.transactionHash && (
                                <Button asChild variant="ghost" size="sm" className="h-8 text-xs">
                                  <a href={milestone.evidence.transactionLink} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-3 w-3 mr-1" />
                                    TX Hash
                                  </a>
                                </Button>
                              )}
                              <Button asChild variant="outline" size="sm" className="h-8 text-xs bg-white">
                                <a href={milestone.evidence.link} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  View Evidence
                                </a>
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contract Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Contract Instance</h3>
                  <p className="text-xs font-mono text-gray-700 break-all p-2 bg-gray-50 rounded border">
                    9e65e4ed7d6fd86fc4827d2b45da6d2c601fb920e8bfd794b8ecc619
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Source</h3>
                  <div className="flex items-center text-sm font-medium text-gray-900">
                    <img src="/favicon.ico" className="h-4 w-4 mr-2 opacity-50" />
                    Intersect MBO
                  </div>
                </div>

                <Separator />
                
                <div className="pt-2">
                  <p className="text-xs text-gray-500 leading-relaxed italic">
                    This project was funded as part of the Intersect Treasury Contracts 1 budget (₳350M), 
                    designed to pay vendors as they reach specific project milestones.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
