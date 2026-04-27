
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface PackingProps {
  data: any;
}

const CirclePacking: React.FC<PackingProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data || !svgRef.current) return;

    d3.select(svgRef.current).selectAll("*").remove();

    const width = 800;
    const height = 800;

    const pack = (data: any) => d3.pack()
      .size([width, height])
      .padding(3)
      (d3.hierarchy(data)
        .sum(d => d.value)
        .sort((a, b) => (b.value || 0) - (a.value || 0)));

    const root = pack(data);
    let focus = root;
    let view: any;

    const color = d3.scaleLinear<string>()
      .domain([0, 5])
      .range(["hsl(210,80%,80%)", "hsl(210,80%,20%)"])
      .interpolate(d3.interpolateHcl);

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%")
      .style("display", "block")
      .style("background", "transparent")
      .style("cursor", "pointer")
      .on("click", (event) => zoom(event, root));

    const node = svg.append("g")
      .selectAll("circle")
      .data(root.descendants().slice(1))
      .join("circle")
      .attr("fill", (d: any) => d.children ? color(d.depth) : "white")
      .attr("pointer-events", (d: any) => !d.children ? "none" : null)
      .on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
      .on("mouseout", function() { d3.select(this).attr("stroke", null); })
      .on("click", (event, d: any) => focus !== d && (zoom(event, d), event.stopPropagation()));

    const label = svg.append("g")
      .style("font", "13px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(root.descendants())
      .join("text")
      .style("fill-opacity", (d: any) => d.parent === root ? 1 : 0)
      .style("display", (d: any) => d.parent === root ? "inline" : "none")
      .attr("class", "dark:fill-white fill-gray-900")
      .style("font-weight", "900")
      .text((d: any) => d.data.name);

    zoomTo([root.x, root.y, root.r * 2]);

    function zoomTo(v: any) {
      const k = width / v[2];
      view = v;
      label.attr("transform", (d: any) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
      node.attr("transform", (d: any) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
      node.attr("r", (d: any) => d.r * k);
    }

    function zoom(event: any, d: any) {
      const focus0 = focus;
      focus = d;

      const transition = svg.transition()
        .duration(750)
        .tween("zoom", (d: any) => {
          const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return (t: any) => zoomTo(i(t));
        });

      label
        .filter(function(d: any) { return d.parent === focus || (this as any).style.display === "inline"; })
        .transition(transition as any)
        .style("fill-opacity", (d: any) => d.parent === focus ? 1 : 0)
        .on("start", function(d: any) { if (d.parent === focus) (this as any).style.display = "inline"; })
        .on("end", function(d: any) { if (d.parent !== focus) (this as any).style.display = "none"; });
    }

  }, [data]);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <svg ref={svgRef} className="max-w-full max-h-full" />
    </div>
  );
};

export default CirclePacking;
