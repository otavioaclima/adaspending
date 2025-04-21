
import React from "react";
import Layout from "@/components/layout/Layout";
import ProposalCard from "@/components/ui/ProposalCard";
import { proposals } from "@/data/mockData";
import { Link } from "react-router-dom";

const Proposals = () => {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Proposals</h1>
        <p className="text-gray-600 mb-4">
          Explore all proposals submitted to the Cardano Treasury.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {proposals.map((proposal) => (
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
    </Layout>
  );
};

export default Proposals;
