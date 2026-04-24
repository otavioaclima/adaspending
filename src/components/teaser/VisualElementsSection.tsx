
import React, { useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import StatsSection from '@/components/teaser/StatsSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { intersectProjects } from '@/data/intersectData';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const COLORS = ['#0033AD', '#1BAAD6', '#FF5733', '#33C3F0', '#8884D8'];

const VisualElementsSection = () => {
  const { t, language } = useLanguage();

  // Process real data
  const { statusData, vendorData, timelineData, topProjects, topVendors } = useMemo(() => {
    // 1. Status Distribution
    const statusCounts = intersectProjects.reduce((acc, p) => {
      acc[p.status] = (acc[p.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const statusData = Object.entries(statusCounts).map(([name, value]) => ({
      name: t(`status.${name.toLowerCase().replace(' ', '_')}` as any) || name,
      value
    }));

    // 2. Vendor Distribution (Top 5 by total budget)
    const vendorStats = intersectProjects.reduce((acc, p) => {
      if (!acc[p.vendor]) {
        acc[p.vendor] = { name: p.vendor, totalBudget: 0, count: 0 };
      }
      acc[p.vendor].totalBudget += p.budget;
      acc[p.vendor].count += 1;
      return acc;
    }, {} as Record<string, { name: string; totalBudget: number; count: number }>);

    const vendorData = Object.values(vendorStats)
      .sort((a, b) => b.totalBudget - a.totalBudget)
      .slice(0, 5)
      .map(v => ({
        name: v.name,
        value: v.totalBudget
      }));

    // 3. Timeline Data (Cumulative spending by month)
    // We'll use the milestones' unlockDate to estimate spending timeline
    const monthlySpending: Record<string, number> = {};
    intersectProjects.forEach(p => {
      p.milestones.forEach(m => {
        if (m.unlockDate && m.status === 'Completed') {
          const date = new Date(m.unlockDate);
          if (!isNaN(date.getTime())) {
            const monthYear = date.toLocaleString('en-US', { month: 'short', year: '2-digit' });
            monthlySpending[monthYear] = (monthlySpending[monthYear] || 0) + m.amount;
          }
        }
      });
    });

    const timelineData = Object.entries(monthlySpending)
      .map(([month, amount]) => ({ month, amount }))
      .sort((a, b) => {
        const dateA = new Date(a.month);
        const dateB = new Date(b.month);
        return dateA.getTime() - dateB.getTime();
      });

    // 4. Top 3 Projects by Budget
    const topProjects = [...intersectProjects]
      .sort((a, b) => b.budget - a.budget)
      .slice(0, 3);

    // 5. Top 3 Vendors by Project Count
    const topVendors = Object.values(vendorStats)
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);

    return { statusData, vendorData, timelineData, topProjects, topVendors };
  }, [t]);

  const formatNumber = (num: number) => {
    return num.toLocaleString(language === 'JP' ? 'ja-JP' : language === 'PT' ? 'pt-BR' : language === 'ES' ? 'es-ES' : 'en-US');
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden dark:bg-black">
      {/* Blockchain background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjMDAzM0FEIj48cGF0aCBkPSJNMzYgMjRhNiA2IDAgMSAwIDAgMTIgNiA2IDAgMCAwIDAtMTJ6bS0xMiAwYTYgNiAwIDEgMCAwIDEyIDYgNiAwIDAgMCAwLTEyem0wLTEyYTYgNiAwIDEgMCAwIDEyIDYgNiAwIDAgMCAwLTEyem0xMiAwYTYgNiAwIDEgMCAwIDEyIDYgNiAwIDAgMCAwLTEyem0xMiAwYTYgNiAwIDEgMCAwIDEyIDYgNiAwIDAgMCAwLTEyem0tMjQgMTJhNiA2IDAgMSAwIDAgMTIgNiA2IDAgMCAwIDAtMTJ6Ii8+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white">
          {t('teaser.visuals.title').split('Preview')[0]}
          <span className="text-cardano-blue">{t('teaser.visuals.title').includes('Preview') ? 'Preview' : ''}</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-6">
          {t('teaser.visuals.subtitle')}
        </p>
        
        {/* Data source disclaimer */}
        <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-md p-2 mb-8 text-blue-800 dark:text-blue-300 text-[10px] md:text-xs max-w-2xl mx-auto">
          <p className="flex items-center justify-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 inline flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>{t('teaser.visuals.disclaimer')}</span>
          </p>
        </div>
        
        {/* Real Stats Section */}
        <StatsSection />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Treasury Spending Over Time Chart */}
          <Card className="shadow-lg border-cardano-teal/20 dark:border-gray-800 overflow-hidden transform transition-all duration-500 hover:shadow-xl dark:bg-gray-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-cardano-blue">{t('teaser.visuals.spending_title')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{t('teaser.visuals.spending_subtitle')}</p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={timelineData}
                    margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0033AD" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#1BAAD6" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis dataKey="month" stroke="#888" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `₳${(val / 1000000).toFixed(0)}M`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#131637', border: 'none', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value: any) => [`₳${formatNumber(value)}`, t('analytics.amount_spent')]} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="#0033AD" 
                      fillOpacity={1} 
                      fill="url(#colorAmount)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Status Distribution Pie Chart */}
          <Card className="shadow-lg border-cardano-teal/20 dark:border-gray-800 overflow-hidden transform transition-all duration-500 hover:shadow-xl dark:bg-gray-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-cardano-blue">{t('analytics.status_breakdown')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{t('analytics.status_breakdown_desc')}</p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#131637', border: 'none', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Top Vendors Bar Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 shadow-lg border-cardano-teal/20 dark:border-gray-800 overflow-hidden transform transition-all duration-500 hover:shadow-xl dark:bg-gray-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-cardano-blue">{t('analytics.top_vendors')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{t('analytics.top_vendors_desc')}</p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={vendorData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                    <XAxis type="number" stroke="#888" fontSize={10} tickFormatter={(val) => `₳${(val / 1000000).toFixed(0)}M`} />
                    <YAxis dataKey="name" type="category" stroke="#888" fontSize={10} width={100} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#131637', border: 'none', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value: any) => [`₳${formatNumber(value)}`, t('explorer.total_allocation')]} 
                    />
                    <Bar dataKey="value" fill="#0033AD" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Featured Data Grid */}
          <div className="space-y-6">
            {/* Top Projects */}
            <Card className="shadow-lg border-cardano-teal/20 dark:border-gray-800 overflow-hidden dark:bg-gray-900">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="h-5 w-5 text-cardano-blue" />
                  <h4 className="font-bold text-gray-900 dark:text-white">{t('overview.project_showcases')}</h4>
                </div>
                <div className="space-y-3">
                  {topProjects.map((project, idx) => (
                    <div key={project.id} className="group">
                      <Link to={`/projects/${project.id}`} className="block p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">{project.name}</p>
                          <ArrowUpRight className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">₳{formatNumber(project.budget)}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Vendors */}
            <Card className="shadow-lg border-cardano-teal/20 dark:border-gray-800 overflow-hidden dark:bg-gray-900">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-cardano-teal" />
                  <h4 className="font-bold text-gray-900 dark:text-white">{t('nav.vendors')}</h4>
                </div>
                <div className="space-y-3">
                  {topVendors.map((vendor, idx) => (
                    <div key={vendor.name} className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{vendor.name}</p>
                      <Badge variant="secondary" className="text-[10px]">
                        {vendor.count} {vendor.count === 1 ? t('vendors.one_project') : t('vendors.multiple_projects')}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualElementsSection;

