
import React from "react";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t } = useLanguage();
  const rejectedProposals = proposalsSubmitted - proposalsApproved;
  const successRate =
    proposalsSubmitted > 0
      ? Math.round((proposalsApproved / proposalsSubmitted) * 100)
      : 0;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-500 mb-1">{t('vendors.total_funding')}</p>
        <p className="text-2xl font-bold text-cardano-blue dark:text-blue-300">
          ₳{totalFunded.toLocaleString()}
        </p>
      </div>
      <Separator />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">{t('vendors.proposals_submitted')}</p>
          <p className="text-xl font-bold text-gray-900">{proposalsSubmitted}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">{t('vendors.proposals_approved')}</p>
          <p className="text-xl font-bold text-green-600">{proposalsApproved}</p>
        </div>
      </div>
      <Separator />
      <div>
        <p className="text-sm text-gray-500 mb-1">{t('vendors.rejected_proposals')}</p>
        <p className="font-medium text-red-500">{rejectedProposals}</p>
      </div>
      <Separator />
      <div>
        <p className="text-sm text-gray-500 mb-1">{t('vendors.success_rate')}</p>
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
