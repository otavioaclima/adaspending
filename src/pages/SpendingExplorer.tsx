
import React, { useState, useMemo } from 'react';
import {
  LayoutGrid,
  List,
  Home,
  Calendar,
  ChevronDown,
  Info,
  RotateCcw,
  Briefcase,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIntersectData } from '@/hooks/useIntersectData';
import {
  Treemap,
  ResponsiveContainer,
  Tooltip as RechartsTooltip
} from 'recharts';
import IntersectProjectsTable from "@/components/dashboard/IntersectProjectsTable";
import { useLanguage } from '@/contexts/LanguageContext';

// Cardano Brand Colors - Deep to Light Gradient
const COLORS = [
  '#002171', // Deepest
  '#0033ad', // Official Cardano Blue
  '#0047c2', 
  '#005bd6', 
  '#006feb', 
  '#1a8cff', 
  '#4dabff', 
  '#80c1ff', 
  '#b3d9ff', // Lightest
];

const CustomizedContent = (props: any) => {
  const { root, depth, x, y, width, height, index, name, value, total } = props;
  const percent = ((value / total) * 100).toFixed(1);

  if (!name || width < 5 || height < 5) return null;

  // Use index to pick color since data is sorted descending
  const colorIndex = Math.min(index, COLORS.length - 1);

  const showText = width > 40 && height > 20;
  const showPercent = width > 40 && height > 40;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: COLORS[colorIndex],
          stroke: '#fff',
          strokeWidth: 1,
          strokeOpacity: 0.2,
        }}
      />
      {showText && (
        <text
          x={x + width / 2}
          y={y + height / 2 - (showPercent ? 8 : 0)}
          textAnchor="middle"
          fill="#fff"
          fontSize={Math.max(7, Math.min(width / 10, 12))}
          fontWeight="600"
          className="pointer-events-none tracking-tight"
        >
          {name.length > (width / 8) ? name.substring(0, Math.floor(width / 8) - 2) + '..' : name}
        </text>
      )}
      {showPercent && (
        <text
          x={x + width / 2}
          y={y + height / 2 + 10}
          textAnchor="middle"
          fill="#fff"
          fontSize={Math.max(6, Math.min(width / 12, 10))}
          fontWeight="400"
          className="pointer-events-none opacity-90"
        >
          {percent}%
        </text>
      )}
    </g>
  );
};

const SpendingExplorer = () => {
  const { t } = useLanguage();
  const { data: intersectProjects = [] } = useIntersectData();
  const [viewMode, setViewMode] = useState<'treemap' | 'table'>('treemap');
  const [breakdown, setBreakdown] = useState<'vendor' | 'project'>('vendor');
  const [selectedYear, setSelectedYear] = useState('FY 2025');
  const [selectedQuarter, setSelectedQuarter] = useState(1);

  // Treasury constants
  const INTERSECT_TOTAL_BUDGET = 345531529;
  const OFFICIAL_TOTAL_ALLOCATED = 343741204;

  // Group data based on breakdown selection
  const chartData = useMemo(() => {
    const groups: Record<string, number> = {};
    
    intersectProjects.forEach(p => {
      let key = breakdown === 'vendor' ? p.vendor : p.projectName;
      groups[key] = (groups[key] || 0) + p.totalAmount;
    });
    
    // Calculate difference to official allocated total
    const projectsTotal = Object.values(groups).reduce((a, b) => a + b, 0);
    const adjustment = OFFICIAL_TOTAL_ALLOCATED - projectsTotal;
    
    if (adjustment > 0) {
      groups[t('explorer.untracked_label')] = adjustment;
    }
    
    return Object.entries(groups)
      .map(([name, value]) => ({ 
        name, 
        value, 
        total: OFFICIAL_TOTAL_ALLOCATED 
      }))
      .sort((a, b) => b.value - a.value);
  }, [intersectProjects, breakdown, t]);

  const totalTracked = useMemo(() => chartData.reduce((sum, item) => sum + item.value, 0), [chartData]);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-120px)] bg-white dark:bg-gray-950 overflow-y-auto lg:overflow-hidden border-t border-gray-100 dark:border-gray-800">
        {/* Site Sidebar Style */}
        <div className="w-full lg:w-64 bg-[#000111] text-white flex flex-col shrink-0 border-r border-gray-800">
          <div className="p-4 space-y-4 border-b border-gray-800/50">
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5 gap-3 font-medium text-sm" onClick={() => {
              setSelectedYear('FY 2025');
              setSelectedQuarter(1);
              setBreakdown('vendor');
            }}>
              <Home className="h-4 w-4" />
              {t('explorer.reset_explorer')}
            </Button>

            <div className="space-y-2 px-1">
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{t('explorer.breakdown_label')}</div>
              <Select value={breakdown} onValueChange={(v: any) => setBreakdown(v)}>
                <SelectTrigger className="w-full h-9 border-gray-800 bg-[#1e2532] text-gray-300 hover:text-white hover:bg-[#252d3d] text-[11px] font-bold shadow-sm transition-colors">
                  <SelectValue placeholder={t('explorer.select_breakdown')} />
                </SelectTrigger>
                <SelectContent className="bg-[#000111] border-gray-800 text-white">
                  <SelectItem value="vendor" className="text-xs font-bold focus:bg-white/10 focus:text-white">
                    <div className="flex items-center gap-2">
                      <Users className="h-3 w-3" /> {t('explorer.breakdown_vendor')}
                    </div>
                  </SelectItem>
                  <SelectItem value="project" className="text-xs font-bold focus:bg-white/10 focus:text-white">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-3 w-3" /> {t('explorer.breakdown_project')}
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="p-5 space-y-8 flex-1 overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">
                <Calendar className="h-3 w-3" />
                {t('explorer.fiscal_period')}
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between bg-[#1e2532] border-gray-800 text-gray-300 hover:text-white hover:bg-[#252d3d] h-10 text-xs font-bold transition-colors">
                    {selectedYear}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-[#000111] border-gray-800 text-white">
                  <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer font-bold text-xs" onClick={() => setSelectedYear('FY 2025')}>
                    FY 2025
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer font-bold text-xs" onClick={() => setSelectedYear('FY 2026')}>
                    FY 2026
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div>
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">
                {t('explorer.quarter_filters')}
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {[1, 2, 3, 4].map(q => (
                  <button
                    key={q}
                    onClick={() => setSelectedQuarter(q)}
                    className={`h-9 text-[10px] font-black rounded-md flex items-center justify-center transition-all ${q === selectedQuarter ? 'bg-cardano-blue shadow-[0_0_15px_rgba(0,51,173,0.4)] text-white' : 'bg-[#131637] text-gray-500 hover:text-gray-300 hover:bg-[#1a1e4a]'}`}
                  >
                    Q{q}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mb-4">{t('explorer.active_selection')}</div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-4 w-4 rounded-full border-2 border-cardano-blue flex items-center justify-center">
                  <div className="h-1.5 w-1.5 bg-cardano-blue rounded-full" />
                </div>
                <div className="text-[11px] font-black text-gray-300">
                  {t('explorer.exploring').toUpperCase()} {t(breakdown === 'vendor' ? 'explorer.all_vendors' : 'explorer.all_projects').toUpperCase()}
                </div>
              </div>
              <div className="pl-7 text-xl font-black tracking-tight text-white">
                ₳{(totalTracked / 1000000).toFixed(1)}M <span className="text-[10px] text-gray-500 font-bold ml-1">{t('explorer.tracked')}</span>
              </div>
              <div className="pl-7 mt-2 text-[9px] font-bold text-gray-500">
                {selectedYear} - Q{selectedQuarter} Report
              </div>
            </div>
          </div>

          <div className="p-5 border-t border-gray-800 text-[10px] text-gray-600 leading-relaxed font-medium italic shrink-0 hidden lg:block">
            {t('explorer.unofficial_disclaimer')}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-[#fcfdfe] dark:bg-gray-950 lg:overflow-hidden min-h-[500px]">
          {/* Header */}
          <div className="px-4 lg:px-8 pt-6 pb-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shrink-0">
            <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4 mb-4">
              <div>
                <h2 className="text-xl font-black text-gray-900 dark:text-white mb-0.5 flex items-center gap-3">
                  {t('explorer.spending_by')} {breakdown === 'vendor' ? t('explorer.breakdown_vendor') : t('explorer.breakdown_project')}
                  <Badge variant="secondary" className="bg-cardano-blue/10 text-cardano-blue border-none h-6 px-3">
                    {chartData.length} {t('projects.total')}
                  </Badge>
                </h2>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                  {selectedYear} {t('explorer.budget_patterns')}
                </p>
              </div>
              <div className="text-left lg:text-right">
                <div className="flex items-center lg:justify-end gap-1.5 text-[8px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">
                  {t('explorer.official_allocated')}
                  <Info className="h-2.5 w-2.5" />
                </div>
                <div className="text-2xl font-black text-[#0033ad] dark:text-blue-400 tracking-tighter">
                  ₳{INTERSECT_TOTAL_BUDGET.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 lg:p-6 flex-1 lg:overflow-hidden flex flex-col min-h-[500px] lg:min-h-0">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 overflow-hidden flex-1 p-2 lg:p-6 h-[450px] lg:h-full min-h-[400px] lg:min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <Treemap
                  data={chartData}
                  dataKey="value"
                  aspectRatio={window.innerWidth < 768 ? 4 / 3 : 16 / 9}
                  stroke="#fff"
                  content={<CustomizedContent />}
                >
                  <RechartsTooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-[#000111] text-white p-4 rounded-xl shadow-2xl border border-gray-800 text-[11px] min-w-[200px]">
                            <div className="text-gray-500 font-black uppercase tracking-widest text-[9px] mb-2">{(breakdown === 'vendor' ? t('explorer.breakdown_vendor') : t('explorer.breakdown_project')).toUpperCase()} {t('explorer.details')}</div>
                            <div className="font-bold text-sm mb-2 leading-tight">{data.name}</div>
                            <div className="h-px bg-gray-800 my-2" />
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-gray-400">{t('vendors.allocation_label')}:</span>
                              <span className="font-bold text-blue-400">₳{data.value.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">{t('explorer.budget_share')}:</span>
                              <span className="font-bold text-cardano-teal">
                                {((data.value / totalTracked) * 100).toFixed(2)}%
                              </span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </Treemap>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 flex items-center justify-between px-2">
              <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                <RotateCcw className="h-3 w-3" />
                {t('explorer.data_source')}
              </div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                {t('explorer.showing')} {t('explorer.map_view').toUpperCase()} • {t('explorer.break_by')} {t('explorer.break_by_mode').replace('{mode}', breakdown.toUpperCase())}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpendingExplorer;
