
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const PageSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
      <div className="space-y-4">
        <Skeleton className="h-12 w-2/3 md:w-1/3" />
        <Skeleton className="h-6 w-full md:w-1/2" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="border rounded-2xl p-6 space-y-4 bg-white/50 dark:bg-gray-800/50">
            <div className="flex justify-between items-start">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="h-8 w-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="pt-4 flex gap-4">
              <Skeleton className="h-10 flex-1 rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ChartSkeleton = () => (
  <div className="w-full h-[400px] bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-3xl p-8 flex flex-col gap-6">
    <div className="flex items-center gap-3">
      <Skeleton className="h-12 w-12 rounded-2xl" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
    <Skeleton className="flex-1 w-full rounded-2xl" />
  </div>
);

export const StatsSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <Skeleton key={i} className="h-32 w-full rounded-2xl" />
    ))}
  </div>
);
