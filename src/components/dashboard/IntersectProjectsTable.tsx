
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
      return 'bg-green-100 text-green-800 hover:bg-green-200';
    case 'paused':
      return 'bg-amber-100 text-amber-800 hover:bg-amber-200';
    case 'in progress':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
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
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px]">Project Name</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead className="text-right">Total Budget</TableHead>
                <TableHead className="text-right">Spent</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {intersectProjects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">
                    <Link to={`/projects/${project.id}`} className="hover:text-cardano-blue hover:underline">
                      {project.projectName}
                    </Link>
                  </TableCell>
                  <TableCell>{project.vendor}</TableCell>
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
