var data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{
    label: '% change in support',
    data: [12, -19, -3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 0
  }]
};


var options = {
  cornerRadius: 20,
  fullCornerRadius: false,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
      }
    }]
  }
};

var fullCornerRadiusOptions = {
  cornerRadius: 20,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
      }
    }]
  }
};


function onLoad() {
  
  // Standard Bar Chart
  var ctxBar = document.getElementById("bar_chart");
  var myBarChart = new Chart(ctxBar, {
    type: 'bar',
    data: data,
    options: options
  });

  // Horizontal Bar Chart
  var ctxHBar = document.getElementById("horizontal_bar_chart");
  var myHorizBarChart = new Chart(ctxHBar, {
    type: 'horizontalBar',
    data: data,
    options: options
  });


  // Standard Bar Chart with all corners round
  var ctxBarF = document.getElementById("bar_chart_fullCornerRadius");
  var myBarChartF = new Chart(ctxBarF, {
    type: 'bar',
    data: data,
    options: fullCornerRadiusOptions
  });

  // Horizontal Bar Chart with all corners round
  var ctxHBarF = document.getElementById("horizontal_bar_chart_fullCornerRadius");
  var myHorizBarChartF = new Chart(ctxHBarF, {
    type: 'horizontalBar',
    data: data,
    options: fullCornerRadiusOptions
  });

}