import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Wallet } from "lucide-react";
import { intersectProjects } from "@/data/intersectData";

import { useLanguage } from "@/contexts/LanguageContext";

const Thermometer = () => {
  const { t } = useLanguage();
  const totalAllocated = 343741204; // Total Allocated funds (Official)
  const totalPaid = intersectProjects.reduce((sum, p) => sum + p.amountSpent, 0);
  const totalPending = totalAllocated - totalPaid;
  
  const paidPercent = (totalPaid / totalAllocated) * 100;
  const pendingPercent = (totalPending / totalAllocated) * 100;

  return (
    <Card className="border-none shadow-md bg-white dark:bg-gray-800 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold flex items-center dark:text-white">
          <Wallet className="h-5 w-5 text-cardano-teal mr-2" />
          {t('thermometer.title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">
              <span>{t('thermometer.paid_funds')}</span>
              <span className="text-orange-600 dark:text-orange-500">{paidPercent.toFixed(1)}%</span>
            </div>
            <Progress value={paidPercent} className="h-2.5 bg-orange-100 dark:bg-orange-900/20 [&>div]:bg-orange-600" />
          </div>
          
          <div>
            <div className="flex justify-between text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">
              <span>{t('thermometer.pending_payment')}</span>
              <span className="text-green-600 dark:text-green-500">{pendingPercent.toFixed(1)}%</span>
            </div>
            <Progress value={pendingPercent} className="h-2.5 bg-green-100 dark:bg-green-900/20 [&>div]:bg-green-600" />
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500 dark:text-gray-400 font-medium">{t('thermometer.total_allocated')}:</span>
              <span className="font-black text-gray-900 dark:text-gray-100">₳{totalAllocated.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500 dark:text-gray-400 font-medium">{t('thermometer.total_disbursed')}:</span>
              <div className="flex items-center gap-2">
                <span className="font-black text-orange-600 dark:text-orange-500">₳{totalPaid.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold">({paidPercent.toFixed(1)}%)</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500 dark:text-gray-400 font-medium">{t('thermometer.pending_payment')}:</span>
              <div className="flex items-center gap-2">
                <span className="font-black text-green-600 dark:text-green-500">₳{totalPending.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold">({pendingPercent.toFixed(1)}%)</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Thermometer;
