import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { treasuryStats, proposals } from "@/data/mockData";
import { getNetworkState, lovelaceToAda } from "@/services/cardanoscan";
import { BarChart3 } from "lucide-react";

const ProposalBudgetComparator = () => {
  // Budget for Intersect Treasury Contracts 1
  const totalBudget = treasuryStats.totalFundsAwarded;
  const spent = treasuryStats.totalSpent;
  const remaining = treasuryStats.remainingBudget;
  const spentPercent = (spent / totalBudget) * 100;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">
          <BarChart3 className="inline-block h-5 w-5 mr-2 text-cardano-blue" />
          Intersect Treasury Budget
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Total Budget</span>
              <span className="text-sm font-bold text-cardano-blue">{totalBudget.toLocaleString()} ADA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Total Spent</span>
              <span className="text-sm font-bold text-orange-600">{spent.toLocaleString()} ADA ({spentPercent.toFixed(2)}%)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Remaining Budget</span>
              <span className="text-sm font-bold text-green-600">{remaining.toLocaleString()} ADA</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProposalBudgetComparator;
