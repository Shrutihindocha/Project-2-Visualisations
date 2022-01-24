///////////////////////////////////// ALL OFFENCE LEVELS IN ONE DASHBOARD HTML PAGE?? ////////////////////////////////////


/////////////////////////////////    LEVEL 1 OFFENCE    //////////////////////////////////////////////////
  d3.json("/api/lev1").then(data => {
    console.log(data)
    var data = [
      {
          x: data.map(row => row.offence1),
          y: data.map(row => row.count),
          type: 'bar'
      }
    ];
    var layout = {
        title: `Offence Level 1`,
        yaxis: {
            title: `Offence Count`
        },
        xaxis: {
            title: `Offence Type`
        }
    };
    Plotly.newPlot('bar', data, layout);
  })

/////////////////////////////////    LEVEL 2 OFFENCE    //////////////////////////////////////////////////

  d3.json("/api/lev2").then(data => {
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


/////////////////////////////////    LEVEL 3 OFFENCE    //////////////////////////////////////////////////
  
  d3.json("/api/lev3").then(data => {
    console.log(data)
    var data = [
      {
          x: data.map(row => row.offence3),
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
    Plotly.newPlot('bar3', data, layout);
  })