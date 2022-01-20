// var url = "http://127.0.0.1:5000/api"

// d3.json(url).then(function(data) {
//     console.log(data);
//   });
  


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
        title: `your title here`,
        yaxis: {
            title: `your y axis title here`
        },
        xaxis: {
            title: `your x axis title here`
        }
    };
  
    Plotly.newPlot('bar', data, layout);
  })