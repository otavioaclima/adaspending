
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
import { getVendorProfile } from '@/data/vendorProfiles';
import { Building } from 'lucide-react';

const COLORS = ['#0033AD', '#1BAAD6', '#F59E0B', '#10B981', '#6366F1', '#EC4899', '#94A3B8'];

const VendorLogo = ({ profile, name }: { profile?: any, name: string }) => {
  const [error, setError] = React.useState(false);

  if (profile?.logo && !error) {
    return (
      <img 
        src={profile.logo} 
        alt={name} 
        className="w-full h-full object-contain"
        onError={() => setError(true)}
      />
    );
  }

  return <Building className="h-5 w-5 text-gray-400" />;
};

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
    <section className="py-24 px-4 relative overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
      {/* Modern Tech Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Mesh Gradients */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cardano-blue/10 dark:bg-cardano-blue/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-emerald-500/5 dark:bg-emerald-500/10 blur-[120px] rounded-full" />
        
        {/* Tech Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} 
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-cardano-blue/30 text-cardano-blue bg-cardano-blue/5 backdrop-blur-md rounded-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            {t('teaser.visuals.disclaimer')}
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            {t('teaser.visuals.title').split('Preview')[0]}
            <span className="bg-gradient-to-r from-cardano-blue to-blue-400 bg-clip-text text-transparent">
              {t('teaser.visuals.title').includes('Preview') ? 'Preview' : ''}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            {t('teaser.visuals.subtitle')}
          </p>
        </div>
        
        {/* Real Stats Section */}
        <div className="mb-12">
          <StatsSection />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Projects by Status Pie Chart */}
          <Card className="group relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-2xl hover:shadow-cardano-blue/5 transition-all duration-500 rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-cardano-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-cardano-blue/10 rounded-2xl">
                    <PieIcon className="h-6 w-6 text-cardano-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black dark:text-white tracking-tight">{t('analytics.status_breakdown')}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{t('analytics.status_breakdown_desc')}</p>
                  </div>
                </div>
              </div>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, value }) => `${value}`}
                    >
                      {statusData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={COLORS[index % COLORS.length]} 
                          className="hover:opacity-80 transition-opacity cursor-pointer"
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)', 
                        borderRadius: '16px', 
                        color: '#fff',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                      }}
                      itemStyle={{ color: '#fff', fontWeight: '600' }}
                      formatter={(value: number) => [`${value} Projects`, '']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              {/* Legend Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {statusData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                    <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{entry.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Top Vendors Bar Chart */}
          <Card className="group relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-2xl hover:shadow-cardano-blue/5 transition-all duration-500 rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-500/10 rounded-2xl">
                    <BarChart3 className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black dark:text-white tracking-tight">{t('analytics.top_vendors')}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{t('analytics.top_vendors_desc')}</p>
                  </div>
                </div>
              </div>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={vendorData}
                    layout="vertical"
                    margin={{ top: 5, right: 60, left: 20, bottom: 5 }}
                    barGap={8}
                  >
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#0033AD" />
                        <stop offset="100%" stopColor="#1BAAD6" />
                      </linearGradient>
                    </defs>
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      stroke="#888" 
                      fontSize={9} 
                      width={120} 
                      axisLine={false}
                      tickLine={false}
                      className="font-bold uppercase tracking-tight"
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl ring-1 ring-black/5">
                              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{data.name}</p>
                              <div className="space-y-1">
                                <p className="text-xl font-black text-blue-400">
                                  ₳{formatNumber(data.value)}
                                </p>
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                                  {data.percentage.toFixed(1)}% of total budget
                                </p>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="value" fill="url(#barGradient)" radius={[0, 12, 12, 0]} barSize={24}>
                      <LabelList 
                        dataKey="value" 
                        position="right" 
                        formatter={(val: number) => `₳${(val / 1000000).toFixed(1)}M`}
                        className="fill-gray-600 dark:fill-gray-400 font-bold text-[10px]"
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
            <Card className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-xl rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl">
                    <Briefcase className="h-5 w-5 text-blue-500" />
                  </div>
                  <h4 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">{t('overview.project_showcases')}</h4>
                </div>
                <div className="space-y-4">
                  {topProjects.map((project, idx) => (
                    <div key={project.id} className="group">
                      <Link to={`/projects/${project.id}`} className="flex items-center justify-between p-4 rounded-2xl bg-gray-500/5 hover:bg-cardano-blue/10 border border-transparent hover:border-cardano-blue/20 transition-all duration-300">
                        <div className="flex-1 min-w-0 mr-4">
                          <p className="text-sm font-bold text-gray-900 dark:text-white truncate group-hover:text-cardano-blue transition-colors">{project.projectName}</p>
                          <p className="text-[11px] font-black text-blue-500 uppercase tracking-wider mt-0.5">₳{formatNumber(project.totalAmount)}</p>
                        </div>
                        <div className="p-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                          <ArrowUpRight className="h-4 w-4 text-cardano-blue" />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Vendors */}
            <Card className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-xl rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-emerald-500/10 rounded-xl">
                    <Users className="h-5 w-5 text-emerald-500" />
                  </div>
                  <h4 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">{t('nav.vendors')}</h4>
                </div>
                <div className="space-y-4">
                  {topVendors.map((vendor, idx) => {
                    const profile = getVendorProfile(vendor.name);
                    return (
                      <Link 
                        key={vendor.name} 
                        to={`/vendors/${encodeURIComponent(vendor.name)}`}
                        className="flex justify-between items-center p-4 rounded-2xl bg-gray-500/5 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20 transition-all duration-300 group/vendor"
                      >
                        <div className="flex items-center gap-4 min-w-0 flex-1">
                          <div className="w-10 h-10 rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex-shrink-0 flex items-center justify-center p-1 shadow-sm group-hover/vendor:scale-110 transition-transform">
                            <VendorLogo profile={profile} name={vendor.name} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-gray-900 dark:text-white truncate group-hover/vendor:text-emerald-600 dark:group-hover/vendor:text-emerald-400 transition-colors">
                              {vendor.name}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-none font-bold text-[10px] tracking-wide">
                            {vendor.count} {vendor.count === 1 ? t('vendors.one_project') : t('vendors.multiple_projects')}
                          </Badge>
                          <ArrowUpRight className="h-4 w-4 text-emerald-500 opacity-0 group-hover/vendor:opacity-100 transition-all transform translate-x-1 group-hover/vendor:translate-x-0" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
        </div>
        
        {/* View Full Data CTA Button */}
        <div className="mt-20 flex justify-center">
          <Button asChild size="lg" className="group relative bg-cardano-blue hover:bg-blue-600 text-white px-12 py-8 text-xl font-black rounded-2xl shadow-[0_20px_50px_rgba(0,51,173,0.3)] transition-all hover:scale-105 active:scale-95 overflow-hidden border-none">
            <Link to="/overview" className="flex items-center gap-3 relative z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              {t('teaser.cta.explore_platform')}
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisualElementsSection;

