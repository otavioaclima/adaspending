
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Info, Landmark } from "lucide-react";
import { useIntersectData } from "@/hooks/useIntersectData";
import { useLanguage } from '@/contexts/LanguageContext';

const Thermometer = () => {
  const { t } = useLanguage();
  const { data: intersectProjects = [] } = useIntersectData();

  const OFFICIAL_TOTAL_ALLOCATED = 343741204; // Official Intersect allocated funds
  const totalPaid = intersectProjects.reduce((sum, p) => sum + p.amountSpent, 0);
  
  const percentage = (totalPaid / OFFICIAL_TOTAL_ALLOCATED) * 100;

  return (
    <Card className="cardano-card h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-black">{t('analytics.contract_payouts')}</CardTitle>
            <CardDescription className="text-xs font-medium">{t('analytics.official_tracking_desc')}</CardDescription>
          </div>
          <div className="p-2 bg-cardano-blue/10 rounded-lg">
            <Landmark className="h-5 w-5 text-cardano-blue" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-6">
          <div className="flex justify-between items-end mb-1">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{t('analytics.milestones_paid')}</span>
              <div className="text-2xl font-black text-[#0033ad] dark:text-blue-400">₳{Math.floor(totalPaid).toLocaleString()}</div>
            </div>
            <div className="text-right space-y-1">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{t('analytics.payout_ratio')}</span>
              <div className="text-xl font-black text-gray-900 dark:text-white">{percentage.toFixed(1)}%</div>
            </div>
          </div>
          
          <div className="relative pt-2">
            <Progress value={percentage} className="h-3 bg-gray-100 dark:bg-gray-800" />
            <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400">
              <span>₳0</span>
              <span>₳{OFFICIAL_TOTAL_ALLOCATED.toLocaleString()}</span>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default Thermometer;
