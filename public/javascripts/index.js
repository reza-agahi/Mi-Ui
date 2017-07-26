$(document).ready(function() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/data",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
    }
  }

  $.ajax(settings).done(function (response) {
    var adultCtx = document.getElementById("adult").getContext('2d');
    data = {
      datasets: [{
        data: [response.adultIn, response.adultOut],
        backgroundColor: [
          '#ff9800',
          '#2196F3',
        ],
        hoverBackgroundColor: [
          '#be770f',
          '#1267ab',
        ]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'ورود',
        'خروج'
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
        data: [response.youthIn, response.youthOut],
        backgroundColor: [
          '#ff9800',
          '#2196F3',
        ],
        hoverBackgroundColor: [
          '#be770f',
          '#1267ab',
        ]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'ورود',
        'خروج'
      ],

    };
    var myDoughnutChart = new Chart(youthCtx, {
      type: 'doughnut',
      data: data,
      options: Chart.defaults.doughnut
    });
  });


});
