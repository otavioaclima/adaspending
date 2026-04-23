import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  Printer, ChevronLeft, ChevronRight, Maximize2, Search, Bell, BarChart3,
  Users, Award, Vote, Globe, Home, ArrowRight, TrendingUp, TrendingDown,
  MapPin, Calendar, ExternalLink, ChevronDown, Star, CheckCircle2, Clock,
  AlertTriangle, FileText, Filter
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Hi-Fi Screen Mockup Components                                      */
/* ------------------------------------------------------------------ */

const MockHeader: React.FC<{ compact?: boolean }> = ({ compact }) => (
  <div className="bg-cardano-gradient px-4 py-2 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="text-white font-bold text-sm">₳ ADAspending</div>
      {!compact && (
        <div className="hidden sm:flex items-center gap-1">
          {['Dashboard', 'Proposals', 'Proposals', 'Recipients', 'Explorer', 'Governance'].map(link => (
            <span key={link} className="text-white/70 text-[9px] px-2 py-0.5 rounded hover:bg-white/10">{link}</span>
          ))}
        </div>
      )}
    </div>
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
        <Search className="w-3 h-3 text-white/80" />
      </div>
    </div>
  </div>
);

const MockFooter: React.FC = () => (
  <div className="bg-cardano-dark px-4 py-3">
    <div className="flex justify-between text-[8px] text-white/40">
      <div className="space-y-0.5">
        <div className="text-white/60 font-semibold">Explore</div>
        <div>Dashboard</div>
        <div>Proposals</div>
      </div>
      <div className="space-y-0.5">
        <div className="text-white/60 font-semibold">Data</div>
        <div>Explorer</div>
        <div>Proposals</div>
      </div>
      <div className="space-y-0.5">
        <div className="text-white/60 font-semibold">Resources</div>
        <div>Governance</div>
        <div>FAQ</div>
      </div>
    </div>
    <div className="text-[7px] text-white/30 mt-2 text-center">© 2026 ADAspending.com — Cardano Treasury Transparency</div>
  </div>
);

const MockStatCard: React.FC<{ label: string; value: string; icon: React.ElementType; trend?: string; up?: boolean }> = ({ label, value, icon: Icon, trend, up }) => (
  <div className="bg-card border rounded-md p-2 flex flex-col">
    <div className="flex items-center justify-between mb-1">
      <span className="text-[7px] text-muted-foreground">{label}</span>
      <Icon className="w-3 h-3 text-cardano-teal" />
    </div>
    <div className="text-sm font-bold text-foreground">{value}</div>
    {trend && (
      <div className={`flex items-center gap-0.5 text-[7px] ${up ? 'text-green-600' : 'text-destructive'}`}>
        {up ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
        {trend}
      </div>
    )}
  </div>
);

const MockProposalCard: React.FC<{ title: string; category: string; status: string; amount: string }> = ({ title, category, status, amount }) => (
  <div className="bg-card border rounded-md p-2 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-1 mb-1">
      <span className="px-1 py-0 rounded text-[6px] font-semibold bg-cardano-teal/10 text-cardano-teal">{category}</span>
      <span className={`px-1 py-0 rounded text-[6px] font-semibold ${status === 'Completed' ? 'bg-green-100 text-green-700' : status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>{status}</span>
    </div>
    <div className="text-[9px] font-semibold text-foreground leading-tight mb-1">{title}</div>
    <div className="flex items-center justify-between">
      <span className="text-[8px] text-cardano-blue font-bold">{amount}</span>
      <ArrowRight className="w-2.5 h-2.5 text-muted-foreground" />
    </div>
  </div>
);

const MockBarChart: React.FC<{ bars?: { label: string; h: number; color: string }[] }> = ({ bars }) => {
  const data = bars || [
    { label: 'F10', h: 60, color: 'bg-cardano-blue' },
    { label: 'F11', h: 80, color: 'bg-cardano-blue' },
    { label: 'F12', h: 45, color: 'bg-cardano-teal' },
    { label: 'F13', h: 90, color: 'bg-cardano-teal' },
    { label: 'F14', h: 70, color: 'bg-cardano-blue' },
  ];
  return (
    <div className="flex items-end gap-1.5 h-16">
      {data.map((b, i) => (
        <div key={i} className="flex flex-col items-center gap-0.5 flex-1">
          <div className={`w-full rounded-t ${b.color}`} style={{ height: `${b.h}%` }} />
          <span className="text-[6px] text-muted-foreground">{b.label}</span>
        </div>
      ))}
    </div>
  );
};

const MockPieChart: React.FC = () => (
  <div className="relative w-14 h-14 mx-auto">
    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
      <circle cx="18" cy="18" r="15.91" fill="none" stroke="hsl(201 100% 47%)" strokeWidth="3" strokeDasharray="35 65" />
      <circle cx="18" cy="18" r="15.91" fill="none" stroke="#0033AD" strokeWidth="3" strokeDasharray="25 75" strokeDashoffset="-35" />
      <circle cx="18" cy="18" r="15.91" fill="none" stroke="#FF5733" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="-60" />
      <circle cx="18" cy="18" r="15.91" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="-80" />
    </svg>
  </div>
);

const MockTableRow: React.FC<{ cells: string[]; highlight?: boolean }> = ({ cells, highlight }) => (
  <div className={`grid gap-2 px-2 py-1 text-[7px] border-b border-border/30 ${highlight ? 'bg-cardano-teal/5' : ''}`} style={{ gridTemplateColumns: `repeat(${cells.length}, 1fr)` }}>
    {cells.map((c, i) => (
      <span key={i} className={i === 0 ? 'text-foreground font-medium' : 'text-muted-foreground'}>{c}</span>
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/*  Screen Definitions                                                  */
/* ------------------------------------------------------------------ */

interface ScreenDef {
  title: string;
  route: string;
  description: string;
  render: () => React.ReactNode;
}

const screenDefinitions: ScreenDef[] = [
  {
    title: 'Landing Page',
    route: '/',
    description: 'Public-facing entry point with value proposition, features, and call-to-action.',
    render: () => (
      <div className="bg-background">
        {/* Hero */}
        <div className="bg-cardano-gradient px-4 py-6 text-center">
          <div className="text-white font-bold text-lg mb-1">₳ ADAspending</div>
          <div className="text-white/80 text-[10px] mb-3 max-w-[200px] mx-auto">Transparency platform for Cardano Treasury spending through Project Catalyst</div>
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-white text-cardano-blue text-[9px] font-semibold">
            Explore Dashboard <ArrowRight className="w-3 h-3" />
          </div>
        </div>
        {/* Features */}
        <div className="p-3">
          <div className="text-[8px] font-semibold text-center text-muted-foreground mb-2 uppercase tracking-wider">Platform Features</div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: Search, name: 'Award Search', desc: 'Find any funded proposal' },
              { icon: BarChart3, name: 'Spending Analysis', desc: 'Charts, maps & tables' },
              { icon: Vote, name: 'Governance', desc: 'Track fund rounds' },
              { icon: Users, name: 'Recipients', desc: 'Verify track records' },
            ].map((f, i) => (
              <div key={i} className="bg-card border rounded-md p-2 text-center">
                <f.icon className="w-4 h-4 text-cardano-teal mx-auto mb-1" />
                <div className="text-[8px] font-semibold text-foreground">{f.name}</div>
                <div className="text-[7px] text-muted-foreground">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
        {/* About */}
        <div className="px-4 py-3 bg-muted/30">
          <div className="text-[8px] font-semibold text-foreground mb-1">About the Platform</div>
          <div className="w-full h-1 bg-muted rounded mb-1" />
          <div className="w-4/5 h-1 bg-muted rounded mb-1" />
          <div className="w-3/5 h-1 bg-muted rounded" />
        </div>
        {/* FAQ */}
        <div className="px-4 py-3">
          {['What is ADAspending?', 'How often is data updated?', 'Is it free?'].map((q, i) => (
            <div key={i} className="flex items-center justify-between py-1.5 border-b border-border/40">
              <span className="text-[8px] text-foreground font-medium">{q}</span>
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="bg-cardano-blue/10 px-4 py-3 text-center">
          <div className="text-[9px] font-semibold text-foreground mb-1">Ready to explore?</div>
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-cardano-blue text-white text-[8px] font-semibold">
            Start Exploring <ArrowRight className="w-2.5 h-2.5" />
          </div>
        </div>
        <MockFooter />
      </div>
    ),
  },
  {
    title: 'Dashboard',
    route: '/dashboard',
    description: 'Central analytics hub with stats, charts, alerts, and proposal overview.',
    render: () => (
      <div className="bg-background">
        <MockHeader />
        {/* Search Hero */}
        <div className="bg-gradient-to-r from-cardano-blue/5 to-cardano-teal/5 px-4 py-3">
          <div className="text-[10px] font-semibold text-foreground mb-1">Welcome to ADAspending</div>
          <div className="flex items-center gap-1 bg-card border rounded-md px-2 py-1">
            <Search className="w-3 h-3 text-muted-foreground" />
            <span className="text-[8px] text-muted-foreground">Search proposals, recipients...</span>
          </div>
        </div>
        {/* Stats */}
        <div className="px-3 py-2 grid grid-cols-2 gap-2">
          <MockStatCard label="Total Funded" value="₳ 72.5M" icon={Award} trend="+12.3%" up />
          <MockStatCard label="Active Proposals" value="1,247" icon={FileText} trend="+8.1%" up />
          <MockStatCard label="Total Recipients" value="892" icon={Users} trend="+5.4%" up />
          <MockStatCard label="Avg. Funding" value="₳ 58.1K" icon={TrendingUp} trend="-2.1%" />
        </div>
        {/* Analysis Panels */}
        <div className="px-3 py-2">
          <div className="grid grid-cols-3 gap-1.5">
            <div className="bg-card border rounded-md p-2">
              <div className="text-[7px] font-semibold text-foreground mb-1">Budget Comparator</div>
              <MockBarChart />
            </div>
            <div className="bg-card border rounded-md p-2 flex flex-col items-center justify-center">
              <div className="text-[7px] font-semibold text-foreground mb-1">Fund Utilization</div>
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.91" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.91" fill="none" stroke="#1BAAD6" strokeWidth="3" strokeDasharray="72 28" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-foreground">72%</div>
              </div>
            </div>
            <div className="bg-card border rounded-md p-2">
              <div className="text-[7px] font-semibold text-foreground mb-1">Overspending</div>
              <div className="space-y-1">
                {['Proj Alpha', 'DeFi Hub'].map((n, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <AlertTriangle className="w-2 h-2 text-cardano-coral" />
                    <span className="text-[6px] text-muted-foreground">{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Alerts */}
        <div className="px-3 py-1">
          <div className="bg-destructive/5 border border-destructive/20 rounded-md px-2 py-1.5 flex items-center gap-2">
            <Bell className="w-3 h-3 text-destructive" />
            <span className="text-[7px] text-foreground">3 proposals exceeded budget this month</span>
          </div>
        </div>
        {/* Charts */}
        <div className="px-3 py-2">
          <div className="bg-card border rounded-md p-2">
            <div className="text-[7px] font-semibold text-foreground mb-1">Spending by Category</div>
            <div className="flex items-center gap-3">
              <MockPieChart />
              <div className="space-y-0.5 text-[6px]">
                {[
                  { c: 'DeFi', color: 'bg-cardano-teal' },
                  { c: 'Education', color: 'bg-cardano-blue' },
                  { c: 'Governance', color: 'bg-cardano-coral' },
                  { c: 'Other', color: 'bg-muted' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                    <span className="text-muted-foreground">{item.c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Proposals Grid */}
        <div className="px-3 py-2">
          <div className="text-[8px] font-semibold text-foreground mb-1.5">Recent Proposals</div>
          <div className="grid grid-cols-2 gap-1.5">
            <MockProposalCard title="Cardano DeFi Hub" category="DeFi" status="In Progress" amount="₳ 125K" />
            <MockProposalCard title="Education Portal" category="Education" status="Completed" amount="₳ 85K" />
          </div>
        </div>
        <MockFooter />
      </div>
    ),
  },
  {
    title: 'Award Search',
    route: '/proposals',
    description: 'Full-text search with multi-criteria filtering for precise award discovery.',
    render: () => (
      <div className="bg-background">
        <MockHeader />
        <div className="px-3 py-3">
          <div className="text-xs font-bold text-foreground mb-2">Award Search</div>
          {/* Search */}
          <div className="flex items-center gap-1 bg-card border rounded-md px-2 py-1.5 mb-2">
            <Search className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-[9px] text-muted-foreground">Search proposals by title, keyword, or recipient...</span>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-1 mb-3">
            {['Category', 'Status', 'Fund Round', 'Amount Range'].map(f => (
              <div key={f} className="flex items-center gap-0.5 px-2 py-0.5 rounded-md border text-[7px] text-muted-foreground bg-card">
                <Filter className="w-2.5 h-2.5" />
                {f}
                <ChevronDown className="w-2.5 h-2.5" />
              </div>
            ))}
          </div>
          {/* Active Filters */}
          <div className="flex gap-1 mb-2">
            <span className="px-1.5 py-0 rounded-full bg-cardano-teal/10 text-cardano-teal text-[7px] font-semibold">DeFi ×</span>
            <span className="px-1.5 py-0 rounded-full bg-cardano-blue/10 text-cardano-blue text-[7px] font-semibold">Fund 13 ×</span>
          </div>
          {/* Results */}
          <div className="text-[7px] text-muted-foreground mb-1.5">Showing 48 results</div>
          <div className="space-y-1.5">
            {[
              { t: 'DeFi Lending Protocol', c: 'DeFi', s: 'In Progress', a: '₳ 200K', r: 'F13' },
              { t: 'Cardano DEX Aggregator', c: 'DeFi', s: 'Funded', a: '₳ 150K', r: 'F13' },
              { t: 'Yield Farming Analytics', c: 'DeFi', s: 'Completed', a: '₳ 90K', r: 'F12' },
              { t: 'Cross-chain Bridge', c: 'DeFi', s: 'In Progress', a: '₳ 300K', r: 'F13' },
            ].map((r, i) => (
              <div key={i} className="bg-card border rounded-md p-2 flex items-center justify-between">
                <div>
                  <div className="text-[8px] font-semibold text-foreground">{r.t}</div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="px-1 py-0 rounded text-[6px] bg-cardano-teal/10 text-cardano-teal">{r.c}</span>
                    <span className={`px-1 py-0 rounded text-[6px] ${r.s === 'Completed' ? 'bg-green-100 text-green-700' : r.s === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>{r.s}</span>
                    <span className="text-[6px] text-muted-foreground">{r.r}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-bold text-cardano-blue">{r.a}</div>
                  <ArrowRight className="w-2.5 h-2.5 text-muted-foreground ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <MockFooter />
      </div>
    ),
  },
  {
    title: 'Proposals Grid',
    route: '/proposals',
    description: 'Browse all proposals in a responsive card grid with status and category.',
    render: () => (
      <div className="bg-background">
        <MockHeader />
        <div className="px-3 py-3">
          <div className="text-xs font-bold text-foreground mb-0.5">All Proposals</div>
          <div className="text-[8px] text-muted-foreground mb-3">Browse 1,247 funded proposals across all Catalyst rounds</div>
          <div className="grid grid-cols-2 gap-2">
            <MockProposalCard title="Cardano DeFi Hub" category="DeFi" status="In Progress" amount="₳ 125K" />
            <MockProposalCard title="Education Portal" category="Education" status="Completed" amount="₳ 85K" />
            <MockProposalCard title="Governance Tools" category="Governance" status="Funded" amount="₳ 64K" />
            <MockProposalCard title="NFT Marketplace" category="DeFi" status="In Progress" amount="₳ 200K" />
            <MockProposalCard title="Wallet Integration" category="Developer" status="Completed" amount="₳ 45K" />
            <MockProposalCard title="Community Hub" category="Community" status="Funded" amount="₳ 30K" />
          </div>
          <div className="flex items-center justify-center gap-1 mt-3">
            {[1, 2, 3, '...', 12].map((p, i) => (
              <span key={i} className={`w-5 h-5 rounded text-[7px] flex items-center justify-center ${p === 1 ? 'bg-cardano-blue text-white' : 'bg-muted text-muted-foreground'}`}>{p}</span>
            ))}
          </div>
        </div>
        <MockFooter />
      </div>
    ),
  },
  {
    title: 'Proposal Detail',
    route: '/proposals/:id',
    description: 'Full proposal view with voting results, milestones, and linked recipient.',
    render: () => (
      <div className="bg-background">
        <MockHeader />
        <div className="px-3 py-3">
          {/* Title */}
          <div className="flex items-start gap-2 mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-0.5">
                <span className="px-1 py-0 rounded text-[6px] font-semibold bg-cardano-teal/10 text-cardano-teal">DeFi</span>
                <span className="px-1 py-0 rounded text-[6px] font-semibold bg-blue-100 text-blue-700">In Progress</span>
                <span className="text-[6px] text-muted-foreground">Fund 13</span>
              </div>
              <div className="text-xs font-bold text-foreground">Cardano DeFi Lending Protocol</div>
              <div className="text-[7px] text-muted-foreground mt-0.5">Building a decentralized lending and borrowing platform on Cardano...</div>
            </div>
          </div>
          {/* Budget */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="bg-card border rounded-md p-2">
              <div className="text-[7px] text-muted-foreground">Requested</div>
              <div className="text-sm font-bold text-foreground">₳ 200,000</div>
            </div>
            <div className="bg-card border rounded-md p-2">
              <div className="text-[7px] text-muted-foreground">Allocated</div>
              <div className="text-sm font-bold text-cardano-teal">₳ 180,000</div>
            </div>
          </div>
          {/* Voting */}
          <div className="bg-card border rounded-md p-2 mb-2">
            <div className="text-[7px] font-semibold text-foreground mb-1">Voting Results</div>
            <div className="space-y-1">
              {[
                { label: 'Yes', pct: 72, color: 'bg-green-500' },
                { label: 'No', pct: 18, color: 'bg-destructive' },
                { label: 'Abstain', pct: 10, color: 'bg-muted-foreground' },
              ].map((v, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[7px] text-muted-foreground w-8">{v.label}</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full ${v.color} rounded-full`} style={{ width: `${v.pct}%` }} />
                  </div>
                  <span className="text-[7px] font-semibold text-foreground w-6 text-right">{v.pct}%</span>
                </div>
              ))}
            </div>
          </div>
          {/* Milestones */}
          <div className="bg-card border rounded-md p-2 mb-2">
            <div className="text-[7px] font-semibold text-foreground mb-1">Milestones</div>
            <div className="space-y-1">
              {[
                { m: 'Research & Design', done: true },
                { m: 'Smart Contract MVP', done: true },
                { m: 'Testnet Launch', done: false },
                { m: 'Mainnet Deploy', done: false },
              ].map((ms, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  {ms.done ? <CheckCircle2 className="w-3 h-3 text-green-500" /> : <Clock className="w-3 h-3 text-muted-foreground" />}
                  <span className={`text-[7px] ${ms.done ? 'text-foreground' : 'text-muted-foreground'}`}>{ms.m}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Recipient Sidebar */}
          <div className="bg-gradient-to-r from-cardano-blue/5 to-cardano-teal/5 border border-cardano-teal/20 rounded-md p-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-cardano-blue/20 flex items-center justify-center text-[8px] font-bold text-cardano-blue">JD</div>
              <div>
                <div className="text-[8px] font-semibold text-foreground">John Doe</div>
                <div className="text-[7px] text-muted-foreground flex items-center gap-0.5"><MapPin className="w-2 h-2" /> Lisbon, Portugal</div>
              </div>
              <ArrowRight className="w-3 h-3 text-cardano-teal ml-auto" />
            </div>
          </div>
        </div>
        <MockFooter />
      </div>
    ),
  },
  {
    title: 'Recipients Grid',
    route: '/recipients',
    description: 'Searchable directory of all fund recipients with summary statistics.',
    render: () => (
      <div className="bg-background">
        <MockHeader />
        <div className="px-3 py-3">
          <div className="text-xs font-bold text-foreground mb-0.5">Recipients</div>
          <div className="text-[8px] text-muted-foreground mb-2">892 fund recipients across all Catalyst rounds</div>
          <div className="flex items-center gap-1 bg-card border rounded-md px-2 py-1 mb-3">
            <Search className="w-3 h-3 text-muted-foreground" />
            <span className="text-[8px] text-muted-foreground">Search recipients...</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: 'John Doe', proposals: 5, total: '₳ 420K', initials: 'JD' },
              { name: 'Alice Smith', proposals: 3, total: '₳ 280K', initials: 'AS' },
              { name: 'BlockTech Labs', proposals: 8, total: '₳ 1.2M', initials: 'BT' },
              { name: 'CardanoDev Co', proposals: 4, total: '₳ 350K', initials: 'CD' },
            ].map((r, i) => (
              <div key={i} className="bg-card border rounded-md p-2">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-cardano-blue/15 flex items-center justify-center text-[7px] font-bold text-cardano-blue">{r.initials}</div>
                  <div className="text-[8px] font-semibold text-foreground">{r.name}</div>
                </div>
                <div className="flex justify-between text-[7px]">
                  <span className="text-muted-foreground">{r.proposals} proposals</span>
                  <span className="text-cardano-teal font-semibold">{r.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <MockFooter />
      </div>
    ),
  },
  {
    title: 'Recipient Detail',
    route: '/recipients/:id',
    description: 'Complete profile with financial history, proposals, milestones, and stats.',
    render: () => (
      <div className="bg-background">
        <MockHeader />
        {/* Header */}
        <div className="bg-gradient-to-r from-cardano-blue/10 to-cardano-teal/10 px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cardano-blue/20 flex items-center justify-center text-sm font-bold text-cardano-blue">JD</div>
          <div>
            <div className="text-xs font-bold text-foreground">John Doe</div>
            <div className="text-[7px] text-muted-foreground flex items-center gap-1"><MapPin className="w-2.5 h-2.5" /> Lisbon, Portugal</div>
            <div className="flex items-center gap-1 mt-0.5">
              <ExternalLink className="w-2.5 h-2.5 text-cardano-teal" />
              <span className="text-[7px] text-cardano-teal">website</span>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="px-3 py-2 grid grid-cols-3 gap-1.5">
          <MockStatCard label="Total Received" value="₳ 420K" icon={Award} />
          <MockStatCard label="Proposals" value="5" icon={FileText} />
          <MockStatCard label="Completion" value="87%" icon={CheckCircle2} />
        </div>
        {/* Proposals */}
        <div className="px-3 py-2">
          <div className="text-[8px] font-semibold text-foreground mb-1.5">Proposals</div>
          <div className="space-y-1.5">
            <MockProposalCard title="DeFi Lending Protocol" category="DeFi" status="In Progress" amount="₳ 200K" />
            <MockProposalCard title="Cardano Analytics" category="Developer" status="Completed" amount="₳ 120K" />
          </div>
        </div>
        {/* Accounting */}
        <div className="px-3 py-2">
          <div className="text-[8px] font-semibold text-foreground mb-1">Accounting</div>
          <div className="bg-card border rounded-md overflow-hidden">
            <div className="grid grid-cols-3 gap-2 px-2 py-1 bg-muted/50 text-[7px] font-semibold text-foreground">
              <span>Date</span><span>Description</span><span className="text-right">Amount</span>
            </div>
            {[
              ['2025-12-01', 'Milestone 1', '₳ 50K'],
              ['2026-01-15', 'Milestone 2', '₳ 70K'],
              ['2026-02-28', 'Milestone 3', '₳ 80K'],
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-2 px-2 py-1 text-[7px] border-t border-border/30">
                <span className="text-muted-foreground font-mono">{row[0]}</span>
                <span className="text-foreground">{row[1]}</span>
                <span className="text-right text-cardano-teal font-semibold">{row[2]}</span>
              </div>
            ))}
          </div>
        </div>
        <MockFooter />
      </div>
    ),
  },
  {
    title: 'Spending Explorer',
    route: '/explorer',
    description: 'Interactive charts, geographic map, and data table for spending analysis.',
    render: () => (
      <div className="bg-background">
        <MockHeader />
        <div className="px-3 py-3">
          <div className="text-xs font-bold text-foreground mb-2">Spending Explorer</div>
          {/* Tabs */}
          <div className="flex gap-0.5 mb-3">
            {['Charts', 'Map', 'Data Table'].map((t, i) => (
              <span key={t} className={`px-2 py-0.5 rounded-md text-[8px] font-medium ${i === 0 ? 'bg-cardano-blue text-white' : 'bg-muted text-muted-foreground'}`}>{t}</span>
            ))}
          </div>
          {/* Chart Area */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-card border rounded-md p-2">
              <div className="text-[7px] font-semibold text-foreground mb-1">By Category</div>
              <MockPieChart />
            </div>
            <div className="bg-card border rounded-md p-2">
              <div className="text-[7px] font-semibold text-foreground mb-1">By Fund Round</div>
              <MockBarChart />
            </div>
          </div>
          <div className="bg-card border rounded-md p-2 mb-3">
            <div className="text-[7px] font-semibold text-foreground mb-1">Timeline</div>
            <div className="h-12 flex items-end gap-0.5">
              {[20, 35, 28, 40, 55, 48, 65, 72, 60, 80, 75, 90].map((h, i) => (
                <div key={i} className="flex-1 bg-cardano-teal/60 rounded-t" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex justify-between text-[5px] text-muted-foreground mt-0.5">
              <span>Jan</span><span>Jun</span><span>Dec</span>
            </div>
          </div>
          {/* Summary */}
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { l: 'Total Spent', v: '₳ 72.5M' },
              { l: 'Proposals', v: '1,247' },
              { l: 'Categories', v: '12' },
              { l: 'Countries', v: '47' },
            ].map((s, i) => (
              <div key={i} className="bg-cardano-teal/5 border border-cardano-teal/20 rounded-md p-1.5 text-center">
                <div className="text-[9px] font-bold text-foreground">{s.v}</div>
                <div className="text-[6px] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <MockFooter />
      </div>
    ),
  },
  {
    title: 'Governance',
    route: '/governance',
    description: 'Fund rounds, participation resources, and governance statistics.',
    render: () => (
      <div className="bg-background">
        <MockHeader />
        <div className="px-3 py-3">
          <div className="text-xs font-bold text-foreground mb-2">Governance</div>
          {/* Active Round */}
          <div className="bg-gradient-to-r from-cardano-blue/10 to-cardano-teal/10 border border-cardano-teal/20 rounded-md p-3 mb-3">
            <div className="flex items-center gap-1 mb-1">
              <Star className="w-3 h-3 text-cardano-teal" />
              <span className="text-[8px] font-semibold text-foreground">Fund 14 — Active</span>
            </div>
            <div className="text-[7px] text-muted-foreground mb-1.5">Voting closes in 12 days</div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-[10px] font-bold text-foreground">₳ 50M</div>
                <div className="text-[6px] text-muted-foreground">Budget</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-foreground">342</div>
                <div className="text-[6px] text-muted-foreground">Proposals</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-foreground">28.4K</div>
                <div className="text-[6px] text-muted-foreground">Voters</div>
              </div>
            </div>
          </div>
          {/* Past Rounds */}
          <div className="text-[8px] font-semibold text-foreground mb-1">Past Rounds</div>
          <div className="bg-card border rounded-md overflow-hidden mb-3">
            <MockTableRow cells={['Round', 'Allocated', 'Proposals', 'Participation']} highlight />
            <MockTableRow cells={['Fund 13', '₳ 50M', '1,247', '32,100']} />
            <MockTableRow cells={['Fund 12', '₳ 40M', '987', '28,500']} />
            <MockTableRow cells={['Fund 11', '₳ 30M', '754', '22,300']} />
          </div>
          {/* Resources */}
          <div className="text-[8px] font-semibold text-foreground mb-1">Resources</div>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { n: 'Voting Guide', icon: Vote },
              { n: 'Submit Proposal', icon: FileText },
              { n: 'DRep Directory', icon: Users },
            ].map((r, i) => (
              <div key={i} className="bg-card border rounded-md p-2 text-center">
                <r.icon className="w-4 h-4 text-cardano-teal mx-auto mb-1" />
                <div className="text-[7px] font-semibold text-foreground">{r.n}</div>
              </div>
            ))}
          </div>
        </div>
        <MockFooter />
      </div>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Main Page Component                                                 */
/* ------------------------------------------------------------------ */

const UIDesign: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const expandedScreen = expandedIndex !== null ? screenDefinitions[expandedIndex] : null;

  const goToPrev = () => setExpandedIndex(i => i !== null && i > 0 ? i - 1 : i);
  const goToNext = () => setExpandedIndex(i => i !== null && i < screenDefinitions.length - 1 ? i + 1 : i);

  return (
    <Layout>
      <div className="print:p-0" id="ui-design-document">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Application Interface Design</h1>
            <p className="text-muted-foreground mt-1">
              ADAspending.com — High-fidelity UI mockups based on the Design System and Wireframe specifications.
            </p>
          </div>
          <Button onClick={() => window.print()} variant="outline" className="print:hidden gap-2 shrink-0">
            <Printer className="h-4 w-4" />
            Save as PDF
          </Button>
        </div>

        {/* Overview */}
        <Card className="mb-8 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Document Overview</CardTitle>
            <CardDescription>
              High-fidelity interface mockups for all {screenDefinitions.length} platform screens. Each mockup applies the UX/UI Design System tokens (colors, typography, spacing, components) to the Wireframe layouts, showing the intended visual appearance of the final application.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-foreground">{screenDefinitions.length}</div>
                <div className="text-muted-foreground">Screens</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-cardano-teal/10">
                <div className="text-2xl font-bold text-cardano-teal">5</div>
                <div className="text-muted-foreground">Brand Colors</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-cardano-blue/10">
                <div className="text-2xl font-bold text-cardano-blue">18</div>
                <div className="text-muted-foreground">Components Used</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-foreground">5</div>
                <div className="text-muted-foreground">Breakpoints</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Screen Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Screen Mockups</h2>
          <p className="text-muted-foreground text-sm">
            Click "Ampliar" on any screen to view it in full size with navigation between screens.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {screenDefinitions.map((screen, idx) => (
            <div key={idx} className="print:break-inside-avoid">
              <div className="border-2 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:border-cardano-teal/50">
                {/* Browser Chrome */}
                <div className="bg-muted px-3 py-1.5 flex items-center gap-2 border-b">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-destructive/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 bg-background rounded text-[9px] text-muted-foreground px-2 py-0.5 font-mono truncate">
                    adaspending.com{screen.route}
                  </div>
                </div>
                {/* Content */}
                <div className="max-h-[400px] overflow-hidden">
                  {screen.render()}
                </div>
                {/* Info Bar */}
                <div className="bg-muted/80 px-3 py-2 border-t flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-foreground">{screen.title}</p>
                    <p className="text-[9px] text-muted-foreground">{screen.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(idx)}
                    className="flex items-center gap-1 px-2 py-1 rounded bg-cardano-blue text-white text-[10px] font-medium hover:bg-cardano-blue/80 transition-colors shrink-0"
                  >
                    <Maximize2 className="h-3 w-3" />
                    Ampliar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Design Tokens Reference */}
        <Card className="mb-8 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-lg">Design Tokens Applied</CardTitle>
            <CardDescription>Summary of design system tokens used across all mockups.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-foreground mb-1.5 text-xs">Colors</div>
                <div className="flex flex-wrap gap-1.5">
                  {['#0033AD', '#1BAAD6', '#FF5733', '#1A1F2C', '#F0F7FA'].map(c => (
                    <div key={c} className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded border" style={{ backgroundColor: c }} />
                      <span className="text-[9px] font-mono text-muted-foreground">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1.5 text-xs">Typography</div>
                <div className="text-xs text-muted-foreground space-y-0.5">
                  <div>Headings: <span className="font-semibold text-foreground">bold / semibold</span></div>
                  <div>Body: <span className="font-medium text-foreground">regular 14-16px</span></div>
                  <div>Captions: <span className="text-foreground">12px</span></div>
                  <div>Mono: <span className="font-mono text-foreground">routes, IDs</span></div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1.5 text-xs">Patterns</div>
                <div className="text-xs text-muted-foreground space-y-0.5">
                  <div>Cards with border + shadow-sm</div>
                  <div>Gradient header (blue → teal)</div>
                  <div>Badge status indicators</div>
                  <div>Sticky navigation</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Documents */}
        <Card className="mb-8 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Related Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <a href="/design-system" className="text-sm text-primary hover:underline">→ UX/UI Design System</a>
              <a href="/wireframe" className="text-sm text-primary hover:underline">→ Wireframes & User Journeys</a>
              <a href="/architecture" className="text-sm text-primary hover:underline">→ Information Architecture</a>
              <a href="/tech-requirements" className="text-sm text-primary hover:underline">→ Tech Requirements</a>
              <a href="/user-stories" className="text-sm text-primary hover:underline">→ User Stories</a>
            </div>
          </CardContent>
        </Card>

        {/* Expanded Dialog */}
        <Dialog open={expandedIndex !== null} onOpenChange={(open) => { if (!open) setExpandedIndex(null); }}>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto p-4">
            {expandedScreen && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    {expandedScreen.title}
                    <Badge variant="outline" className="text-[10px] font-mono">{expandedScreen.route}</Badge>
                    <span className="text-xs text-muted-foreground font-normal ml-auto">{(expandedIndex ?? 0) + 1} / {screenDefinitions.length}</span>
                  </DialogTitle>
                </DialogHeader>
                {/* Navigation */}
                <div className="flex items-center justify-between mt-2 pb-3 border-b">
                  <Button variant="outline" size="sm" onClick={goToPrev} disabled={expandedIndex === 0} className="text-xs gap-1">
                    <ChevronLeft className="h-3 w-3" />
                    {expandedIndex !== null && expandedIndex > 0 ? screenDefinitions[expandedIndex - 1].title : 'Anterior'}
                  </Button>
                  <Button variant="outline" size="sm" onClick={goToNext} disabled={expandedIndex === screenDefinitions.length - 1} className="text-xs gap-1">
                    {expandedIndex !== null && expandedIndex < screenDefinitions.length - 1 ? screenDefinitions[expandedIndex + 1].title : 'Próximo'}
                    <ChevronRight className="h-3 w-3" />
                  </Button>
                </div>
                {/* Screen Render */}
                <div className="mt-4 border-2 rounded-lg overflow-hidden">
                  <div className="bg-muted px-3 py-1.5 flex items-center gap-2 border-b">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-destructive/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 bg-background rounded text-[9px] text-muted-foreground px-2 py-0.5 font-mono">
                      adaspending.com{expandedScreen.route}
                    </div>
                  </div>
                  {expandedScreen.render()}
                </div>
                <p className="text-xs text-muted-foreground mt-3">{expandedScreen.description}</p>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default UIDesign;
