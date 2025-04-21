
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
  { key: "requestedAmount", label: "Amount (ADA)" },
  { key: "status", label: "Status" },
  { key: "recipient", label: "Recipient" },
];

function getRecipientName(proposal: any) {
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
    if (sortKey === "recipient") {
      x = getRecipientName(a);
      y = getRecipientName(b);
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
                className="cursor-pointer select-none"
                onClick={() => handleSort(col.key)}
              >
                {col.label}
                <span className="ml-1 text-gray-400">
                  {sortKey === col.key ? (sortAsc ? "▲" : "▼") : ""}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((p, i) => (
            <TableRow key={p.id ?? i}>
              <TableCell className="font-medium text-primary max-w-[220px] truncate">{p.title}</TableCell>
              <TableCell>{p.category}</TableCell>
              <TableCell>{p.requestedAmount.toLocaleString()} ADA</TableCell>
              <TableCell>
                <span
                  className={
                    "inline-block rounded px-2 py-0.5 text-xs font-semibold " +
                    (p.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : p.status === "rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-100 text-gray-700")
                  }
                >
                  {p.status?.charAt(0).toUpperCase() + p.status?.slice(1)}
                </span>
              </TableCell>
              <TableCell className="max-w-[140px] truncate">{getRecipientName(p)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
