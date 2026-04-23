import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useQuery } from "@tanstack/react-query";
import { treasuryStats, proposals } from "@/data/mockData";
import { getNetworkState, lovelaceToAda } from "@/services/cexplorer";

const Thermometer = () => {
  const totalBudget = treasuryStats.totalFundsAwarded; // 350M
  const spent = treasuryStats.totalSpent; // 343M
  const remaining = treasuryStats.remainingBudget; // 1.79M
  
  // The percentage provided (99.48%) is based on (Spent / (Spent + Remaining))
  const activeBalance = spent + remaining;
  const spentPercent = (spent / activeBalance) * 100;
  const remainingPercent = (remaining / activeBalance) * 100;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">
          <span className="mr-1">
            <svg
              className="inline-block h-5 w-5 text-cardano-teal"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M14 14.76V4a2 2 0 1 0-4 0v10.76A5 5 0 1 0 12 22a5 5 0 1 0 2-7.24Z" />
            </svg>
          </span>
          Treasury Utilization
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Spent</span>
            <span className="font-bold text-orange-600">{spentPercent.toFixed(2)}%</span>
          </div>
          <Progress value={spentPercent} className="h-2 bg-orange-100" />
          
          <div className="flex justify-between text-xs text-gray-500 mt-4 mb-1">
            <span>Remaining</span>
            <span className="font-bold text-green-600">{remainingPercent.toFixed(2)}%</span>
          </div>
          <Progress value={remainingPercent} className="h-2 bg-green-100" />

          <div className="mt-4 pt-4 border-t border-gray-100 text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Total Budget (Auth):</span>
              <span className="font-semibold">{totalBudget.toLocaleString()} ADA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Total Spent:</span>
              <span className="font-semibold text-orange-600">{spent.toLocaleString()} ADA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Remaining Budget:</span>
              <span className="font-semibold text-green-600">{remaining.toLocaleString()} ADA</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Thermometer;
