
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { treasuryStats, proposals } from "@/data/mockData";
import { BarChart3 } from "lucide-react";

const ProposalBudgetComparator = () => {
  // Total do orçamento disponível
  const totalBudget = treasuryStats.totalFundsAvailable;
  // Total aprovado pelas propostas
  const approvedSum = proposals
    .filter((p) => p.status === "approved" || p.status === "completed")
    .reduce((acc, p) => acc + (p.requestedAmount || 0), 0);
  // Total efetivamente gasto (mock: proposals 'completed' somam valor gasto)
  const spent = proposals
    .filter((p) => p.status === "completed")
    .reduce((acc, p) => acc + (p.spentAmount || p.requestedAmount || 0), 0);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>
          <BarChart3 className="inline-block h-5 w-5 mr-2 text-cardano-blue" />
          Propostas x Orçamento
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Orçamento disponível</span>
            <span className="font-bold text-cardano-blue">{totalBudget.toLocaleString()} ADA</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total aprovado</span>
            <span className="font-bold text-green-600">{approvedSum.toLocaleString()} ADA</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total gasto</span>
            <span className="font-bold text-cyan-700">{spent.toLocaleString()} ADA</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProposalBudgetComparator;
