import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { intersectProjects } from "@/data/intersectData";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Briefcase,
  ArrowRight,
  Wallet,
  CheckCircle2,
  Clock,
  Search as SearchIcon,
  FilterX,
  LayoutGrid,
  List,
  ChevronUp,
  ChevronDown
} from "lucide-react";

const getStatusIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed':
      return <CheckCircle2 className="h-4 w-4 mr-1 text-green-600" />;
    case 'paused':
      return <Clock className="h-4 w-4 mr-1 text-amber-600" />;
    default:
      return <Briefcase className="h-4 w-4 mr-1 text-blue-600" />;
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

const Projects = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const initialStatus = searchParams.get('status') || 'all';
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState(initialStatus);
  const [sizeFilter, setSizeFilter] = useState('all');
  const [vendorFilter, setVendorFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortFilter, setSortFilter] = useState('totalAmount-desc');
  const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'asc' | 'desc' } | null>(null);

  // Sync status filter if URL changes
  React.useEffect(() => {
    const status = searchParams.get('status');
    if (status) {
      setStatusFilter(status);
    }
  }, [searchParams]);

  // Get unique vendors for the filter
  const vendors = useMemo(() => {
    const uniqueVendors = Array.from(new Set(intersectProjects.map(p => p.vendor)));
    return uniqueVendors.sort();
  }, []);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return intersectProjects.filter(project => {
      const matchesSearch = project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.vendor.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = statusFilter === 'all' || project.status.toLowerCase() === statusFilter.toLowerCase();

      const matchesVendor = vendorFilter === 'all' || project.vendor === vendorFilter;

      let matchesSize = true;
      if (sizeFilter === 'small') matchesSize = project.totalAmount < 1000000;
      else if (sizeFilter === 'medium') matchesSize = project.totalAmount >= 1000000 && project.totalAmount <= 10000000;
      else if (sizeFilter === 'large') matchesSize = project.totalAmount > 10000000;

      return matchesSearch && matchesStatus && matchesVendor && matchesSize;
    });
  }, [searchTerm, statusFilter, sizeFilter, vendorFilter]);

  // Sort logic
  const sortedProjects = useMemo(() => {
    let sortableItems = [...filteredProjects];
    
    // Primary sort from dropdown
    if (sortFilter) {
      const [key, direction] = sortFilter.split('-');
      sortableItems.sort((a: any, b: any) => {
        const valA = key === 'totalAmount' ? a[key] : (a[key] || '').toString().toLowerCase();
        const valB = key === 'totalAmount' ? b[key] : (b[key] || '').toString().toLowerCase();
        
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
  }, [filteredProjects, sortConfig, sortFilter]);

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const resetFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setSizeFilter('all');
    setVendorFilter('all');
  };

  return (
    <Layout>
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('projects.title')}</h1>
            <Badge variant="secondary" className="bg-cardano-blue/10 dark:bg-cardano-blue/20 text-cardano-blue border-none h-6 px-3">
              {intersectProjects.length} {t('projects.total')}
            </Badge>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            {t('projects.description')}
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
            <List className="h-4 w-4 mr-2" />
            {t('projects.list')}
          </Button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm mb-8 flex flex-col lg:flex-row gap-4 items-end transition-colors">
        <div className="flex-1 w-full lg:w-auto">
          <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-1.5 block">{t('projects.search_label')}</label>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={t('projects.search_placeholder')}
              className="pl-10 h-11 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full lg:w-48">
          <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-1.5 block">{t('projects.status_label')}</label>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-11 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <SelectValue placeholder={t('projects.all_status')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('projects.all_status')}</SelectItem>
              <SelectItem value="Completed">{t('status.completed')}</SelectItem>
              <SelectItem value="Paused">{t('status.paused')}</SelectItem>
              <SelectItem value="In Progress">{t('status.in_progress')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full lg:w-48">
          <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-1.5 block">{t('projects.budget_size')}</label>
          <Select value={sizeFilter} onValueChange={setSizeFilter}>
            <SelectTrigger className="h-11 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
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

        <div className="w-full lg:w-56">
          <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-1.5 block">{t('projects.all_vendors')}</label>
          <Select value={vendorFilter} onValueChange={setVendorFilter}>
            <SelectTrigger className="h-11 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <SelectValue placeholder={t('projects.all_vendors')} />
            </SelectTrigger>
            <SelectContent className="max-w-[300px]">
              <SelectItem value="all">{t('projects.all_vendors')}</SelectItem>
              {vendors.map(v => (
                <SelectItem key={v} value={v}>
                  {v.length > 35 ? v.substring(0, 32) + '...' : v}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full lg:w-48">
          <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-1.5 block">{t('projects.order_by')}</label>
          <Select value={sortFilter} onValueChange={setSortFilter}>
            <SelectTrigger className="h-11 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <SelectValue placeholder={t('projects.order_by')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="projectName-asc">{t('projects.sort_name_asc')}</SelectItem>
              <SelectItem value="projectName-desc">{t('projects.sort_name_desc')}</SelectItem>
              <SelectItem value="totalAmount-desc">{t('projects.sort_budget_desc')}</SelectItem>
              <SelectItem value="totalAmount-asc">{t('projects.sort_budget_asc')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="ghost"
          className="h-11 px-4 text-gray-500 hover:text-red-600 hover:bg-red-50 flex items-center"
          onClick={resetFilters}
        >
          <FilterX className="h-4 w-4 mr-2" />
          {t('projects.reset')}
        </Button>
      </div>

      {filteredProjects.length > 0 ? (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <Card key={project.id} className="flex flex-col h-full hover:shadow-lg transition-shadow border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/40">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className={`${getStatusColor(project.status)} flex items-center`}>
                      {getStatusIcon(project.status)}
                      {t(`status.${project.status.toLowerCase().replace(' ', '_')}`) || project.status}
                    </Badge>
                    <span className="text-xs text-gray-500 font-mono">{project.id}</span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 min-h-[3.5rem] leading-tight">
                    {project.projectName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-semibold mb-1">{t('vendors.one_project')}</p>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate" title={project.vendor}>{project.vendor}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold mb-1">{t('projects.budget_label')}</p>
                        <p className="text-sm font-bold text-cardano-blue flex items-center">
                          <Wallet className="h-3 w-3 mr-1" />
                          ₳{project.totalAmount.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold mb-1">{t('projects.spent_label')}</p>
                        <p className="text-sm font-bold text-orange-600 flex items-center">
                          <ArrowRight className="h-3 w-3 mr-1" />
                          ₳{project.amountSpent.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="pt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500 dark:text-gray-400">{t('projects.execution')}</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {((project.amountSpent / project.totalAmount) * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-cardano-blue h-1.5 rounded-full"
                          style={{ width: `${(project.amountSpent / project.totalAmount) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link to={`/projects/${project.id}`} className="w-full">
                    <Button variant="outline" className="w-full justify-between hover:bg-cardano-blue hover:text-white group">
                      {t('projects.view_details')}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden transition-colors">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700">
                  <TableHead className="w-[120px] cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => requestSort('status')}>
                    <div className="flex items-center gap-1">
                      {t('projects.status_label')}
                      {sortConfig?.key === 'status' ? (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />) : null}
                    </div>
                  </TableHead>
                  <TableHead className="w-[150px] cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => requestSort('id')}>
                    <div className="flex items-center gap-1">
                      {t('projects.id_label')}
                      {sortConfig?.key === 'id' ? (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />) : null}
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[250px] cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => requestSort('projectName')}>
                    <div className="flex items-center gap-1">
                      {t('projects.name_label')}
                      {sortConfig?.key === 'projectName' ? (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />) : null}
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => requestSort('vendor')}>
                    <div className="flex items-center gap-1">
                      {t('vendors.name_label')}
                      {sortConfig?.key === 'vendor' ? (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />) : null}
                    </div>
                  </TableHead>
                  <TableHead className="text-right cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => requestSort('totalAmount')}>
                    <div className="flex items-center justify-end gap-1">
                      {t('projects.budget_label')}
                      {sortConfig?.key === 'totalAmount' ? (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />) : null}
                    </div>
                  </TableHead>
                  <TableHead className="text-right cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => requestSort('amountSpent')}>
                    <div className="flex items-center justify-end gap-1">
                      {t('projects.spent_label')}
                      {sortConfig?.key === 'amountSpent' ? (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />) : null}
                    </div>
                  </TableHead>
                  <TableHead className="w-[150px]">{t('projects.execution')}</TableHead>
                  <TableHead className="text-right">{t('projects.action_label')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedProjects.map((project) => (
                  <TableRow key={project.id} className="hover:bg-gray-50/50 transition-colors">
                    <TableCell>
                      <Badge variant="outline" className={`${getStatusColor(project.status)} whitespace-nowrap`}>
                        {t(`status.${project.status.toLowerCase().replace(' ', '_')}`) || project.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono text-xs text-gray-500">
                      {project.id}
                    </TableCell>
                    <TableCell className="font-semibold text-gray-900 dark:text-gray-100">
                      {project.projectName}
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">
                      <div className="truncate max-w-[150px]" title={project.vendor}>
                        {project.vendor}
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-bold text-cardano-blue">
                      {project.totalAmount.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right font-bold text-orange-600">
                      {project.amountSpent.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400">
                          {((project.amountSpent / project.totalAmount) * 100).toFixed(0)}%
                        </span>
                        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1">
                          <div
                            className="bg-cardano-blue h-1 rounded-full"
                            style={{ width: `${(project.amountSpent / project.totalAmount) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link to={`/projects/${project.id}`}>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-cardano-blue">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )
      ) : (
        <div className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl py-20 text-center">
          <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
            <FilterX className="h-8 w-8 text-gray-300" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{t('projects.no_projects')}</h3>
          <p className="text-gray-500">{t('projects.no_projects_desc')}</p>
          <Button variant="link" className="text-cardano-blue mt-2" onClick={resetFilters}>
            {t('projects.clear_filters')}
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default Projects;
