
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { thermometer } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { treasuryStats, proposals } from "@/data/mockData";

const Thermometer = () => {
  const total = treasuryStats.totalFundsAvailable;
  const approved = proposals
    .filter((p) => p.status === "approved" || p.status === "completed")
    .reduce((acc, p) => acc + (p.requestedAmount || 0), 0);
  const spent = proposals
    .filter((p) => p.status === "completed")
    .reduce((acc, p) => acc + (p.spentAmount || p.requestedAmount || 0), 0);

  const approvedPercent = (approved / total) * 100;
  const spentPercent = (spent / total) * 100;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>
          <span className="mr-1"><svg className="inline-block h-5 w-5 text-cardano-teal" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 14.76V4a2 2 0 1 0-4 0v10.76A5 5 0 1 0 12 22a5 5 0 1 0 2-7.24Z"/></svg></span>
          Termômetro do Tesouro
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Aprovado</span>
            <span style={{ color: "#0EA5E9" }}>{approvedPercent.toFixed(1)}%</span>
          </div>
          <Progress value={approvedPercent} className="h-2 bg-cardano-blue/10 mb-2" />
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Gasto</span>
            <span style={{ color: "#F97316" }}>{spentPercent.toFixed(1)}%</span>
          </div>
          <Progress value={spentPercent} className="h-2 bg-orange-200" />
          <div className="mt-3 text-xs text-gray-500 flex flex-col">
            <span>Orçamento Total: <b>{total.toLocaleString()} ADA</b></span>
            <span>Total aprovado: <b className="text-cardano-blue">{approved.toLocaleString()} ADA</b></span>
            <span>Total gasto: <b className="text-orange-600">{spent.toLocaleString()} ADA</b></span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Thermometer;
