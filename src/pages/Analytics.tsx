
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
              <CardTitle>{t('analytics.top_vendors')}</CardTitle>
            </div>
            <CardDescription>{t('analytics.top_vendors_desc')}</CardDescription>
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
    </Layout>
  );
};

export default Analytics;
