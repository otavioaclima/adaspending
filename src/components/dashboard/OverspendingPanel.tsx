
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { proposals } from "@/data/mockData";

const THRESHOLD = 1.05; // gasto acima de 105% do solicitado = alerta

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
          Gastos Excessivos
        </CardTitle>
      </CardHeader>
      <CardContent>
        {flagged.length === 0 ? (
          <div className="text-gray-500">Nenhum gasto excessivo detectado.</div>
        ) : (
          <ul className="space-y-2">
            {flagged.map((p) => (
              <li key={p.id} className="bg-red-50 border-l-4 border-red-400 p-2 rounded">
                <div className="font-semibold">{p.title}</div>
                <div>
                  Solicitado: <span className="font-mono">{(p.requestedAmount||0).toLocaleString()} ADA</span>
                </div>
                <div>
                  Gasto: <span className="text-red-700 font-mono">{p.spentAmount?.toLocaleString()} ADA</span>
                  {" "}
                  <span className="text-xs text-red-500">({(((p.spentAmount||0)/(p.requestedAmount||1))*100).toFixed(0)}%)</span>
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
