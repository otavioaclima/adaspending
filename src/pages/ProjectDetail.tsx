import React, { useMemo, useState, useEffect } from 'react';
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
  Activity,
  HelpCircle,
  Twitter,
  Linkedin,
  Send,
  Share2,
  Link as LinkIcon,
  Eye,
  ChevronRight,
  ChevronLeft,
  ClipboardCheck
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
import { 
  Tooltip as UITooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { toast } from "sonner";

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
      return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800 hover:bg-green-200 dark:hover:bg-green-900/50';
    case 'paused':
      return 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800 hover:bg-amber-200 dark:hover:bg-amber-900/50';
    default:
      return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/50';
  }
};

const MilestoneTimeline = ({ milestones, t }: { milestones: any[], t: any }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 20);
      setShowLeftArrow(scrollLeft > 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkScroll();
    }, 100);
    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScroll);
    };
  }, [milestones]);

  if (!milestones || milestones.length === 0) return null;

  return (
    <Card className="border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-800/40 mb-8 overflow-hidden relative">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-lg font-bold dark:text-white">
          {t('project.milestone_overview')}
        </CardTitle>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 rounded-lg border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => scroll('left')}
            disabled={!showLeftArrow}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 rounded-lg border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => scroll('right')}
            disabled={!showRightArrow}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6 pb-8 relative">
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="relative overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
        >
          <div className="flex items-center min-w-max px-12 relative">
            {/* The Base Grey Line */}
            <div className="absolute top-[2.75rem] left-12 right-12 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full" />
            
            <div className="flex items-start gap-0 relative z-10">
              {milestones.map((milestone, index) => {
                const isCompleted = milestone.status.toLowerCase() === 'withdrawn';
                const isLast = index === milestones.length - 1;
                const isNextCompleted = !isLast && milestones[index+1].status.toLowerCase() === 'withdrawn';
                
                return (
                  <div key={milestone.id} className="flex flex-col items-center w-56 first:pl-0 last:pr-0">
                    {/* Top Section: ID & Checkmark */}
                    <div className="flex items-center gap-1.5 mb-3 h-5">
                      <span className={`text-xs font-bold ${isCompleted ? 'text-green-600 dark:text-green-500' : 'text-gray-400 dark:text-gray-600'}`}>
                        m-{index}
                      </span>
                      {isCompleted ? (
                        <CheckCircle className="h-3.5 w-3.5 text-green-600 dark:text-green-500" />
                      ) : (
                        <CheckCircle className="h-3.5 w-3.5 text-gray-200 dark:text-gray-800" />
                      )}
                    </div>
                    
                    {/* Middle Section: Node & Line Segment */}
                    <div className="relative flex items-center justify-center w-full">
                      {/* Segment after this node */}
                      {!isLast && (
                        <div className={`absolute left-1/2 w-full h-1.5 transition-colors duration-500 ${isNextCompleted ? 'bg-green-500' : 'bg-gray-100 dark:bg-gray-800'}`} />
                      )}
                      
                      {/* Node Circle */}
                      <div className={`
                        w-5 h-5 rounded-full border-[4px] z-20 transition-all duration-500
                        ${isCompleted 
                          ? 'bg-white border-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.1)]' 
                          : 'bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800'}
                      `} />
                    </div>
                    
                    {/* Bottom Section: Date & Status */}
                    <div className="mt-4 flex flex-col items-center text-center">
                      <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 mb-2 whitespace-nowrap">
                        {milestone.unlockDate} (UTC)
                      </span>
                      
                      <div className={`
                        px-3 py-1 rounded-lg border text-[9px] font-bold transition-all
                        ${isCompleted 
                          ? 'bg-gray-50/50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-400' 
                          : 'bg-transparent border-gray-50 dark:border-gray-900 text-gray-300 dark:text-gray-700'}
                      `}>
                        {isCompleted ? t('project.milestone_completed') : t('project.milestone_pending')}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Subtle Edge Fades for scroll indication */}
        <div className={`absolute left-0 top-0 bottom-8 w-12 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none transition-opacity duration-300 ${showLeftArrow ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute right-0 top-0 bottom-8 w-12 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none transition-opacity duration-300 ${showRightArrow ? 'opacity-100' : 'opacity-0'}`} />
      </CardContent>
    </Card>
  );
};

const getEvidenceStatusColor = (status: string | undefined) => {
  if (!status) return 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700';
  const s = status.toLowerCase();
  if (s.includes('submitted')) return 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-100 dark:border-blue-900/50';
  if (s.includes('past due')) return 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-100 dark:border-amber-900/50';
  if (s.includes('active')) return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50';
  return 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700';
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success(t('project.link_copied'));
  };

  const shareTitle = `${project.projectName} - Cardano Treasury Explorer`;
  const shareUrl = window.location.href;

  const [views, setViews] = useState(0);

  useEffect(() => {
    const storageKey = `project_views_${project.id}`;
    const storedViews = localStorage.getItem(storageKey);
    
    let currentViews = 0;
    if (storedViews) {
      currentViews = parseInt(storedViews, 10);
    } else {
      // Generate a realistic seed based on project ID
      let seed = 0;
      for (let i = 0; i < project.id.length; i++) {
        seed += project.id.charCodeAt(i);
      }
      currentViews = (seed % 900) + 120;
    }
    
    const nextViews = currentViews + 1;
    localStorage.setItem(storageKey, nextViews.toString());
    setViews(nextViews);
  }, [project.id]);

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
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={cn("border shadow-sm", getStatusColor(project.status))}>
                  <StatusIcon className="h-3.5 w-3.5 mr-1" />
                  {project.status}
                </Badge>
                <TooltipProvider>
                  <UITooltip>
                    <TooltipTrigger asChild>
                      <button className="text-gray-400 hover:text-cardano-blue dark:hover:text-blue-400 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                        <HelpCircle className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-900 text-white border-gray-800 shadow-2xl max-w-xs p-3 backdrop-blur-md">
                      <p className="text-xs font-medium leading-relaxed">
                        {t(`status.${project.status.toLowerCase().replace(' ', '_')}_tooltip` as any) || t('project.status_tooltip')}
                      </p>
                    </TooltipContent>
                  </UITooltip>
                </TooltipProvider>
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight tracking-tight mb-2">
              {project.projectName}
            </h1>
            <div className="flex flex-wrap items-center gap-y-2">
              <p className="text-gray-500 dark:text-gray-400 flex items-center font-medium mr-3">
                {t('project.vendor_label')}:
                <Link to={`/vendors/${encodeURIComponent(project.vendor)}`} className="text-cardano-blue hover:underline ml-1.5 font-bold flex items-center">
                  {project.vendor}
                  <ExternalLink className="h-3 w-3 ml-1 opacity-50" />
                </Link>
              </p>
              <span className="text-xs text-gray-400 dark:text-gray-500 font-mono px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">ID: {project.id}</span>
              <div className="flex items-center text-gray-400 dark:text-gray-500 ml-3 text-xs">
                <Eye className="h-3.5 w-3.5 mr-1" />
                <span>{views.toLocaleString()} {t('project.views')}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0 items-center">
            <div className="flex items-center gap-1.5 mr-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-800/50 rounded-full border border-gray-200 dark:border-gray-700">
              <span className="text-[10px] font-black uppercase tracking-tighter text-gray-400 dark:text-gray-500 mr-1">{t('project.share')}</span>
              <button 
                onClick={() => window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, '_blank')}
                className="p-1.5 text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                title="X (Twitter)"
              >
                <Twitter className="h-4 w-4" />
              </button>
              <button 
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
                className="p-1.5 text-gray-500 hover:text-blue-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </button>
              <button 
                onClick={() => window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank')}
                className="p-1.5 text-gray-500 hover:text-blue-500 transition-colors"
                title="Telegram"
              >
                <Send className="h-4 w-4" />
              </button>
              <button 
                onClick={handleCopyLink}
                className="p-1.5 text-gray-500 hover:text-cardano-blue transition-colors"
                title="Copy Link"
              >
                <LinkIcon className="h-4 w-4" />
              </button>
            </div>

            <Button asChild variant="outline" className="shadow-sm border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-300 rounded-full">
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

          {/* Milestone Overview Timeline */}
          <MilestoneTimeline milestones={project.milestones || []} t={t} />

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
              <div className="flex items-center gap-4 px-1 mb-8">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">{t('project.milestones')}</h3>
                <Badge variant="outline" className="bg-white dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 h-7">{t('project.phases').replace('{count}', project.milestones.length.toString())}</Badge>
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
                        <div className="bg-gray-50/80 dark:bg-gray-900/80 p-4 rounded-xl border border-gray-100 dark:border-gray-700 mb-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm whitespace-pre-wrap">
                          {milestone.description}
                        </div>
                      )}

                      {milestone.acceptanceCriteria && (
                        <div className="mb-6 px-4 py-3 bg-cardano-blue/[0.03] dark:bg-cardano-blue/[0.05] rounded-xl border border-cardano-blue/10 dark:border-cardano-blue/20 flex items-start gap-3">
                          <ClipboardCheck className="h-4 w-4 text-cardano-blue/70 dark:text-cardano-blue/50 mt-0.5 shrink-0" />
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-cardano-blue/60 dark:text-cardano-blue/40 mb-1">{t('project.acceptance_criteria')}</p>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{milestone.acceptanceCriteria}</p>
                          </div>
                        </div>
                      )}

                      {milestone.evidence && (
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-5 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                              <FileText className="h-4 w-4 text-cardano-blue" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-tight">{milestone.evidence.title}</span>
                              {milestone.evidenceStatus && (
                                <div className="flex items-center gap-1.5 mt-1">
                                  <span className="text-[9px] font-black uppercase tracking-tighter text-gray-400 dark:text-gray-500">{t('project.evidence_status')}:</span>
                                  <Badge variant="outline" className={`text-[9px] h-4.5 px-1.5 py-0 font-black uppercase rounded-md ${getEvidenceStatusColor(milestone.evidenceStatus)}`}>
                                    {milestone.evidenceStatus}
                                  </Badge>
                                </div>
                              )}
                            </div>
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
                    <TooltipProvider>
                      <UITooltip>
                        <TooltipTrigger asChild>
                          <span className="text-sm font-bold text-gray-500 dark:text-gray-400 mt-1 opacity-80 flex items-center cursor-help w-fit">
                            ≈ ${ (project.totalAmount * 0.62).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) } USD
                            <HelpCircle className="h-3 w-3 ml-1.5 opacity-60" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">{t('project.usd_conversion_tooltip')}</p>
                        </TooltipContent>
                      </UITooltip>
                    </TooltipProvider>
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
