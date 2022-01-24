/////////////////////////////////    LEVEL 1 OFFENCE    /////////////////////////////////////////////////

d3.json("/lev3").then(data => {


     var data = [
      {
          x: data.map(row => row.offence1),
          y: data.map(row => row.count),
          type: 'bar'
      }
    ];
    var layout = {
        title: `Offence Level 3`,
        yaxis: {
            title: `Offence Count`
        },
        xaxis: {
            title: `Offence Type`
        }
    };
  
    Plotly.newPlot('bar', data, layout);
  })



