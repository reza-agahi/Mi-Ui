var adultCtx = document.getElementById("adult").getContext('2d');
data = {
  datasets: [{
    data: [10, 20],
    backgroundColor: [
      'rgb(235, 123, 230)',
      'rgb(74, 186, 146)'
    ],
    hoverBackgroundColor: [
      'rgb(196, 73, 191)',
      'rgb(29, 159, 113)'
    ]
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'In',
    'Out'
  ],

};
var myDoughnutChart = new Chart(adultCtx, {
  type: 'doughnut',
  data: data,
  options: Chart.defaults.doughnut
});

var youthCtx = document.getElementById("youth").getContext('2d');
data = {
  datasets: [{
    data: [10, 20],
    backgroundColor: [
      'rgb(235, 123, 230)',
      'rgb(74, 186, 146)'
    ],
    hoverBackgroundColor: [
      'rgb(196, 73, 191)',
      'rgb(29, 159, 113)'
    ]
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'In',
    'Out'
  ],

};
var myDoughnutChart = new Chart(youthCtx, {
  type: 'doughnut',
  data: data,
  options: Chart.defaults.doughnut
});
