
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, AlertTriangle, ShieldCheck } from "lucide-react";
import { useIntersectData } from "@/hooks/useIntersectData";
import { useLanguage } from '@/contexts/LanguageContext';

const OverspendingPanel = () => {
  const { t } = useLanguage();
  const { data: intersectProjects = [] } = useIntersectData();

  // Use real data from intersectProjects
  const flagged = intersectProjects.filter(
    (p) => p.amountSpent > p.totalAmount && p.totalAmount > 0
  );

  const pausedProjects = intersectProjects.filter(p => p.status.toLowerCase() === "paused");

  return (
    <Card className="cardano-card h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-black">{t('analytics.budget_safety')}</CardTitle>
            <CardDescription className="text-xs font-medium">{t('analytics.monitoring_desc')}</CardDescription>
          </div>
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          {flagged.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-3">
                <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <p className="text-sm font-black text-emerald-700 dark:text-emerald-400 mb-1">{t('analytics.no_overspending')}</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium px-4">
                {t('analytics.healthy_contracts_desc')}
              </p>
            </div>
          ) : (
            <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-800/30 rounded-2xl">
              <div className="flex items-center gap-3 text-red-600 dark:text-red-500 mb-2">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm font-black">{t('analytics.anomalies_detected')}</span>
              </div>
              <p className="text-[10px] font-bold text-red-700/70 dark:text-red-400/70">
                {flagged.length} {t('analytics.overspending_count_msg')}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default OverspendingPanel;
