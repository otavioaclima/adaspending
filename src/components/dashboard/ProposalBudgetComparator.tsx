
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useIntersectVendorProjects } from "@/hooks/useIntersectVendorProjects";
import { Progress } from "@/components/ui/progress";
import { Info, TrendingUp, DollarSign } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const ProposalBudgetComparator = () => {
  const { t } = useLanguage();
  const { data: vendorDirectory, isLoading, isError } = useIntersectVendorProjects();
  const financialSummary = vendorDirectory?.financialSummary;
  const totalWithdrawnMilestoneValue = financialSummary?.withdrawnMilestoneAda || 0;
  const totalAllocation = financialSummary?.totalAllocatedAda || 0;
  const percentSpent = totalAllocation ? (totalWithdrawnMilestoneValue / totalAllocation) * 100 : 0;

  return (
    <Card className="cardano-card h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-black">{t('analytics.budget_utilization')}</CardTitle>
            <CardDescription className="text-xs font-medium">{t('analytics.withdrawn_milestone_desc')}</CardDescription>
          </div>
          <div className="p-2 bg-cardano-blue/10 rounded-lg">
            <TrendingUp className="h-5 w-5 text-cardano-blue" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-6">
          <div className="flex justify-between items-end mb-1">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{t('stats.withdrawn_milestone_value')}</span>
              <div className="text-2xl font-black text-orange-600 dark:text-orange-500">{financialSummary ? `₳${Math.floor(totalWithdrawnMilestoneValue).toLocaleString()}` : isLoading ? '…' : '—'}</div>
            </div>
            <div className="text-right space-y-1">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{t('analytics.utilization')}</span>
              <div className="text-xl font-black text-gray-900 dark:text-white">{financialSummary ? `${percentSpent.toFixed(1)}%` : isLoading ? '…' : '—'}</div>
            </div>
          </div>
          
          <div className="relative pt-2">
            <Progress value={percentSpent} className="h-3 bg-gray-100 dark:bg-gray-800" />
            <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400">
              <span>₳0</span>
              <span>{financialSummary ? `₳${Math.floor(totalAllocation).toLocaleString()}` : isLoading ? '…' : '—'}</span>
            </div>
          </div>
          {isError && !financialSummary && <p className="text-xs text-gray-500 dark:text-gray-400" role="status">{t('common.data_unavailable')}</p>}

        </div>
      </CardContent>
    </Card>
  );
};

export default ProposalBudgetComparator;
