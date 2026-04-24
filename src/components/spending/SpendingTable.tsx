
import React, { useState } from "react";
import { proposals } from "@/data/mockData";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

const columns = [
  { key: "title", label: "Title" },
  { key: "category", label: "Category" },
  { key: "requestedAmount", label: "Amount (₳)" },
  { key: "status", label: "Status" },
  { key: "vendor", label: "Vendor" },
];

function getVendorName(proposal: any) {
  return proposal.recipient?.name || proposal.recipientName || "-";
}

export default function SpendingTable() {
  const [sortKey, setSortKey] = useState("requestedAmount");
  const [sortAsc, setSortAsc] = useState(false);

  const handleSort = (key: string) => {
    if (sortKey === key) setSortAsc((prev) => !prev);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const sortedData = [...proposals].sort((a, b) => {
    let x = a[sortKey], y = b[sortKey];
    if (sortKey === 'vendor') {
      x = getVendorName(a);
      y = getVendorName(b);
    }
    if (typeof x === "string" && typeof y === "string") return sortAsc ? x.localeCompare(y) : y.localeCompare(x);
    if (typeof x === "number" && typeof y === "number") return sortAsc ? x - y : y - x;
    return 0;
  });

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableCaption>Total proposals: {proposals.length}</TableCaption>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead
                key={col.key}
                className="cursor-pointer select-none text-gray-900 dark:text-gray-300 font-bold"
                onClick={() => handleSort(col.key)}
              >
                {col.label}
                <span className="ml-1 text-gray-400 dark:text-gray-500">
                  {sortKey === col.key ? (sortAsc ? "▲" : "▼") : ""}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((p, i) => (
            <TableRow key={p.id ?? i} className="border-gray-100 dark:border-gray-800">
              <TableCell className="font-medium text-primary dark:text-cardano-teal max-w-[220px] truncate">{p.title}</TableCell>
              <TableCell className="text-gray-600 dark:text-gray-400">{p.category}</TableCell>
              <TableCell className="text-gray-900 dark:text-gray-100 font-medium">₳{p.requestedAmount.toLocaleString()}</TableCell>
              <TableCell>
                <span
                  className={
                    "inline-block rounded px-2 py-0.5 text-xs font-semibold " +
                    (p.status === "approved"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : p.status === "rejected"
                      ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400")
                  }
                >
                  {p.status?.charAt(0).toUpperCase() + p.status?.slice(1)}
                </span>
              </TableCell>
              <TableCell className="max-w-[140px] truncate text-gray-600 dark:text-gray-400 font-medium">{getVendorName(p)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
