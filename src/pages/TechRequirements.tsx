import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Printer, Server, Monitor, Link2, Database, Shield, Globe, Zap,
  Code2, Layers, GitBranch, Lock, Activity, Cloud, Cpu, Eye,
  RefreshCw, FileText, CheckCircle2, AlertTriangle
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Data definitions                                                   */
/* ------------------------------------------------------------------ */

const frontendRequirements = [
  {
    category: 'Core Framework & Build',
    icon: Code2,
    items: [
      { name: 'React 18.x', priority: 'Must', desc: 'Component-based UI library with concurrent rendering support. Enables efficient re-renders via virtual DOM diffing and Suspense boundaries.' },
      { name: 'TypeScript 5.x', priority: 'Must', desc: 'Static type checking across the entire codebase. Ensures type safety for API responses, component props, and state management.' },
      { name: 'Vite 5.x', priority: 'Must', desc: 'Next-generation build tool with HMR (Hot Module Replacement). Sub-second dev server startup and optimized production bundles via Rollup.' },
      { name: 'SWC Compiler', priority: 'Must', desc: 'Rust-based JavaScript/TypeScript compiler used via @vitejs/plugin-react-swc for 20x faster transpilation than Babel.' },
    ],
  },
  {
    category: 'Styling & Design System',
    icon: Layers,
    items: [
      { name: 'Tailwind CSS 3.x', priority: 'Must', desc: 'Utility-first CSS framework with JIT compilation. Custom design tokens defined via CSS variables (HSL) in index.css for consistent theming.' },
      { name: 'shadcn/ui Components', priority: 'Must', desc: 'Accessible, composable component library built on Radix UI primitives. Components are copied into the project for full customization control.' },
      { name: 'Radix UI Primitives', priority: 'Must', desc: 'Unstyled, accessible UI primitives (Dialog, Accordion, Tabs, etc.) providing WAI-ARIA compliant interactions out of the box.' },
      { name: 'Responsive Design', priority: 'Must', desc: 'Mobile-first approach with breakpoints at sm(640px), md(768px), lg(1024px), xl(1280px). All views must be functional on 320px+ screens.' },
      { name: 'Dark/Light Mode', priority: 'Should', desc: 'Theme switching via next-themes with CSS variable swapping. All semantic tokens must support both modes.' },
    ],
  },
  {
    category: 'State & Data Management',
    icon: RefreshCw,
    items: [
      { name: 'TanStack React Query 5.x', priority: 'Must', desc: 'Server state management with automatic caching, background refetching, stale-while-revalidate strategy, and optimistic updates.' },
      { name: 'React Router 6.x', priority: 'Must', desc: 'Client-side routing with nested routes, dynamic segments (/proposals/:id), and lazy-loaded route components.' },
      { name: 'React Hook Form + Zod', priority: 'Must', desc: 'Performant form management with schema-based validation. Zod provides runtime type validation matching TypeScript types.' },
    ],
  },
  {
    category: 'Data Visualization',
    icon: Activity,
    items: [
      { name: 'Recharts 2.x', priority: 'Must', desc: 'Declarative chart library for bar, line, pie, scatter, and area charts. Used across Dashboard, Spending Explorer, and Proposal analytics.' },
      { name: 'Mapbox GL JS 3.x', priority: 'Must', desc: 'WebGL-powered interactive map for geographic spending distribution. Requires Mapbox access token for tile rendering.' },
    ],
  },
  {
    category: 'Performance & SEO',
    icon: Zap,
    items: [
      { name: 'Code Splitting', priority: 'Must', desc: 'Route-based lazy loading via React.lazy() and Suspense. Target initial bundle < 200KB gzipped.' },
      { name: 'Image Optimization', priority: 'Should', desc: 'Lazy loading for below-fold images, WebP format where supported, and responsive srcset attributes.' },
      { name: 'Meta Tags & Open Graph', priority: 'Must', desc: 'Dynamic page titles (<60 chars), meta descriptions (<160 chars), OG tags for social sharing, and JSON-LD structured data.' },
      { name: 'Lighthouse Score Targets', priority: 'Should', desc: 'Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 90, SEO ≥ 95 on desktop.' },
    ],
  },
];

const backendRequirements = [
  {
    category: 'Database & Storage',
    icon: Database,
    items: [
      { name: 'PostgreSQL (Cloud Hosted)', priority: 'Must', desc: 'Primary relational database for all structured data: proposals, recipients, fund rounds, transactions, and milestones.' },
      { name: 'Row-Level Security (RLS)', priority: 'Must', desc: 'Fine-grained access control at the database level. All tables must have RLS policies to prevent unauthorized data access.' },
      { name: 'Database Migrations', priority: 'Must', desc: 'Version-controlled schema changes via SQL migrations. All DDL changes must go through the migration tool for auditability.' },
      { name: 'File Storage', priority: 'Should', desc: 'Cloud storage buckets for proposal attachments, recipient avatars, and exported reports. Secured with storage policies.' },
      { name: 'Realtime Subscriptions', priority: 'Should', desc: 'WebSocket-based realtime updates for tracking alerts, proposal status changes, and live voting data via postgres_changes.' },
    ],
  },
  {
    category: 'Authentication & Authorization',
    icon: Lock,
    items: [
      { name: 'Email/Password Auth', priority: 'Must', desc: 'Standard signup/login with email verification. No anonymous signups. Passwords hashed with bcrypt.' },
      { name: 'Session Management', priority: 'Must', desc: 'JWT-based sessions with automatic token refresh. Tokens stored in localStorage with configurable expiration.' },
      { name: 'Role-Based Access Control', priority: 'Should', desc: 'Separate user_roles table with app_role enum (admin, moderator, user). Security-definer function for role checks in RLS policies.' },
      { name: 'Social Auth (OAuth 2.0)', priority: 'Could', desc: 'Optional Google/GitHub login integration. Requires OAuth app configuration and callback URL setup.' },
    ],
  },
  {
    category: 'Edge Functions (Serverless)',
    icon: Cloud,
    items: [
      { name: 'Deno Runtime', priority: 'Must', desc: 'TypeScript-first serverless functions running on Deno. Auto-deployed on push. Used for external API proxying and server-side logic.' },
      { name: 'API Proxy Functions', priority: 'Must', desc: 'Edge functions to securely proxy requests to Project Catalyst API, Cardano blockchain explorers, and third-party data sources.' },
      { name: 'Scheduled Functions (CRON)', priority: 'Should', desc: 'Periodic tasks for data synchronization: fetching latest proposals, updating fund round status, and refreshing cached analytics.' },
      { name: 'Secrets Management', priority: 'Must', desc: 'Secure storage for API keys, service tokens, and sensitive configuration. Accessible only within edge functions at runtime.' },
    ],
  },
  {
    category: 'AI Integration',
    icon: Cpu,
    items: [
      { name: 'AI Gateway', priority: 'Should', desc: 'Built-in AI models (Gemini, GPT) without API keys. Use for proposal summarization, spending anomaly detection, and natural language search.' },
      { name: 'Supported Models', priority: 'Should', desc: 'google/gemini-2.5-flash (balanced), openai/gpt-5-mini (strong reasoning). Selection based on task complexity and latency requirements.' },
    ],
  },
];

const integrationRequirements = [
  {
    category: 'Cardano Ecosystem APIs',
    icon: Globe,
    items: [
      { name: 'Project Catalyst API', priority: 'Must', desc: 'Primary data source for proposals, fund rounds, voting results, and milestones. REST API with pagination support.' },
      { name: 'Cardano Blockchain Explorer', priority: 'Should', desc: 'On-chain transaction verification via Blockfrost or Koios API. Used to cross-reference treasury disbursements.' },
      
    ],
  },
  {
    category: 'Mapping & Geolocation',
    icon: Globe,
    items: [
      { name: 'Mapbox API', priority: 'Must', desc: 'Vector tile service for the Spending Explorer map view. Requires access token. Style: mapbox://styles/mapbox/dark-v11.' },
      { name: 'Geocoding Service', priority: 'Should', desc: 'Convert recipient location strings to lat/lng coordinates for map plotting. Batch geocoding on data import.' },
    ],
  },
  {
    category: 'Analytics & Monitoring',
    icon: Eye,
    items: [
      { name: 'Web Analytics', priority: 'Should', desc: 'Privacy-respecting analytics for page views, user journeys, and feature adoption. Custom event tracking via AnalyticsProvider.' },
      { name: 'Error Monitoring', priority: 'Should', desc: 'Client-side error tracking with stack traces, breadcrumbs, and user context. Integration with alerting for production issues.' },
      { name: 'Performance Monitoring', priority: 'Should', desc: 'Core Web Vitals tracking (LCP, FID, CLS). Real User Monitoring (RUM) for actual user experience metrics.' },
    ],
  },
  {
    category: 'DevOps & CI/CD',
    icon: GitBranch,
    items: [
      { name: 'GitHub Integration', priority: 'Must', desc: 'Source code management with branch protection. Auto-commits on changes. Supports external IDE workflows.' },
      { name: 'Automated Deployment', priority: 'Must', desc: 'Frontend: publish via CI/CD pipeline. Backend: edge functions auto-deploy on push. Zero-downtime deployments.' },
      { name: 'Custom Domain + SSL', priority: 'Must', desc: 'Custom domain (adaspending.com) with automatic SSL certificate provisioning and renewal.' },
      { name: 'Environment Management', priority: 'Should', desc: 'Separate development/staging/production environments with isolated databases and environment-specific secrets.' },
    ],
  },
  {
    category: 'Security & Compliance',
    icon: Shield,
    items: [
      { name: 'HTTPS Everywhere', priority: 'Must', desc: 'All traffic encrypted via TLS 1.3. HSTS headers enforced. No mixed content allowed.' },
      { name: 'Content Security Policy', priority: 'Should', desc: 'CSP headers to prevent XSS attacks. Whitelist for Mapbox, Cloud backend, and approved CDN domains.' },
      { name: 'CORS Configuration', priority: 'Must', desc: 'Strict Cross-Origin Resource Sharing policies on edge functions. Only allow requests from adaspending.com and preview domains.' },
      { name: 'Data Privacy (LGPD/GDPR)', priority: 'Should', desc: 'Cookie consent banner, data retention policies, and user data export/deletion capabilities for regulatory compliance.' },
      { name: 'Dependency Scanning', priority: 'Should', desc: 'Regular npm audit for vulnerability detection. Automated alerts for critical/high severity issues in dependencies.' },
    ],
  },
];

const nonFunctionalRequirements = [
  { name: 'Availability', target: '99.9% uptime', desc: 'Achieved via managed cloud infrastructure with automatic failover and health checks.' },
  { name: 'Response Time', target: '< 200ms API, < 3s FCP', desc: 'API responses under 200ms (p95). First Contentful Paint under 3 seconds on 3G connections.' },
  { name: 'Scalability', target: '10,000+ concurrent users', desc: 'Serverless edge functions auto-scale. Database connection pooling via PgBouncer. CDN for static assets.' },
  { name: 'Data Freshness', target: '< 1 hour lag', desc: 'Catalyst data synchronized at minimum hourly intervals via CRON edge functions.' },
  { name: 'Browser Support', target: 'Last 2 versions', desc: 'Chrome, Firefox, Safari, Edge. Progressive enhancement for older browsers. No IE11 support.' },
  { name: 'Accessibility', target: 'WCAG 2.1 AA', desc: 'Keyboard navigation, screen reader support, color contrast ratios ≥ 4.5:1, focus indicators on all interactive elements.' },
  { name: 'Internationalization', target: 'EN + PT-BR', desc: 'English as primary language. Brazilian Portuguese as secondary. Content managed via translation keys.' },
];

const priorityColors: Record<string, string> = {
  Must: 'bg-destructive/10 text-destructive border-destructive/20',
  Should: 'bg-secondary/10 text-secondary border-secondary/20',
  Could: 'bg-muted text-muted-foreground border-border',
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const RequirementSection: React.FC<{
  title: string;
  description: string;
  icon: React.ElementType;
  requirements: typeof frontendRequirements;
  accentClass: string;
}> = ({ title, description, icon: Icon, requirements, accentClass }) => (
  <div className="mb-10 print:break-before-page">
    <div className="flex items-center gap-3 mb-2">
      <div className={`p-2.5 rounded-lg ${accentClass}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
    <p className="text-muted-foreground mb-6 ml-12">{description}</p>

    <div className="space-y-5">
      {requirements.map((group, gi) => (
        <Card key={gi} className="print:break-inside-avoid print:border-none print:shadow-none">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <group.icon className="h-4 w-4 text-muted-foreground" />
              <CardTitle className="text-base">{group.category}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {group.items.map((item, ii) => (
                <div key={ii} className="flex flex-col sm:flex-row sm:items-start gap-2 text-sm">
                  <div className="flex items-center gap-2 shrink-0 min-w-[180px]">
                    <Badge variant="outline" className={`text-[10px] px-1.5 py-0 font-semibold ${priorityColors[item.priority]}`}>
                      {item.priority}
                    </Badge>
                    <span className="font-semibold text-foreground">{item.name}</span>
                  </div>
                  <span className="text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const TechRequirements: React.FC = () => {
  const handlePrint = () => window.print();

  return (
    <Layout>
      <div className="print:p-0" id="tech-req-document">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Definition of Tech Requirements</h1>
            <p className="text-muted-foreground mt-1">
              ADAspending.com — Backend, Frontend, and Integration technical specifications.
            </p>
          </div>
          <Button onClick={handlePrint} variant="outline" className="print:hidden gap-2 shrink-0">
            <Printer className="h-4 w-4" />
            Save as PDF
          </Button>
        </div>

        {/* Document Meta */}
        <Card className="mb-8 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Document Overview</CardTitle>
            <CardDescription>
              This document defines all technical requirements for ADAspending.com — a Cardano Treasury transparency platform. It covers frontend, backend, and integration specifications aligned with industry best practices. Requirements are prioritized using MoSCoW methodology.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div><span className="font-semibold text-foreground">Platform:</span><span className="text-muted-foreground ml-2">ADAspending.com</span></div>
              <div><span className="font-semibold text-foreground">Version:</span><span className="text-muted-foreground ml-2">1.0</span></div>
              <div><span className="font-semibold text-foreground">Date:</span><span className="text-muted-foreground ml-2">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span></div>
              <div><span className="font-semibold text-foreground">Methodology:</span><span className="text-muted-foreground ml-2">MoSCoW Prioritization</span></div>
              <div><span className="font-semibold text-foreground">Stack:</span><span className="text-muted-foreground ml-2">React + TypeScript + Cloud Backend</span></div>
              <div><span className="font-semibold text-foreground">Architecture:</span><span className="text-muted-foreground ml-2">Serverless + Edge Functions</span></div>
            </div>

            {/* Priority Legend */}
            <div className="mt-4 pt-4 border-t flex flex-wrap gap-4 text-xs">
              <span className="font-semibold text-foreground">Priority Legend:</span>
              <span className="flex items-center gap-1.5"><Badge variant="outline" className={`text-[10px] px-1.5 py-0 font-semibold ${priorityColors.Must}`}>Must</Badge> Essential for MVP</span>
              <span className="flex items-center gap-1.5"><Badge variant="outline" className={`text-[10px] px-1.5 py-0 font-semibold ${priorityColors.Should}`}>Should</Badge> Important, post-MVP</span>
              <span className="flex items-center gap-1.5"><Badge variant="outline" className={`text-[10px] px-1.5 py-0 font-semibold ${priorityColors.Could}`}>Could</Badge> Nice to have</span>
            </div>
          </CardContent>
        </Card>

        {/* Technology Stack Summary */}
        <Card className="mb-8 print:break-inside-avoid print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-cardano-teal" />
              Technology Stack Summary
            </CardTitle>
            <CardDescription>High-level overview of all technologies used across the platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Monitor className="h-4 w-4 text-secondary" /> Frontend</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• React 18 + TypeScript 5</li>
                  <li>• Vite 5 + SWC</li>
                  <li>• Tailwind CSS 3 + shadcn/ui</li>
                  <li>• React Query + React Router 6</li>
                  <li>• Recharts + Mapbox GL</li>
                  <li>• React Hook Form + Zod</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Server className="h-4 w-4 text-secondary" /> Backend</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Cloud PostgreSQL</li>
                  <li>• Edge Functions (Deno)</li>
                  <li>• Row-Level Security</li>
                  <li>• JWT Authentication</li>
                  <li>• Realtime WebSockets</li>
                  <li>• AI Gateway</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Link2 className="h-4 w-4 text-secondary" /> Integrations</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Project Catalyst API</li>
                  <li>• Cardano Blockchain Explorer</li>
                  <li>• Mapbox Tiles & Geocoding</li>
                  <li>• GitHub CI/CD</li>
                  <li>• Web Analytics & RUM</li>
                  <li>• Error Monitoring</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Frontend Requirements */}
        <RequirementSection
          title="Frontend Requirements"
          description="Client-side specifications covering UI framework, styling, state management, visualization, and performance."
          icon={Monitor}
          requirements={frontendRequirements}
          accentClass="bg-secondary/10 text-secondary"
        />

        {/* Backend Requirements */}
        <RequirementSection
          title="Backend Requirements"
          description="Server-side specifications covering database, authentication, serverless functions, and AI capabilities."
          icon={Server}
          requirements={backendRequirements}
          accentClass="bg-cardano-blue/10 text-cardano-blue"
        />

        {/* Integration Requirements */}
        <RequirementSection
          title="Integration Requirements"
          description="External services, APIs, DevOps pipelines, and security/compliance specifications."
          icon={Link2}
          requirements={integrationRequirements}
          accentClass="bg-cardano-teal/10 text-cardano-teal"
        />

        {/* Non-Functional Requirements */}
        <Card className="mb-8 print:break-before-page print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Activity className="h-5 w-5 text-muted-foreground" />
              Non-Functional Requirements
            </CardTitle>
            <CardDescription>Performance, scalability, availability, and quality targets for the platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {nonFunctionalRequirements.map((nfr, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 text-sm print:break-inside-avoid">
                  <div className="flex items-center gap-2 shrink-0 min-w-[220px]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cardano-teal shrink-0" />
                    <span className="font-semibold text-foreground">{nfr.name}</span>
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 font-mono">{nfr.target}</Badge>
                  </div>
                  <span className="text-muted-foreground">{nfr.desc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Risks & Constraints */}
        <Card className="mb-8 print:break-inside-avoid print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Technical Risks & Constraints
            </CardTitle>
            <CardDescription>Known limitations and mitigation strategies.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              {[
                { risk: 'Catalyst API Rate Limits', impact: 'High', mitigation: 'Implement caching layer with React Query stale times (5-15 min). Edge function response caching. Fallback to local snapshot data.' },
                { risk: 'Mapbox Token Exposure', impact: 'Medium', mitigation: 'Use domain-restricted tokens. Monitor usage via Mapbox dashboard. Rotate tokens quarterly.' },
                { risk: 'Large Dataset Rendering', impact: 'Medium', mitigation: 'Virtualized lists for 1000+ items. Server-side pagination. Aggregated data for charts instead of raw records.' },
                { risk: 'Browser Compatibility', impact: 'Low', mitigation: 'Polyfills via Vite. Progressive enhancement. Automated cross-browser testing.' },
                { risk: 'Third-Party API Changes', impact: 'Medium', mitigation: 'Adapter pattern for external APIs. Contract tests. Version pinning where available.' },
              ].map((r, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <div className="flex items-center gap-2 shrink-0 min-w-[240px]">
                    <Badge variant="outline" className={`text-[10px] px-1.5 py-0 font-semibold ${r.impact === 'High' ? priorityColors.Must : r.impact === 'Medium' ? priorityColors.Should : priorityColors.Could}`}>
                      {r.impact}
                    </Badge>
                    <span className="font-semibold text-foreground">{r.risk}</span>
                  </div>
                  <span className="text-muted-foreground">{r.mitigation}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Documents */}
        <Card className="mb-8 print:break-inside-avoid print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              Related Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <a href="/architecture" className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-accent transition-colors">
                <Layers className="h-4 w-4 text-cardano-blue" />
                <div>
                  <span className="font-semibold text-foreground">Information Architecture</span>
                  <p className="text-xs text-muted-foreground">Platform structure, sections, and dependencies</p>
                </div>
              </a>
              <a href="/wireframe" className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-accent transition-colors">
                <Monitor className="h-4 w-4 text-cardano-teal" />
                <div>
                  <span className="font-semibold text-foreground">Wireframes</span>
                  <p className="text-xs text-muted-foreground">Visual wireframes for all platform screens</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TechRequirements;
