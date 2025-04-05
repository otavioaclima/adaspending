
import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  positive?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const StatCard = ({ title, value, change, positive, icon, className }: StatCardProps) => {
  return (
    <div className={cn("stat-card", className)}>
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div className={cn(
            "text-xs font-medium flex items-center",
            positive ? "text-green-600" : "text-red-600"
          )}>
            {positive ? "↑" : "↓"} {change}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
