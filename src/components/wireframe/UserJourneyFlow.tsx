import React from 'react';
import { ArrowRight, ArrowDown, MousePointerClick } from 'lucide-react';

interface JourneyStep {
  id: string;
  label: string;
  description: string;
  action: string;
  page: string;
}

const journeys: { name: string; description: string; steps: JourneyStep[] }[] = [
  {
    name: 'New Visitor Journey',
    description: 'First-time user discovering the platform',
    steps: [
      { id: '1', label: 'Landing Page', description: 'Sees value proposition', action: 'Clicks "Explore Dashboard"', page: '/' },
      { id: '2', label: 'Dashboard', description: 'Views stats & overview', action: 'Browses proposals grid', page: '/overview' },
      { id: '3', label: 'Proposals', description: 'Explores funded projects', action: 'Clicks a proposal card', page: '/proposals' },
      { id: '4', label: 'Proposal Detail', description: 'Reviews milestones & budget', action: 'Clicks recipient link', page: '/proposals/:id' },
      { id: '5', label: 'Recipient Profile', description: 'Checks track record', action: 'Views accounting table', page: '/recipients/:id' },
    ],
  },
  {
    name: 'Researcher Journey',
    description: 'Community member analyzing spending patterns',
    steps: [
      { id: '1', label: 'Dashboard', description: 'Quick overview', action: 'Navigates to Explorer', page: '/overview' },
      { id: '2', label: 'Spending Explorer', description: 'Views charts & map', action: 'Switches to data table', page: '/explorer' },
      { id: '3', label: 'Data Table', description: 'Sorts & filters data', action: 'Clicks specific award', page: '/explorer' },
      { id: '4', label: 'Proposal Detail', description: 'Deep-dives into data', action: 'Checks proposals context', page: '/proposals/:id' },
      { id: '5', label: 'Proposals', description: 'Reviews fund round context', action: 'Explores round proposals', page: '/proposals' },
    ],
  },
  {
    name: 'Award Search Journey',
    description: 'User searching for a specific award or topic',
    steps: [
      { id: '1', label: 'Any Page', description: 'Clicks search button', action: 'Navigates to Award Search', page: '/*' },
      { id: '2', label: 'Award Search', description: 'Types search query', action: 'Applies filters', page: '/proposals' },
      { id: '3', label: 'Filtered Results', description: 'Reviews matching proposals', action: 'Selects result', page: '/proposals' },
      { id: '4', label: 'Proposal Detail', description: 'Reads full proposal', action: 'Views recipient', page: '/proposals/:id' },
      { id: '5', label: 'Recipient Profile', description: 'Reviews all their work', action: 'Journey complete', page: '/recipients/:id' },
    ],
  },
];

const UserJourneyFlow: React.FC = () => {
  return (
    <div className="space-y-8">
      {journeys.map((journey, ji) => (
        <div key={ji} className="border rounded-lg p-4 bg-card">
          <div className="mb-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <MousePointerClick className="h-4 w-4 text-cardano-teal" />
              {journey.name}
            </h4>
            <p className="text-sm text-muted-foreground">{journey.description}</p>
          </div>

          {/* Desktop flow */}
          <div className="hidden md:flex items-stretch gap-2 overflow-x-auto pb-2">
            {journey.steps.map((step, si) => (
              <React.Fragment key={step.id}>
                <div className="flex-1 min-w-[160px] border rounded-lg p-3 bg-background relative">
                  <div className="text-[10px] font-mono text-cardano-teal mb-1">Step {si + 1}</div>
                  <div className="font-medium text-sm text-foreground">{step.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{step.description}</div>
                  <div className="mt-2 pt-2 border-t">
                    <div className="text-[10px] text-cardano-blue font-medium flex items-center gap-1">
                      <ArrowRight className="h-3 w-3" />
                      {step.action}
                    </div>
                  </div>
                  <div className="text-[9px] font-mono text-muted-foreground mt-1">{step.page}</div>
                </div>
                {si < journey.steps.length - 1 && (
                  <div className="flex items-center shrink-0">
                    <ArrowRight className="h-5 w-5 text-cardano-teal" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile flow */}
          <div className="md:hidden space-y-2">
            {journey.steps.map((step, si) => (
              <React.Fragment key={step.id}>
                <div className="border rounded-lg p-3 bg-background">
                  <div className="text-[10px] font-mono text-cardano-teal mb-1">Step {si + 1}</div>
                  <div className="font-medium text-sm text-foreground">{step.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{step.description}</div>
                  <div className="mt-2 pt-2 border-t">
                    <div className="text-[10px] text-cardano-blue font-medium">{step.action}</div>
                  </div>
                </div>
                {si < journey.steps.length - 1 && (
                  <div className="flex justify-center">
                    <ArrowDown className="h-4 w-4 text-cardano-teal" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserJourneyFlow;
