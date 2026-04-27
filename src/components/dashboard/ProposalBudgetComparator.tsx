
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useIntersectData } from "@/hooks/useIntersectData";
import { Progress } from "@/components/ui/progress";
import { Info, TrendingUp, DollarSign } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const ProposalBudgetComparator = () => {
  const { t } = useLanguage();
  const { data: intersectProjects = [] } = useIntersectData();
  
  const INTERSECT_TOTAL_BUDGET = 345531529; // Intersect Total allocated funds 2024+2025
  const trackedSpent = intersectProjects.reduce((sum, p) => sum + p.amountSpent, 0);
  const BASELINE_SPENT = 168789504; // Baseline spent outside of tracked projects
  const totalSpent = BASELINE_SPENT + trackedSpent;
  
  const percentSpent = (totalSpent / INTERSECT_TOTAL_BUDGET) * 100;

  return (
    <Card className="cardano-card h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-black">{t('analytics.budget_utilization')}</CardTitle>
            <CardDescription className="text-xs font-medium">{t('analytics.intersect_spending_desc')}</CardDescription>
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
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{t('stats.total_spent')}</span>
              <div className="text-2xl font-black text-orange-600 dark:text-orange-500">₳{Math.floor(totalSpent).toLocaleString()}</div>
            </div>
            <div className="text-right space-y-1">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{t('analytics.utilization')}</span>
              <div className="text-xl font-black text-gray-900 dark:text-white">{percentSpent.toFixed(1)}%</div>
            </div>
          </div>
          
          <div className="relative pt-2">
            <Progress value={percentSpent} className="h-3 bg-gray-100 dark:bg-gray-800" />
            <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400">
              <span>₳0</span>
              <span>₳{INTERSECT_TOTAL_BUDGET.toLocaleString()}</span>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default ProposalBudgetComparator;
