
import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  usdValue?: string;
  change?: string;
  positive?: boolean;
  icon?: React.ReactNode;
  className?: string;
  valueClassName?: string;
  tooltipText?: string;
}

import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const StatCard = ({ title, value, usdValue, change, positive, icon, className, valueClassName, tooltipText }: StatCardProps) => {
  return (
    <div className={cn("stat-card flex flex-col justify-between", className)}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-[10px] font-black text-gray-500/70 dark:text-gray-400/70 uppercase tracking-widest leading-none">{title}</h3>
        {icon && <div className="text-gray-400 dark:text-gray-500 opacity-80">{icon}</div>}
      </div>
      <div className="space-y-1">
        <div className="flex items-baseline gap-2">
          <div className={cn("text-xl font-black text-gray-900 dark:text-white tracking-tight leading-none", valueClassName)}>{value}</div>
          {change && (
            <div className={cn(
              "text-[10px] font-bold px-1.5 py-0.5 rounded-full",
              positive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
            )}>
              {change}
            </div>
          )}
        </div>
        {usdValue && (
          <div className="flex items-center gap-1">
            <div className="text-[11px] font-bold text-gray-500/80 dark:text-gray-400/80 tracking-tight">
              ≈ ${usdValue} USD
            </div>
            {tooltipText && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3 w-3 text-gray-400 dark:text-gray-500 cursor-help opacity-70 hover:opacity-100 transition-opacity" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-[200px]">{tooltipText}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
