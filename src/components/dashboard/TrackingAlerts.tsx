
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { proposals } from "@/data/mockData";

// Proposals stale if no update > X days OR status 'active' but missing delivery
const STALE_DAYS = 30;

const TrackingAlerts = () => {
  const now = new Date();
  const alerts = proposals.filter((p) => {
    const lastUpdate = p.updatedAt ? new Date(p.updatedAt) : null;
    if (!lastUpdate) return true;
    const daysAgo = (now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);
    // Block if no update for more than X days
    if (daysAgo > STALE_DAYS) return true;
    // If active but endDate passed and not completed
    if (p.status === "active" && p.endDate && new Date(p.endDate) < now) {
      return true;
    }
    return false;
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-y-0 justify-between">
        <CardTitle>
          <AlertTriangle className="inline-block h-5 w-5 text-orange-500 mr-2" />
          Proposals Out of Tracking
        </CardTitle>
      </CardHeader>
      <CardContent>
        {alerts.length === 0 ? (
          <div className="text-gray-500">No proposals outside expected tracking.</div>
        ) : (
          <ul className="space-y-2">
            {alerts.map((p) => (
              <li key={p.id} className="bg-orange-50 border-l-4 border-orange-400 p-2 rounded">
                <div className="font-semibold">{p.title}</div>
                <div className="text-xs text-gray-500">Status: {p.status}</div>
                {p.updatedAt ? (
                  <div className="text-xs">Last update: {new Date(p.updatedAt).toLocaleDateString()}</div>
                ) : (
                  <div className="text-xs text-gray-400">No updates.</div>
                )}
                {p.endDate && (
                  <div className="text-xs">Deadline: {new Date(p.endDate).toLocaleDateString()}</div>
                )}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default TrackingAlerts;
