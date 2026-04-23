
import React from "react";
import { Separator } from "@/components/ui/separator";

type Props = {
  totalFunded: number;
  proposalsSubmitted: number;
  proposalsApproved: number;
};

const VendorFundingStats = ({
  totalFunded,
  proposalsSubmitted,
  proposalsApproved,
}: Props) => {
  const rejectedProposals = proposalsSubmitted - proposalsApproved;
  const successRate =
    proposalsSubmitted > 0
      ? Math.round((proposalsApproved / proposalsSubmitted) * 100)
      : 0;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-500 mb-1">Total Funding Received</p>
        <p className="text-2xl font-bold text-cardano-blue">
          {totalFunded.toLocaleString()} ADA
        </p>
      </div>
      <Separator />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Proposals Submitted</p>
          <p className="text-xl font-bold text-gray-900">{proposalsSubmitted}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Proposals Approved</p>
          <p className="text-xl font-bold text-green-600">{proposalsApproved}</p>
        </div>
      </div>
      <Separator />
      <div>
        <p className="text-sm text-gray-500 mb-1">Rejected Proposals</p>
        <p className="font-medium text-red-500">{rejectedProposals}</p>
      </div>
      <Separator />
      <div>
        <p className="text-sm text-gray-500 mb-1">Success Rate</p>
        <div className="flex items-center gap-2">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className={`h-4 rounded-full ${
                successRate > 66
                  ? "bg-green-500"
                  : successRate > 33
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${successRate}%` }}
            />
          </div>
          <span className="text-sm font-medium">{successRate}%</span>
        </div>
      </div>
    </div>
  );
};

export default VendorFundingStats;
