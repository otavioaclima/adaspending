import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Printer, User, Search, BarChart3, Award, Users, Vote, Globe, LayoutDashboard, ShieldCheck, Accessibility, Zap } from 'lucide-react';

type Priority = 'must' | 'should' | 'could';
type Persona = 'visitor' | 'researcher' | 'voter' | 'admin';

interface UserStory {
  id: string;
  persona: Persona;
  story: string;
  acceptance: string[];
  priority: Priority;
  relatedPages: string[];
}

const personaMap: Record<Persona, { label: string; description: string; icon: React.ElementType }> = {
  visitor: { label: 'New Visitor', description: 'First-time user exploring the platform to understand Cardano Treasury spending.', icon: Globe },
  researcher: { label: 'Community Researcher', description: 'Analyst or journalist investigating spending patterns and recipient accountability.', icon: BarChart3 },
  voter: { label: 'Cardano Voter / DRep', description: 'Active community member who participates in proposals and voting decisions.', icon: Vote },
  admin: { label: 'Platform Administrator', description: 'Internal team member responsible for data accuracy and platform maintenance.', icon: ShieldCheck },
};

const priorityConfig: Record<Priority, { label: string; className: string }> = {
  must: { label: 'Must Have', className: 'bg-destructive/10 text-destructive border-destructive/20' },
  should: { label: 'Should Have', className: 'bg-chart-4/20 text-chart-4 border-chart-4/30' },
  could: { label: 'Could Have', className: 'bg-chart-3/20 text-chart-3 border-chart-3/30' },
};

const epicGroups: { epic: string; icon: React.ElementType; description: string; stories: UserStory[] }[] = [
  {
    epic: 'Discovery & Onboarding',
    icon: Globe,
    description: 'Stories related to the landing page experience and first-time user onboarding.',
    stories: [
      {
        id: 'US-001',
        persona: 'visitor',
        story: 'As a new visitor, I want to see a clear value proposition on the landing page so that I understand what ADAspending.com does and why it matters.',
        acceptance: [
          'Hero section displays headline, description, and CTA button',
          'CTA navigates to Dashboard (/dashboard)',
          'Page loads in under 2 seconds on 3G connection',
          'Content is accessible (WCAG 2.1 AA)',
        ],
        priority: 'must',
        relatedPages: ['/ (Landing Page)'],
      },
      {
        id: 'US-002',
        persona: 'visitor',
        story: 'As a new visitor, I want to see key platform features highlighted so that I know what I can explore.',
        acceptance: [
          'Features section shows 4+ capabilities with icons and descriptions',
          'Each feature links to the relevant section of the app',
          'Responsive grid layout (1 col mobile, 2 cols tablet, 4 cols desktop)',
        ],
        priority: 'must',
        relatedPages: ['/ (Landing Page)'],
      },
      {
        id: 'US-003',
        persona: 'visitor',
        story: 'As a new visitor, I want to read FAQs so that I can get quick answers to common questions about the platform.',
        acceptance: [
          'FAQ section uses accordion component',
          'At least 5 FAQs covering platform purpose, data sources, update frequency, cost, and participation',
          'Accessible keyboard navigation',
        ],
        priority: 'should',
        relatedPages: ['/ (Landing Page)'],
      },
    ],
  },
  {
    epic: 'Dashboard & Overview',
    icon: LayoutDashboard,
    description: 'Stories related to the main analytics dashboard providing a snapshot of treasury spending.',
    stories: [
      {
        id: 'US-004',
        persona: 'visitor',
        story: 'As a user, I want to see key treasury statistics at a glance so that I can quickly understand the overall spending landscape.',
        acceptance: [
          'Stats cards display: Total Funded, Active Proposals, Total Recipients, Average Funding',
          'Data refreshes on page load via React Query',
          'Cards are responsive (1 col mobile, 2 cols tablet, 4 cols desktop)',
          'Loading skeleton displayed while data fetches',
        ],
        priority: 'must',
        relatedPages: ['/dashboard'],
      },
      {
        id: 'US-005',
        persona: 'researcher',
        story: 'As a researcher, I want to compare requested vs. allocated budgets per proposal so that I can identify funding discrepancies.',
        acceptance: [
          'Budget Comparator panel shows side-by-side bar chart',
          'Sortable by difference amount',
          'Hover tooltips show exact values',
          'Data sourced from proposals API/database',
        ],
        priority: 'must',
        relatedPages: ['/dashboard'],
      },
      {
        id: 'US-006',
        persona: 'researcher',
        story: 'As a researcher, I want to see a thermometer gauge of total fund utilization so that I can understand how much of the treasury has been allocated.',
        acceptance: [
          'Visual gauge shows percentage of total treasury allocated',
          'Color-coded thresholds (green < 60%, yellow < 85%, red ≥ 85%)',
          'Tooltip shows exact amounts',
        ],
        priority: 'should',
        relatedPages: ['/dashboard'],
      },
      {
        id: 'US-007',
        persona: 'voter',
        story: 'As a voter, I want to see tracking alerts for anomalies so that I can be aware of over-budget or delayed proposals.',
        acceptance: [
          'Alert panel shows real-time notifications',
          'Alerts categorized: over-budget, delayed milestones, unusual spending',
          'Each alert links to the relevant proposal detail page',
          'Dismissible alerts with persistence via localStorage',
        ],
        priority: 'should',
        relatedPages: ['/dashboard'],
      },
      {
        id: 'US-008',
        persona: 'visitor',
        story: 'As a user, I want to use a search bar on the dashboard so that I can quickly find any proposal or recipient.',
        acceptance: [
          'Search field supports full-text search',
          'Results appear as autocomplete suggestions',
          'Navigates to Proposal Detail or Recipient Detail on selection',
          'Minimum 2 characters to trigger search',
        ],
        priority: 'must',
        relatedPages: ['/dashboard'],
      },
    ],
  },
  {
    epic: 'Award Search',
    icon: Search,
    description: 'Stories related to discovering and filtering specific treasury proposals.',
    stories: [
      {
        id: 'US-009',
        persona: 'researcher',
        story: 'As a researcher, I want to search proposals by keyword so that I can find specific proposals related to my area of interest.',
        acceptance: [
          'Full-text search across titles, descriptions, and recipient names',
          'Results update as user types (debounced 300ms)',
          'Empty state shows helpful message',
          'Search query persisted in URL params',
        ],
        priority: 'must',
        relatedPages: ['/proposals'],
      },
      {
        id: 'US-010',
        persona: 'researcher',
        story: 'As a researcher, I want to filter proposals by category, status, fund round, and amount range so that I can narrow results precisely.',
        acceptance: [
          'Multi-select filters for Category (DeFi, Education, Proposals, etc.)',
          'Status filter: Funded, In Progress, Completed',
          'Fund Round dropdown: F1–F13',
          'Amount range slider with min/max inputs',
          'Filters combine with AND logic',
          'Active filters shown as removable badges',
        ],
        priority: 'must',
        relatedPages: ['/proposals'],
      },
      {
        id: 'US-011',
        persona: 'researcher',
        story: 'As a researcher, I want to sort search results by different criteria so that I can prioritize the most relevant data.',
        acceptance: [
          'Sort options: Amount (asc/desc), Date, Status, Relevance',
          'Default sort by relevance',
          'Sort persisted in URL params',
        ],
        priority: 'should',
        relatedPages: ['/proposals'],
      },
    ],
  },
  {
    epic: 'Proposals',
    icon: Award,
    description: 'Stories related to browsing, viewing, and analyzing individual proposals.',
    stories: [
      {
        id: 'US-012',
        persona: 'visitor',
        story: 'As a user, I want to browse all proposals in a card grid so that I can discover funded projects at a glance.',
        acceptance: [
          'Card shows: title, category badge, status badge, amount, fund round, recipient name',
          'Responsive grid: 1 col mobile, 2 cols tablet, 3 cols desktop',
          'Pagination or infinite scroll (20 items per page)',
          'Loading skeletons during data fetch',
        ],
        priority: 'must',
        relatedPages: ['/proposals'],
      },
      {
        id: 'US-013',
        persona: 'researcher',
        story: 'As a researcher, I want to view a proposal\'s full details including voting results and milestones so that I can assess its progress and community support.',
        acceptance: [
          'Overview section: title, full description, status, category tags',
          'Voting Results: Yes/No/Abstain counts with visual chart',
          'Milestones: timeline showing completion status per deliverable',
          'External links: Ideascale, GitHub, project website',
          'Recipient sidebar with link to profile',
          'Budget breakdown and key dates in details sidebar',
        ],
        priority: 'must',
        relatedPages: ['/proposals/:id'],
      },
      {
        id: 'US-014',
        persona: 'voter',
        story: 'As a voter, I want to see the voting breakdown for each proposal so that I can understand community sentiment before making my own decisions.',
        acceptance: [
          'Bar or pie chart showing Yes/No/Abstain distribution',
          'Total vote count displayed',
          'Percentage labels on chart segments',
          'Accessible color contrast',
        ],
        priority: 'must',
        relatedPages: ['/proposals/:id'],
      },
    ],
  },
  {
    epic: 'Recipients',
    icon: Users,
    description: 'Stories related to the recipient directory and individual recipient profiles.',
    stories: [
      {
        id: 'US-015',
        persona: 'voter',
        story: 'As a voter, I want to browse a directory of all fund recipients so that I can evaluate who is receiving treasury funds.',
        acceptance: [
          'Searchable grid of recipient cards',
          'Card shows: name, avatar, total funded, number of proposals',
          'Filter by total funding range or number of proposals',
          'Responsive grid layout',
        ],
        priority: 'must',
        relatedPages: ['/recipients'],
      },
      {
        id: 'US-016',
        persona: 'researcher',
        story: 'As a researcher, I want to view a recipient\'s complete financial history so that I can assess their accountability and track record.',
        acceptance: [
          'Accounting table shows all disbursements with dates and amounts',
          'Sortable columns',
          'Summary row showing total received',
          'Export to CSV capability',
        ],
        priority: 'must',
        relatedPages: ['/recipients/:id'],
      },
      {
        id: 'US-017',
        persona: 'researcher',
        story: 'As a researcher, I want to see aggregated milestone progress across all of a recipient\'s proposals so that I can evaluate their delivery rate.',
        acceptance: [
          'Combined milestone view across all proposals',
          'Visual progress indicator (completed/total)',
          'Completion rate percentage',
          'Clickable milestones link to parent proposal',
        ],
        priority: 'should',
        relatedPages: ['/recipients/:id'],
      },
    ],
  },
  {
    epic: 'Spending Explorer',
    icon: BarChart3,
    description: 'Stories related to interactive data visualization and analysis tools.',
    stories: [
      {
        id: 'US-018',
        persona: 'researcher',
        story: 'As a researcher, I want to view spending distribution by category, fund round, and timeline so that I can identify trends and patterns.',
        acceptance: [
          'Four chart types: By Category (pie/bar), By Fund Round (stacked bar), Timeline (line), Scatter Plot (budget vs. completion)',
          'Charts are interactive with hover tooltips',
          'Responsive chart sizing',
          'Legend with toggleable series',
        ],
        priority: 'must',
        relatedPages: ['/explorer'],
      },
      {
        id: 'US-019',
        persona: 'researcher',
        story: 'As a researcher, I want to view a geographic map of funded projects so that I can understand the global distribution of spending.',
        acceptance: [
          'Mapbox GL interactive globe/map',
          'Markers sized by funding amount',
          'Hover popups show project name and amount',
          'Zoom and pan controls',
          'Fallback message if Mapbox fails to load',
        ],
        priority: 'should',
        relatedPages: ['/explorer'],
      },
      {
        id: 'US-020',
        persona: 'researcher',
        story: 'As a researcher, I want to view and export raw data in a sortable table so that I can perform my own analysis.',
        acceptance: [
          'Full data table with all proposal fields',
          'Sortable and filterable columns',
          'Pagination (50 rows per page)',
          'Export to CSV button',
          'Row click navigates to Proposal Detail',
        ],
        priority: 'must',
        relatedPages: ['/explorer'],
      },
    ],
  },
  {
    epic: 'Proposals',
    icon: Vote,
    description: 'Stories related to proposals information and community participation.',
    stories: [
      {
        id: 'US-021',
        persona: 'voter',
        story: 'As a voter, I want to see active and upcoming fund rounds so that I can plan my participation in proposals.',
        acceptance: [
          'Active round shows: name, voting period, countdown timer, participation stats',
          'Upcoming rounds list with expected dates and focus areas',
          'Past rounds with total allocated, proposals funded, participation rates',
        ],
        priority: 'must',
        relatedPages: ['/proposals'],
      },
      {
        id: 'US-022',
        persona: 'voter',
        story: 'As a voter, I want quick access to proposals resources so that I can easily participate in the ecosystem.',
        acceptance: [
          'Resource links: Voting Guide, Proposal Submission, DRep Directory',
          'Each link opens in new tab with appropriate icon',
          'Resources section prominently placed',
        ],
        priority: 'should',
        relatedPages: ['/proposals'],
      },
      {
        id: 'US-023',
        persona: 'voter',
        story: 'As a voter, I want to see participation metrics and trends so that I can understand community engagement levels.',
        acceptance: [
          'Voter turnout percentage per round',
          'Delegation rate trends',
          'Engagement trend line chart',
          'Comparison with previous rounds',
        ],
        priority: 'could',
        relatedPages: ['/proposals'],
      },
    ],
  },
  {
    epic: 'Cross-Cutting & Non-Functional',
    icon: Zap,
    description: 'Stories related to performance, accessibility, navigation, and platform-wide concerns.',
    stories: [
      {
        id: 'US-024',
        persona: 'visitor',
        story: 'As a user, I want consistent navigation across all pages so that I can move between sections easily.',
        acceptance: [
          'Sticky header with logo and 6 main nav links on desktop',
          'Mobile: horizontal scrollable tab bar on screens < 768px',
          'Active route highlighted in navigation',
          'Footer with Explore, Data, and Resources links on all pages',
        ],
        priority: 'must',
        relatedPages: ['All pages'],
      },
      {
        id: 'US-025',
        persona: 'visitor',
        story: 'As a mobile user, I want the platform to be fully responsive so that I can use it on any device.',
        acceptance: [
          'All pages render correctly on 320px–1920px viewports',
          'Touch-friendly tap targets (min 44x44px)',
          'No horizontal scroll on any page',
          'Charts and tables adapt to mobile with horizontal scroll where needed',
        ],
        priority: 'must',
        relatedPages: ['All pages'],
      },
      {
        id: 'US-026',
        persona: 'visitor',
        story: 'As a user with accessibility needs, I want the platform to meet WCAG 2.1 AA standards so that I can use it with assistive technologies.',
        acceptance: [
          'All images have alt text',
          'Color contrast ratios meet AA standards (4.5:1 text, 3:1 large text)',
          'Full keyboard navigation support',
          'ARIA labels on interactive elements',
          'Screen reader compatible',
        ],
        priority: 'must',
        relatedPages: ['All pages'],
      },
      {
        id: 'US-027',
        persona: 'visitor',
        story: 'As a user, I want pages to load quickly so that I don\'t lose interest while waiting.',
        acceptance: [
          'Largest Contentful Paint (LCP) < 2.5s',
          'First Input Delay (FID) < 100ms',
          'Cumulative Layout Shift (CLS) < 0.1',
          'API responses cached with React Query (staleTime: 5min)',
          'Code splitting via React.lazy for route-level components',
        ],
        priority: 'must',
        relatedPages: ['All pages'],
      },
      {
        id: 'US-028',
        persona: 'visitor',
        story: 'As a bilingual user, I want to switch between English and Portuguese so that I can use the platform in my preferred language.',
        acceptance: [
          'Language toggle in header',
          'All static text translatable via i18n system',
          'Language preference persisted in localStorage',
          'Default language detected from browser settings',
        ],
        priority: 'could',
        relatedPages: ['All pages'],
      },
      {
        id: 'US-029',
        persona: 'admin',
        story: 'As an administrator, I want data to sync from Project Catalyst API on a schedule so that the platform stays up-to-date.',
        acceptance: [
          'Edge Function runs on cron schedule (daily)',
          'Upserts proposals, recipients, and fund round data',
          'Error logging and retry logic',
          'Admin notification on sync failure',
        ],
        priority: 'must',
        relatedPages: ['Backend'],
      },
      {
        id: 'US-030',
        persona: 'admin',
        story: 'As an administrator, I want Row-Level Security on all database tables so that data access is properly controlled.',
        acceptance: [
          'RLS enabled on all public tables',
          'Read policies for anonymous/public access where appropriate',
          'Write policies restricted to authenticated admin role',
          'Security definer functions for role checks',
        ],
        priority: 'must',
        relatedPages: ['Backend'],
      },
    ],
  },
];

const totalStories = epicGroups.reduce((sum, g) => sum + g.stories.length, 0);
const mustCount = epicGroups.reduce((sum, g) => sum + g.stories.filter(s => s.priority === 'must').length, 0);
const shouldCount = epicGroups.reduce((sum, g) => sum + g.stories.filter(s => s.priority === 'should').length, 0);
const couldCount = epicGroups.reduce((sum, g) => sum + g.stories.filter(s => s.priority === 'could').length, 0);

const UserStories: React.FC = () => {
  const handlePrint = () => window.print();

  return (
    <Layout>
      <div className="print:p-0" id="us-document">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">User Stories</h1>
            <p className="text-muted-foreground mt-1">
              ADAspending.com — Complete user stories organized by epic, with acceptance criteria and MoSCoW prioritization.
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
              User stories derived from the Information Architecture and Technical Requirements documents. Each story follows the format: "As a [persona], I want [goal] so that [benefit]" with measurable acceptance criteria.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-foreground">{totalStories}</div>
                <div className="text-muted-foreground">Total Stories</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-destructive/5">
                <div className="text-2xl font-bold text-destructive">{mustCount}</div>
                <div className="text-muted-foreground">Must Have</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-chart-4/10">
                <div className="text-2xl font-bold text-chart-4">{shouldCount}</div>
                <div className="text-muted-foreground">Should Have</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-chart-3/10">
                <div className="text-2xl font-bold text-chart-3">{couldCount}</div>
                <div className="text-muted-foreground">Could Have</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personas */}
        <Card className="mb-8 print:border-none print:shadow-none print:break-after-page">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              User Personas
            </CardTitle>
            <CardDescription>The four primary personas that represent the platform's target users.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(personaMap).map(([key, p]) => (
                <div key={key} className="flex items-start gap-3 p-3 rounded-lg border bg-background">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <p.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{p.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{p.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Epic Groups */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">User Stories by Epic</h2>
          <p className="text-muted-foreground text-sm">
            Stories are grouped by functional epic and include acceptance criteria, priority, and related pages.
          </p>
        </div>

        <div className="space-y-8">
          {epicGroups.map((group, gi) => (
            <div key={gi} className="print:break-inside-avoid">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <group.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{group.epic}</h3>
                  <p className="text-xs text-muted-foreground">{group.description}</p>
                </div>
              </div>

              <div className="space-y-4 ml-0 md:ml-2">
                {group.stories.map((story) => (
                  <Card key={story.id} className="print:break-inside-avoid print:border-none print:shadow-none">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">{story.id}</span>
                          <Badge variant="outline" className="text-[10px]">
                            {personaMap[story.persona].label}
                          </Badge>
                        </div>
                        <Badge className={priorityConfig[story.priority].className}>
                          {priorityConfig[story.priority].label}
                        </Badge>
                      </div>
                      <p className="text-sm text-foreground mt-2 leading-relaxed italic">"{story.story}"</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="mb-3">
                        <div className="text-xs font-semibold text-foreground mb-1.5">Acceptance Criteria:</div>
                        <ul className="space-y-1">
                          {story.acceptance.map((ac, ai) => (
                            <li key={ai} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-0.5">✓</span>
                              <span>{ac}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {story.relatedPages.map((page, pi) => (
                          <span key={pi} className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                            {page}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Traceability Matrix */}
        <Card className="mt-8 mb-8 print:break-inside-avoid print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Traceability Matrix</CardTitle>
            <CardDescription>Mapping between user stories and platform pages/routes.</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Page / Route</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Related Stories</th>
                  <th className="text-center py-2 font-semibold text-foreground">Count</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { page: '/ (Landing Page)', route: '/' },
                  { page: '/dashboard', route: '/dashboard' },
                  { page: '/proposals', route: '/proposals' },
                  { page: '/proposals', route: '/proposals' },
                  { page: '/proposals/:id', route: '/proposals/:id' },
                  { page: '/recipients', route: '/recipients' },
                  { page: '/recipients/:id', route: '/recipients/:id' },
                  { page: '/explorer', route: '/explorer' },
                  { page: '/proposals', route: '/proposals' },
                  { page: 'All pages', route: 'All pages' },
                  { page: 'Backend', route: 'Backend' },
                ].map((row) => {
                  const related = epicGroups.flatMap(g => g.stories).filter(s => s.relatedPages.includes(row.page));
                  if (related.length === 0) return null;
                  return (
                    <tr key={row.page} className="border-b border-border/50">
                      <td className="py-2 pr-4 font-mono text-muted-foreground">{row.page}</td>
                      <td className="py-2 pr-4">
                        <div className="flex flex-wrap gap-1">
                          {related.map(s => (
                            <span key={s.id} className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono">{s.id}</span>
                          ))}
                        </div>
                      </td>
                      <td className="py-2 text-center font-semibold text-foreground">{related.length}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Related Documents */}
        <Card className="mb-8 print:border-none print:shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Related Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <a href="/architecture" className="text-sm text-primary hover:underline">→ Information Architecture</a>
              <a href="/tech-requirements" className="text-sm text-primary hover:underline">→ Tech Requirements</a>
              <a href="/wireframe" className="text-sm text-primary hover:underline">→ Wireframes</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default UserStories;
