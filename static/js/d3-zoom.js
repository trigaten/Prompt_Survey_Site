import * as d3 from "https://cdn.skypack.dev/d3@7.6.1";

const svg = d3.select("#svg");
const image = svg.select("#img");

const { width, height } = image.node().getBoundingClientRect();
const { width: svgWidth, height: svgHeight } = svg
  .node()
  .getBoundingClientRect();
const minScale = Math.max(svgWidth / width, svgHeight / height);

const zoom = d3
  .zoom()
  .scaleExtent([minScale, 8])
  .extent([
    [0, 0],
    [svgWidth, svgHeight],
  ])
  .translateExtent([
    [0, 0],
    [width, height],
  ])
  .on("zoom", zoomed);

zoom.scaleTo(svg, minScale);
svg.call(zoom);

function zoomed(event){
    const { transform } = event;
    image.attr("transform", transform.toString());
}