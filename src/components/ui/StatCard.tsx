
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
}

const StatCard = ({ title, value, usdValue, change, positive, icon, className }: StatCardProps) => {
  return (
    <div className={cn("stat-card flex flex-col justify-between", className)}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-[10px] font-black text-gray-500/70 dark:text-gray-400/70 uppercase tracking-widest leading-none">{title}</h3>
        {icon && <div className="text-gray-400 dark:text-gray-500 opacity-80">{icon}</div>}
      </div>
      <div className="space-y-1">
        <div className="text-xl font-black text-gray-900 dark:text-white tracking-tight leading-none">{value}</div>
        {usdValue && (
          <div className="text-[11px] font-bold text-gray-500/80 dark:text-gray-400/80 tracking-tight">
            ≈ ${usdValue}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
