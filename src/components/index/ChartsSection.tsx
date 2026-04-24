import React, { useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LabelList } from 'recharts';
import { intersectProjects } from '@/data/intersectData';
import { useLanguage } from '@/contexts/LanguageContext';
import { Activity, TrendingUp, PieChart as PieChartIcon, BarChart3 } from 'lucide-react';

const ChartsSection = () => {
  const { t } = useLanguage();
  const COLORS = ['hsl(var(--cardano-blue))', '#1BAAD6', '#FF9F43', '#28C76F', '#EA5455', '#7367F0'];

  const statusData = useMemo(() => {
    const counts: Record<string, number> = {};
    intersectProjects.forEach(p => {
      counts[p.status] = (counts[p.status] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, []);

  const totalAllocated = 345531529; // Match Analytics page constant

  const vendorData = useMemo(() => {
    const stats: Record<string, number> = {};
    intersectProjects.forEach(p => {
      stats[p.vendor] = (stats[p.vendor] || 0) + p.totalAmount;
    });
    return Object.entries(stats)
      .map(([name, amount]) => ({ 
        name: name.length > 25 ? name.substring(0, 25) + '...' : name, 
        fullName: name,
        amount,
        percent: (amount / totalAllocated) * 100
      }))
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 8);
  }, []);

  return (
    <section className="mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Project Status Breakdown */}
        <Card className="cardano-card transition-all hover:shadow-xl">
          <CardHeader className="border-b border-cardano-teal/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-500/10 dark:bg-orange-500/20 rounded-lg">
                <Activity className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <CardTitle className="text-xl font-black">{t('analytics.status_breakdown')}</CardTitle>
                <CardDescription className="font-medium">{t('analytics.status_breakdown_desc')}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie 
                    data={statusData} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={60}
                    outerRadius={100} 
                    paddingAngle={5}
                    label={({name, value}) => `${name}: ${value}`}
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[(index + 2) % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6', borderRadius: '8px', padding: '10px 14px' }}
                    itemStyle={{ color: '#f3f4f6' }}
                    labelStyle={{ color: '#9ca3af', fontWeight: 700, marginBottom: 4 }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Vendors by Budget */}
        <Card className="cardano-card transition-all hover:shadow-xl">
          <CardHeader className="border-b border-cardano-teal/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-600/10 dark:bg-green-600/20 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <CardTitle className="text-xl font-black">{t('analytics.top_vendors')}</CardTitle>
                <CardDescription className="font-medium">{t('analytics.top_vendors_desc')}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={vendorData}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="currentColor" className="text-gray-200 dark:text-gray-700" />
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    width={150} 
                    tick={{fill: 'currentColor', fontSize: 11}} 
                    className="text-gray-400 dark:text-gray-500" 
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6', borderRadius: '8px', padding: '10px 14px' }}
                    itemStyle={{ color: '#f3f4f6' }}
                    labelStyle={{ color: '#9ca3af', fontWeight: 700, marginBottom: 4 }}
                    formatter={(value: number) => [`₳${value.toLocaleString()}`, t('projects.budget_label')]}
                    labelFormatter={(label, payload) => payload[0]?.payload?.fullName || label}
                    cursor={{fill: 'rgba(115,103,240,0.08)'}}
                  />
                  <Bar 
                    dataKey="amount" 
                    fill="#7367F0" 
                    radius={[0, 4, 4, 0]} 
                    barSize={20}
                  >
                    <LabelList 
                      dataKey="percent" 
                      position="right" 
                      formatter={(v: number) => `${v.toFixed(1)}%`}
                      fill="currentColor"
                      fontSize={10}
                      fontWeight={700}
                      dx={5}
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
