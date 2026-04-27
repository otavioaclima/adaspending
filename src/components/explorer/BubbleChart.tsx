
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface BubbleData {
  name: string;
  value: number;
}

interface BubbleChartProps {
  data: BubbleData[];
}

const BubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data || !svgRef.current || data.length === 0) return;

    // Clear existing content
    d3.select(svgRef.current).selectAll("*").remove();

    const width = 1200;
    const height = 800;
    const margin = 1;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("style", "max-width: 100%; height: auto; font: 12px sans-serif;")
      .attr("text-anchor", "middle");

    // Create the pack layout
    const pack = d3.pack()
      .size([width - margin * 2, height - margin * 2])
      .padding(10); // More padding for better breathing space

    // Create the hierarchy from the flat data
    const root = pack(d3.hierarchy({ children: data })
      .sum((d: any) => d.value)
      .sort((a, b) => (b.value || 0) - (a.value || 0)));

    // Cardano-themed Color scale
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range([
        '#0033ad', '#0047c2', '#005bd6', '#006feb', '#1a8cff', 
        '#4dabff', '#80c1ff', '#002171', '#001a57', '#00123d'
      ]);

    const leaf = svg.selectAll("g")
      .data(root.leaves())
      .join("g")
      .attr("transform", d => `translate(${d.x + margin},${d.y + margin})`);

    // Add a shadow filter
    const defs = svg.append("defs");
    const filter = defs.append("filter")
      .attr("id", "bubble-shadow")
      .attr("x", "-20%")
      .attr("y", "-20%")
      .attr("width", "140%")
      .attr("height", "140%");
    
    filter.append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 3)
      .attr("result", "blur");
    
    filter.append("feOffset")
      .attr("in", "blur")
      .attr("dx", 2)
      .attr("dy", 4)
      .attr("result", "offsetBlur");
    
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "offsetBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    leaf.append("circle")
      .attr("r", d => d.r)
      .attr("fill-opacity", 0.8)
      .attr("fill", (d: any) => color(d.data.name) as string)
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .style("filter", "url(#bubble-shadow)")
      .style("cursor", "pointer")
      .style("transition", "all 0.3s ease")
      .on("mouseover", function(event, d) {
        d3.select(this)
          .attr("fill-opacity", 1)
          .attr("stroke", "#000")
          .attr("stroke-width", 3);
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .attr("fill-opacity", 0.8)
          .attr("stroke", "#fff")
          .attr("stroke-width", 2);
      });

    leaf.append("text")
      .attr("pointer-events", "none")
      .style("fill", "#fff")
      .style("font-weight", "800")
      .style("text-shadow", "0 1px 2px rgba(0,0,0,0.5)")
      .selectAll("tspan")
      .data((d: any) => {
        if (d.r < 25) return [];
        const name = d.data.name;
        const words = name.split(/\s+/g);
        if (d.r < 45) return [name.length > 10 ? name.substring(0, 8) + ".." : name];
        
        // Group words to fit better
        const lines = [];
        let currentLine = "";
        words.forEach((word: string) => {
          if ((currentLine + word).length > 12) {
            lines.push(currentLine.trim());
            currentLine = word + " ";
          } else {
            currentLine += word + " ";
          }
        });
        lines.push(currentLine.trim());
        return lines.slice(0, 3); // Max 3 lines
      })
      .join("tspan")
      .attr("x", 0)
      .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
      .style("font-size", function(d: any) {
        const parentData = d3.select(this.parentNode).datum() as any;
        return Math.min(parentData.r / 5, 14) + "px";
      })
      .text(d => d);

    leaf.append("title")
      .text((d: any) => `${d.data.name}\n₳${d.data.value.toLocaleString()}`);

  }, [data]);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden bg-[#fcfdfe] dark:bg-gray-900/20 rounded-2xl">
      <svg ref={svgRef} className="max-w-full max-h-full p-8" />
    </div>
  );
};

export default BubbleChart;
