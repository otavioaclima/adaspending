import React from 'react';
import Layout from '@/components/layout/Layout';
import MindMapTree from '@/components/architecture/MindMapTree';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Printer, FileText, BarChart3, Search, Award, Users, Vote, Globe, LayoutDashboard } from 'lucide-react';

const sections = [
  {
    icon: Globe,
    title: 'Landing Page (Teaser)',
    route: '/',
    description: 'The public-facing entry point of ADAspending.com. Designed to communicate the platform\'s value proposition to both newcomers and existing Cardano community members.',
    subsections: [
      { name: 'Hero Section', desc: 'Primary value proposition with animated logo and call-to-action button directing users to the Dashboard.' },
      { name: 'Features Section', desc: 'Grid of key platform capabilities: Award Search, Spending Analysis, Proposals Tracking, and Recipient Profiles.' },
      { name: 'Visual Elements', desc: 'Platform screenshots and interactive previews showcasing real data visualizations.' },
      { name: 'About Section', desc: 'Project mission, vision, and the problem it solves for the Cardano ecosystem.' },
      { name: 'How It Works', desc: 'Step-by-step guide: Search → Explore → Analyze → Participate.' },
      { name: 'Who We Are', desc: 'Team profiles and community involvement.' },
      { name: 'FAQ', desc: 'Accordion-based frequently asked questions addressing common queries.' },
      { name: 'CTA Section', desc: 'Final call-to-action encouraging exploration or newsletter signup.' },
      { name: 'Footer', desc: 'Social links, legal information, and community resources.' },
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard (Overview)',
    route: '/overview',
    description: 'The central analytics hub providing a comprehensive snapshot of Cardano Treasury spending. Combines high-level statistics with detailed analysis panels.',
    subsections: [
      { name: 'Hero / Search Bar', desc: 'Welcome message with a prominent search field for quick access to any proposal or recipient.' },
      { name: 'Stats Cards', desc: 'Four key metrics: Total Funded, Active Proposals, Total Recipients, Average Funding — displayed in a responsive grid.' },
      { name: 'Analysis Panels', desc: 'Three deep-dive components in a grid layout:' },
      { name: '  → Budget Comparator', desc: 'Side-by-side comparison of requested vs. allocated budgets per proposal.' },
      { name: '  → Thermometer', desc: 'Visual gauge showing total fund utilization percentage.' },
      { name: '  → Overspending Panel', desc: 'Highlights proposals that have exceeded their allocated budget.' },
      { name: 'Tracking Alerts', desc: 'Real-time notification panel for anomalies: over-budget, delayed milestones, unusual spending patterns.' },
      { name: 'Fund Rounds', desc: 'Historical overview of all Catalyst fund rounds with participation and allocation data.' },
      { name: 'Charts Section', desc: 'Spending distribution visualized by category, round, and timeline.' },
      { name: 'Proposals Section', desc: 'Grid of recent/notable proposals with quick-access cards.' },
      { name: 'Call to Action', desc: 'Engagement prompt directing users to deeper exploration sections.' },
    ],
  },
  {
    icon: Search,
    title: 'Award Search',
    route: '/proposals',
    description: 'A powerful search interface for discovering specific treasury proposals. Supports full-text search with multi-criteria filtering for precise results.',
    subsections: [
      { name: 'Search Bar', desc: 'Full-text search across proposal titles, descriptions, and recipient names.' },
      { name: 'Filter Panel', desc: 'Multi-criteria filters including Category (DeFi, Education, Proposals, etc.), Status (Funded, In Progress, Completed), Fund Round (F1–F13), and Amount Range.' },
      { name: 'Results Grid', desc: 'Paginated card or table view of matching proposals with key data visible at a glance.' },
      { name: 'Sort Options', desc: 'Sort results by amount (asc/desc), date, status, or relevance.' },
    ],
  },
  {
    icon: Award,
    title: 'Proposals',
    route: '/proposals',
    description: 'Browse and explore all proposals submitted to the Cardano Treasury through Project Catalyst. Each proposal has a detailed view with voting data and milestone tracking.',
    subsections: [
      { name: 'Proposals Grid', desc: 'Card-based listing with title, category, status badge, amount, fund round, and recipient preview.' },
      { name: 'Proposal Detail Page (/proposals/:id)', desc: 'Full proposal view with:' },
      { name: '  → Overview', desc: 'Title, full description, current status, and category tags.' },
      { name: '  → Voting Results', desc: 'Yes/No/Abstain vote counts with visual breakdown chart.' },
      { name: '  → Milestones', desc: 'Progress timeline showing completion status of each deliverable.' },
      { name: '  → External Links', desc: 'Links to Ideascale, GitHub repositories, and project websites.' },
      { name: '  → Recipient Sidebar', desc: 'Quick-view of the linked recipient with navigation to their profile.' },
      { name: '  → Details Sidebar', desc: 'Budget breakdown, key dates, and metadata.' },
    ],
  },
  {
    icon: Users,
    title: 'Recipients',
    route: '/recipients',
    description: 'Directory of all treasury fund recipients. Provides transparency into who receives funds and their track record across multiple proposals.',
    subsections: [
      { name: 'Recipients Grid', desc: 'Searchable and filterable directory of all recipients with summary stats.' },
      { name: 'Recipient Detail Page (/recipients/:id)', desc: 'Comprehensive profile with:' },
      { name: '  → Header', desc: 'Name, avatar, location, and social/contact links.' },
      { name: '  → Details Card', desc: 'Biography, areas of expertise, and organizational info.' },
      { name: '  → Proposals Card', desc: 'All proposals submitted by this recipient with status indicators.' },
      { name: '  → Accounting Table', desc: 'Detailed financial transaction log showing all fund disbursements and their dates.' },
      { name: '  → Milestones', desc: 'Aggregated milestone view across all of the recipient\'s proposals.' },
      { name: '  → Funding Stats', desc: 'Total amount received, number of proposals funded, average completion rate.' },
    ],
  },
  {
    icon: BarChart3,
    title: 'Spending Explorer',
    route: '/explorer',
    description: 'Interactive data visualization tool for analyzing treasury spending patterns across multiple dimensions. Supports charts, geographic mapping, and raw data exploration.',
    subsections: [
      { name: 'Charts Tab', desc: 'Four chart types:' },
      { name: '  → By Category', desc: 'Pie or bar chart showing spending distribution across proposal categories.' },
      { name: '  → By Fund Round', desc: 'Stacked bar chart comparing allocation across fund rounds.' },
      { name: '  → Timeline', desc: 'Line chart showing spending trends over time.' },
      { name: '  → Scatter Plot', desc: 'Budget vs. completion rate visualization for identifying patterns.' },
      { name: 'Map View', desc: 'Mapbox-powered interactive globe showing geographic distribution of funded projects worldwide.' },
      { name: 'Data Table', desc: 'Full sortable and filterable table with export capabilities.' },
      { name: 'Data Summary', desc: 'Aggregate statistics panel with key spending indicators.' },
    ],
  },
  {
    icon: Vote,
    title: 'Proposals',
    route: '/proposals',
    description: 'Cardano proposals information hub. Tracks active, upcoming, and past fund rounds with resources for community participation.',
    subsections: [
      { name: 'Active Fund Round', desc: 'Current voting period details with participation stats and countdown.' },
      { name: 'Upcoming Rounds', desc: 'Scheduled future rounds with expected dates and focus areas.' },
      { name: 'Past Rounds', desc: 'Historical results with total allocated, proposals funded, and participation rates.' },
      { name: 'Resources', desc: 'Quick-access links to Voting Guide, Proposal Submission tools, and DRep Directory.' },
      { name: 'Statistics', desc: 'Participation metrics: voter turnout, delegation rates, and engagement trends.' },
    ],
  },
  {
    icon: FileText,
    title: 'Shared Layout Components',
    route: 'N/A — Global',
    description: 'Persistent UI components that appear across all pages within the main application (excluding the Landing Page which has its own layout).',
    subsections: [
      { name: 'Header', desc: 'Sticky top bar with gradient background (Cardano dark blue), logo, navigation links (6 main sections), and search button.' },
      { name: 'Mobile Navigation', desc: 'Horizontal scrollable tab bar visible on screens < 768px, replacing the desktop navigation.' },
      { name: 'Footer', desc: 'Three-column layout with Explore links, Data links, and Resources links. Includes copyright and branding.' },
    ],
  },
];

const InformationArchitecture: React.FC = () => {
  const handlePrint = () => window.print();

  return (
    <Layout>
      <div className="print:p-0" id="ia-document">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Information Architecture</h1>
            <p className="text-muted-foreground mt-1">
              ADAspending.com — Complete platform structure, sections, and dependencies.
            </p>
          </div>
          <Button onClick={handlePrint} variant="outline" className="print:hidden gap-2 shrink-0">
            <Printer className="h-4 w-4" />
            Save as PDF
          </Button>
        </div>

        {/* Document Info */}
        <Card className="mb-8 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Document Overview</CardTitle>
            <CardDescription>
              This document describes the complete information architecture of ADAspending.com — a transparency platform for Cardano Treasury spending through Project Catalyst. It is intended for both technical and non-technical community members.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-semibold text-foreground">Platform:</span>
                <span className="text-muted-foreground ml-2">ADAspending.com</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Version:</span>
                <span className="text-muted-foreground ml-2">1.0</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Date:</span>
                <span className="text-muted-foreground ml-2">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Total Sections:</span>
                <span className="text-muted-foreground ml-2">8 main sections</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Total Pages:</span>
                <span className="text-muted-foreground ml-2">10+ unique views</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Stack:</span>
                <span className="text-muted-foreground ml-2">React + TypeScript + Tailwind</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mind Map */}
        <Card className="mb-8 print:border-none print:shadow-none print:break-after-page">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-cardano-teal" />
              Mind Map — Platform Structure
            </CardTitle>
            <CardDescription>
              Interactive tree view showing all sections, subsections, and their hierarchical relationships. Click on any node to expand/collapse. In print mode, all nodes are expanded.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MindMapTree />
          </CardContent>
        </Card>

        {/* Detailed Sections */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Detailed Section Documentation</h2>
          <p className="text-muted-foreground mb-6">
            Each section below describes the purpose, route, and all subsections/components within that area of the platform.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card key={index} className="print:break-inside-avoid print:border-none print:shadow-none">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cardano-blue/10">
                    <section.icon className="h-5 w-5 text-cardano-blue" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      {index + 1}. {section.title}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground mt-0.5 font-mono">Route: {section.route}</p>
                  </div>
                </div>
                <CardDescription className="mt-2">{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {section.subsections.map((sub, si) => (
                    <div key={si} className={`flex gap-3 text-sm ${sub.name.startsWith('  →') ? 'ml-6' : ''}`}>
                      <span className="font-semibold text-foreground whitespace-nowrap min-w-0 shrink-0">
                        {sub.name.startsWith('  →') ? sub.name : `• ${sub.name}`}
                      </span>
                      {sub.desc && (
                        <span className="text-muted-foreground">— {sub.desc}</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dependencies & Connections */}
        <Card className="mt-8 mb-8 print:break-inside-avoid print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Dependencies & Connections</CardTitle>
            <CardDescription>Key relationships between sections of the platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              {[
                { from: 'Dashboard', to: 'Proposals', relation: 'Proposals Grid links to individual Proposal Detail pages' },
                { from: 'Proposals', to: 'Recipients', relation: 'Each Proposal links to its Recipient profile' },
                { from: 'Recipients', to: 'Proposals', relation: 'Recipient profiles list all their associated Proposals' },
                { from: 'Spending Explorer', to: 'Proposals', relation: 'Data table entries link to Proposal details' },
                { from: 'Proposals', to: 'Proposals', relation: 'Fund round details connect to proposals within that round' },
                { from: 'Award Search', to: 'Proposals', relation: 'Search results navigate to Proposal Detail pages' },
                { from: 'Landing Page', to: 'Dashboard', relation: 'CTA button navigates users into the main application' },
                { from: 'Shared Layout', to: 'All Sections', relation: 'Header navigation and footer are present on all internal pages' },
              ].map((dep, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="inline-flex items-center gap-1 shrink-0">
                    <span className="px-2 py-0.5 rounded bg-cardano-blue/10 text-cardano-blue font-medium text-xs">{dep.from}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="px-2 py-0.5 rounded bg-cardano-teal/10 text-cardano-teal font-medium text-xs">{dep.to}</span>
                  </span>
                  <span className="text-muted-foreground">{dep.relation}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default InformationArchitecture;
