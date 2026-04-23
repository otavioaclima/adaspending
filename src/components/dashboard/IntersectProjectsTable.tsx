
import React from 'react';
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
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Intersect Treasury Projects</CardTitle>
        <CardDescription>
          Detailed list of projects funded by Intersect Treasury Contracts 1
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border dark:border-gray-800">
          <Table>
            <TableHeader>
              <TableRow className="dark:border-gray-800">
                <TableHead className="w-[400px]">Project Name</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead className="text-right">Total Budget</TableHead>
                <TableHead className="text-right">Spent</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {intersectProjects.map((project) => (
                <TableRow key={project.id} className="dark:border-gray-800">
                  <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                    <Link to={`/projects/${project.id}`} className="hover:text-cardano-blue hover:underline">
                      {project.projectName}
                    </Link>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400">
                    <div className="truncate max-w-[150px]" title={project.vendor}>
                      {project.vendor}
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    ₳{project.totalAmount.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-mono text-orange-600">
                    ₳{project.amountSpent.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntersectProjectsTable;
