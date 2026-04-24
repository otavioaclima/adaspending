
import React, { useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, LabelList } from 'recharts';
import StatsSection from '@/components/teaser/StatsSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { intersectProjects } from '@/data/intersectData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, ArrowUpRight, ArrowRight, PieChart as PieIcon, BarChart3, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const COLORS = ['#0033AD', '#1BAAD6', '#F59E0B', '#10B981', '#6366F1', '#EC4899', '#94A3B8'];

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

    // 2. Vendor Distribution (Top 6 by total budget)
    const totalAllocated = intersectProjects.reduce((sum, p) => sum + p.totalAmount, 0);
    
    const vendorStats = intersectProjects.reduce((acc, p) => {
      if (!acc[p.vendor]) {
        acc[p.vendor] = { name: p.vendor, totalBudget: 0, count: 0 };
      }
      acc[p.vendor].totalBudget += p.totalAmount;
      acc[p.vendor].count += 1;
      return acc;
    }, {} as Record<string, { name: string; totalBudget: number; count: number }>);

    const vendorData = Object.values(vendorStats)
      .sort((a, b) => b.totalBudget - a.totalBudget)
      .slice(0, 6)
      .map(v => ({
        name: v.name,
        value: v.totalBudget,
        percentage: (v.totalBudget / totalAllocated) * 100
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
      .sort((a, b) => b.totalAmount - a.totalAmount)
      .slice(0, 3);

    // 5. Top 3 Vendors by Project Count
    const topVendors = Object.values(vendorStats)
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);

    return { statusData, vendorData, timelineData, topProjects, topVendors };
  }, [t]);

  const formatNumber = (num: number | undefined | null) => {
    if (num === undefined || num === null || isNaN(num)) return '0';
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Projects by Status Pie Chart */}
          <Card className="shadow-lg border-cardano-teal/20 dark:border-gray-800 overflow-hidden transform transition-all duration-500 hover:shadow-xl dark:bg-gray-900">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <PieIcon className="h-5 w-5 text-cardano-blue" />
                <h3 className="text-xl font-bold dark:text-white">{t('analytics.status_breakdown')}</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{t('analytics.status_breakdown_desc')}</p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
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
                      formatter={(value: number) => [`${value} Projects`, t('overview.total_proposals')]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Top Vendors Bar Chart */}
          <Card className="shadow-lg border-cardano-teal/20 dark:border-gray-800 overflow-hidden transform transition-all duration-500 hover:shadow-xl dark:bg-gray-900">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-5 w-5 text-cardano-blue" />
                <h3 className="text-xl font-bold dark:text-white">{t('analytics.top_vendors')}</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{t('analytics.top_vendors_desc')}</p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={vendorData}
                    layout="vertical"
                    margin={{ top: 5, right: 40, left: 40, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={true} vertical={false} />
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      stroke="#888" 
                      fontSize={10} 
                      width={100} 
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#131637', border: 'none', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-gray-900 p-3 rounded-xl border border-gray-800 shadow-xl">
                              <p className="text-sm font-bold text-white mb-1">{data.name}</p>
                              <div className="flex flex-col gap-1">
                                <p className="text-xs font-black text-blue-400">
                                  ₳{formatNumber(data.value)}
                                </p>
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                                  {data.percentage.toFixed(1)}% of total allocated
                                </p>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="value" fill="#0033AD" radius={[0, 4, 4, 0]}>
                      <LabelList 
                        dataKey="percentage" 
                        position="right" 
                        formatter={(val: number) => `${val.toFixed(1)}%`} 
                        style={{ fontSize: '10px', fontWeight: 'bold', fill: '#888' }} 
                        offset={10}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Featured Data Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                          <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">{project.projectName}</p>
                          <ArrowUpRight className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">₳{formatNumber(project.totalAmount)}</p>
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
        
        {/* View Full Data CTA Button */}
        <div className="mt-16 flex justify-center">
          <Button asChild size="lg" className="bg-cardano-blue hover:bg-blue-600 text-white px-10 py-7 text-lg font-bold rounded-2xl shadow-2xl transition-all hover:scale-105">
            <Link to="/overview">
              {t('teaser.cta.explore_platform')}
              <ArrowRight className="h-6 w-6 ml-3" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisualElementsSection;

