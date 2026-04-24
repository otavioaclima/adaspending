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
import Layout from '@/components/layout/Layout';
import { intersectProjects } from '@/data/intersectData';
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

  if (!name || width < 80 || height < 40) return null;

  // Use index to pick color since data is sorted descending
  const colorIndex = Math.min(index, COLORS.length - 1);

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
      <text
        x={x + width / 2}
        y={y + height / 2 - 8}
        textAnchor="middle"
        fill="#fff"
        fontSize={Math.max(9, Math.min(width / 12, 13))}
        fontWeight="600"
        className="pointer-events-none tracking-normal"
      >
        {name.length > 25 ? name.substring(0, 22) + '...' : name}
      </text>
      <text
        x={x + width / 2}
        y={y + height / 2 + 10}
        textAnchor="middle"
        fill="#fff"
        fontSize={Math.max(8, Math.min(width / 14, 11))}
        fontWeight="400"
        className="pointer-events-none opacity-90"
      >
        {percent}%
      </text>
    </g>
  );
};

const SpendingExplorer = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'treemap' | 'table'>('treemap');
  const [breakdown, setBreakdown] = useState<'vendor' | 'project'>('vendor');
  const [selectedYear, setSelectedYear] = useState('FY 2025');
  const [selectedQuarter, setSelectedQuarter] = useState(1);

  // Treasury constant
  const OFFICIAL_TOTAL_ALLOCATED = 343741204;

  // Group data based on breakdown selection with normalization
  const chartData = useMemo(() => {
    const groups: Record<string, number> = {};
    
    intersectProjects.forEach(p => {
      let key = breakdown === 'vendor' ? p.vendor : p.projectName;
      
      // Normalization for Vendor view to ensure proper aggregation
      if (breakdown === 'vendor') {
        if (key.includes('Input Output Engineering')) key = 'Input Output Engineering';
        if (key === 'IOG') key = 'Input Output Engineering';
        if (key === 'OSC') key = 'Open Source Committee';
        if (key.includes('Midgard')) key = 'Midgard';
        if (key.startsWith('addr1')) key = 'Other / Direct (Address)';
      }
      
      groups[key] = (groups[key] || 0) + p.totalAmount;
    });
    
    const trackedTotal = Object.values(groups).reduce((a, b) => a + b, 0);
    
    return Object.entries(groups)
      .map(([name, value]) => ({ name, value, total: trackedTotal }))
      .sort((a, b) => b.value - a.value);
  }, [breakdown]);

  const totalTracked = useMemo(() => chartData.reduce((sum, item) => sum + item.value, 0), [chartData]);

  return (
    <Layout fullWidth>
      <div className="flex h-[calc(100vh-120px)] bg-white overflow-hidden border-t border-gray-100">
        {/* Site Sidebar Style */}
        <div className="w-64 bg-[#000111] text-white flex flex-col shrink-0 border-r border-gray-800">
          <div className="p-4 border-b border-gray-800/50">
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5 gap-3 font-medium text-sm">
              <Home className="h-4 w-4" />
              {t('explorer.reset_explorer')}
            </Button>
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
                  {t('explorer.exploring').toUpperCase()} {t(breakdown === 'vendor' ? 'explorer.all_vendors' : 'explorer.all_projects')}
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

          <div className="p-5 border-t border-gray-800 text-[10px] text-gray-600 leading-relaxed font-medium italic shrink-0">
            {t('explorer.unofficial_disclaimer')}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-[#fcfdfe] overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-6 pb-4 bg-white border-b border-gray-100 shrink-0">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h2 className="text-xl font-black text-gray-900 mb-0.5 flex items-center gap-3">
                  {t('explorer.spending_by')} {breakdown === 'vendor' ? t('explorer.breakdown_vendor') : t('explorer.breakdown_project')}
                  <Badge variant="secondary" className="bg-gray-100 text-gray-500 font-black text-[10px] h-5">
                    {chartData.length} {t('explorer.items')}
                  </Badge>
                </h2>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                  {selectedYear} {t('explorer.budget_patterns')}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-1.5 text-[8px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">
                  {t('explorer.official_allocated')}
                  <Info className="h-2.5 w-2.5" />
                </div>
                <div className="text-2xl font-black text-[#0033ad] tracking-tighter">
                  ₳{OFFICIAL_TOTAL_ALLOCATED.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('explorer.breakdown_label')}:</span>
                  <Select value={breakdown} onValueChange={(v: any) => setBreakdown(v)}>
                    <SelectTrigger className="w-[160px] h-8 border-gray-200 bg-white text-[11px] font-bold shadow-sm">
                      <SelectValue placeholder={t('explorer.select_breakdown')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vendor" className="text-xs font-bold">
                        <div className="flex items-center gap-2">
                          <Users className="h-3 w-3" /> {t('explorer.breakdown_vendor')}
                        </div>
                      </SelectItem>
                      <SelectItem value="project" className="text-xs font-bold">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-3 w-3" /> {t('explorer.breakdown_project')}
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex bg-gray-50 p-1 rounded-lg border border-gray-100 shadow-inner">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setViewMode('treemap')}
                  className={`h-8 px-4 font-black text-[11px] transition-all ${viewMode === 'treemap' ? 'bg-white shadow-sm text-cardano-blue' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <LayoutGrid className="h-3.5 w-3.5 mr-2" />
                  {t('explorer.map_view')}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setViewMode('table')}
                  className={`h-8 px-4 font-black text-[11px] transition-all ${viewMode === 'table' ? 'bg-white shadow-sm text-cardano-blue' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <List className="h-3.5 w-3.5 mr-2" />
                  {t('explorer.list_view')}
                </Button>
              </div>
            </div>
          </div>

          {/* Visualization Content */}
          <div className="p-6 flex-1 overflow-hidden flex flex-col">
            {viewMode === 'treemap' ? (
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden flex-1 p-6">
                <ResponsiveContainer width="100%" height="100%">
                  <Treemap
                    data={chartData}
                    dataKey="value"
                    aspectRatio={16 / 9}
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
            ) : (
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden flex-1 overflow-y-auto">
                <IntersectProjectsTable />
              </div>
            )}

            <div className="mt-4 flex items-center justify-between px-2">
              <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                <RotateCcw className="h-3 w-3" />
                {t('explorer.data_source')}
              </div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                {t('explorer.showing')} {t('explorer.view_mode_label').replace('{mode}', viewMode.toUpperCase())} • {t('explorer.break_by')} {t('explorer.break_by_mode').replace('{mode}', breakdown.toUpperCase())}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SpendingExplorer;
