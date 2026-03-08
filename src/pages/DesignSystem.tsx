import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Printer, Palette, Type, Layout as LayoutIcon, Grid3X3, MousePointerClick, Layers, Box, Accessibility, MonitorSmartphone } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Color Palette Data                                                  */
/* ------------------------------------------------------------------ */

const semanticColors = [
  { name: 'Background', variable: '--background', light: '210 40% 98%', dark: '222.2 84% 4.9%', usage: 'Page and section backgrounds' },
  { name: 'Foreground', variable: '--foreground', light: '222.2 84% 4.9%', dark: '210 40% 98%', usage: 'Primary text color' },
  { name: 'Primary', variable: '--primary', light: '222.2 47.4% 11.2%', dark: '210 40% 98%', usage: 'Buttons, links, active states' },
  { name: 'Secondary', variable: '--secondary', light: '201 100% 47%', dark: '201 100% 47%', usage: 'Accent elements, secondary buttons' },
  { name: 'Muted', variable: '--muted', light: '210 40% 96.1%', dark: '217.2 32.6% 17.5%', usage: 'Subtle backgrounds, disabled states' },
  { name: 'Accent', variable: '--accent', light: '210 40% 96.1%', dark: '217.2 32.6% 17.5%', usage: 'Hover states, highlights' },
  { name: 'Destructive', variable: '--destructive', light: '0 84.2% 60.2%', dark: '0 62.8% 30.6%', usage: 'Error states, destructive actions' },
  { name: 'Card', variable: '--card', light: '0 0% 100%', dark: '222.2 84% 4.9%', usage: 'Card surfaces' },
  { name: 'Border', variable: '--border', light: '214.3 31.8% 91.4%', dark: '217.2 32.6% 17.5%', usage: 'Borders and dividers' },
];

const brandColors = [
  { name: 'Cardano Blue', hex: '#0033AD', tailwind: 'cardano-blue', usage: 'Primary brand, navigation header, CTAs' },
  { name: 'Cardano Teal', hex: '#1BAAD6', tailwind: 'cardano-teal', usage: 'Secondary brand, accents, links, charts' },
  { name: 'Cardano Coral', hex: '#FF5733', tailwind: 'cardano-coral', usage: 'Alerts, warnings, overspending indicators' },
  { name: 'Cardano Light', hex: '#F0F7FA', tailwind: 'cardano-light', usage: 'Light backgrounds, subtle panels' },
  { name: 'Cardano Dark', hex: '#1A1F2C', tailwind: 'cardano-dark', usage: 'Dark surfaces, footer, header gradient' },
];

/* ------------------------------------------------------------------ */
/*  Typography Scale                                                    */
/* ------------------------------------------------------------------ */

const typographyScale = [
  { name: 'H1 — Page Title', class: 'text-3xl font-bold', size: '30px / 1.875rem', weight: '700', example: 'Information Architecture' },
  { name: 'H2 — Section Title', class: 'text-2xl font-bold', size: '24px / 1.5rem', weight: '700', example: 'Detailed Section Documentation' },
  { name: 'H3 — Card Title', class: 'text-xl font-semibold', size: '20px / 1.25rem', weight: '600', example: 'Document Overview' },
  { name: 'H4 — Subsection', class: 'text-lg font-semibold', size: '18px / 1.125rem', weight: '600', example: 'Frontend Requirements' },
  { name: 'Body — Default', class: 'text-base', size: '16px / 1rem', weight: '400', example: 'This is the standard body text used across the platform.' },
  { name: 'Body Small', class: 'text-sm', size: '14px / 0.875rem', weight: '400', example: 'Used for descriptions, secondary content, and metadata.' },
  { name: 'Caption', class: 'text-xs', size: '12px / 0.75rem', weight: '400', example: 'Labels, badges, timestamps, and annotations.' },
  { name: 'Mono — Code', class: 'text-xs font-mono', size: '12px / 0.75rem', weight: '400', example: '/proposals/:id — Route: /dashboard' },
];

/* ------------------------------------------------------------------ */
/*  Spacing System                                                      */
/* ------------------------------------------------------------------ */

const spacingScale = [
  { name: 'xs', value: '0.25rem (4px)', tailwind: 'p-1, gap-1, m-1' },
  { name: 'sm', value: '0.5rem (8px)', tailwind: 'p-2, gap-2, m-2' },
  { name: 'md', value: '0.75rem (12px)', tailwind: 'p-3, gap-3, m-3' },
  { name: 'lg', value: '1rem (16px)', tailwind: 'p-4, gap-4, m-4' },
  { name: 'xl', value: '1.5rem (24px)', tailwind: 'p-6, gap-6, m-6' },
  { name: '2xl', value: '2rem (32px)', tailwind: 'p-8, gap-8, m-8' },
  { name: '3xl', value: '3rem (48px)', tailwind: 'p-12, gap-12, m-12' },
];

/* ------------------------------------------------------------------ */
/*  Breakpoints                                                         */
/* ------------------------------------------------------------------ */

const breakpoints = [
  { name: 'Mobile', range: '320px – 639px', prefix: 'default', layout: 'Single column, stacked cards, hamburger nav' },
  { name: 'Tablet', range: '640px – 767px', prefix: 'sm:', layout: '2-column grids, expanded cards' },
  { name: 'Tablet Landscape', range: '768px – 1023px', prefix: 'md:', layout: 'Desktop nav visible, sidebar layouts' },
  { name: 'Desktop', range: '1024px – 1279px', prefix: 'lg:', layout: '3-4 column grids, full layouts' },
  { name: 'Wide Desktop', range: '1280px+', prefix: 'xl:', layout: 'Max container 1400px, centered content' },
];

/* ------------------------------------------------------------------ */
/*  Component Library                                                   */
/* ------------------------------------------------------------------ */

const componentLibrary = [
  {
    category: 'Actions',
    items: [
      { name: 'Button (default)', desc: 'Primary action. Dark bg, white text.', variants: 'default, secondary, destructive, outline, ghost, link' },
      { name: 'Button Sizes', desc: 'Three sizes for different contexts.', variants: 'sm (h-9), default (h-10), lg (h-11), icon (h-10 w-10)' },
      { name: 'Badge', desc: 'Status indicators and labels.', variants: 'default, secondary, destructive, outline' },
    ],
  },
  {
    category: 'Layout',
    items: [
      { name: 'Card', desc: 'Primary content container with header, content, and footer slots.', variants: 'Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter' },
      { name: 'Glass Card', desc: 'Frosted glass effect for hero overlays.', variants: '.glass-card (bg-white/80 + backdrop-blur)' },
      { name: 'Cardano Card', desc: 'Branded gradient card for featured content.', variants: '.cardano-card (blue→teal gradient border)' },
      { name: 'Stat Card', desc: 'Metric display with hover elevation.', variants: '.stat-card (p-4 + shadow-sm → shadow-md)' },
    ],
  },
  {
    category: 'Navigation',
    items: [
      { name: 'Header', desc: 'Sticky top bar with gradient (cardano-dark → cardano-blue).', variants: 'Desktop links + mobile scrollable tabs' },
      { name: 'Nav Link', desc: 'Interactive link with hover state.', variants: '.nav-link, .nav-link-active' },
      { name: 'Footer', desc: 'Three-column link grid with branding.', variants: 'Explore, Data, Resources columns' },
    ],
  },
  {
    category: 'Data Display',
    items: [
      { name: 'Table', desc: 'Data grid with sortable columns and row hover.', variants: 'Table, TableHeader, TableBody, TableRow, TableCell' },
      { name: 'Charts (Recharts)', desc: 'Bar, Line, Pie, Scatter, Area charts.', variants: 'Responsive containers with tooltips and legends' },
      { name: 'Map (Mapbox GL)', desc: 'Interactive geographic visualization.', variants: 'Dark style, markers sized by value, popups' },
    ],
  },
  {
    category: 'Feedback',
    items: [
      { name: 'Toast', desc: 'Non-blocking notification.', variants: 'default, success, error, warning' },
      { name: 'Alert', desc: 'Inline alert for contextual feedback.', variants: 'default, destructive' },
      { name: 'Skeleton', desc: 'Loading placeholder with pulse animation.', variants: 'Rectangular blocks matching content shape' },
    ],
  },
  {
    category: 'Forms',
    items: [
      { name: 'Input', desc: 'Text input with border and focus ring.', variants: 'h-10, rounded-md, ring on focus' },
      { name: 'Select', desc: 'Dropdown selection with search.', variants: 'Radix-based, keyboard navigable' },
      { name: 'Checkbox / Switch', desc: 'Boolean toggles.', variants: 'Accessible, animated transitions' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Patterns & Principles                                               */
/* ------------------------------------------------------------------ */

const uxPrinciples = [
  { title: 'Transparency First', desc: 'Every piece of data should be traceable to its source. Show data provenance and timestamps.' },
  { title: 'Progressive Disclosure', desc: 'Start with high-level summaries (Dashboard), drill down into details (Proposal Detail). Never overwhelm.' },
  { title: 'Consistency', desc: 'Same component patterns across all pages. Cards look and behave the same everywhere.' },
  { title: 'Accessibility', desc: 'WCAG 2.1 AA compliant. Keyboard navigable. Semantic HTML. ARIA labels on interactive elements.' },
  { title: 'Performance', desc: 'Skeleton loading states. Optimistic UI. Lazy-loaded routes. Cached API responses.' },
  { title: 'Responsive', desc: 'Mobile-first design. Every feature works on 320px screens. Touch-friendly targets (44x44px min).' },
];

const navigationPatterns = [
  { pattern: 'Persistent Header', desc: 'Sticky navigation with 6 main sections always visible. Active route highlighted.' },
  { pattern: 'Breadcrumb Trails', desc: 'Proposal Detail shows: Dashboard > Proposals > [Proposal Name]' },
  { pattern: 'Cross-linking', desc: 'Proposals link to Recipients. Recipients list their Proposals. Explorer rows link to details.' },
  { pattern: 'Search Everywhere', desc: 'Global search accessible from header. Contextual search within Award Search and Explorer.' },
  { pattern: 'Back Navigation', desc: 'Browser back button always works. No trapped states. History-aware routing.' },
];

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

const DesignSystem: React.FC = () => {
  const handlePrint = () => window.print();

  return (
    <Layout>
      <div className="print:p-0" id="design-system-document">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">UX/UI Design System</h1>
            <p className="text-muted-foreground mt-1">
              ADAspending.com — Complete design language, component library, and UX patterns.
            </p>
          </div>
          <Button onClick={handlePrint} variant="outline" className="print:hidden gap-2 shrink-0">
            <Printer className="h-4 w-4" />
            Save as PDF
          </Button>
        </div>

        {/* Document Overview */}
        <Card className="mb-8 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Document Overview</CardTitle>
            <CardDescription>
              This document defines the complete UX/UI design system for ADAspending.com. It serves as the single source of truth for visual design decisions, component specifications, interaction patterns, and accessibility standards.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-foreground">{brandColors.length + semanticColors.length}</div>
                <div className="text-muted-foreground">Color Tokens</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-foreground">{typographyScale.length}</div>
                <div className="text-muted-foreground">Type Scales</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-foreground">{componentLibrary.reduce((s, c) => s + c.items.length, 0)}</div>
                <div className="text-muted-foreground">Components</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-foreground">{breakpoints.length}</div>
                <div className="text-muted-foreground">Breakpoints</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* UX Principles */}
        <Card className="mb-8 print:border-none print:shadow-none print:break-after-page">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Accessibility className="h-5 w-5 text-cardano-teal" />
              UX Design Principles
            </CardTitle>
            <CardDescription>Core principles that guide every design and interaction decision.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {uxPrinciples.map((p, i) => (
                <div key={i} className="p-4 rounded-lg border bg-background">
                  <div className="font-semibold text-sm text-foreground mb-1">{p.title}</div>
                  <div className="text-xs text-muted-foreground">{p.desc}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Brand Colors */}
        <Card className="mb-8 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Palette className="h-5 w-5 text-cardano-blue" />
              Brand Color Palette
            </CardTitle>
            <CardDescription>The Cardano-inspired brand palette used for branding, navigation, and visual identity.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {brandColors.map((c, i) => (
                <div key={i} className="rounded-lg overflow-hidden border">
                  <div className="h-20" style={{ backgroundColor: c.hex }} />
                  <div className="p-3">
                    <div className="font-semibold text-sm text-foreground">{c.name}</div>
                    <div className="font-mono text-xs text-muted-foreground">{c.hex}</div>
                    <div className="font-mono text-[10px] text-muted-foreground mt-0.5">cardano-{c.tailwind.replace('cardano-', '')}</div>
                    <div className="text-xs text-muted-foreground mt-1">{c.usage}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Semantic Colors */}
        <Card className="mb-8 print:border-none print:shadow-none print:break-before-page">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Palette className="h-5 w-5 text-secondary" />
              Semantic Color Tokens
            </CardTitle>
            <CardDescription>CSS custom properties (HSL) that adapt to light and dark modes. Always use these tokens instead of hardcoded colors.</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Token</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Variable</th>
                  <th className="text-center py-2 pr-4 font-semibold text-foreground">Light</th>
                  <th className="text-center py-2 pr-4 font-semibold text-foreground">Dark</th>
                  <th className="text-left py-2 font-semibold text-foreground">Usage</th>
                </tr>
              </thead>
              <tbody>
                {semanticColors.map((c, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-2 pr-4 font-semibold text-foreground">{c.name}</td>
                    <td className="py-2 pr-4 font-mono text-muted-foreground">{c.variable}</td>
                    <td className="py-2 pr-4 text-center">
                      <div className="inline-flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded border" style={{ backgroundColor: `hsl(${c.light})` }} />
                        <span className="font-mono text-muted-foreground">{c.light}</span>
                      </div>
                    </td>
                    <td className="py-2 pr-4 text-center">
                      <div className="inline-flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded border" style={{ backgroundColor: `hsl(${c.dark})` }} />
                        <span className="font-mono text-muted-foreground">{c.dark}</span>
                      </div>
                    </td>
                    <td className="py-2 text-muted-foreground">{c.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Gradient */}
        <Card className="mb-8 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-lg">Gradients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden border">
                <div className="h-16 bg-cardano-gradient" />
                <div className="p-3">
                  <div className="font-semibold text-sm text-foreground">Cardano Gradient</div>
                  <div className="font-mono text-[10px] text-muted-foreground">linear-gradient(135deg, #0033AD → #1BAAD6)</div>
                  <div className="text-xs text-muted-foreground mt-1">Header background, hero sections, CTA buttons</div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border">
                <div className="h-16 bg-gradient-to-br from-cardano-blue/10 to-cardano-teal/10" />
                <div className="p-3">
                  <div className="font-semibold text-sm text-foreground">Cardano Card Gradient</div>
                  <div className="font-mono text-[10px] text-muted-foreground">from-cardano-blue/10 to-cardano-teal/10</div>
                  <div className="text-xs text-muted-foreground mt-1">Featured cards, highlighted panels</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card className="mb-8 print:border-none print:shadow-none print:break-before-page">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Type className="h-5 w-5 text-cardano-blue" />
              Typography Scale
            </CardTitle>
            <CardDescription>System font stack with consistent size and weight scale. Uses Tailwind CSS utilities.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {typographyScale.map((t, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2 pb-3 border-b border-border/50 last:border-0 last:pb-0">
                  <div className="shrink-0 min-w-[180px]">
                    <div className="font-semibold text-sm text-foreground">{t.name}</div>
                    <div className="font-mono text-[10px] text-muted-foreground">{t.class} — {t.size}</div>
                  </div>
                  <div className={t.class + ' text-foreground'}>{t.example}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Spacing */}
        <Card className="mb-8 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Grid3X3 className="h-5 w-5 text-cardano-teal" />
              Spacing System
            </CardTitle>
            <CardDescription>Consistent spacing scale based on 4px increments.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {spacingScale.map((s, i) => (
                <div key={i} className="flex items-center gap-4 text-sm">
                  <span className="font-semibold text-foreground w-10">{s.name}</span>
                  <div className="bg-cardano-teal/30 rounded" style={{ width: `${(i + 1) * 24}px`, height: '16px' }} />
                  <span className="font-mono text-xs text-muted-foreground">{s.value}</span>
                  <span className="text-xs text-muted-foreground hidden sm:inline">→ {s.tailwind}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Border Radius */}
        <Card className="mb-8 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-lg">Border Radius</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'sm', value: 'calc(0.5rem - 4px)', class: 'rounded-sm' },
                { name: 'md', value: 'calc(0.5rem - 2px)', class: 'rounded-md' },
                { name: 'lg', value: '0.5rem', class: 'rounded-lg' },
                { name: 'full', value: '9999px', class: 'rounded-full' },
              ].map((r, i) => (
                <div key={i} className="text-center">
                  <div className={`w-16 h-16 bg-cardano-blue/20 border-2 border-cardano-blue/40 ${r.class}`} />
                  <div className="font-semibold text-xs text-foreground mt-2">{r.name}</div>
                  <div className="font-mono text-[10px] text-muted-foreground">{r.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Responsive Breakpoints */}
        <Card className="mb-8 print:border-none print:shadow-none print:break-before-page">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <MonitorSmartphone className="h-5 w-5 text-cardano-blue" />
              Responsive Breakpoints
            </CardTitle>
            <CardDescription>Mobile-first breakpoint system. All styles start at mobile and scale up.</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Device</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Range</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Prefix</th>
                  <th className="text-left py-2 font-semibold text-foreground">Layout Strategy</th>
                </tr>
              </thead>
              <tbody>
                {breakpoints.map((b, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-2 pr-4 font-semibold text-foreground">{b.name}</td>
                    <td className="py-2 pr-4 font-mono text-muted-foreground">{b.range}</td>
                    <td className="py-2 pr-4"><Badge variant="outline" className="text-[10px] font-mono">{b.prefix}</Badge></td>
                    <td className="py-2 text-muted-foreground">{b.layout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Component Library */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-2">
            <Box className="h-6 w-6 text-cardano-blue" />
            Component Library
          </h2>
          <p className="text-muted-foreground text-sm">
            All UI components built on shadcn/ui (Radix UI primitives) with Tailwind CSS styling. Components are fully accessible and keyboard navigable.
          </p>
        </div>

        {/* Live Component Previews */}
        <Card className="mb-6 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MousePointerClick className="h-4 w-4 text-cardano-teal" />
              Live Component Previews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Buttons */}
              <div>
                <div className="text-sm font-semibold text-foreground mb-2">Buttons</div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              {/* Badges */}
              <div>
                <div className="text-sm font-semibold text-foreground mb-2">Badges</div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge className="bg-cardano-blue text-white">Cardano Blue</Badge>
                  <Badge className="bg-cardano-teal text-white">Cardano Teal</Badge>
                </div>
              </div>

              {/* Input */}
              <div>
                <div className="text-sm font-semibold text-foreground mb-2">Input</div>
                <div className="max-w-sm">
                  <Input placeholder="Search proposals..." />
                </div>
              </div>

              {/* Cards */}
              <div>
                <div className="text-sm font-semibold text-foreground mb-2">Card Variants</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="stat-card">
                    <div className="text-xs text-muted-foreground">Stat Card</div>
                    <div className="text-2xl font-bold text-foreground">₳ 12.5M</div>
                    <div className="text-xs text-muted-foreground">Total Funded</div>
                  </div>
                  <div className="glass-card p-4">
                    <div className="text-xs text-muted-foreground">Glass Card</div>
                    <div className="text-sm font-medium text-foreground mt-1">Frosted backdrop</div>
                  </div>
                  <div className="cardano-card p-4">
                    <div className="text-xs text-muted-foreground">Cardano Card</div>
                    <div className="text-sm font-medium text-foreground mt-1">Branded gradient</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Component Catalog */}
        <div className="space-y-5 mb-8">
          {componentLibrary.map((group, gi) => (
            <Card key={gi} className="print:break-inside-avoid print:border-none print:shadow-none">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{group.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {group.items.map((item, ii) => (
                    <div key={ii} className="flex flex-col sm:flex-row sm:items-start gap-2 text-sm">
                      <div className="shrink-0 min-w-[160px]">
                        <span className="font-semibold text-foreground">{item.name}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">{item.desc}</span>
                        <div className="font-mono text-[10px] text-muted-foreground mt-0.5">{item.variants}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Patterns */}
        <Card className="mb-8 print:break-before-page print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Layers className="h-5 w-5 text-cardano-teal" />
              Navigation & Interaction Patterns
            </CardTitle>
            <CardDescription>Established patterns for how users navigate and interact with the platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {navigationPatterns.map((p, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 text-sm">
                  <span className="font-semibold text-foreground shrink-0 min-w-[160px]">{p.pattern}</span>
                  <span className="text-muted-foreground">{p.desc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Animations */}
        <Card className="mb-8 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-lg">Animations & Transitions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              {[
                { name: 'accordion-down/up', duration: '0.2s ease-out', usage: 'Expanding/collapsing content sections' },
                { name: 'fade-in', duration: '0.5s ease-out', usage: 'Page and section entry animations' },
                { name: 'pulse-slow', duration: '4s infinite', usage: 'Subtle emphasis on live indicators' },
                { name: 'transition-all', duration: '0.2s (default)', usage: 'Hover states, button presses, card elevations' },
              ].map((a, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="font-mono font-semibold text-foreground shrink-0 min-w-[180px]">{a.name}</span>
                  <Badge variant="outline" className="text-[10px] font-mono shrink-0">{a.duration}</Badge>
                  <span className="text-muted-foreground">{a.usage}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Accessibility */}
        <Card className="mb-8 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Accessibility className="h-5 w-5 text-cardano-teal" />
              Accessibility Standards
            </CardTitle>
            <CardDescription>WCAG 2.1 AA compliance requirements.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                { rule: 'Color Contrast', spec: 'Text ≥ 4.5:1, Large text ≥ 3:1' },
                { rule: 'Focus Indicators', spec: 'Visible ring-2 ring-ring on all interactive elements' },
                { rule: 'Keyboard Navigation', spec: 'Tab order follows visual flow. Enter/Space activate controls.' },
                { rule: 'Screen Readers', spec: 'Semantic HTML (h1-h6, nav, main). ARIA labels on icons and actions.' },
                { rule: 'Touch Targets', spec: 'Minimum 44x44px for all clickable elements on mobile.' },
                { rule: 'Alt Text', spec: 'All images have descriptive alt attributes. Decorative images use alt="".' },
                { rule: 'Motion', spec: 'Respect prefers-reduced-motion. No auto-playing animations.' },
                { rule: 'Error States', spec: 'Errors announced to screen readers. Not relying solely on color.' },
              ].map((a, i) => (
                <div key={i} className="p-3 rounded-lg border bg-background">
                  <div className="font-semibold text-foreground text-xs">{a.rule}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{a.spec}</div>
                </div>
              ))}
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
              <a href="/wireframe" className="text-sm text-primary hover:underline">→ Wireframes & User Journeys</a>
              <a href="/architecture" className="text-sm text-primary hover:underline">→ Information Architecture</a>
              <a href="/tech-requirements" className="text-sm text-primary hover:underline">→ Tech Requirements</a>
              <a href="/user-stories" className="text-sm text-primary hover:underline">→ User Stories</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DesignSystem;
