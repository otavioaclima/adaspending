import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface TreeNode {
  label: string;
  description?: string;
  children?: TreeNode[];
  color?: string;
}

const mindMapData: TreeNode = {
  label: 'ADAspending.com',
  description: 'Cardano Treasury Spending Explorer',
  color: 'bg-cardano-blue',
  children: [
    {
      label: 'Landing Page',
      description: 'Public-facing teaser page',
      color: 'bg-cardano-teal',
      children: [
        { label: 'Hero Section', description: 'Main value proposition & CTA' },
        { label: 'Features', description: 'Key platform capabilities' },
        { label: 'Visual Elements', description: 'Platform screenshots & previews' },
        { label: 'About', description: 'Project mission & vision' },
        { label: 'How It Works', description: 'Step-by-step user guide' },
        { label: 'Who We Are', description: 'Team introduction' },
        { label: 'FAQ', description: 'Frequently asked questions' },
        { label: 'CTA Section', description: 'Call-to-action & signup' },
        { label: 'Footer', description: 'Links & social media' },
      ],
    },
    {
      label: 'Dashboard (Overview)',
      description: 'Main analytics hub',
      color: 'bg-cardano-teal',
      children: [
        { label: 'Hero / Search', description: 'Quick search & overview' },
        { label: 'Stats Cards', description: 'Key metrics at a glance' },
        {
          label: 'Analysis Panels',
          description: 'Deep-dive analytics',
          children: [
            { label: 'Budget Comparator', description: 'Proposal vs actual budget' },
            { label: 'Thermometer', description: 'Fund utilization gauge' },
            { label: 'Overspending Panel', description: 'Over-budget detection' },
          ],
        },
        { label: 'Tracking Alerts', description: 'Real-time anomaly notifications' },
        { label: 'Fund Rounds', description: 'Historical fund round data' },
        { label: 'Charts', description: 'Spending distribution visualizations' },
        { label: 'Proposals Grid', description: 'Recent proposals listing' },
        { label: 'Call to Action', description: 'Engagement prompt' },
      ],
    },
    {
      label: 'Award Search',
      description: 'Search & filter proposals',
      color: 'bg-cardano-teal',
      children: [
        { label: 'Search Bar', description: 'Full-text search' },
        {
          label: 'Filters',
          description: 'Multi-criteria filtering',
          children: [
            { label: 'Category' },
            { label: 'Status' },
            { label: 'Fund Round' },
            { label: 'Amount Range' },
          ],
        },
        { label: 'Results Grid', description: 'Paginated results display' },
        { label: 'Sort Options', description: 'Sort by amount, date, status' },
      ],
    },
    {
      label: 'Proposals',
      description: 'Browse & explore proposals',
      color: 'bg-cardano-teal',
      children: [
        { label: 'Proposals Grid', description: 'Card-based listing of all proposals' },
        {
          label: 'Proposal Detail',
          description: 'Individual proposal deep-dive',
          children: [
            { label: 'Overview', description: 'Title, description, status' },
            { label: 'Voting Results', description: 'Yes/No/Abstain breakdown' },
            { label: 'Milestones', description: 'Progress tracking timeline' },
            { label: 'External Links', description: 'Ideascale, GitHub, etc.' },
            { label: 'Recipient Sidebar', description: 'Linked recipient info' },
            { label: 'Details Sidebar', description: 'Budget, dates, metadata' },
          ],
        },
      ],
    },
    {
      label: 'Recipients',
      description: 'Fund recipient profiles',
      color: 'bg-cardano-teal',
      children: [
        { label: 'Recipients Grid', description: 'Searchable directory' },
        {
          label: 'Recipient Detail',
          description: 'Individual recipient profile',
          children: [
            { label: 'Header', description: 'Name, avatar, social links' },
            { label: 'Details Card', description: 'Bio, location, expertise' },
            { label: 'Proposals Card', description: 'All proposals by recipient' },
            { label: 'Accounting Table', description: 'Financial transactions log' },
            { label: 'Milestones', description: 'Cross-proposal milestones' },
            { label: 'Funding Stats', description: 'Total received, completion rate' },
          ],
        },
      ],
    },
    {
      label: 'Spending Explorer',
      description: 'Interactive spending analysis',
      color: 'bg-cardano-teal',
      children: [
        {
          label: 'Charts Tab',
          description: 'Multiple visualization types',
          children: [
            { label: 'By Category', description: 'Pie/bar chart' },
            { label: 'By Fund Round', description: 'Stacked bar chart' },
            { label: 'Timeline', description: 'Line chart over time' },
            { label: 'Scatter Plot', description: 'Budget vs completion' },
          ],
        },
        { label: 'Map View', description: 'Mapbox globe — geographic distribution' },
        { label: 'Data Table', description: 'Sortable, filterable table' },
        { label: 'Data Summary', description: 'Aggregate statistics' },
      ],
    },
    {
      label: 'Proposals',
      description: 'Cardano proposals hub',
      color: 'bg-cardano-teal',
      children: [
        { label: 'Active Fund Round', description: 'Current voting period' },
        { label: 'Upcoming Rounds', description: 'Scheduled future rounds' },
        { label: 'Past Rounds', description: 'Historical results' },
        {
          label: 'Resources',
          description: 'Proposals tools & links',
          children: [
            { label: 'Voting Guide' },
            { label: 'Proposal Submission' },
            { label: 'DRep Directory' },
          ],
        },
        { label: 'Statistics', description: 'Participation metrics' },
      ],
    },
    {
      label: 'Shared Layout',
      description: 'Global UI components',
      color: 'bg-cardano-coral',
      children: [
        {
          label: 'Header',
          children: [
            { label: 'Logo & Brand' },
            { label: 'Navigation Menu', description: '6 main sections' },
            { label: 'Search Button' },
          ],
        },
        { label: 'Mobile Navigation', description: 'Horizontal scrollable tabs' },
        {
          label: 'Footer',
          children: [
            { label: 'Explore Links' },
            { label: 'Data Links' },
            { label: 'Resources Links' },
          ],
        },
      ],
    },
  ],
};

const TreeNodeComponent: React.FC<{ node: TreeNode; depth?: number }> = ({ node, depth = 0 }) => {
  const [expanded, setExpanded] = useState(depth < 2);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="mind-map-node">
      <div
        className={`flex items-start gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md print:shadow-none ${
          depth === 0
            ? 'bg-cardano-blue text-white border-cardano-blue font-bold text-lg'
            : depth === 1
            ? `${node.color || 'bg-cardano-teal'} text-white border-transparent font-semibold`
            : 'bg-card border-border hover:border-cardano-teal/50'
        }`}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {hasChildren && (
          <span className="mt-0.5 shrink-0 print:hidden">
            {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </span>
        )}
        <div className="min-w-0">
          <span className="block font-medium">{node.label}</span>
          {node.description && (
            <span className={`block text-xs mt-0.5 ${depth <= 1 ? 'text-white/80' : 'text-muted-foreground'}`}>
              {node.description}
            </span>
          )}
        </div>
      </div>

      {hasChildren && expanded && (
        <div className="ml-4 mt-1 pl-4 border-l-2 border-cardano-teal/30 space-y-1 print:ml-3 print:pl-3">
          {node.children!.map((child, i) => (
            <TreeNodeComponent key={i} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const MindMapTree: React.FC = () => {
  return (
    <div className="space-y-2">
      <TreeNodeComponent node={mindMapData} />
    </div>
  );
};

export default MindMapTree;
