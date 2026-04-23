
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { recipients, proposals } from '@/data/mockData';

import VendorHeader from '@/components/vendors/VendorHeader';
import VendorFundingStats from '@/components/vendors/VendorFundingStats';
import VendorDetailsCard from '@/components/vendors/VendorDetailsCard';

import VendorAccountingTable from '@/components/vendors/VendorAccountingTable';
import VendorMilestones from '@/components/vendors/VendorMilestones';

const VendorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipient = recipients.find(r => r.id === id);

  if (!recipient) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Vendor Not Found</h1>
          <p className="text-gray-600 mb-6">The vendor you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/vendors">Back to Vendors</Link>
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
        <Link to="/vendors" className="inline-flex items-center text-sm text-cardano-blue hover:underline mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Vendors
        </Link>
        <VendorHeader
          name={recipient.name}
          type={recipient.type}
          location={recipient.location}
          website={recipient.website}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <VendorDetailsCard
            type={recipient.type}
            location={recipient.location}
            website={recipient.website}
            description={recipient.description}
            numberOfEmployees={recipient.numberOfEmployees}
            capital={recipient.capital}
            address={recipient.address}
            registrationNumber={recipient.registrationNumber}
            intersectMemberId={recipient.intersectMemberId}
            intersectRegistrationStatus={recipient.intersectRegistrationStatus}
          />

          <VendorAccountingTable
            transactionRows={transactionRows}
            totalFunded={recipient.totalFunded}
          />
          <VendorMilestones proposals={recipientProposals} />
        </div>
        
        <div className="space-y-6">
          <VendorFundingStats
            totalFunded={recipient.totalFunded}
            proposalsSubmitted={recipient.proposalsSubmitted}
            proposalsApproved={recipient.proposalsApproved}
          />
        </div>
      </div>
    </Layout>
  );
};

export default VendorDetail;

