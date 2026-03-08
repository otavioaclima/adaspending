import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import WireframeScreen from '@/components/wireframe/WireframeScreen';
import UserJourneyFlow from '@/components/wireframe/UserJourneyFlow';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Printer, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const screens = [
  {
    title: 'Landing Page',
    route: '/',
    elements: [
      { type: 'header' as const, label: 'Header + Logo', height: '24px' },
      { type: 'hero' as const, label: 'Hero — Value Proposition + CTA', height: '60px' },
      { type: 'cards' as const, label: 'Features', cols: 3, height: '30px' },
      { type: 'text' as const, label: 'Visual Elements / Screenshots', height: '40px' },
      { type: 'text' as const, label: 'About + How It Works', height: '30px' },
      { type: 'text' as const, label: 'Who We Are + FAQ', height: '30px' },
      { type: 'cta' as const, label: 'CTA Section', height: '24px' },
      { type: 'footer' as const, label: 'Footer', height: '20px' },
    ],
  },
  {
    title: 'Dashboard',
    route: '/dashboard',
    elements: [
      { type: 'header' as const, label: 'Header + Nav', height: '24px' },
      { type: 'hero' as const, label: 'Hero / Search Bar', height: '36px' },
      { type: 'stats' as const, label: 'Stats Cards', cols: 4, height: '24px' },
      { type: 'cards' as const, label: 'Analysis Panels', cols: 3, height: '36px' },
      { type: 'alerts' as const, label: 'Tracking Alerts', height: '24px' },
      { type: 'chart' as const, label: 'Charts Section', height: '36px' },
      { type: 'grid' as const, label: 'Proposals Grid', cols: 4, height: '30px' },
      { type: 'footer' as const, label: 'Footer', height: '20px' },
    ],
  },
  {
    title: 'Award Search',
    route: '/awards',
    elements: [
      { type: 'header' as const, label: 'Header + Nav', height: '24px' },
      { type: 'search' as const, label: 'Search Bar', height: '28px' },
      { type: 'filters' as const, label: 'Filters: Category | Status | Round | Amount', height: '24px' },
      { type: 'table' as const, label: 'Results Grid', height: '90px' },
      { type: 'footer' as const, label: 'Footer', height: '20px' },
    ],
  },
  {
    title: 'Proposals',
    route: '/proposals',
    elements: [
      { type: 'header' as const, label: 'Header + Nav', height: '24px' },
      { type: 'text' as const, label: 'Page Title + Description', height: '24px' },
      { type: 'grid' as const, label: 'Proposals Grid', cols: 4, height: '70px' },
      { type: 'footer' as const, label: 'Footer', height: '20px' },
    ],
  },
  {
    title: 'Proposal Detail',
    route: '/proposals/:id',
    elements: [
      { type: 'header' as const, label: 'Header + Nav', height: '24px' },
      { type: 'text' as const, label: 'Title + Status Badge', height: '28px' },
      { type: 'text' as const, label: 'Description + Overview', height: '36px' },
      { type: 'chart' as const, label: 'Voting Results Chart', height: '30px' },
      { type: 'timeline' as const, label: 'Milestones Timeline', height: '30px' },
      { type: 'sidebar' as const, label: 'Recipient + Details Sidebar', height: '30px' },
      { type: 'footer' as const, label: 'Footer', height: '20px' },
    ],
  },
  {
    title: 'Recipients',
    route: '/recipients',
    elements: [
      { type: 'header' as const, label: 'Header + Nav', height: '24px' },
      { type: 'search' as const, label: 'Search + Filters', height: '28px' },
      { type: 'grid' as const, label: 'Recipients Grid', cols: 3, height: '80px' },
      { type: 'footer' as const, label: 'Footer', height: '20px' },
    ],
  },
  {
    title: 'Recipient Detail',
    route: '/recipients/:id',
    elements: [
      { type: 'header' as const, label: 'Header + Nav', height: '24px' },
      { type: 'hero' as const, label: 'Recipient Header + Avatar', height: '36px' },
      { type: 'cards' as const, label: 'Details + Proposals Cards', cols: 2, height: '40px' },
      { type: 'table' as const, label: 'Accounting Table', height: '36px' },
      { type: 'timeline' as const, label: 'Milestones', height: '24px' },
      { type: 'stats' as const, label: 'Funding Stats', cols: 3, height: '20px' },
      { type: 'footer' as const, label: 'Footer', height: '20px' },
    ],
  },
  {
    title: 'Spending Explorer',
    route: '/explorer',
    elements: [
      { type: 'header' as const, label: 'Header + Nav', height: '24px' },
      { type: 'tabs' as const, label: 'Tabs: Charts | Map | Table', height: '20px' },
      { type: 'chart' as const, label: 'Charts / Map / Data Table', height: '80px' },
      { type: 'stats' as const, label: 'Data Summary', cols: 4, height: '20px' },
      { type: 'footer' as const, label: 'Footer', height: '20px' },
    ],
  },
  {
    title: 'Governance',
    route: '/governance',
    elements: [
      { type: 'header' as const, label: 'Header + Nav', height: '24px' },
      { type: 'cards' as const, label: 'Active + Upcoming Rounds', cols: 2, height: '40px' },
      { type: 'table' as const, label: 'Past Rounds', height: '36px' },
      { type: 'cards' as const, label: 'Resources', cols: 3, height: '24px' },
      { type: 'chart' as const, label: 'Statistics', height: '30px' },
      { type: 'footer' as const, label: 'Footer', height: '20px' },
    ],
  },
];

const navigationFlows = [
  { from: 'Landing Page', to: 'Dashboard', action: 'CTA "Explore"' },
  { from: 'Dashboard', to: 'Proposals', action: 'Proposals grid click' },
  { from: 'Dashboard', to: 'Spending Explorer', action: 'Nav link' },
  { from: 'Proposals', to: 'Proposal Detail', action: 'Card click' },
  { from: 'Proposal Detail', to: 'Recipient Detail', action: 'Recipient link' },
  { from: 'Recipients', to: 'Recipient Detail', action: 'Card click' },
  { from: 'Recipient Detail', to: 'Proposal Detail', action: 'Proposals card click' },
  { from: 'Award Search', to: 'Proposal Detail', action: 'Result click' },
  { from: 'Governance', to: 'Proposal Detail', action: 'Round proposal click' },
  { from: 'Any Page', to: 'Award Search', action: 'Header search button' },
];

const Wireframe: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const expandedScreen = expandedIndex !== null ? screens[expandedIndex] : null;

  const goToPrev = () => setExpandedIndex(i => i !== null && i > 0 ? i - 1 : i);
  const goToNext = () => setExpandedIndex(i => i !== null && i < screens.length - 1 ? i + 1 : i);

  return (
    <Layout>
      <div className="print:p-0" id="wireframe-document">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Platform Wireframe</h1>
            <p className="text-muted-foreground mt-1">
              ADAspending.com — Screen layouts, navigation flows, and user journeys.
            </p>
          </div>
          <Button onClick={() => window.print()} variant="outline" className="print:hidden gap-2 shrink-0">
            <Printer className="h-4 w-4" />
            Save as PDF
          </Button>
        </div>

        {/* Screen Map */}
        <Card className="mb-8 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Screen Map — All Platform Views</CardTitle>
            <CardDescription>
              Visual wireframes of every screen in the platform. Click any screen to highlight its navigation connections below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {screens.map((screen) => (
                <WireframeScreen
                  key={screen.route}
                  title={screen.title}
                  route={screen.route}
                  elements={screen.elements}
                  isActive={activeScreen === screen.title}
                  onClick={() => setExpandedIndex(screens.indexOf(screen))}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Expanded Screen Dialog */}
        <Dialog open={!!expandedScreen} onOpenChange={(open) => !open && setExpandedScreen(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {expandedScreen && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl">{expandedScreen.title}</DialogTitle>
                  <p className="text-sm text-muted-foreground font-mono">{expandedScreen.route}</p>
                </DialogHeader>
                <div className="mt-4">
                  <WireframeScreen
                    title={expandedScreen.title}
                    route={expandedScreen.route}
                    elements={expandedScreen.elements.map(el => ({
                      ...el,
                      height: `${parseInt(el.height || '20') * 2.5}px`,
                    }))}
                  />
                </div>
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Navigation from this screen:</h4>
                  <div className="space-y-1.5">
                    {navigationFlows
                      .filter(f => f.from === expandedScreen.title || f.to === expandedScreen.title)
                      .map((flow, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span className="px-2 py-0.5 rounded bg-cardano-blue/10 text-cardano-blue font-medium text-xs">{flow.from}</span>
                          <ArrowRight className="h-3 w-3 text-cardano-teal" />
                          <span className="px-2 py-0.5 rounded bg-cardano-teal/10 text-cardano-teal font-medium text-xs">{flow.to}</span>
                          <span className="text-muted-foreground text-xs">— {flow.action}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Navigation Flow Map */}
        <Card className="mb-8 print:border-none print:shadow-none print:break-before-page">
          <CardHeader>
            <CardTitle className="text-xl">Navigation Flow Map</CardTitle>
            <CardDescription>
              All navigation paths between screens. Each arrow represents a user action that transitions between pages.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {navigationFlows.map((flow, i) => {
                const isHighlighted = activeScreen && (flow.from === activeScreen || flow.to === activeScreen);
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                      isHighlighted ? 'bg-cardano-teal/10 border border-cardano-teal/30' :
                      activeScreen ? 'opacity-40' : ''
                    }`}
                  >
                    <span className="px-2 py-1 rounded bg-cardano-blue/10 text-cardano-blue font-medium text-xs min-w-[120px] text-center">
                      {flow.from}
                    </span>
                    <ArrowRight className="h-4 w-4 text-cardano-teal shrink-0" />
                    <span className="px-2 py-1 rounded bg-cardano-teal/10 text-cardano-teal font-medium text-xs min-w-[120px] text-center">
                      {flow.to}
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">{flow.action}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* User Journeys */}
        <Card className="mb-8 print:border-none print:shadow-none print:break-before-page">
          <CardHeader>
            <CardTitle className="text-xl">User Journeys</CardTitle>
            <CardDescription>
              Three key user personas and their step-by-step navigation through the platform, ensuring an intuitive and logical experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UserJourneyFlow />
          </CardContent>
        </Card>

        {/* UX Design Principles */}
        <Card className="mb-8 print:border-none print:shadow-none print:break-inside-avoid">
          <CardHeader>
            <CardTitle className="text-xl">UX Design Principles</CardTitle>
            <CardDescription>Guiding principles that ensure an intuitive user experience across all screens.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Consistent Navigation', desc: 'Persistent header with 6 main sections visible on all pages. Mobile-friendly horizontal scrollable tabs.' },
                { title: 'Progressive Disclosure', desc: 'High-level data shown first (stats cards), with ability to drill down into detailed views (charts, tables, individual records).' },
                { title: 'Cross-Referencing', desc: 'Every entity (proposal, recipient, fund round) links to related entities, creating a connected information graph.' },
                { title: 'Search-First Access', desc: 'Global search button on every page. Dedicated Award Search page with multi-criteria filtering.' },
                { title: 'Data Visualization Variety', desc: 'Multiple chart types (bar, pie, line, scatter), geographic maps, and sortable tables for different analytical needs.' },
                { title: 'Print/Export Ready', desc: 'All documentation pages include print-friendly styling for PDF export. Data tables support sorting and filtering.' },
              ].map((principle, i) => (
                <div key={i} className="p-3 rounded-lg border bg-muted/30">
                  <h4 className="font-semibold text-sm text-foreground">{principle.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{principle.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Wireframe;
