import React from 'react';
import { Maximize2 } from 'lucide-react';

interface WireframeElement {
  type: 'header' | 'nav' | 'hero' | 'grid' | 'cards' | 'table' | 'chart' | 'map' | 'sidebar' | 'text' | 'search' | 'filters' | 'cta' | 'footer' | 'tabs' | 'stats' | 'alerts' | 'form' | 'timeline';
  label: string;
  height?: string;
  cols?: number;
}

interface WireframeScreenProps {
  title: string;
  route: string;
  elements: WireframeElement[];
  isActive?: boolean;
  onExpand?: () => void;
}

const elementStyles: Record<WireframeElement['type'], { bg: string }> = {
  header: { bg: 'bg-cardano-dark' },
  nav: { bg: 'bg-cardano-blue/20' },
  hero: { bg: 'bg-gradient-to-r from-cardano-blue/15 to-cardano-teal/15' },
  grid: { bg: 'bg-muted/50' },
  cards: { bg: 'bg-muted/40' },
  table: { bg: 'bg-muted/30' },
  chart: { bg: 'bg-cardano-teal/10' },
  map: { bg: 'bg-cardano-blue/10' },
  sidebar: { bg: 'bg-muted/40' },
  text: { bg: 'bg-muted/20' },
  search: { bg: 'bg-card' },
  filters: { bg: 'bg-accent/50' },
  cta: { bg: 'bg-cardano-blue/15' },
  footer: { bg: 'bg-muted/60' },
  tabs: { bg: 'bg-accent/40' },
  stats: { bg: 'bg-cardano-teal/10' },
  alerts: { bg: 'bg-destructive/10' },
  form: { bg: 'bg-card' },
  timeline: { bg: 'bg-cardano-teal/10' },
};

const WireframeScreen: React.FC<WireframeScreenProps> = ({ title, route, elements, isActive, onExpand }) => {
  return (
    <div
      className={`relative border-2 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg ${
        isActive ? 'border-cardano-teal shadow-lg ring-2 ring-cardano-teal/30' : 'border-border hover:border-cardano-teal/50'
      }`}
    >
      {/* Browser chrome */}
      <div className="bg-muted px-3 py-1.5 flex items-center gap-2 border-b">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-destructive/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 bg-background rounded text-[9px] text-muted-foreground px-2 py-0.5 font-mono truncate">
          adaspending.com{route}
        </div>
      </div>

      {/* Screen content */}
      <div className="p-2 space-y-1.5 bg-background min-h-[180px]">
        {elements.map((el, i) => {
          const style = elementStyles[el.type];
          if (el.type === 'grid' || el.type === 'cards' || el.type === 'stats') {
            const cols = el.cols || 3;
            return (
              <div key={i}>
                <span className="text-[7px] text-muted-foreground uppercase tracking-wider font-medium">{el.label}</span>
                <div className="grid gap-1 mt-0.5" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                  {Array.from({ length: cols }).map((_, j) => (
                    <div key={j} className={`${style.bg} rounded border border-border/50`} style={{ height: el.height || '24px' }} />
                  ))}
                </div>
              </div>
            );
          }
          return (
            <div key={i}>
              <div
                className={`${style.bg} rounded flex items-center justify-center border border-border/30`}
                style={{ height: el.height || '20px' }}
              >
                <span className="text-[7px] text-muted-foreground font-medium">{el.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Title bar with expand button */}
      <div className="bg-muted/80 px-3 py-1.5 border-t flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-foreground">{title}</p>
          <p className="text-[9px] text-muted-foreground font-mono">{route}</p>
        </div>
        {onExpand && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onExpand();
            }}
            className="flex items-center gap-1 px-2 py-1 rounded bg-cardano-blue text-white text-[10px] font-medium hover:bg-cardano-blue/80 transition-colors z-10"
          >
            <Maximize2 className="h-3 w-3" />
            Ampliar
          </button>
        )}
      </div>
    </div>
  );
};

export default WireframeScreen;
