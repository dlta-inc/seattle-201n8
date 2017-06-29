'use strict';

document.getElementById('my-chart').width = 50;

var context = document.getElementById('my-chart').getContext('2d');


var dataSet = [12, 6, 24, 5, 3, 9];
var itemNames = ['clock', 'watch', 'bigfoot', 'apple', 'TV', 'Blingy Red Shoes'];
var chartColors = ['black', 'white', 'brown', 'green', 'blue', 'red'];

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
// 
// var dataObject =  {
//   labels: itemNames,
//   dataSets: [{
//     label: '# of Votes',
//     data: dataSet,
//     backgroundColor: chartColors
//   }]
// };
// 
// var chartOptions = {
//   scales: {
//     yAxes: [{
//       ticks: {
//         beginAtZero: true
//       }
//     }]
//   }
// };
// 
// 
// var myChart = new Chart(context, {
//   type: 'bar',
//   data: dataObject,
//   options: chartOptions
// });


function Dog(name, breed, color){
  this.name = name;
  this.breed = breed;
  this.color = color;
}

Dog.prototype.bark = function(){
  console.log('Hello! ' + this.name + ' woof!');
};

var myDog = new Dog('Mika', 'mix', 'black/brown');
var yourDog = new Dog('Cid', 'pitmix', 'tan');


myDog.bark();
yourDog.bark();




























