import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, User, Users, Building, Award, Calendar, Info, Mail, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layout/Layout';
import ProposalCard from '@/components/ui/ProposalCard';
import { recipients, proposals } from '@/data/mockData';

const getRecipientTypeLabel = (type: string) => {
  if (type === 'organization') return 'Organization';
  if (type === 'team') return 'Team';
  if (type === 'individual') return 'Individual';
  return type.charAt(0).toUpperCase() + type.slice(1);
};

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
  
  const recipientProposals = proposals.filter(p => recipient.proposals.includes(p.id));
  
  const transactionRows = recipientProposals
    .map(proposal => ({
      id: proposal.id,
      title: proposal.title,
      fundRound: proposal.fundRound,
      requestedAmount: proposal.requestedAmount,
      fundedAmount: proposal.fundedAmount ?? 0,
      spentAmount: proposal.spentAmount ?? 0,
      transactionHash: proposal.transactionHash,
      status: proposal.status,
      updatedAt: proposal.updatedAt,
    }));

  const totalSpent = transactionRows.reduce((acc, curr) => acc + (curr.spentAmount || 0), 0);

  const RecipientIcon = 
    recipient.type === 'organization' ? Building :
    recipient.type === 'team' ? Users : User;
  
  const successRate = recipient.proposalsSubmitted > 0 
    ? Math.round((recipient.proposalsApproved / recipient.proposalsSubmitted) * 100) 
    : 0;

  const rejectedProposals = recipient.proposalsSubmitted - recipient.proposalsApproved;

  const getHostname = (url: string) => {
    try {
      return new URL(url).hostname.replace('www.', '');
    } catch {
      return url;
    }
  };

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
              <div className="flex items-center gap-2 flex-wrap text-gray-600">
                <span className="capitalize flex items-center gap-1">
                  <Info className="h-4 w-4 text-gray-400" />{getRecipientTypeLabel(recipient.type)}
                </span>
                {recipient.location && (
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-gray-400" />{recipient.location}
                  </span>
                )}
                {recipient.website && (
                  <span className="flex items-center gap-1">
                    <Link2 className="h-4 w-4 text-gray-400" />
                    <a
                      href={recipient.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-cardano-blue"
                    >
                      {getHostname(recipient.website)}
                    </a>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
              <CardDescription>
                This is a {getRecipientTypeLabel(recipient.type)}{recipient.location ? ` based in ${recipient.location}` : ''}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-gray-700 mb-2">
                {recipient.description || (
                  <span className="italic text-gray-400">No description available for this recipient yet.</span>
                )}
              </div>
              {recipient.website && (
                <div className="flex items-center gap-1 mt-4">
                  <Link2 className="h-4 w-4 text-gray-500" />
                  <a
                    href={recipient.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cardano-blue underline break-all"
                  >
                    {recipient.website}
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
          
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
                  <p className="text-gray-500">No proposals found for this recipient.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
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
                  <p className="text-sm text-gray-500 mb-1">Rejected Proposals</p>
                  <p className="font-medium text-red-500">
                    {rejectedProposals}
                  </p>
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
          
          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Type</p>
                  <p className="font-medium text-gray-900">{getRecipientTypeLabel(recipient.type)}</p>
                </div>
                
                {recipient.location && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="font-medium text-gray-900">{recipient.location}</p>
                  </div>
                )}

                {recipient.website && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Website</p>
                    <a 
                      href={recipient.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cardano-blue underline break-all font-medium"
                    >
                      {recipient.website}
                    </a>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="font-bold text-xl mb-2 text-yellow-700 flex items-center gap-2">
                Transparência & Contabilidade
              </h2>
              <p className="mb-4 text-yellow-900">
                Acompanhe os recursos movimentados pelo fornecedor, com transparência para auditoria e rastreabilidade.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Total Recebido</p>
                  <p className="font-bold text-cardano-blue">{recipient.totalFunded.toLocaleString()} ADA</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Gasto</p>
                  <p className="font-bold text-yellow-700">{totalSpent.toLocaleString()} ADA</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Restante a Gastar</p>
                  <p className="font-bold text-gray-800">{(recipient.totalFunded - totalSpent).toLocaleString()} ADA</p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-md border mt-4">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700">Data</th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700">Título</th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700">Fund Round</th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700">Recebido</th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700">Gasto</th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700">Status</th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700">Tx Hash</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactionRows.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-6 text-center text-gray-400 italic">Nenhuma transação registrada</td>
                      </tr>
                    ) : (
                      transactionRows.map((trx) => (
                        <tr key={trx.id} className="bg-white hover:bg-gray-50 transition">
                          <td className="px-3 py-2 whitespace-nowrap">{new Date(trx.updatedAt).toLocaleDateString()}</td>
                          <td className="px-3 py-2">{trx.title}</td>
                          <td className="px-3 py-2">{trx.fundRound}</td>
                          <td className="px-3 py-2 text-cardano-blue">{trx.fundedAmount.toLocaleString()} ADA</td>
                          <td className="px-3 py-2 text-yellow-700">{trx.spentAmount.toLocaleString()} ADA</td>
                          <td className="px-3 py-2 capitalize">
                            <span className={
                              trx.status === "approved" ? "text-green-700 font-medium" :
                              trx.status === "rejected" ? "text-red-600 font-medium" :
                              trx.status === "completed" ? "text-purple-700 font-medium" :
                              trx.status === "active" ? "text-blue-700 font-medium" :
                              "text-gray-700" }>
                              {trx.status}
                            </span>
                          </td>
                          <td className="px-3 py-2">
                            {trx.transactionHash ? (
                              <a href={`https://cardanoscan.io/transaction/${trx.transactionHash}`} 
                                target="_blank" rel="noopener noreferrer"
                                className="text-blue-600 underline break-all"
                              >
                                {trx.transactionHash.slice(0,8)}...
                              </a>
                            ) : (
                              <span className="text-gray-300">-</span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-bold text-lg mb-2">Andamento dos Projetos (Milestones)</h2>
            {recipientProposals.length === 0 ? (
              <div className="text-gray-500 italic">Nenhum projeto registrado para este fornecedor.</div>
            ) : (
              recipientProposals.map(proposal => (
                <div key={proposal.id} className="mb-6 border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">{proposal.title}</span>
                    <span className="text-xs text-gray-500">{proposal.fundRound} · {proposal.category}</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm text-gray-600">{proposal.abstract}</span>
                  </div>
                  {proposal.milestones && proposal.milestones.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-xs">
                        <thead>
                          <tr>
                            <th className="py-1 px-2 text-left">Milestone</th>
                            <th className="py-1 px-2 text-left">Descrição</th>
                            <th className="py-1 px-2 text-left">Status</th>
                            <th className="py-1 px-2 text-left">Prazo</th>
                          </tr>
                        </thead>
                        <tbody>
                          {proposal.milestones.map((m, idx) => (
                            <tr key={idx} className="border-b">
                              <td className="py-1 px-2 font-medium">{m.title}</td>
                              <td className="py-1 px-2">{m.description}</td>
                              <td className="py-1 px-2 capitalize">
                                <span className={
                                  m.status === "completed" ? "text-green-700 font-medium" :
                                  m.status === "in-progress" ? "text-yellow-700 font-medium" : "text-gray-600"
                                }>
                                  {m.status === "completed"
                                    ? "Concluído"
                                    : m.status === "in-progress"
                                      ? "Em andamento"
                                      : "Pendente"
                                  }
                                </span>
                              </td>
                              <td className="py-1 px-2">{new Date(m.dueDate).toLocaleDateString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="italic text-gray-400">Nenhuma milestone registrada para este projeto.</div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
        <div>
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
                  <p className="text-sm text-gray-500 mb-1">Rejected Proposals</p>
                  <p className="font-medium text-red-500">
                    {rejectedProposals}
                  </p>
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
          
          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Type</p>
                  <p className="font-medium text-gray-900">{getRecipientTypeLabel(recipient.type)}</p>
                </div>
                
                {recipient.location && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="font-medium text-gray-900">{recipient.location}</p>
                  </div>
                )}

                {recipient.website && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Website</p>
                    <a 
                      href={recipient.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cardano-blue underline break-all font-medium"
                    >
                      {recipient.website}
                    </a>
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

export default RecipientDetail;
