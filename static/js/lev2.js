/////////////////////////////////    LEVEL 1 OFFENCE    /////////////////////////////////////////////////

d3.json("/lev2").then(data => {


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
  
    Plotly.newPlot('bar', data, layout);
  })



