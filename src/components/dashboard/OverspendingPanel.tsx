
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { proposals } from "@/data/mockData";

const THRESHOLD = 1.05; // spending above 105% of requested = alert

const OverspendingPanel = () => {
  const flagged = proposals.filter(
    (p) =>
      typeof p.spentAmount === "number" &&
      p.requestedAmount &&
      p.spentAmount > p.requestedAmount * THRESHOLD
  );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-y-0 justify-between">
        <CardTitle>
          <AlertTriangle className="inline-block h-5 w-5 text-red-500 mr-2" />
          Overspending Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        {flagged.length === 0 ? (
          <div className="text-gray-500">No overspending detected.</div>
        ) : (
          <ul className="space-y-2">
            {flagged.map((p) => (
              <li key={p.id} className="bg-red-50 border-l-4 border-red-400 p-2 rounded">
                <div className="font-semibold">{p.title}</div>
                <div>
                  Requested: <span className="font-mono">{(p.requestedAmount || 0).toLocaleString()} ADA</span>
                </div>
                <div>
                  Spent: <span className="text-red-700 font-mono">{p.spentAmount?.toLocaleString()} ADA</span>{" "}
                  <span className="text-xs text-red-500">({(((p.spentAmount || 0) / (p.requestedAmount || 1)) * 100).toFixed(0)}%)</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default OverspendingPanel;
