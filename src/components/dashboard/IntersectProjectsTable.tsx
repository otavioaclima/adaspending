
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { intersectProjects } from "@/data/intersectData";
import { Link } from "react-router-dom";
import { ArrowUpDown, ArrowUp, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type SortConfig = {
  key: keyof typeof intersectProjects[0] | null;
  direction: 'asc' | 'desc';
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/40';
    case 'paused':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-900/40';
    case 'in progress':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/40';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700';
  }
};

const IntersectProjectsTable = () => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSort = (key: keyof typeof intersectProjects[0]) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    setCurrentPage(1); // Reset to first page on sort
  };

  const sortedProjects = [...intersectProjects].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
    }

    const aStr = String(aValue).toLowerCase();
    const bStr = String(bValue).toLowerCase();

    if (aStr < bStr) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aStr > bStr) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  // Pagination logic
  const totalItems = sortedProjects.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = sortedProjects.slice(startIndex, startIndex + itemsPerPage);

  const SortIcon = ({ columnKey }: { columnKey: keyof typeof intersectProjects[0] }) => {
    if (sortConfig.key !== columnKey) return <ArrowUpDown className="ml-2 h-4 w-4 opacity-30" />;
    return sortConfig.direction === 'asc' ? <ArrowUp className="ml-2 h-4 w-4 text-cardano-blue" /> : <ArrowDown className="ml-2 h-4 w-4 text-cardano-blue" />;
  };

  return (
    <Card className="w-full border-none shadow-xl bg-white dark:bg-gray-800/50 backdrop-blur-sm transition-all overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-black tracking-tight">Intersect Treasury Projects</CardTitle>
        <CardDescription className="font-medium text-gray-500 dark:text-gray-400">
          Detailed list of projects funded by Intersect Treasury Contracts 1
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900/40">
          <Table>
            <TableHeader className="bg-gray-50/80 dark:bg-gray-900/80">
              <TableRow className="border-gray-100 dark:border-gray-800">
                <TableHead 
                  className="w-[350px] cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                  onClick={() => handleSort('projectName')}
                >
                  <div className="flex items-center text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Project Name
                    <SortIcon columnKey="projectName" />
                  </div>
                </TableHead>
                <TableHead 
                  className="cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                  onClick={() => handleSort('vendor')}
                >
                  <div className="flex items-center text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Vendor
                    <SortIcon columnKey="vendor" />
                  </div>
                </TableHead>
                <TableHead 
                  className="text-right cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                  onClick={() => handleSort('totalAmount')}
                >
                  <div className="flex items-center justify-end text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Total Budget
                    <SortIcon columnKey="totalAmount" />
                  </div>
                </TableHead>
                <TableHead 
                  className="text-right cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                  onClick={() => handleSort('amountSpent')}
                >
                  <div className="flex items-center justify-end text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Spent
                    <SortIcon columnKey="amountSpent" />
                  </div>
                </TableHead>
                <TableHead 
                  className="text-center cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                  onClick={() => handleSort('status')}
                >
                  <div className="flex items-center justify-center text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Status
                    <SortIcon columnKey="status" />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedProjects.map((project) => (
                <TableRow key={project.id} className="border-gray-50 dark:border-gray-800/50 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                  <TableCell className="py-4">
                    <Link to={`/projects/${project.id}`} className="font-bold text-gray-900 dark:text-gray-100 hover:text-cardano-blue transition-colors line-clamp-2">
                      {project.projectName}
                    </Link>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="truncate max-w-[300px] text-gray-600 dark:text-gray-400 font-medium" title={project.vendor}>
                      {project.vendor}
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-black text-gray-900 dark:text-gray-100 py-4">
                    ₳{project.totalAmount.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-black text-orange-600 py-4">
                    ₳{project.amountSpent.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-center py-4">
                    <Badge className={`${getStatusColor(project.status)} font-bold border-none px-3 py-1`}>
                      {project.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Showing <span className="text-gray-900 dark:text-white font-bold">{startIndex + 1}</span> to <span className="text-gray-900 dark:text-white font-bold">{Math.min(startIndex + itemsPerPage, totalItems)}</span> of <span className="text-gray-900 dark:text-white font-bold">{totalItems}</span> projects
          </p>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="h-9 w-9 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                // Simple logic to show current, first, last and surrounding pages
                if (
                  pageNum === 1 || 
                  pageNum === totalPages || 
                  (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                ) {
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className={`h-9 w-9 p-0 font-bold ${currentPage === pageNum ? 'bg-cardano-blue hover:bg-cardano-blue/90' : ''}`}
                    >
                      {pageNum}
                    </Button>
                  );
                } else if (
                  pageNum === currentPage - 2 || 
                  pageNum === currentPage + 2
                ) {
                  return <span key={pageNum} className="px-1 text-gray-400">...</span>;
                }
                return null;
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="h-9 w-9 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntersectProjectsTable;
