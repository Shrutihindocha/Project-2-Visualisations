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

  var testData = [
    {
      lat: data.map(row => row.lat),
      lng: data.map(row => row.long),
      count: data.map(row => row.count)
    }
  ][0];

  console.log(testData)  // {lat: Array(1538), lng: Array(1538), count: Array(1538)}

  console.log(testData.head())


  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    // if scaleRadius is false it will be the constant radius used in pixels
    "radius": 2,
    "maxOpacity": .8,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };

var heatmapLayer = new HeatmapOverlay(cfg);
heatmapLayer.setData(testData[0]);
});


