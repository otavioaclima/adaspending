import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Building, Filter, ChevronDown, ChevronUp, MessageSquare, Info, Link2, Wallet, Briefcase, FilterX, LayoutGrid, List as ListIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Layout from '@/components/layout/Layout';
import { intersectProjects } from '@/data/intersectData';
import { useLanguage } from '@/contexts/LanguageContext';

// Helper to get unique vendors and their aggregated stats
const useVendorStats = () => {
  return useMemo(() => {
    const stats: Record<string, {
      name: string;
      totalFunded: number;
      amountSpent: number;
      projectCount: number;
      statusCount: Record<string, number>;
    }> = {};

    intersectProjects.forEach(project => {
      if (!stats[project.vendor]) {
        stats[project.vendor] = {
          name: project.vendor,
          totalFunded: 0,
          amountSpent: 0,
          projectCount: 0,
          statusCount: {}
        };
      }

      const v = stats[project.vendor];
      v.totalFunded += project.totalAmount;
      v.amountSpent += project.amountSpent;
      v.projectCount += 1;
      v.statusCount[project.status] = (v.statusCount[project.status] || 0) + 1;
    });

    return Object.values(stats).sort((a, b) => b.totalFunded - a.totalFunded);
  }, []);
};

const VendorCard = ({ vendor }: { vendor: any }) => {
  const { t } = useLanguage();
  return (
    <Link to={`/vendors/${encodeURIComponent(vendor.name)}`}>
      <Card className="h-full hover:shadow-lg transition-all border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/40 group">
        <CardContent className="p-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-cardano-blue/10 dark:bg-cardano-blue/20 rounded-xl w-12 h-12 flex items-center justify-center group-hover:bg-cardano-blue group-hover:text-white transition-colors text-cardano-blue">
              <Building className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-cardano-blue transition-colors leading-tight truncate max-w-[200px]" title={vendor.name}>
                {vendor.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
                {t('vendors.active_vendor')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-5 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-700">
            <div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold mb-1">{t('vendors.allocation_label')}</p>
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100 flex items-center">
                <Wallet className="h-3 w-3 mr-1 text-cardano-blue" />
                ₳{vendor.totalFunded.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold mb-1">{t('vendors.spent_label')}</p>
              <p className="text-sm font-bold text-orange-600 dark:text-orange-500 flex items-center">
                ₳{vendor.amountSpent.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center text-gray-600 dark:text-gray-400 font-medium">
              <Briefcase className="h-4 w-4 mr-1.5 text-gray-400 dark:text-gray-500" />
              {vendor.projectCount} {vendor.projectCount === 1 ? t('vendors.one_project') : t('vendors.multiple_projects')}
            </div>
            <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-900/50">
              {Object.keys(vendor.statusCount).length} {t('vendors.status_types')}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const TransparencyToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="mb-8">
      <Card className={`border-blue-200 dark:border-blue-900/50 transition-all ${isOpen ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-white dark:bg-gray-800/40 hover:bg-blue-50/30 dark:hover:bg-blue-900/10'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
        >
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-700 dark:text-blue-400">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-blue-900 dark:text-blue-300">{t('vendors.transparency_title')}</h2>
              {!isOpen && <p className="text-sm text-blue-700/70 dark:text-blue-400/60">{t('vendors.transparency_subtitle')}</p>}
            </div>
          </div>
          {isOpen ? <ChevronUp className="h-5 w-5 text-blue-700 dark:text-blue-400" /> : <ChevronDown className="h-5 w-5 text-blue-700 dark:text-blue-400" />}
        </button>

        {isOpen && (
          <CardContent className="px-6 pb-6 pt-0 border-t border-blue-100 dark:border-blue-900/30 flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-300">
                  <Info className="h-4 w-4 text-blue-700 dark:text-blue-400" />
                  {t('vendors.for_dreps')}
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-400/80 leading-relaxed">
                  {t('vendors.for_dreps_desc')}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-300">
                  <Link2 className="h-4 w-4 text-blue-700 dark:text-blue-400" />
                  {t('vendors.benchmarks')}
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-400/80 leading-relaxed mb-2">
                  {t('vendors.benchmarks_desc')}
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-blue-700 dark:text-blue-400 underline text-xs" size="sm">
                  <a href="https://www.linkedin.com/pulse/hourly-rates-worldwide-2023-statista/" target="_blank" rel="noopener noreferrer">
                    {t('vendors.see_benchmarks')}
                  </a>
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-300">
                  <MessageSquare className="h-4 w-4 text-blue-700 dark:text-blue-400" />
                  {t('vendors.direct_channels')}
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Button asChild variant="outline" size="sm" className="bg-white dark:bg-gray-900 h-7 text-[10px] px-2 border-gray-200 dark:border-gray-700">
                    <a href="https://discord.gg/cardano" target="_blank" rel="noopener noreferrer">Discord</a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="bg-white dark:bg-gray-900 h-7 text-[10px] px-2 border-gray-200 dark:border-gray-700">
                    <a href="https://t.me/CardanoBR" target="_blank" rel="noopener noreferrer">Telegram</a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="bg-white dark:bg-gray-900 h-7 text-[10px] px-2 border-gray-200 dark:border-gray-700">
                    <a href="https://forum.cardano.org/" target="_blank" rel="noopener noreferrer">Forum</a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-100/50 dark:bg-blue-900/30 rounded-lg flex items-center gap-3">
              <Info className="h-4 w-4 text-blue-700 dark:text-blue-400 shrink-0" />
              <p className="text-xs font-medium text-blue-800 dark:text-blue-300">
                {t('vendors.coming_soon')}
              </p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

const Vendors = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [sizeFilter, setSizeFilter] = useState('all');
  const [countFilter, setCountFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortFilter, setSortFilter] = useState('totalFunded-desc');
  const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'asc' | 'desc' } | null>(null);
  const vendors = useVendorStats();

  const filteredVendors = useMemo(() => {
    return vendors.filter(vendor => {
      const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase());

      let matchesSize = true;
      if (sizeFilter === 'small') matchesSize = vendor.totalFunded < 1000000;
      else if (sizeFilter === 'medium') matchesSize = vendor.totalFunded >= 1000000 && vendor.totalFunded <= 10000000;
      else if (sizeFilter === 'large') matchesSize = vendor.totalFunded > 10000000;

      let matchesCount = true;
      if (countFilter === '1') matchesCount = vendor.projectCount === 1;
      else if (countFilter === '2-5') matchesCount = vendor.projectCount >= 2 && vendor.projectCount <= 5;
      else if (countFilter === '5+') matchesCount = vendor.projectCount > 5;

      return matchesSearch && matchesSize && matchesCount;
    });
  }, [vendors, searchTerm, sizeFilter, countFilter]);

  const sortedVendors = useMemo(() => {
    let sortableItems = [...filteredVendors];
    
    // Primary sort from dropdown
    if (sortFilter) {
      const [key, direction] = sortFilter.split('-');
      sortableItems.sort((a: any, b: any) => {
        const valA = (key === 'totalFunded' || key === 'projectCount') ? a[key] : (a[key] || '').toString().toLowerCase();
        const valB = (key === 'totalFunded' || key === 'projectCount') ? b[key] : (b[key] || '').toString().toLowerCase();
        
        if (valA < valB) return direction === 'asc' ? -1 : 1;
        if (valA > valB) return direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    // Secondary sort from table headers (if active)
    if (sortConfig !== null) {
      sortableItems.sort((a: any, b: any) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredVendors, sortConfig, sortFilter]);

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSizeFilter('all');
    setCountFilter('all');
  };

  return (
    <Layout>
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('vendors.title')}</h1>
            <Badge variant="secondary" className="bg-cardano-blue/10 text-cardano-blue border-none h-6 px-3">
              {vendors.length} {t('projects.total')}
            </Badge>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            {t('vendors.description')}
          </p>
        </div>

        <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-1 shadow-sm shrink-0">
          <Button
            variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
            size="sm"
            className="px-3"
            onClick={() => setViewMode('grid')}
          >
            <LayoutGrid className="h-4 w-4 mr-2" />
            {t('projects.grid')}
          </Button>
          <Button
            variant={viewMode === 'list' ? 'secondary' : 'ghost'}
            size="sm"
            className="px-3"
            onClick={() => setViewMode('list')}
          >
            <ListIcon className="h-4 w-4 mr-2" />
            {t('projects.list')}
          </Button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm mb-8 flex flex-col lg:flex-row gap-4 items-end transition-colors">
        <div className="flex-1 w-full lg:w-auto">
          <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-1.5 block">{t('vendors.search_label')}</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={t('vendors.search_placeholder')}
              className="pl-10 h-11 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full lg:w-48">
          <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-1.5 block">{t('vendors.total_allocation')}</label>
          <Select value={sizeFilter} onValueChange={setSizeFilter}>
            <SelectTrigger className="h-11 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white">
              <SelectValue placeholder={t('projects.all_sizes')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('projects.all_sizes')}</SelectItem>
              <SelectItem value="small">{t('projects.small_size')}</SelectItem>
              <SelectItem value="medium">{t('projects.medium_size')}</SelectItem>
              <SelectItem value="large">{t('projects.large_size')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full lg:w-48">
          <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-1.5 block">{t('vendors.projects_label')}</label>
          <Select value={countFilter} onValueChange={setCountFilter}>
            <SelectTrigger className="h-11 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white">
              <SelectValue placeholder={t('vendors.all_counts')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('vendors.all_counts')}</SelectItem>
              <SelectItem value="1">{t('vendors.one_project')}</SelectItem>
              <SelectItem value="2-5">2-5 {t('vendors.multiple_projects')}</SelectItem>
              <SelectItem value="5+">5+ {t('vendors.multiple_projects')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full lg:w-48">
          <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-1.5 block">{t('projects.order_by')}</label>
          <Select value={sortFilter} onValueChange={setSortFilter}>
            <SelectTrigger className="h-11 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white">
              <SelectValue placeholder={t('projects.order_by')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="totalFunded-desc">{t('projects.sort_budget_desc')}</SelectItem>
              <SelectItem value="totalFunded-asc">{t('projects.sort_budget_asc')}</SelectItem>
              <SelectItem value="name-asc">{t('projects.sort_name_asc')}</SelectItem>
              <SelectItem value="name-desc">{t('projects.sort_name_desc')}</SelectItem>
              <SelectItem value="projectCount-desc">{t('vendors.multiple_projects')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="ghost"
          className="h-11 px-4 text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center"
          onClick={resetFilters}
        >
          <FilterX className="h-4 w-4 mr-2" />
          {t('projects.reset')}
        </Button>
      </div>

      <TransparencyToggle />

      {filteredVendors.length > 0 && (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sortedVendors.map(vendor => (
              <VendorCard key={vendor.name} vendor={vendor} />
            ))}
          </div>
        ) : (
          <Card className="border-gray-200 dark:border-gray-800 mb-12 overflow-hidden bg-white dark:bg-gray-800/40">
            <Table>
              <TableHeader className="bg-gray-50/50 dark:bg-gray-900/50">
                <TableRow className="border-gray-100 dark:border-gray-800">
                  <TableHead className="font-bold text-gray-900 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => requestSort('name')}>
                    <div className="flex items-center gap-1">
                      {t('vendors.name_label')}
                      {sortConfig?.key === 'name' ? (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />) : null}
                    </div>
                  </TableHead>
                  <TableHead className="font-bold text-gray-900 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => requestSort('totalFunded')}>
                    <div className="flex items-center gap-1">
                      {t('vendors.allocation_label')}
                      {sortConfig?.key === 'totalFunded' ? (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />) : null}
                    </div>
                  </TableHead>
                  <TableHead className="font-bold text-gray-900 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => requestSort('amountSpent')}>
                    <div className="flex items-center gap-1">
                      {t('vendors.spent_label')}
                      {sortConfig?.key === 'amountSpent' ? (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />) : null}
                    </div>
                  </TableHead>
                  <TableHead className="font-bold text-gray-900 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => requestSort('projectCount')}>
                    <div className="flex items-center gap-1">
                      {t('vendors.projects_label')}
                      {sortConfig?.key === 'projectCount' ? (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />) : null}
                    </div>
                  </TableHead>
                  <TableHead className="font-bold text-gray-900 dark:text-gray-300">{t('vendors.status_types')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedVendors.map((vendor) => (
                  <TableRow key={vendor.name} className="border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-900/30">
                    <TableCell className="font-medium">
                      <Link 
                        to={`/vendors/${encodeURIComponent(vendor.name)}`}
                        className="text-cardano-blue hover:underline font-bold truncate max-w-[250px] block"
                        title={vendor.name}
                      >
                        {vendor.name}
                      </Link>
                    </TableCell>
                    <TableCell className="text-gray-900 dark:text-gray-100 font-medium">
                      ₳{vendor.totalFunded.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-orange-600 dark:text-orange-500 font-medium">
                      ₳{vendor.amountSpent.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5 text-gray-400" />
                        {vendor.projectCount}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-900/50">
                        {Object.keys(vendor.statusCount).length} {t('vendors.status_types')}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        )
      )}

      {filteredVendors.length === 0 && (
        <div className="text-center py-20 bg-gray-50 dark:bg-gray-800/40 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 transition-colors">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 shadow-sm">
            <Users className="h-8 w-8 text-gray-300 dark:text-gray-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('vendors.no_vendors')}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{t('vendors.no_vendors_desc')} "{searchTerm}"</p>
          <Button
            variant="outline"
            onClick={() => setSearchTerm('')}
            className="dark:border-gray-700 dark:hover:bg-gray-800"
          >
            {t('vendors.clear_search')}
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default Vendors;
