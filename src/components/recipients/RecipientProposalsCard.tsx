
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import ProposalCard from "@/components/ui/ProposalCard";
import { Award } from "lucide-react";

type Props = {
  recipientProposals: any[];
};

const RecipientProposalsCard = ({ recipientProposals }: Props) => (
  <Card>
    <CardHeader>
      <CardTitle>Proposals</CardTitle>
      <CardDescription>
        {recipientProposals.length}{" "}
        {recipientProposals.length === 1 ? "proposal" : "proposals"} by this recipient
      </CardDescription>
    </CardHeader>
    <CardContent>
      {recipientProposals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {recipientProposals.map((proposal) => (
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
);

export default RecipientProposalsCard;
