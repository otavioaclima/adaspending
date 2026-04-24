import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { intersectProjects } from "@/data/intersectData";
import { BarChart3 } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const ProposalBudgetComparator = () => {
  const { t } = useLanguage();
  // Treasury constants - Consistent with StatsSection and Thermometer
  const totalBudget = 345531529;
  const baselineSpent = 168789504;
  const trackedSpent = intersectProjects.reduce((sum, p) => sum + p.amountSpent, 0);
  const spent = baselineSpent + trackedSpent;
  const remaining = totalBudget - spent;
  
  const spentPercent = (spent / totalBudget) * 100;
  const remainingPercent = (remaining / totalBudget) * 100;

  return (
    <Card className="border-none shadow-md bg-white dark:bg-gray-800 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">
          <BarChart3 className="inline-block h-5 w-5 mr-2 text-cardano-blue" />
          {t('overview.intersect_treasury_budget')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 pt-2">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{t('overview.total_budget')}</span>
              <span className="text-sm font-black text-cardano-blue">₳{totalBudget.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{t('stats.total_spent')}</span>
              <span className="text-sm font-black text-orange-600">₳{spent.toLocaleString()} ({spentPercent.toFixed(2)}%)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{t('stats.remaining_budget')}</span>
              <span className="text-sm font-black text-green-600">₳{remaining.toLocaleString()} ({remainingPercent.toFixed(2)}%)</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProposalBudgetComparator;
