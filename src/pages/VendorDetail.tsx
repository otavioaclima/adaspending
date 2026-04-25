import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building, Wallet, Info, Globe, Mail, MessageCircle, Github, Twitter, ExternalLink, Activity, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import Layout from '@/components/layout/Layout';
import { intersectProjects } from '@/data/intersectData';
import { getVendorProfile } from '@/data/vendorProfiles';
import { useLanguage } from '@/contexts/LanguageContext';
import VendorAccountingTable from '@/components/vendors/VendorAccountingTable';

const VendorDetail = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const vendorName = decodeURIComponent(id || '');

  // Find all projects for this vendor
  const vendorProjects = useMemo(() => {
    return intersectProjects.filter(p => p.vendor === vendorName);
  }, [vendorName]);

  const [views, setViews] = useState(0);

  useEffect(() => {
    const storageKey = `vendor_views_${vendorName.replace(/\s+/g, '_')}`;
    const storedViews = localStorage.getItem(storageKey);
    
    let currentViews = 0;
    if (storedViews) {
      currentViews = parseInt(storedViews, 10);
    } else {
      // Generate a realistic seed based on vendor name
      let seed = 0;
      for (let i = 0; i < vendorName.length; i++) {
        seed += vendorName.charCodeAt(i);
      }
      currentViews = (seed % 500) + 50;
    }
    
    const nextViews = currentViews + 1;
    localStorage.setItem(storageKey, nextViews.toString());
    setViews(nextViews);
  }, [vendorName]);

  // Get vendor profile (logo, links, description)
  const profile = useMemo(() => getVendorProfile(vendorName), [vendorName]);

  // Aggregate stats
  const stats = useMemo(() => {
    if (vendorProjects.length === 0) return null;
    return {
      totalFunded: vendorProjects.reduce((acc, p) => acc + p.totalAmount, 0),
      amountSpent: vendorProjects.reduce((acc, p) => acc + p.amountSpent, 0),
      projectCount: vendorProjects.length,
      completedCount: vendorProjects.filter(p => p.status.toLowerCase() === 'completed').length,
    };
  }, [vendorProjects]);

  // Aggregate transaction data over time
  const chartData = useMemo(() => {
    if (vendorProjects.length === 0) return [];

    const monthlyData: Record<string, number> = {};
    
    vendorProjects.forEach(project => {
      if (project.milestones) {
        project.milestones.forEach(milestone => {
          if (milestone.status.toLowerCase() === 'withdrawn') {
            const date = new Date(milestone.unlockDate);
            if (!isNaN(date.getTime())) {
              const monthYear = date.toLocaleString('en-US', { month: 'short', year: '2-digit' });
              monthlyData[monthYear] = (monthlyData[monthYear] || 0) + milestone.amount;
            }
          }
        });
      }
    });

    // Convert to array and sort by date
    const sortedData = Object.keys(monthlyData)
      .map(key => ({
        date: key,
        amount: monthlyData[key],
        timestamp: new Date(key).getTime()
      }))
      .sort((a, b) => a.timestamp - b.timestamp);

    return sortedData;
  }, [vendorProjects]);

  if (vendorProjects.length === 0 || !stats) {
    return (
      <Layout>
        <div className="text-center py-20">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
            <Building className="h-8 w-8 text-gray-400 dark:text-gray-500" />
          </div>
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('vendor_detail.not_found')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{t('vendor_detail.not_found_desc').replace('{name}', vendorName)}</p>
          <Button asChild>
            <Link to="/vendors">{t('vendor_detail.back_to_vendors')}</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const transactionRows = vendorProjects.map(project => ({
    id: project.id,
    title: project.projectName,
    fundRound: t('vendor_detail.intersect_treasury'),
    requestedAmount: project.totalAmount,
    fundedAmount: project.totalAmount,
    spentAmount: project.amountSpent,
    status: project.status,
    updatedAt: new Date().toISOString(),
  }));

  const hasLinks = profile && (profile.website || profile.email || profile.discord || profile.github || profile.twitter);

  return (
    <Layout>
      <div className="mb-6">
        <Link to="/vendors" className="inline-flex items-center text-sm text-cardano-blue dark:text-blue-300 hover:underline mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" /> {t('vendor_detail.back_to_vendors')}
        </Link>

        {/* Vendor Header Card */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
          <div className="flex items-center gap-4">
            {/* Logo or fallback icon */}
            {profile?.logo ? (
              <img
                src={profile.logo}
                alt={`${vendorName} logo`}
                className="w-16 h-16 rounded-2xl object-cover border border-gray-100 dark:border-gray-700 shadow-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const next = (e.target as HTMLImageElement).nextElementSibling as HTMLElement | null;
                  if (next) next.style.display = 'flex';
                }}
              />
            ) : null}
            <div className={`bg-cardano-blue/10 dark:bg-cardano-blue/20 p-4 rounded-2xl text-cardano-blue dark:text-blue-300 ${profile?.logo ? 'hidden' : 'flex'}`}>
              <Building className="h-8 w-8" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-900/50">
                  {t('vendor_detail.official_vendor')}
                </Badge>
              </div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{vendorName}</h1>
                <div className="flex items-center text-gray-400 dark:text-gray-500 text-xs mt-1">
                  <Eye className="h-3.5 w-3.5 mr-1" />
                  <span>{views.toLocaleString()} {t('project.views')}</span>
                </div>
              </div>
              {profile?.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-lg">{profile.description}</p>
              )}
            </div>
          </div>

          {/* Quick action buttons */}
          <div className="flex flex-wrap gap-2">
            {profile?.website && (
              <a href={profile.website} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" /> {t('vendor_detail.website')} <ExternalLink className="h-3 w-3 opacity-50" />
                </Button>
              </a>
            )}
            {profile?.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="h-4 w-4" /> {t('vendor_detail.github')} <ExternalLink className="h-3 w-3 opacity-50" />
                </Button>
              </a>
            )}
            {profile?.twitter && (
              <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Twitter className="h-4 w-4" /> {t('vendor_detail.twitter')} <ExternalLink className="h-3 w-3 opacity-50" />
                </Button>
              </a>
            )}
            {profile?.discord && (
              <a href={profile.discord} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <MessageCircle className="h-4 w-4" /> {t('vendor_detail.discord')} <ExternalLink className="h-3 w-3 opacity-50" />
                </Button>
              </a>
            )}
            {profile?.email && (
              <a href={`mailto:${profile.email}`}>
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="h-4 w-4" /> {t('vendor_detail.contact_vendor')}
                </Button>
              </a>
            )}
            {!hasLinks && (
              <Button variant="outline" size="sm">{t('vendor_detail.contact_vendor')}</Button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-cardano-blue" />
              {t('vendor_detail.vendor_profile')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('vendor_detail.vendor_desc')
                .replace('{name}', vendorName)
                .replace('{count}', stats.projectCount.toString())
                .replace('{total}', stats.totalFunded.toLocaleString())}
            </p>
          </div>

          {/* Transactions Over Time Chart */}
          {chartData.length > 0 && (
            <Card className="border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-800/40 transition-colors">
              <CardHeader className="border-b border-gray-100 dark:border-gray-700 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cardano-blue/10 dark:bg-cardano-blue/20 rounded-lg">
                    <Activity className="h-5 w-5 text-cardano-blue" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold dark:text-white">{t('vendor_detail.transactions_over_time')}</CardTitle>
                    <CardDescription className="text-xs">{t('vendor_detail.transactions_over_time_desc')}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-72">
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
                        tick={{ fill: 'currentColor', fontSize: 11 }} 
                        className="text-gray-400 dark:text-gray-500"
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: 'currentColor', fontSize: 11 }} 
                        className="text-gray-400 dark:text-gray-500"
                        tickFormatter={(v) => `₳${v >= 1000 ? (v/1000).toFixed(0) + 'k' : v}`}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6', borderRadius: '8px', padding: '10px 14px' }}
                        itemStyle={{ color: '#f3f4f6' }}
                        labelStyle={{ color: '#9ca3af', fontWeight: 700, marginBottom: 4 }}
                        formatter={(value: number) => [`₳${value.toLocaleString()}`, t('projects.budget_label')]}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="amount" 
                        stroke="hsl(var(--cardano-blue))" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorAmount)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          )}

          <VendorAccountingTable transactionRows={transactionRows} totalFunded={stats.totalFunded} />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Financial Summary Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
            <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-6">
              {t('vendor_detail.financial_summary')}
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('vendor_detail.total_allocated')}</p>
                <div className="flex flex-col">
                  <p className="text-2xl font-bold text-cardano-blue dark:text-blue-300 flex items-center">
                    <Wallet className="h-5 w-5 mr-2" />
                    ₳{stats.totalFunded.toLocaleString()}
                  </p>
                  <p className="text-xs font-bold text-gray-400 dark:text-gray-500 ml-7 opacity-80">
                    ≈ ${ (stats.totalFunded * 0.62).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) } USD
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('vendor_detail.total_spent')}</p>
                <div className="flex flex-col">
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-500">
                    ₳{stats.amountSpent.toLocaleString()}
                  </p>
                  <p className="text-xs font-bold text-gray-400 dark:text-gray-500 opacity-80">
                    ≈ ${ (stats.amountSpent * 0.62).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) } USD
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-50 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{t('vendor_detail.execution_progress')}</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {((stats.amountSpent / stats.totalFunded) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div className="bg-cardano-blue h-full" style={{ width: `${(stats.amountSpent / stats.totalFunded) * 100}%` }} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold mb-1">{t('vendor_detail.projects')}</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{stats.projectCount}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold mb-1">{t('vendor_detail.completed')}</p>
                  <p className="text-lg font-bold text-green-600 dark:text-green-500">{stats.completedCount}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          {hasLinks && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
              <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-5">
                {t('vendor_detail.contact_info')}
              </h3>
              <ul className="space-y-3">
                {profile.website && (
                  <li>
                    <a href={profile.website} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-cardano-blue dark:hover:text-blue-400 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0">
                        <Globe className="h-4 w-4 text-gray-400 group-hover:text-cardano-blue transition-colors" />
                      </div>
                      <span className="truncate">{profile.website.replace(/^https?:\/\//, '')}</span>
                    </a>
                  </li>
                )}
                {profile.email && (
                  <li>
                    <a href={`mailto:${profile.email}`}
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-cardano-blue dark:hover:text-blue-400 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0">
                        <Mail className="h-4 w-4 text-gray-400 group-hover:text-cardano-blue transition-colors" />
                      </div>
                      <span className="truncate">{profile.email}</span>
                    </a>
                  </li>
                )}
                {profile.discord && (
                  <li>
                    <a href={profile.discord} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-cardano-blue dark:hover:text-blue-400 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0">
                        <MessageCircle className="h-4 w-4 text-gray-400 group-hover:text-cardano-blue transition-colors" />
                      </div>
                      <span>{t('vendor_detail.discord')}</span>
                    </a>
                  </li>
                )}
                {profile.github && (
                  <li>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-cardano-blue dark:hover:text-blue-400 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0">
                        <Github className="h-4 w-4 text-gray-400 group-hover:text-cardano-blue transition-colors" />
                      </div>
                      <span className="truncate">{profile.github.replace('https://github.com/', '@')}</span>
                    </a>
                  </li>
                )}
                {profile.twitter && (
                  <li>
                    <a href={profile.twitter} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-cardano-blue dark:hover:text-blue-400 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0">
                        <Twitter className="h-4 w-4 text-gray-400 group-hover:text-cardano-blue transition-colors" />
                      </div>
                      <span className="truncate">{profile.twitter.replace('https://x.com/', '@')}</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default VendorDetail;
