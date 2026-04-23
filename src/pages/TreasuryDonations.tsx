import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Heart, Coins, TrendingUp, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const donationsData = [
  { epoch: 541, date: '2025-01-28', amount: 1010, txId: 'a7b3...c9d1' },
  { epoch: 540, date: '2025-01-23', amount: 1010, txId: 'f2e4...b8a0' },
  { epoch: 539, date: '2025-01-18', amount: 1010, txId: 'd6c5...e3f2' },
  { epoch: 538, date: '2025-01-13', amount: 1010, txId: 'c1d0...a4b9' },
  { epoch: 537, date: '2025-01-08', amount: 1010, txId: 'b9a8...f7e6' },
  { epoch: 536, date: '2025-01-03', amount: 1010, txId: 'e5d4...c3b2' },
  { epoch: 535, date: '2024-12-29', amount: 1010, txId: 'a1b2...d3c4' },
  { epoch: 534, date: '2024-12-24', amount: 1010, txId: 'f9e8...d7c6' },
  { epoch: 533, date: '2024-12-19', amount: 1010, txId: 'b5a4...e3f2' },
  { epoch: 532, date: '2024-12-14', amount: 1010, txId: 'd1c0...a9b8' },
];

const TreasuryDonations = () => {
  return (
    <Layout>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg text-red-600 dark:text-red-400">
            <Heart className="h-6 w-6 fill-current" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Treasury Donations</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
          Tracking voluntary contributions to the Cardano Treasury. These donations supplement the protocol-automated funding, 
          demonstrating community commitment to the ecosystem's long-term sustainability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-red-100 dark:border-red-900/50 bg-red-50/30 dark:bg-red-900/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-2">
              <Coins className="h-4 w-4" />
              Total Donated (All-time)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">₳ 2,010,753</p>
            <p className="text-xs text-red-600/70 dark:text-red-400/70 mt-1 font-medium">+1,010 ADA this epoch</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800/40 dark:border-gray-800 transition-colors">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Recent Velocity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">₳ 1,010</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">Avg. per epoch (last 10)</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800/40 dark:border-gray-800 transition-colors">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Impact Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 border-none">
              High Community Support
            </Badge>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium">Regular voluntary influx</p>
          </CardContent>
        </Card>
      </div>

      <Card className="dark:bg-gray-800/40 dark:border-gray-800 transition-colors">
        <CardHeader>
          <CardTitle className="dark:text-white">Recent Donation History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700">
                  <TableHead className="dark:text-gray-300">Date</TableHead>
                  <TableHead className="dark:text-gray-300">Epoch</TableHead>
                  <TableHead className="dark:text-gray-300">Transaction ID</TableHead>
                  <TableHead className="text-right dark:text-gray-300">Amount (ADA)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donationsData.map((donation, index) => (
                  <TableRow key={index} className="border-gray-200 dark:border-gray-700">
                    <TableCell className="font-medium text-gray-600 dark:text-gray-400">{donation.date}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="dark:border-gray-700 dark:text-gray-300">{donation.epoch}</Badge>
                    </TableCell>
                    <TableCell>
                      <a 
                        href={`https://cexplorer.io/tx/${donation.txId}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cardano-blue dark:text-cardano-teal hover:underline flex items-center gap-1 font-mono text-xs"
                      >
                        {donation.txId}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </TableCell>
                    <TableCell className="text-right font-bold text-gray-900 dark:text-gray-100">
                      ₳ {donation.amount.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 text-center">
            <a 
              href="https://cexplorer.io/treasury/donation?tab=donations" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-cardano-blue dark:hover:text-cardano-teal underline transition-colors"
            >
              View full historical data on Cexplorer.io
            </a>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default TreasuryDonations;
