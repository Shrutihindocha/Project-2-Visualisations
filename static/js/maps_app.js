d3.json("/api").then(data => {
  console.log(data)
  data.forEach(row => { 
    var locality = row.locality;
    var lat = row.lat;
    var long = row.long;
    var count = row.count;
    var dates = row.date;
    var offence1 = row.offence1;

    // Plotly.newPlot("pie", offence1);


  })
})