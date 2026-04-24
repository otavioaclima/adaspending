import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle, PauseCircle, Info } from "lucide-react";
import { intersectProjects } from "@/data/intersectData";

import { useLanguage } from "@/contexts/LanguageContext";

const OverspendingPanel = () => {
  const { t } = useLanguage();
  // Use real data from intersectProjects
  const flagged = intersectProjects.filter(
    (p) => p.amountSpent > p.totalAmount
  );

  const pausedProjects = intersectProjects.filter(p => p.status.toLowerCase() === "paused");
  const totalSpentInPaused = pausedProjects.reduce((sum, p) => sum + p.amountSpent, 0);

  return (
    <Card className="border-none shadow-md bg-white dark:bg-gray-800 transition-colors">
      <CardHeader className="flex flex-row items-center space-y-0 justify-between pb-2">
        <CardTitle className="text-lg font-bold flex items-center">
          <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
          {t('overspending.attention_alerts')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overspending Section */}
        <div>
          <h4 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
            {t('overspending.detected')}
          </h4>
          {flagged.length === 0 ? (
            <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 dark:bg-green-900/20 p-2 rounded border border-green-100 dark:border-green-800">
              <Info className="h-4 w-4" />
              {t('overspending.all_within_budget')}
            </div>
          ) : (
            <ul className="space-y-2">
              {flagged.map((p) => (
                <li key={p.id} className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-2.5 rounded shadow-sm">
                  <div className="font-bold text-xs text-gray-900 dark:text-gray-100 truncate mb-1">{p.projectName}</div>
                  <div className="grid grid-cols-2 gap-1 text-[11px]">
                    <div className="text-gray-500 dark:text-gray-400 font-medium">{t('explorer.total_allocation')}: ₳{p.totalAmount.toLocaleString()}</div>
                    <div className="text-red-600 dark:text-red-400 font-bold text-right">
                      {t('thermometer.paid_funds').split(' ')[0]}: ₳{p.amountSpent.toLocaleString()} ({((p.amountSpent / p.totalAmount) * 100).toFixed(0)}%)
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Paused Spending Section */}
        <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
          <h4 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
            {t('overspending.paused_costs')}
          </h4>
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-3 rounded shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PauseCircle className="h-4 w-4 text-orange-600" />
                <span className="text-xs font-bold text-gray-900 dark:text-gray-100">{t('overspending.total_spent_paused')}</span>
              </div>
              <span className="text-sm font-black text-orange-700 dark:text-orange-400">
                ₳{totalSpentInPaused.toLocaleString()}
              </span>
            </div>
            <p className="text-[10px] text-orange-600 dark:text-orange-500 mt-1 font-medium">
              {t('overspending.paused_disclaimer')}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OverspendingPanel;
