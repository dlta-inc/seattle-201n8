'use strict';

var context = document.getElementById('my-chart').getContext('2d');

var dataSet;

if (localStorage.clicks) {
  var stringifiedData = localStorage.clicks;
  console.log(stringifiedData);

  dataSet = JSON.parse(stringifiedData);
} else {
  dataSet = [500,234,5,1];
}

var itemNames = ['clock', 'watch', 'bigfoot', 'apple', 'TV', 'Blingy Red Shoes'];
var chartColors = ['black', 'silver', 'brown', 'green', 'blue', 'red'];

var myChart = new Chart(context, {
  type: 'bar',
  data: {
    labels: itemNames,
    datasets: [{
      label: '# of Votes',
      data: dataSet,
      backgroundColor: chartColors
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

saveStatsToLocalStorage(dataSet);

function saveStatsToLocalStorage(stats){
  var statsString = JSON.stringify(stats);
  localStorage.clicks = statsString;
}






















