import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { recipients, proposals } from '@/data/mockData';

import RecipientHeader from '@/components/recipients/RecipientHeader';
import RecipientFundingStats from '@/components/recipients/RecipientFundingStats';
import RecipientDetailsCard from '@/components/recipients/RecipientDetailsCard';
import RecipientProposalsCard from '@/components/recipients/RecipientProposalsCard';
import RecipientAccountingTable from '@/components/recipients/RecipientAccountingTable';
import RecipientMilestones from '@/components/recipients/RecipientMilestones';

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

  return (
    <Layout>
      <div className="mb-6">
        <Link to="/recipients" className="inline-flex items-center text-sm text-cardano-blue hover:underline mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Recipients
        </Link>
        <RecipientHeader
          name={recipient.name}
          type={recipient.type}
          location={recipient.location}
          website={recipient.website}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <RecipientDetailsCard
            type={recipient.type}
            location={recipient.location}
            website={recipient.website}
            description={recipient.description}
          />

          <RecipientProposalsCard recipientProposals={recipientProposals} />
        </div>
        <div className="space-y-6">
          <div>
            <RecipientFundingStats
              totalFunded={recipient.totalFunded}
              proposalsSubmitted={recipient.proposalsSubmitted}
              proposalsApproved={recipient.proposalsApproved}
            />
          </div>
          <div>
            <RecipientDetailsCard
              type={recipient.type}
              location={recipient.location}
              website={recipient.website}
              description={recipient.description}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <RecipientAccountingTable
              transactionRows={transactionRows}
              totalFunded={recipient.totalFunded}
            />
          </div>
          <RecipientMilestones proposals={recipientProposals} />
        </div>
        <div>
          <RecipientFundingStats
            totalFunded={recipient.totalFunded}
            proposalsSubmitted={recipient.proposalsSubmitted}
            proposalsApproved={recipient.proposalsApproved}
          />
          <RecipientDetailsCard
            type={recipient.type}
            location={recipient.location}
            website={recipient.website}
            description={recipient.description}
          />
        </div>
      </div>
    </Layout>
  );
};

export default RecipientDetail;
