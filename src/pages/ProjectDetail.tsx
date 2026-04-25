import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Clock,
  AlertCircle,
  Wallet,
  Briefcase,
  FileText,
  Building,
  DollarSign,
  Calendar,
  Activity
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { intersectProjects } from '@/data/intersectData';
import { getVendorProfile } from '@/data/vendorProfiles';

const getStatusIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed':
      return CheckCircle;
    case 'paused':
      return Clock;
    default:
      return Briefcase;
  }
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'paused':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    default:
      return 'bg-blue-100 text-blue-800 border-blue-200';
  }
};

const ProjectDetail = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const project = intersectProjects.find(p => p.id === id);

  const paymentDates = useMemo(() => {
    if (!project || !project.milestones || project.milestones.length === 0)
      return { start: 'N/A', end: 'N/A' };

    return {
      start: project.milestones[0].unlockDate,
      end: project.milestones[project.milestones.length - 1].unlockDate
    };
  }, [project]);

  if (!project) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-20">
          <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold mb-2 dark:text-white">{t('project.not_found')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{t('project.not_found_desc')}</p>
          <Button asChild>
            <Link to="/projects">{t('project.back_to_projects')}</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const StatusIcon = getStatusIcon(project.status);
  const spentPercentage = (project.amountSpent / project.totalAmount) * 100;

  // Aggregate project chart data
  const chartData = useMemo(() => {
    if (!project || !project.milestones) return [];

    const monthlyData: Record<string, { milestones: number, payments: number }> = {};
    
    project.milestones.forEach(milestone => {
      const date = new Date(milestone.unlockDate);
      if (!isNaN(date.getTime())) {
        const monthYear = date.toLocaleString('en-US', { month: 'short', year: '2-digit' });
        if (!monthlyData[monthYear]) {
          monthlyData[monthYear] = { milestones: 0, payments: 0 };
        }
        monthlyData[monthYear].milestones += milestone.amount;
        if (milestone.status.toLowerCase() === 'withdrawn') {
          monthlyData[monthYear].payments += milestone.amount;
        }
      }
    });

    return Object.keys(monthlyData)
      .map(key => ({
        date: key,
        milestones: monthlyData[key].milestones,
        payments: monthlyData[key].payments,
        timestamp: new Date(key).getTime()
      }))
      .sort((a, b) => a.timestamp - b.timestamp);
  }, [project]);

  return (
    <Layout>
      <div className="mb-8">
        <Link to="/projects" className="inline-flex items-center text-sm text-cardano-blue hover:underline mb-6 font-medium">
          <ArrowLeft className="h-4 w-4 mr-1" /> {t('project.back_to_projects')}
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 dark:text-gray-300">{t('fund.intersect_contracts')}</Badge>
              <Badge className={`${getStatusColor(project.status)} border shadow-sm`}>
                <StatusIcon className="h-3.5 w-3.5 mr-1" />
                {project.status}
              </Badge>
              <span className="text-xs text-gray-400 dark:text-gray-500 font-mono ml-2 px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">ID: {project.id}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight tracking-tight mb-2">
              {project.projectName}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 flex items-center font-medium">
              {t('project.vendor_label')}:
              <Link to={`/vendors/${encodeURIComponent(project.vendor)}`} className="text-cardano-blue hover:underline ml-1.5 font-bold flex items-center">
                {project.vendor}
                <ExternalLink className="h-3 w-3 ml-1 opacity-50" />
              </Link>
            </p>
          </div>

          <div className="flex gap-2 shrink-0">
            <Button asChild variant="outline" className="shadow-sm border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-300">
              <a href={`https://treasury.sundae.fi/instances/9e65e4ed7d6fd86fc4827d2b45da6d2c601fb920e8bfd794b8ecc619/project/${project.id}`} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                {t('project.sundae_explorer')}
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description Card */}
          <Card className="border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden bg-white dark:bg-gray-800/40">
            <CardHeader className="bg-gray-50/50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-lg font-bold flex items-center gap-2 dark:text-white">
                <FileText className="h-5 w-5 text-cardano-blue" />
                {t('project.overview')}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
                {project.description || t('project.no_description')}
              </p>
            </CardContent>
          </Card>

          {/* Progress Card */}
          <Card className="border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-800/40">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-bold dark:text-white">{t('project.execution_progress')}</CardTitle>
                <span className="text-2xl font-black text-cardano-blue">{spentPercentage.toFixed(1)}%</span>
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="w-full bg-gray-100 dark:bg-gray-900 rounded-full h-5 overflow-hidden shadow-inner border border-gray-200 dark:border-gray-700 p-0.5">
                <div
                  className="bg-gradient-to-r from-cardano-blue to-blue-400 h-full rounded-full transition-all duration-1000 ease-in-out relative shadow-sm"
                  style={{ width: `${spentPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
              </div>
              <div className="flex justify-between mt-3 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest px-1">
                <span>{t('project.funds_allocated')}</span>
                <span>{t('project.funds_distributed')}</span>
              </div>
            </CardContent>
          </Card>

          {/* Project Timeline Chart */}
          {chartData.length > 0 && (
            <Card className="border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-800/40 mb-8 transition-colors">
              <CardHeader className="border-b border-gray-100 dark:border-gray-700 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cardano-blue/10 dark:bg-cardano-blue/20 rounded-lg">
                    <Activity className="h-5 w-5 text-cardano-blue" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold dark:text-white">{t('projects.chart_title')}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorMilestones" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--cardano-blue))" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="hsl(var(--cardano-blue))" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPayments" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
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
                        tickFormatter={(v) => `₳${v >= 1000000 ? (v/1000000).toFixed(1) + 'M' : (v/1000).toFixed(0) + 'k'}`}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6', borderRadius: '8px', padding: '10px 14px' }}
                        itemStyle={{ color: '#f3f4f6' }}
                        labelStyle={{ color: '#9ca3af', fontWeight: 700, marginBottom: 4 }}
                        formatter={(value: number) => [`₳${value.toLocaleString()}`, '']}
                      />
                      <Legend iconType="circle" />
                      <Area 
                        type="monotone" 
                        dataKey="milestones" 
                        name={t('projects.milestones_label')}
                        stroke="hsl(var(--cardano-blue))" 
                        strokeWidth={2}
                        fillOpacity={1} 
                        fill="url(#colorMilestones)" 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="payments" 
                        name={t('projects.payments_label')}
                        stroke="#22c55e" 
                        strokeWidth={2}
                        fillOpacity={1} 
                        fill="url(#colorPayments)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Milestones List */}
          {project.milestones && project.milestones.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">{t('project.milestones')}</h3>
                <Badge variant="outline" className="bg-white dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">{t('project.phases').replace('{count}', project.milestones.length.toString())}</Badge>
              </div>

              <div className="space-y-6 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-100 dark:before:bg-gray-800">
                {project.milestones.map((milestone, index) => (
                  <Card key={milestone.id} className={`border-gray-200 dark:border-gray-800 transition-all hover:shadow-lg relative overflow-hidden ${milestone.status.toLowerCase() === 'withdrawn' ? 'bg-white dark:bg-gray-800/60' : 'bg-gray-50/50 dark:bg-gray-900/40 grayscale-[0.5]'
                    }`}>
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${milestone.status.toLowerCase() === 'withdrawn' ? 'bg-green-500' : 'bg-gray-300'
                      }`} />

                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-5">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{milestone.id}</span>
                            <Badge variant="outline" className={
                              milestone.status.toLowerCase() === 'withdrawn'
                                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-900/50 font-bold'
                                : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-bold'
                            }>
                              {milestone.status}
                            </Badge>
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{milestone.title}</h4>
                        </div>
                        <div className="text-right shrink-0 bg-gray-50 dark:bg-gray-900/50 px-4 py-2 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                          <p className="text-xl font-black text-gray-900 dark:text-white">₳{milestone.amount.toLocaleString()}</p>
                          <div className="flex items-center justify-end text-[10px] text-gray-400 dark:text-gray-500 font-black uppercase tracking-tighter mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            {milestone.unlockDate}
                          </div>
                        </div>
                      </div>

                      {milestone.description && (
                        <div className="bg-gray-50/80 dark:bg-gray-900/80 p-4 rounded-xl border border-gray-100 dark:border-gray-700 mb-6 text-gray-600 dark:text-gray-400 leading-relaxed text-sm whitespace-pre-wrap">
                          {milestone.description}
                        </div>
                      )}

                      {milestone.evidence && (
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-5 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                              <FileText className="h-4 w-4 text-cardano-blue" />
                            </div>
                            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{milestone.evidence.title}</span>
                          </div>
                          <div className="flex gap-2 w-full sm:w-auto">
                            {milestone.evidence.transactionHash && (
                              <Button asChild variant="ghost" size="sm" className="h-9 px-3 text-xs font-bold text-gray-500 hover:text-cardano-blue">
                                <a href={milestone.evidence.transactionLink} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                                  TX Hash
                                </a>
                              </Button>
                            )}
                            <Button asChild variant="default" size="sm" className="h-9 px-4 font-bold bg-cardano-blue hover:bg-cardano-blue/90 shadow-md text-white">
                              <a href={milestone.evidence.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                                {t('project.view_evidence')}
                              </a>
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="space-y-6">
          <Card className="border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden sticky top-24 ring-1 ring-black/[0.03] dark:ring-white/[0.03] bg-white dark:bg-gray-800">
            <CardHeader className="bg-gray-900 text-white pb-6 pt-7">
              <div className="flex items-center gap-2 opacity-50 mb-1">
                <Briefcase className="h-3 w-3" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">{t('project.metrics')}</span>
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">{t('project.financial_summary')}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {/* Total Budget */}
                <div className="p-6 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50">
                  <p className="text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">{t('project.total_budget')}</p>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">₳{project.totalAmount.toLocaleString()}</span>
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400 mt-1 opacity-80">
                      ≈ ${ (project.totalAmount * 0.62).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) } USD
                    </span>
                  </div>
                  <div className="mt-3 flex items-center text-[10px] font-black text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 w-fit px-2.5 py-1.5 rounded-lg border border-green-100 dark:border-green-900/30 uppercase">
                    <DollarSign className="h-3 w-3 mr-1.5" />
                    {t('project.currency_label')}: ADA
                  </div>
                </div>

                {/* Vendor Link */}
                <div className="p-6">
                  <p className="text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">{t('project.vendor_label')}</p>
                  <Link to={`/vendors/${encodeURIComponent(project.vendor)}`} className="flex items-center gap-4 group p-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm hover:border-cardano-blue hover:shadow-md transition-all">
                    {/* Vendor logo or fallback icon */}
                    {(() => {
                      const p = getVendorProfile(project.vendor);
                      return p?.logo ? (
                        <img
                          src={p.logo}
                          alt={`${project.vendor} logo`}
                          className="w-12 h-12 rounded-xl object-cover border border-gray-100 dark:border-gray-700 shadow-sm shrink-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            const next = (e.target as HTMLImageElement).nextElementSibling as HTMLElement | null;
                            if (next) next.style.display = 'flex';
                          }}
                        />
                      ) : null;
                    })()}
                    <div className={`bg-cardano-blue/10 p-3 rounded-xl text-cardano-blue group-hover:bg-cardano-blue group-hover:text-white transition-colors ${getVendorProfile(project.vendor)?.logo ? 'hidden' : ''}`}>
                      <Building className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-bold text-gray-900 dark:text-white truncate group-hover:text-cardano-blue transition-colors">
                        {project.vendor}
                      </p>
                      <p className="text-[10px] font-black text-cardano-blue uppercase tracking-tighter mt-0.5">{t('project.official_partner')}</p>
                    </div>
                  </Link>
                </div>

                {/* Timeline */}
                <div className="p-6">
                  <p className="text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-5">{t('project.payment_timeline')}</p>
                  <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100 dark:before:bg-gray-700">
                    <div className="flex gap-4 relative">
                      <div className="w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 bg-cardano-blue shadow-sm z-10" />
                      <div>
                        <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-tighter">{t('project.payment_start')}</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{paymentDates.start}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 relative">
                      <div className="w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-600 shadow-sm z-10" />
                      <div>
                        <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-tighter">{t('project.payment_end')}</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{paymentDates.end}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Details */}
                <div className="p-6">
                  <p className="text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">{t('project.technical_details')}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">{t('project.instance_id')}</p>
                      <p className="text-[11px] font-mono text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 p-2 rounded border border-gray-100 dark:border-gray-700 break-all">
                        9e65e4...ecc9
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">{t('project.script_hash')}</p>
                      <p className="text-[11px] font-mono text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 p-2 rounded border border-gray-100 dark:border-gray-700 break-all">
                        addr1w8...4v6q (Treasury Contract)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contract Source */}
                <div className="p-6 bg-gray-50/80 dark:bg-gray-900/30">
                  <p className="text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">{t('project.treasury_source')}</p>
                  <Link to="/" className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:opacity-90 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden shrink-0">
                      <img src="/assets/e4da4614-7cea-4f9c-853c-3f019f7932ca.png" className="w-7 h-7 object-contain brightness-0 invert" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-900 dark:text-white">Intersect MBO</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-tighter">Contract Instance 1</p>
                    </div>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
