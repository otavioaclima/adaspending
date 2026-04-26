
import React, { useMemo } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  LabelList
} from 'recharts';
import { treasuryStats } from '@/data/mockData';
import { intersectProjects } from '@/data/intersectData';
import StatCard from '@/components/ui/StatCard';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart as PieChartIcon, 
  Activity, 
  Briefcase, 
  Users, 
  Wallet, 
  Globe 
} from 'lucide-react';

const Analytics = () => {
  const { t } = useLanguage();
  const COLORS = ['hsl(var(--cardano-blue))', '#1BAAD6', '#FF9F43', '#28C76F', '#EA5455', '#7367F0'];

  // Calculate project status distribution
  const statusCounts = intersectProjects.reduce((acc: any, project) => {
    acc[project.status] = (acc[project.status] || 0) + 1;
    return acc;
  }, {});

  const statusData = Object.keys(statusCounts).map(status => ({
    name: status,
    value: statusCounts[status]
  }));

  // Calculate top vendors by budget
  const vendorSpending = intersectProjects.reduce((acc: any, project) => {
    acc[project.vendor] = (acc[project.vendor] || 0) + project.totalAmount;
    return acc;
  }, {});

  const vendorData = Object.keys(vendorSpending)
    .map(vendor => ({
      name: vendor.length > 25 ? vendor.substring(0, 25) + '...' : vendor,
      fullName: vendor,
      amount: vendorSpending[vendor],
      percent: (vendorSpending[vendor] / 345531529) * 100
    }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 8);

  // Calculate top projects by budget
  const topProjectsData = [...intersectProjects]
    .sort((a, b) => b.totalAmount - a.totalAmount)
    .slice(0, 8)
    .map(project => ({
      name: project.projectName.length > 25 ? project.projectName.substring(0, 25) + '...' : project.projectName,
      fullName: project.projectName,
      amount: project.totalAmount,
      percent: (project.totalAmount / 345531529) * 100
    }));

  // Cardano Treasury Spend data (USD Millions)
  const treasurySpendData = [
    { year: '2021', spend: 45 },
    { year: '2022', spend: 60 },
    { year: '2023', spend: 80 },
    { year: '2024', spend: 128 },
    { year: '2025*', spend: 250 },
  ];

  // ADA Average Price data (USD)
  const adaPriceData = [
    { year: '2021', price: 1.38 },
    { year: '2022', price: 0.78 },
    { year: '2023', price: 0.42 },
    { year: '2024', price: 0.56 },
    { year: '2025**', price: 0.62 },
  ];

  // Quick stats calculations
  const totalProjects = intersectProjects.length;
  const uniqueVendors = new Set(intersectProjects.map(p => p.vendor)).size;
  const totalAllocated = 345531529;
  const totalSpent = intersectProjects.reduce((sum, p) => sum + p.amountSpent, 0) + 168789504;
  const avgBudget = intersectProjects.reduce((sum, p) => sum + p.totalAmount, 0) / totalProjects;
  const allocationPercent = (totalSpent / totalAllocated) * 100;

  // Aggregate aggregate payments data
  const chartData = useMemo(() => {
    const monthlyData: Record<string, { amount: number }> = {};
    
    intersectProjects.forEach(project => {
      if (project.milestones) {
        project.milestones.forEach(milestone => {
          if (milestone.status.toLowerCase() === 'withdrawn') {
            const date = new Date(milestone.unlockDate);
            if (!isNaN(date.getTime())) {
              const monthYear = date.toLocaleString('en-US', { month: 'short', year: '2-digit' });
              if (!monthlyData[monthYear]) {
                monthlyData[monthYear] = { amount: 0 };
              }
              monthlyData[monthYear].amount += milestone.amount;
            }
          }
        });
      }
    });

    return Object.keys(monthlyData)
      .map(key => ({
        date: key,
        amount: monthlyData[key].amount,
        timestamp: new Date(key).getTime()
      }))
      .sort((a, b) => a.timestamp - b.timestamp);
  }, []);

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t('analytics.title')}</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl">{t('analytics.description')}</p>
      </div>

      {/* Quick Stats Grid - Cleaner and more consistent */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
        <StatCard 
          title={t('stats.total_projects')} 
          value={totalProjects} 
          icon={<Briefcase className="h-4 w-4 text-cardano-blue" />} 
          className="dark:bg-[#0f172a]/40 dark:border-white/5 backdrop-blur-md" 
        />
        <StatCard 
          title={t('stats.total_vendors')} 
          value={uniqueVendors} 
          icon={<Users className="h-4 w-4 text-cardano-teal" />} 
          className="dark:bg-[#0f172a]/40 dark:border-white/5 backdrop-blur-md" 
        />
        <StatCard 
          title={t('stats.intersect_budget')} 
          value="₳345,531,529" 
          usdValue="214,229,548"
          icon={<Wallet className="h-4 w-4 text-cardano-blue" />} 
          className="dark:bg-[#0f172a]/40 dark:border-white/5 backdrop-blur-md" 
          valueClassName="text-cardano-blue dark:text-blue-400"
          tooltipText={t('project.usd_conversion_tooltip')}
        />
        <StatCard 
          title={t('stats.total_spent')} 
          value="₳343,741,204" 
          usdValue="213,119,546"
          change="99.48%"
          positive={true}
          icon={<Globe className="h-4 w-4 text-orange-500" />} 
          className="dark:bg-[#0f172a]/40 dark:border-white/5 backdrop-blur-md" 
          valueClassName="text-orange-600 dark:text-orange-500"
          tooltipText={t('project.usd_conversion_tooltip')}
        />
        <StatCard 
          title={t('stats.remaining_budget')} 
          value="₳1,790,324" 
          usdValue="1,110,001"
          change="0.52%"
          positive={false}
          icon={<TrendingUp className="h-4 w-4 text-green-500" />} 
          className="dark:bg-[#0f172a]/40 dark:border-white/5 backdrop-blur-md" 
          valueClassName="text-green-600 dark:text-green-500"
          tooltipText={t('project.usd_conversion_tooltip')}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Category Distribution */}
        <Card className="cardano-card transition-all hover:shadow-xl group">
          <CardHeader className="border-b border-cardano-teal/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cardano-blue/10 dark:bg-cardano-blue/20 rounded-lg">
                <PieChartIcon className="h-6 w-6 text-cardano-blue" />
              </div>
              <div>
                <CardTitle className="text-xl font-black">{t('analytics.funding_category')}</CardTitle>
                <CardDescription className="font-medium">{t('analytics.funding_category_desc')}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie 
                    data={treasuryStats.categoryDistribution} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={100} 
                    fill="#8884d8" 
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {treasuryStats.categoryDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6', borderRadius: '8px', padding: '10px 14px' }}
                    itemStyle={{ color: '#f3f4f6' }}
                    labelStyle={{ color: '#9ca3af', fontWeight: 700, marginBottom: 4 }}
                    formatter={(value: number) => `${value}%`} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Projects by Budget */}
        <Card className="cardano-card transition-all hover:shadow-xl">
          <CardHeader className="border-b border-cardano-teal/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cardano-teal/10 dark:bg-cardano-teal/20 rounded-lg">
                <BarChart3 className="h-6 w-6 text-cardano-teal" />
              </div>
              <div>
                <CardTitle className="text-xl font-black">{t('analytics.top_projects')}</CardTitle>
                <CardDescription className="font-medium">{t('analytics.top_projects_desc')}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={topProjectsData}>
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
                    cursor={{fill: 'rgba(27,170,214,0.08)'}}
                  />
                  <Bar 
                    dataKey="amount" 
                    fill="#1BAAD6" 
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
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

      {/* Global Payments Over Time Chart */}
      <Card className="cardano-card transition-all hover:shadow-xl mb-12">
        <CardHeader className="border-b border-cardano-teal/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cardano-blue/10 dark:bg-cardano-blue/20 rounded-lg">
              <Activity className="h-6 w-6 text-cardano-blue" />
            </div>
            <div>
              <CardTitle className="text-xl font-black">{t('analytics.payments_over_time')}</CardTitle>
              <CardDescription className="font-medium">{t('analytics.payments_over_time_desc')}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--cardano-blue))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--cardano-blue))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-gray-100 dark:text-gray-700" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'currentColor', fontSize: 12, fontWeight: 600 }} 
                  className="text-gray-400 dark:text-gray-500"
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'currentColor', fontSize: 12 }} 
                  className="text-gray-400 dark:text-gray-500"
                  tickFormatter={(v) => `₳${v >= 1000000 ? (v/1000000).toFixed(1) + 'M' : (v/1000).toFixed(0) + 'k'}`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6', borderRadius: '12px', padding: '12px 16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  itemStyle={{ color: '#f3f4f6', fontWeight: 600 }}
                  labelStyle={{ color: '#9ca3af', fontWeight: 700, marginBottom: 6 }}
                  formatter={(value: number) => [`₳${value.toLocaleString()}`, t('analytics.amount_spent')]}
                />
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="hsl(var(--cardano-blue))" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorAmount)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Cardano Treasury Spend & ADA Price Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Treasury Spend (USD) */}
        <Card className="cardano-card transition-all hover:shadow-xl overflow-hidden border-none">
          <CardHeader className="bg-cardano-blue py-6">
            <CardTitle className="text-white text-center text-xl font-black tracking-tight">
              {t('analytics.treasury_spend_title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase mb-4">{t('analytics.usd_millions')}</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={treasurySpendData} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-gray-200 dark:text-gray-700" />
                  <XAxis 
                    dataKey="year" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'currentColor', fontWeight: 700, fontSize: 13 }} 
                    className="text-gray-600 dark:text-gray-400" 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'currentColor', fontSize: 12 }} 
                    className="text-gray-400 dark:text-gray-500"
                    tickFormatter={(v) => `$${v}M`}
                    domain={[0, 300]}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6', borderRadius: '8px', padding: '10px 14px' }}
                    itemStyle={{ color: '#f3f4f6' }}
                    labelStyle={{ color: '#9ca3af', fontWeight: 700, marginBottom: 4 }}
                    formatter={(value: number) => [`$${value}M`, t('analytics.treasury_spend_title')]}
                    cursor={{ fill: 'rgba(0,51,173,0.08)' }}
                  />
                  <Bar 
                    dataKey="spend" 
                    fill="hsl(var(--cardano-blue))" 
                    radius={[4, 4, 0, 0]}
                    label={({ x, y, width, value, index }: any) => (
                      <text x={x + width / 2} y={y - 8} textAnchor="middle" className="fill-gray-800 dark:fill-gray-200" fontSize={12} fontWeight={800}>
                        ${value}M{index === 4 ? '*' : ''}
                      </text>
                    )}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex items-start gap-2">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 text-[10px] text-blue-700 dark:text-blue-400 font-bold px-2.5 py-1.5 rounded-lg">
                2025 cap: 350M ADA (~$250M+ at ~$0.70)
              </div>
            </div>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 italic">{t('analytics.treasury_spend_note')}</p>
          </CardContent>
        </Card>

        {/* ADA Price (USD) */}
        <Card className="cardano-card transition-all hover:shadow-xl overflow-hidden border-none">
          <CardHeader className="bg-cardano-blue py-6">
            <CardTitle className="text-white text-center text-xl font-black tracking-tight">
              {t('analytics.ada_price_title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase mb-4">{t('analytics.usd_label')}</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={adaPriceData} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-gray-200 dark:text-gray-700" />
                  <XAxis 
                    dataKey="year" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'currentColor', fontWeight: 700, fontSize: 13 }} 
                    className="text-gray-600 dark:text-gray-400" 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'currentColor', fontSize: 12 }} 
                    className="text-gray-400 dark:text-gray-500"
                    tickFormatter={(v) => `$${v.toFixed(2)}`}
                    domain={[0, 3]}
                    ticks={[0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0]}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6', borderRadius: '8px', padding: '10px 14px' }}
                    itemStyle={{ color: '#f3f4f6' }}
                    labelStyle={{ color: '#9ca3af', fontWeight: 700, marginBottom: 4 }}
                    formatter={(value: number) => [`$${value.toFixed(2)}`, t('analytics.ada_price_title')]}
                    cursor={{ fill: 'rgba(27,170,214,0.08)' }}
                  />
                  <Bar 
                    dataKey="price" 
                    fill="#1BAAD6" 
                    radius={[4, 4, 0, 0]}
                    label={({ x, y, width, value, index }: any) => (
                      <g>
                        <text x={x + width / 2} y={y - 8} textAnchor="middle" className="fill-[#1BAAD6]" fontSize={12} fontWeight={800}>
                          ${value.toFixed(2)}
                        </text>
                        {index === 4 && (
                          <text x={x + width / 2} y={y - 22} textAnchor="middle" className="fill-[#1BAAD6]" fontSize={9} fontWeight={700}>
                            ({t('analytics.ytd')})
                          </text>
                        )}
                      </g>
                    )}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 italic">{t('analytics.ada_price_note')}</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Analytics;
