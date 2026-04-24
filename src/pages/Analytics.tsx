
import React from 'react';
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
  Area
} from 'recharts';
import { treasuryStats, fundRounds } from '@/data/mockData';
import { intersectProjects } from '@/data/intersectData';
import { BarChart3, TrendingUp, PieChart as PieChartIcon, Activity } from 'lucide-react';

const Analytics = () => {
  const { t } = useLanguage();
  const COLORS = ['#0033AD', '#1BAAD6', '#FF9F43', '#28C76F', '#EA5455', '#7367F0'];

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
      name: vendor,
      amount: vendorSpending[vendor]
    }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 8);

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

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t('analytics.title')}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t('analytics.description')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Category Distribution */}
        <Card className="shadow-sm border-gray-100 dark:border-gray-800 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-2">
              <PieChartIcon className="h-5 w-5 text-cardano-blue" />
              <CardTitle>{t('analytics.funding_category')}</CardTitle>
            </div>
            <CardDescription>{t('analytics.funding_category_desc')}</CardDescription>
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
                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
                    itemStyle={{ color: 'var(--foreground)' }}
                    formatter={(value: number) => `${value}%`} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Historical Fund Rounds */}
        <Card className="shadow-sm border-gray-100 dark:border-gray-800 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-cardano-teal" />
              <CardTitle>{t('analytics.historical_rounds')}</CardTitle>
            </div>
            <CardDescription>{t('analytics.historical_rounds_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fundRounds}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-gray-200 dark:text-gray-700" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'currentColor'}} className="text-gray-400 dark:text-gray-500" />
                  <YAxis yAxisId="left" orientation="left" stroke="#0033AD" axisLine={false} tickLine={false} tick={{fill: '#0033AD'}} />
                  <YAxis yAxisId="right" orientation="right" stroke="#1BAAD6" axisLine={false} tickLine={false} tick={{fill: '#1BAAD6'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
                    itemStyle={{ color: 'var(--foreground)' }}
                  />
                  <Bar yAxisId="left" dataKey="totalBudget" name={`${t('projects.budget_label')} (ADA)`} fill="#0033AD" radius={[4, 4, 0, 0]} />
                  <Bar yAxisId="right" dataKey="proposals" name={t('analytics.proposals')} fill="#1BAAD6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Project Status Breakdown */}
        <Card className="shadow-sm border-gray-100 dark:border-gray-800 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-orange-500" />
              <CardTitle>{t('analytics.status_breakdown')}</CardTitle>
            </div>
            <CardDescription>{t('analytics.status_breakdown_desc')}</CardDescription>
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
                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
                    itemStyle={{ color: 'var(--foreground)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Vendors by Budget */}
        <Card className="shadow-sm border-gray-100 dark:border-gray-800 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <CardTitle className="dark:text-white">{t('analytics.top_vendors')}</CardTitle>
            </div>
            <CardDescription className="dark:text-gray-400">{t('analytics.top_vendors_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={vendorData}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="currentColor" className="text-gray-200 dark:text-gray-700" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={100} tick={{fill: 'currentColor'}} className="text-gray-400 dark:text-gray-500" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
                    itemStyle={{ color: 'var(--foreground)' }}
                    formatter={(value: number) => [`₳${value.toLocaleString()}`, t('projects.budget_label')]}
                    cursor={{fill: 'transparent'}}
                  />
                  <Bar dataKey="amount" fill="#7367F0" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cardano Treasury Spend & ADA Price Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Treasury Spend (USD) */}
        <Card className="shadow-sm border-gray-100 dark:border-gray-800 transition-colors overflow-hidden">
          <CardHeader className="bg-cardano-blue pb-3">
            <CardTitle className="text-white text-center text-lg font-bold tracking-wide">
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
                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)', borderRadius: '8px' }}
                    itemStyle={{ color: 'var(--foreground)' }}
                    formatter={(value: number) => [`$${value}M`, t('analytics.treasury_spend_title')]}
                  />
                  <Bar 
                    dataKey="spend" 
                    fill="#0033AD" 
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
        <Card className="shadow-sm border-gray-100 dark:border-gray-800 transition-colors overflow-hidden">
          <CardHeader className="bg-cardano-blue pb-3">
            <CardTitle className="text-white text-center text-lg font-bold tracking-wide">
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
                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)', borderRadius: '8px' }}
                    itemStyle={{ color: 'var(--foreground)' }}
                    formatter={(value: number) => [`$${value.toFixed(2)}`, t('analytics.ada_price_title')]}
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
