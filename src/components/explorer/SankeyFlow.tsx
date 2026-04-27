
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { sankey as d3Sankey, sankeyLinkHorizontal, sankeyCenter } from 'd3-sankey';

interface SankeyProps {
  data: {
    nodes: any[];
    links: any[];
  };
}

const SankeyFlow: React.FC<SankeyProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data || !svgRef.current || data.nodes.length === 0) return;

    d3.select(svgRef.current).selectAll("*").remove();

    const width = 2000;
    const height = 1100;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("width", "100%")
      .attr("height", "100%")
      .style("font", "12px sans-serif");

    const sankey = d3Sankey()
      .nodeId((d: any) => d.id)
      .nodeAlign(sankeyCenter)
      .nodeWidth(20)
      .nodePadding(12)
      .extent([[0, 10], [width, height - 10]]); // Use 100% of width, nodes can go to the edges

    const { nodes, links } = sankey({
      nodes: data.nodes.map(d => Object.assign({}, d)),
      links: data.links.map(d => Object.assign({}, d))
    });

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Links
    svg.append("g")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.3)
      .selectAll("path")
      .data(links)
      .join("path")
      .attr("d", sankeyLinkHorizontal())
      .attr("stroke", (d: any) => color(d.source.id))
      .attr("stroke-width", (d: any) => Math.max(1, d.width))
      .append("title")
      .text((d: any) => `${d.source.name} → ${d.target.name}\n₳${d.value.toLocaleString()}`);

    // Nodes
    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g");

    node.append("rect")
      .attr("x", (d: any) => d.x0)
      .attr("y", (d: any) => d.y0)
      .attr("height", (d: any) => d.y1 - d.y0)
      .attr("width", (d: any) => d.x1 - d.x0)
      .attr("fill", (d: any) => color(d.id))
      .attr("stroke", "#000")
      .append("title")
      .text((d: any) => `${d.name}\n₳${d.value.toLocaleString()}`);

    node.append("text")
      .attr("x", (d: any) => d.x0 < width / 2 ? d.x1 + 10 : d.x0 - 10)
      .attr("y", (d: any) => (d.y1 + d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", (d: any) => d.x0 < width / 2 ? "start" : "end")
      .attr("fill", "currentColor")
      .attr("class", "dark:text-white text-gray-800")
      .style("font-size", "13px")
      .text((d: any) => d.name); // Mostrar nome completo sem truncagem

  }, [data]);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-auto p-0">
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
};

export default SankeyFlow;
