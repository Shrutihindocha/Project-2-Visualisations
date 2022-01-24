function renderChart(offence_type){
    d3.json(`/api/lev2/${offence_type}`).then(data => {
        console.log(data)
        var data = [
          {
              x: data.map(row => row.offence2),
              y: data.map(row => row.count),
              type: 'bar'
          }
        ];
        var layout = {
            title: `Offence Level 2`,
            yaxis: {
                title: `Offence Count`
            },
            xaxis: {
                title: `Offence Type`
            }
        };
      
        Plotly.newPlot('bar2', data, layout);
      })
}

renderChart("ACTS INTENDED TO CAUSE INJURY");

d3.select("#selDataset").on("change", () => {
    var offence_type = d3.select("#selDataset").node().value
    renderChart(offence_type)
} )

// // Initializes the page with a default plot
// function init() {
//     data = [{
//       x: [1, 2, 3, 4, 5],
//       y: [1, 2, 4, 8, 16] }];
  
//     Plotly.newPlot("plot", data);
//   }
  
//   // Call updatePlotly() when a change takes place to the DOM
//   d3.selectAll("#selDataset").on("change", updatePlotly);
  
//   // This function is called when a dropdown menu item is selected
//   function updatePlotly() {
//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.property("value");
  
//     // Initialize x and y arrays
//     var x = [];
//     var y = [];
  
//     if (dataset === 'dataset1') {
//       x = [1, 2, 3, 4, 5];
//       y = [1, 2, 4, 8, 16];
//     }
  
//     else if (dataset === 'dataset2') {
//       x = [10, 20, 30, 40, 50];
//       y = [1, 10, 100, 1000, 10000];
//     }
  
//     // Note the extra brackets around 'x' and 'y'
//     Plotly.restyle("plot", "x", [x]);
//     Plotly.restyle("plot", "y", [y]);
//   }
  
//   init();