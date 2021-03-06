/////////////////////////////////  HEAT MAP    //////////////////////////////////////////////////
// Creating map object
var myMap = L.map("map", {
  center: [-34, 138],
  zoom: 8
});
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);
// Heatmap
d3.json("/api/map").then(data => {
  console.log(data);  //
  clean_data = data.map(row => [row.lat, row.long, row.count])
  var heat = L.heatLayer(clean_data).addTo(myMap)
});