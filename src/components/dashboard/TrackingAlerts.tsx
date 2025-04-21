
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { proposals } from "@/data/mockData";

// Propostas sem atualização há mais de X dias OU status 'active' mas falta entrega
const STALE_DAYS = 30;

const TrackingAlerts = () => {
  const now = new Date();
  const alerts = proposals.filter((p) => {
    const lastUpdate = p.updatedAt ? new Date(p.updatedAt) : null;
    if (!lastUpdate) return true;
    const daysAgo = (now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);
    // Bloqueio se não há update há mais de X dias
    if (daysAgo > STALE_DAYS) return true;
    // Se está "active" mas já passou do endDate e não está concluída
    if (
      p.status === "active" &&
      p.endDate &&
      new Date(p.endDate) < now
    ) {
      return true;
    }
    return false;
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-y-0 justify-between">
        <CardTitle>
          <AlertTriangle className="inline-block h-5 w-5 text-orange-500 mr-2" />
          Propostas fora do tracking
        </CardTitle>
      </CardHeader>
      <CardContent>
        {alerts.length === 0 ? (
          <div className="text-gray-500">Nenhuma proposta fora do esperado.</div>
        ) : (
          <ul className="space-y-2">
            {alerts.map((p) => (
              <li key={p.id} className="bg-orange-50 border-l-4 border-orange-400 p-2 rounded">
                <div className="font-semibold">{p.title}</div>
                <div className="text-xs text-gray-500">Status: {p.status}</div>
                {p.updatedAt ?
                  <div className="text-xs">Última atualização: {new Date(p.updatedAt).toLocaleDateString()}</div> :
                  <div className="text-xs text-gray-400">Sem atualizações.</div>
                }
                {p.endDate && <div className="text-xs">Prazo: {new Date(p.endDate).toLocaleDateString()}</div>}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default TrackingAlerts;
