import React, { useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LabelList } from 'recharts';
import { intersectProjects } from '@/data/intersectData';
import { useLanguage } from '@/contexts/LanguageContext';

const ChartsSection = () => {
  const { t } = useLanguage();
  const COLORS = ['#0033AD', '#1BAAD6', '#F59E0B', '#10B981', '#6366F1', '#EC4899', '#94A3B8'];

  const statusData = useMemo(() => {
    const counts: Record<string, number> = {};
    intersectProjects.forEach(p => {
      counts[p.status] = (counts[p.status] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, []);

  const totalAllocated = useMemo(() => intersectProjects.reduce((sum, p) => sum + p.totalAmount, 0), []);

  const vendorData = useMemo(() => {
    const stats: Record<string, number> = {};
    intersectProjects.forEach(p => {
      stats[p.vendor] = (stats[p.vendor] || 0) + p.totalAmount;
    });
    return Object.entries(stats)
      .map(([name, totalBudget]) => ({ 
        name, 
        totalBudget,
        percentage: (totalBudget / totalAllocated) * 100
      }))
      .sort((a, b) => b.totalBudget - a.totalBudget)
      .slice(0, 6);
  }, [totalAllocated]);

  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status Distribution */}
        <Card className="border-none shadow-md bg-white dark:bg-gray-800 transition-colors">
          <CardHeader>
            <CardTitle className="dark:text-white">{t('charts.projects_by_status')}</CardTitle>
            <CardDescription className="dark:text-gray-400">{t('charts.projects_by_status_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie 
                    data={statusData} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={80} 
                    fill="#8884d8" 
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => [`${value} ${t('charts.projects')}`, 'Count']} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Top Vendors */}
        <Card className="border-none shadow-md bg-white dark:bg-gray-800 transition-colors">
          <CardHeader>
            <CardTitle className="dark:text-white">{t('charts.top_vendors')}</CardTitle>
            <CardDescription className="dark:text-gray-400">{t('charts.top_vendors_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={vendorData} 
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 40,
                    left: 40,
                    bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E5E7EB" />
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={100} 
                    tick={{ fontSize: 10, fontWeight: 600, fill: '#6B7280' }} 
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ 
                      borderRadius: '12px', 
                      border: 'none', 
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                      padding: '12px'
                    }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-800 shadow-xl">
                            <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{data.name}</p>
                            <div className="flex flex-col gap-1">
                              <p className="text-xs font-black text-cardano-blue">
                                ₳{data.totalBudget.toLocaleString()}
                              </p>
                              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                {data.percentage.toFixed(1)}% {t('charts.of_total')}
                              </p>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="totalBudget" name="Budget (ADA)" fill="#0033AD" radius={[0, 4, 4, 0]} barSize={24}>
                    <LabelList 
                      dataKey="percentage" 
                      position="right" 
                      formatter={(val: number) => `${val.toFixed(1)}%`} 
                      style={{ fontSize: '10px', fontWeight: 'bold', fill: '#6B7280' }} 
                      offset={10}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ChartsSection;
