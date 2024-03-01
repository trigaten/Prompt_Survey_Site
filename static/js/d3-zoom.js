import * as d3 from "https://cdn.skypack.dev/d3@7.6.1";

const svg = d3.select("#svg");
const image = svg.select("#img");
const zoom = d3.zoom().on("zoom", zoomed);
svg.call(zoom);

function zoomed(event){
    const { transform } = event;
    image.attr("transform", transform.toString());
}