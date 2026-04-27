
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useLanguage } from '@/contexts/LanguageContext';

interface DendrogramProps {
  data: any;
}

const RadialDendrogram: React.FC<DendrogramProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!data || !svgRef.current) return;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const width = 800;
    const height = 800;
    const radius = width / 2;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("width", "100%")
      .attr("height", "100%")
      .style("font", "10px sans-serif")
      .style("user-select", "none");

    const tree = d3.cluster().size([2 * Math.PI, radius - 100]);

    const root = tree(d3.hierarchy(data)
      .sort((a, b) => d3.ascending(a.data.name, b.data.name)));

    // Links
    svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1.5)
      .selectAll("path")
      .data(root.links())
      .join("path")
      .attr("d", d3.linkRadial()
        .angle((d: any) => d.x)
        .radius((d: any) => d.y) as any);

    // Nodes
    const node = svg.append("g")
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", (d: any) => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`);

    node.append("circle")
      .attr("fill", (d: any) => d.children ? "#0033ad" : "#999")
      .attr("r", (d: any) => d.children ? 4 : 2.5);

    node.append("text")
      .attr("dy", "0.31em")
      .attr("x", (d: any) => d.x < Math.PI === !d.children ? 6 : -6)
      .attr("text-anchor", (d: any) => d.x < Math.PI === !d.children ? "start" : "end")
      .attr("transform", (d: any) => d.x >= Math.PI ? "rotate(180)" : null)
      .attr("fill", "currentColor")
      .attr("class", "dark:text-white text-gray-800")
      .style("font-weight", (d: any) => d.children ? "700" : "400")
      .style("font-size", (d: any) => d.depth === 0 ? "14px" : "10px")
      .text((d: any) => d.data.name)
      .clone(true).lower()
      .attr("stroke", "white")
      .attr("stroke-width", 3)
      .attr("class", "dark:hidden");

    // Interactivity
    node.on("mouseover", function(event, d: any) {
      d3.select(this).select("circle").attr("r", 6).attr("fill", "#00edff");
      d3.select(this).select("text").style("font-size", "12px").style("font-weight", "bold");
    })
    .on("mouseout", function(event, d: any) {
      d3.select(this).select("circle").attr("r", d.children ? 4 : 2.5).attr("fill", d.children ? "#0033ad" : "#999");
      d3.select(this).select("text").style("font-size", d.depth === 0 ? "14px" : "10px").style("font-weight", d.children ? "700" : "400");
    });

  }, [data]);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <svg ref={svgRef} className="max-w-full max-h-full" />
    </div>
  );
};

export default RadialDendrogram;
