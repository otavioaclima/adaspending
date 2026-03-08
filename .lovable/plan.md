

## Information Architecture Document for ADAspending.com

### Overview
I will create a dedicated page within the application that serves as a downloadable/viewable Information Architecture document, including a visual Mind Map rendered with a structured component. The document will be accessible to both technical and non-technical community members.

### What will be built

**A new page `/architecture`** containing:

1. **Mind Map visualization** -- A structured, interactive tree diagram showing all sections, subsections, and their connections, built with React components and styled with Tailwind CSS (no external library needed -- CSS-based tree layout).

2. **Detailed sections documentation** covering:
   - **Landing Page (Teaser)**: Hero, Features, Visual Elements, About, How It Works, Who We Are, FAQ, CTA, Footer
   - **Dashboard (Overview)**: Hero/Search, Stats, Analysis Panels (Budget Comparator, Thermometer, Overspending), Tracking Alerts, Fund Rounds, Charts, Proposals, CTA
   - **Award Search**: Search bar, Filters (Category, Status, Fund Round, Amount), Results grid, Sorting
   - **Proposals**: Proposals grid, Proposal Detail (Overview, Voting Results, Milestones, Links, Recipient sidebar, Details sidebar)
   - **Recipients**: Recipients grid, Recipient Detail (Header, Details Card, Proposals Card, Accounting Table, Milestones, Funding Stats)
   - **Spending Explorer**: Charts tab (Category/Round/Timeline/Scatter), Map View (Mapbox Globe), Data Table (sortable)
   - **Governance**: Active Fund Round, Upcoming Round, Past Rounds, Resources (Voting, Proposals, DReps), Statistics
   - **Shared Layout**: Header (Navigation, Search), Mobile Nav, Footer (Explore, Data, Resources links)

3. **Print/PDF-friendly styling** so users can print or save as PDF directly from the browser.

### Technical approach

- Create `src/pages/InformationArchitecture.tsx` with all content
- Create `src/components/architecture/MindMapTree.tsx` for the visual mind map component
- Add route `/architecture` in `App.tsx`
- Use a CSS tree layout with connecting lines (pure CSS, no dependencies)
- Include a "Print / Save as PDF" button using `window.print()`
- Add print-specific CSS media queries for clean PDF output

### File changes
| File | Action |
|------|--------|
| `src/pages/InformationArchitecture.tsx` | Create |
| `src/components/architecture/MindMapTree.tsx` | Create |
| `App.tsx` | Add route |
| `src/index.css` | Add print styles |

