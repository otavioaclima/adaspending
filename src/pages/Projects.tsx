
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
import { intersectProjects } from "@/data/intersectData";
import { Briefcase, ArrowRight, Wallet, CheckCircle2, Clock, Search as SearchIcon, FilterX } from "lucide-react";

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
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sizeFilter, setSizeFilter] = useState('all');
  const [vendorFilter, setVendorFilter] = useState('all');

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

  const resetFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setSizeFilter('all');
    setVendorFilter('all');
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Intersect Treasury Projects</h1>
        <p className="text-gray-600 max-w-3xl">
          Detailed overview of all projects funded through the Intersect Treasury Contracts 1. 
          Track progress, budgets, and vendors for each initiative.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-8 flex flex-col lg:flex-row gap-4 items-end">
        <div className="flex-1 w-full lg:w-auto">
          <label className="text-xs font-bold text-gray-400 uppercase mb-1.5 block">Search Projects</label>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Project name or vendor..." 
              className="pl-10 h-11 border-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full lg:w-48">
          <label className="text-xs font-bold text-gray-400 uppercase mb-1.5 block">Status</label>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-11 border-gray-200">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Paused">Paused</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full lg:w-48">
          <label className="text-xs font-bold text-gray-400 uppercase mb-1.5 block">Budget Size</label>
          <Select value={sizeFilter} onValueChange={setSizeFilter}>
            <SelectTrigger className="h-11 border-gray-200">
              <SelectValue placeholder="All Sizes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sizes</SelectItem>
              <SelectItem value="small">Small (&lt; 1M ₳)</SelectItem>
              <SelectItem value="medium">Medium (1M - 10M ₳)</SelectItem>
              <SelectItem value="large">Large (&gt; 10M ₳)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full lg:w-56">
          <label className="text-xs font-bold text-gray-400 uppercase mb-1.5 block">Vendor</label>
          <Select value={vendorFilter} onValueChange={setVendorFilter}>
            <SelectTrigger className="h-11 border-gray-200">
              <SelectValue placeholder="All Vendors" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Vendors</SelectItem>
              {vendors.map(v => (
                <SelectItem key={v} value={v}>{v}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          variant="ghost" 
          className="h-11 px-4 text-gray-500 hover:text-red-600 hover:bg-red-50 flex items-center"
          onClick={resetFilters}
        >
          <FilterX className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full hover:shadow-lg transition-shadow border-gray-200">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className={`${getStatusColor(project.status)} flex items-center`}>
                    {getStatusIcon(project.status)}
                    {project.status}
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
                    <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Vendor</p>
                    <p className="text-sm font-medium text-gray-700">{project.vendor}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Total Budget</p>
                      <p className="text-sm font-bold text-cardano-blue flex items-center">
                        <Wallet className="h-3 w-3 mr-1" />
                        ₳{project.totalAmount.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Spent</p>
                      <p className="text-sm font-bold text-orange-600 flex items-center">
                        <ArrowRight className="h-3 w-3 mr-1" />
                        ₳{project.amountSpent.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="pt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Execution</span>
                      <span className="font-semibold text-gray-700">
                        {((project.amountSpent / project.totalAmount) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
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
                    View Project Details
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl py-20 text-center">
          <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
            <FilterX className="h-8 w-8 text-gray-300" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">No projects found</h3>
          <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
          <Button variant="link" className="text-cardano-blue mt-2" onClick={resetFilters}>
            Clear all filters
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default Projects;
