
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface DataSummarySectionProps {
  treasuryStats: {
    totalFundsAvailable: number;
    totalFundsAwarded: number;
    fundedProposals: number;
  };
}

export default function DataSummarySection({ treasuryStats }: DataSummarySectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-cardano-blue/10 dark:bg-cardano-blue/20 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Total Treasury Size</h3>
            <p className="text-2xl font-bold text-cardano-blue dark:text-blue-300">
              ₳{treasuryStats.totalFundsAvailable.toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-cardano-teal/10 dark:bg-cardano-teal/20 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Total Funds Awarded</h3>
            <p className="text-2xl font-bold text-cardano-teal">
              ₳{treasuryStats.totalFundsAwarded.toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Funded Proposals</h3>
            <p className="text-2xl font-bold text-green-600 dark:text-green-500">
              {treasuryStats.fundedProposals.toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Percentage Awarded</h3>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {((treasuryStats.totalFundsAwarded / treasuryStats.totalFundsAvailable) * 100).toFixed(1)}%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
