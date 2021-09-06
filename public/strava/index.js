// @ts-nocheck
let width = 75,
  height = width;

const numberOfRunsContainer = document.getElementById("number-of-runs");
const totalDistanceContainer = document.getElementById("total-distance");
const container = document.getElementById("runs-container");
const year = document.getElementById("year");
year.innerText = new Date().getFullYear();
const API = "https://strava-visualization.onrender.com/api";
document.fileForm.action = API;
let data = undefined;

getData().then(_data => {
  data = _data;
  main();
});

function main() {
  let totalDistanceRan = 0;
  const runFiles = data["data"];
  container.style.gridTemplateColumns = `repeat(auto-fit, minmax(${width}px, 1fr))`;

  if (runFiles.length) {
    runFiles.forEach(run => {
      if (run.features && run.features[0]) {
        const time = run.features[0].properties.time;
        const distance = totalDistance(run.features[0].geometry.coordinates);
        totalDistanceRan += parseFloat(distance);
        drawRun(run, distance, time);
      }
    });

    numberOfRunsContainer.innerText = runFiles.length;
    totalDistanceContainer.innerText = totalDistanceRan.toFixed(2);
  }
}

async function getData() {
  const response = await fetch(API);
  const runFiles = await response.json();
  return runFiles;
}

function drawRun(runData, distance, time) {
  const runDiv = document.createElement("div");
  runDiv.className = "run";
  runDiv.dataset.runDistance = distance;
  runDiv.dataset.runDate = time;

  container.appendChild(runDiv);

  const projection = d3.geo
    .mercator()
    .scale(1)
    .translate([0, 0]);

  const path = d3.geo.path().projection(projection);

  // Compute the bounds of a feature of interest, then derive scale & translate.
  const b = path.bounds(runData),
    s =
      0.95 /
      Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
    t = [
      (width - s * (b[1][0] + b[0][0])) / 2,
      (height - s * (b[1][1] + b[0][1])) / 2
    ];

  // Update the projection to use computed scale & translate.
  projection.scale(s).translate(t);

  const svg = d3
    .select(runDiv)
    .append("svg")
    .attr("class", "run-svg")
    .attr("width", width)
    .attr("height", height);

  svg
    .append("path")
    .datum(runData)
    .attr("class", "arc")
    .attr("d", path);

  // svg
  //   .append("rect")
  //   .attr("fill", "#ffffff47")
  //   .attr("x", width / 2 - 10)
  //   .attr("y", height / 2 - 16)
  //   .attr("width", 50)
  //   .attr("height", 20);

  // svg
  //   .append("text")
  //   .text(distance)
  //   .attr("x", width / 2)
  //   .attr("y", height / 2)
  //   .attr("class", "run-distance");
}

function totalDistance(coords) {
  let totalDist = 0;

  for (let i = 0; i < coords.length - 1; ++i) {
    const p1 = [coords[i][0], coords[i][1]];
    const p2 = [coords[i + 1][0], coords[i + 1][1]];

    totalDist += calcDist(p1, p2);
  }
  return totalDist.toFixed(2);
}

function calcDist(p1, p2) {
  // Haversine formula
  dLatRad = (Math.abs(p1[1] - p2[1]) * Math.PI) / 180;
  dLonRad = (Math.abs(p1[0] - p2[0]) * Math.PI) / 180;
  // Calculate origin in Radians
  lat1Rad = (p1[1] * Math.PI) / 180;
  lon1Rad = (p1[0] * Math.PI) / 180;
  // Calculate new point in Radians
  lat2Rad = (p2[1] * Math.PI) / 180;
  lon2Rad = (p2[0] * Math.PI) / 180;

  // Earth's Radius
  eR = 6371;
  d1 =
    Math.sin(dLatRad / 2) * Math.sin(dLatRad / 2) +
    Math.sin(dLonRad / 2) *
      Math.sin(dLonRad / 2) *
      Math.cos(lat1Rad) *
      Math.cos(lat2Rad);
  d2 = 2 * Math.atan2(Math.sqrt(d1), Math.sqrt(1 - d1));
  return eR * d2;
}

function clear() {
  container.innerHTML = "";
}
d3.select(self.frameElement).style("height", height + "px");
