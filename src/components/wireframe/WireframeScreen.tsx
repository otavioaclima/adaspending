import React from 'react';

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
  onClick?: () => void;
}

const elementStyles: Record<WireframeElement['type'], { bg: string; pattern: string }> = {
  header: { bg: 'bg-cardano-dark', pattern: '' },
  nav: { bg: 'bg-cardano-blue/20', pattern: '' },
  hero: { bg: 'bg-gradient-to-r from-cardano-blue/15 to-cardano-teal/15', pattern: '' },
  grid: { bg: 'bg-muted/50', pattern: '' },
  cards: { bg: 'bg-muted/40', pattern: '' },
  table: { bg: 'bg-muted/30', pattern: '' },
  chart: { bg: 'bg-cardano-teal/10', pattern: '' },
  map: { bg: 'bg-cardano-blue/10', pattern: '' },
  sidebar: { bg: 'bg-muted/40', pattern: '' },
  text: { bg: 'bg-muted/20', pattern: '' },
  search: { bg: 'bg-card', pattern: '' },
  filters: { bg: 'bg-accent/50', pattern: '' },
  cta: { bg: 'bg-cardano-blue/15', pattern: '' },
  footer: { bg: 'bg-muted/60', pattern: '' },
  tabs: { bg: 'bg-accent/40', pattern: '' },
  stats: { bg: 'bg-cardano-teal/10', pattern: '' },
  alerts: { bg: 'bg-destructive/10', pattern: '' },
  form: { bg: 'bg-card', pattern: '' },
  timeline: { bg: 'bg-cardano-teal/10', pattern: '' },
};

const WireframeScreen: React.FC<WireframeScreenProps> = ({ title, route, elements, isActive, onClick }) => {
  return (
    <button
      type="button"
      className={`text-left w-full border-2 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
        isActive ? 'border-cardano-teal shadow-lg ring-2 ring-cardano-teal/30' : 'border-border hover:border-cardano-teal/50'
      }`}
      onClick={onClick}
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
                <div className={`grid gap-1 mt-0.5`} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                  {Array.from({ length: cols }).map((_, j) => (
                    <div key={j} className={`${style.bg} rounded h-${el.height || '6'} border border-border/50`} style={{ height: el.height || '24px' }} />
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

      {/* Title bar */}
      <div className="bg-muted/80 px-3 py-1.5 border-t">
        <p className="text-xs font-semibold text-foreground">{title}</p>
        <p className="text-[9px] text-muted-foreground font-mono">{route}</p>
      </div>
    </button>
  );
};

export default WireframeScreen;
