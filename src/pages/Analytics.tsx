import { useMemo } from 'react';
import { useIntersectVendorProjects } from '@/hooks/useIntersectVendorProjects';
import { PageSkeleton } from '@/components/ui/PageSkeleton';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, LabelList,
} from 'recharts';
import StatCard from '@/components/ui/StatCard';
import { Briefcase, Users, Wallet, TrendingUp, Activity, PieChart as PieChartIcon } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getAdaPrice } from '@/services/market';

const COLORS = ['hsl(var(--cardano-blue))', '#1BAAD6', '#FF9F43', '#28C76F', '#EA5455', '#7367F0'];
const chartTooltipStyle = {
  backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6',
  borderRadius: '8px', padding: '10px 14px',
};

const Analytics = () => {
  const { t } = useLanguage();
  const { data, isLoading, isError } = useIntersectVendorProjects();
  // Keep every hook above the loading/error returns so hook order never changes.
  const { data: adaPrice = 0 } = useQuery({
    queryKey: ['adaPrice'],
    queryFn: getAdaPrice,
    refetchInterval: 60_000,
  });

  const projects = data?.projects ?? [];
  const financialSummary = data?.financialSummary;
  const totalAllocated = financialSummary?.totalAllocatedAda ?? 0;
  const withdrawn = financialSummary?.withdrawnMilestoneAda ?? 0;
  const remaining = financialSummary?.remainingMilestoneAda ?? 0;

  const { chartData, statusData, vendorData, topProjectsData } = useMemo(() => {
    const monthlyAmounts = new Map<string, { timestamp: number; amount: number }>();
    const statuses = new Map<string, number>();
    const vendors = new Map<string, number>();

    projects.forEach((project) => {
      statuses.set(project.status, (statuses.get(project.status) ?? 0) + 1);
      vendors.set(project.vendor, (vendors.get(project.vendor) ?? 0) + project.totalAmount);
      project.milestones?.forEach((milestone) => {
        if (milestone.status.toLowerCase() !== 'withdrawn') return;
        const date = new Date(milestone.withdrawalTime || milestone.unlockDate);
        if (Number.isNaN(date.getTime())) return;
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        const entry = monthlyAmounts.get(key) ?? { timestamp: date.getTime(), amount: 0 };
        entry.amount += milestone.amount;
        monthlyAmounts.set(key, entry);
      });
    });

    const truncate = (value: string, length = 25) => value.length > length ? `${value.slice(0, length)}…` : value;
    return {
      chartData: [...monthlyAmounts.entries()]
        .sort((a, b) => a[1].timestamp - b[1].timestamp)
        .map(([key, value]) => ({ date: new Date(`${key}-01T00:00:00`).toLocaleString('en-US', { month: 'short', year: '2-digit' }), amount: value.amount })),
      statusData: [...statuses].map(([name, value]) => ({ name, value })),
      vendorData: [...vendors].map(([fullName, amount]) => ({
        name: truncate(fullName), fullName, amount,
        percent: totalAllocated > 0 ? (amount / totalAllocated) * 100 : 0,
      })).sort((a, b) => b.amount - a.amount).slice(0, 8),
      topProjectsData: [...projects].sort((a, b) => b.totalAmount - a.totalAmount).slice(0, 8).map((project) => ({
        name: truncate(project.projectName), fullName: project.projectName, amount: project.totalAmount,
        percent: totalAllocated > 0 ? (project.totalAmount / totalAllocated) * 100 : 0,
      })),
    };
  }, [projects, totalAllocated]);

  const formatUSD = (adaValue: number) => adaPrice > 0
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(adaValue * adaPrice)
    : undefined;

  if (isLoading) return <PageSkeleton />;

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t('analytics.title')}</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl">{t('analytics.description')}</p>
      </div>
      {data && (data.stale || data.sync?.state === 'delayed' || data.sync?.state === 'unknown') && (
        <p className="mb-4 text-xs text-gray-500 dark:text-gray-400" role="status">
          {data.stale ? t('vendors.stale_data') : data.sync?.state === 'delayed' ? t('stats.intersect_sync_delayed').replace('{days}', ((data.sync.lagHours || 0) / 24).toFixed(1)) : t('stats.intersect_sync_unknown')}
        </p>
      )}

      {isError || !data ? (
        <Card className="cardano-card mb-10"><CardContent className="py-10 text-center text-gray-600 dark:text-gray-300">
          Analytics data is temporarily unavailable. Please try again shortly.
        </CardContent></Card>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
            <StatCard title={t('stats.total_projects')} value={projects.length} icon={<Briefcase className="h-4 w-4 text-cardano-blue" />} className="dark:bg-[#0f172a]/40 dark:border-white/5 backdrop-blur-md" />
            <StatCard title={t('stats.total_vendors')} value={new Set(projects.map((p) => p.vendor)).size} icon={<Users className="h-4 w-4 text-cardano-teal" />} className="dark:bg-[#0f172a]/40 dark:border-white/5 backdrop-blur-md" />
            <StatCard title={t('stats.intersect_budget')} value={`₳${totalAllocated.toLocaleString()}`} usdValue={formatUSD(totalAllocated)} icon={<Wallet className="h-4 w-4 text-cardano-blue" />} className="dark:bg-[#0f172a]/40 dark:border-white/5 backdrop-blur-md" valueClassName="text-cardano-blue dark:text-blue-400" tooltipText={t('project.usd_conversion_tooltip')} />
            <StatCard title={t('analytics.withdrawn_milestone_value')} value={`₳${withdrawn.toLocaleString()}`} usdValue={formatUSD(withdrawn)} change={`${totalAllocated ? (withdrawn / totalAllocated * 100).toFixed(1) : '0.0'}%`} positive icon={<TrendingUp className="h-4 w-4 text-orange-500" />} className="dark:bg-[#0f172a]/40 dark:border-white/5 backdrop-blur-md" valueClassName="text-orange-600 dark:text-orange-500" tooltipText={t('project.usd_conversion_tooltip')} />
            <StatCard title={t('analytics.remaining_milestone_value')} value={`₳${remaining.toLocaleString()}`} usdValue={formatUSD(remaining)} change={`${totalAllocated ? (remaining / totalAllocated * 100).toFixed(1) : '0.0'}%`} positive icon={<Wallet className="h-4 w-4 text-green-500" />} className="dark:bg-[#0f172a]/40 dark:border-white/5 backdrop-blur-md" valueClassName="text-green-600 dark:text-green-500" tooltipText={t('project.usd_conversion_tooltip')} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <Card className="cardano-card transition-all hover:shadow-xl">
              <CardHeader className="border-b border-cardano-teal/10 pb-4"><div className="flex items-center gap-3"><div className="p-2 bg-cardano-blue/10 dark:bg-cardano-blue/20 rounded-lg"><PieChartIcon className="h-6 w-6 text-cardano-blue" /></div><div><CardTitle className="text-xl font-black">{t('analytics.withdrawn_milestone_value')} / {t('analytics.remaining_milestone_value')}</CardTitle><CardDescription className="font-medium">{t('analytics.milestone_value_desc')}</CardDescription></div></div></CardHeader>
              <CardContent><div className="h-80"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={[{ name: t('analytics.withdrawn_milestone_value'), value: withdrawn }, { name: t('analytics.remaining_milestone_value'), value: remaining }].filter((item) => item.value > 0)} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={105} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>{[withdrawn, remaining].map((_, index) => <Cell key={index} fill={COLORS[index]} />)}</Pie><Tooltip contentStyle={chartTooltipStyle} formatter={(value: number) => `₳${value.toLocaleString()}`} /></PieChart></ResponsiveContainer></div></CardContent>
            </Card>

            <Card className="cardano-card transition-all hover:shadow-xl">
              <CardHeader className="border-b border-cardano-teal/10 pb-4"><div className="flex items-center gap-3"><div className="p-2 bg-cardano-teal/10 dark:bg-cardano-teal/20 rounded-lg"><Activity className="h-6 w-6 text-cardano-teal" /></div><div><CardTitle className="text-xl font-black">{t('analytics.top_projects')}</CardTitle><CardDescription className="font-medium">Current Intersect project allocations</CardDescription></div></div></CardHeader>
              <CardContent><div className="h-80"><ResponsiveContainer width="100%" height="100%"><BarChart layout="vertical" data={topProjectsData}><CartesianGrid strokeDasharray="3 3" horizontal={false} /><XAxis type="number" hide /><YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={150} tick={{ fill: 'currentColor', fontSize: 11 }} /><Tooltip contentStyle={chartTooltipStyle} formatter={(value: number) => [`₳${value.toLocaleString()}`, t('projects.budget_label')]} labelFormatter={(label, payload) => payload[0]?.payload?.fullName || label} /><Bar dataKey="amount" fill="#1BAAD6" radius={[0, 4, 4, 0]} barSize={20}><LabelList dataKey="percent" position="right" formatter={(value: number) => `${value.toFixed(1)}%`} fill="currentColor" fontSize={10} /></Bar></BarChart></ResponsiveContainer></div></CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <Card className="cardano-card transition-all hover:shadow-xl">
              <CardHeader className="border-b border-cardano-teal/10 pb-4"><div className="flex items-center gap-3"><div className="p-2 bg-orange-500/10 dark:bg-orange-500/20 rounded-lg"><Activity className="h-6 w-6 text-orange-500" /></div><div><CardTitle className="text-xl font-black">{t('analytics.status_breakdown')}</CardTitle><CardDescription className="font-medium">{t('analytics.status_breakdown_desc')}</CardDescription></div></div></CardHeader>
              <CardContent><div className="h-80"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={statusData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} label={({ name, value }) => `${name}: ${value}`}>{statusData.map((_, index) => <Cell key={index} fill={COLORS[(index + 2) % COLORS.length]} />)}</Pie><Tooltip contentStyle={chartTooltipStyle} /></PieChart></ResponsiveContainer></div></CardContent>
            </Card>

            <Card className="cardano-card transition-all hover:shadow-xl">
              <CardHeader className="border-b border-cardano-teal/10 pb-4"><div className="flex items-center gap-3"><div className="p-2 bg-green-600/10 dark:bg-green-600/20 rounded-lg"><TrendingUp className="h-6 w-6 text-green-600" /></div><div><CardTitle className="text-xl font-black">{t('analytics.top_vendors')}</CardTitle><CardDescription className="font-medium">Current project allocations by vendor</CardDescription></div></div></CardHeader>
              <CardContent><div className="h-80"><ResponsiveContainer width="100%" height="100%"><BarChart layout="vertical" data={vendorData}><CartesianGrid strokeDasharray="3 3" horizontal={false} /><XAxis type="number" hide /><YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={150} tick={{ fill: 'currentColor', fontSize: 11 }} /><Tooltip contentStyle={chartTooltipStyle} formatter={(value: number) => [`₳${value.toLocaleString()}`, t('projects.budget_label')]} labelFormatter={(label, payload) => payload[0]?.payload?.fullName || label} /><Bar dataKey="amount" fill="#7367F0" radius={[0, 4, 4, 0]} barSize={20}><LabelList dataKey="percent" position="right" formatter={(value: number) => `${value.toFixed(1)}%`} fill="currentColor" fontSize={10} /></Bar></BarChart></ResponsiveContainer></div></CardContent>
            </Card>
          </div>

          <Card className="cardano-card transition-all hover:shadow-xl mb-12">
            <CardHeader className="border-b border-cardano-teal/10 pb-4"><div className="flex items-center gap-3"><div className="p-2 bg-cardano-blue/10 dark:bg-cardano-blue/20 rounded-lg"><Activity className="h-6 w-6 text-cardano-blue" /></div><div><CardTitle className="text-xl font-black">{t('analytics.payments_over_time')}</CardTitle><CardDescription className="font-medium">Withdrawn milestone amounts grouped by milestone date</CardDescription></div></div></CardHeader>
            <CardContent className="pt-8"><div className="h-[400px]"><ResponsiveContainer width="100%" height="100%"><AreaChart data={chartData}><defs><linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="hsl(var(--cardano-blue))" stopOpacity={0.3} /><stop offset="95%" stopColor="hsl(var(--cardano-blue))" stopOpacity={0} /></linearGradient></defs><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="date" axisLine={false} tickLine={false} /><YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `₳${value >= 1_000_000 ? `${(value / 1_000_000).toFixed(1)}M` : `${(value / 1_000).toFixed(0)}k`}`} /><Tooltip contentStyle={chartTooltipStyle} formatter={(value: number) => [`₳${value.toLocaleString()}`, t('analytics.amount_spent')]} /><Area type="monotone" dataKey="amount" stroke="hsl(var(--cardano-blue))" strokeWidth={3} fill="url(#colorAmount)" /></AreaChart></ResponsiveContainer></div></CardContent>
          </Card>
          <p className="mb-8 text-xs text-gray-500 dark:text-gray-400">Data source: {data.source}. Last updated: {new Date(data.updatedAt).toLocaleString()}.</p>
        </>
      )}
    </>
  );
};

export default Analytics;
