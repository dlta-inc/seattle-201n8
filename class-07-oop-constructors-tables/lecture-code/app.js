'use strict';

function Item(name, price, color) {
  this.name = name;
  this.color = color;
  this.price = price;
  this.availableSizes = {
    8: 5,
    9: 10,
    10: 20
  };
}

function makeRow(item){
  //Step 1 - create element
  var newRowEl = document.createElement('tr');

  //Step 2 - Configure/Mutate the ROW element
    var itemDataEl = document.createElement('td');
  itemDataEl.textContent = item.name;
  newRowEl.appendChild(itemDataEl);

  var priceDataEl = document.createElement('td');
  priceDataEl.textContent = item.price;
  newRowEl.appendChild(priceDataEl);

  var colorEl = document.createElement('td');
  colorEl.textContent = item.color;
  newRowEl.appendChild(colorEl);

  //Step 3 - Append element to the DOM
  tableBodyEl.appendChild(newRowEl);
}

var blackShoes = new Item('Shoes', '49.99', 'Black');
var whiteShoes = new Item('Shoes', '39.99', 'White');
var brownShoes = new Item('Shoes', '9.00', 'Brown');
var redShoes = new Item('Shoes', '199.00', 'Blingy Red');

var newShoesArray;

for (var i = 1; i <= 10; i++) {
  var newShoes = new Item('Shoes ' + i, '19.99', 'Rainbow');
  newShoesArray.push(newShoes);
}

var someNewShoes = newShoesArray[0];

var allItems = [blackShoes, whiteShoes, brownShoes, redShoes];

var tableEl = document.getElementById('generated-table');
var tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);

for (var i = 0; i < allItems.length; i++) {
  makeRow(allItems[i]);
}

// makeRow(blackShoes);
// makeRow(whiteShoes);
// makeRow(brownShoes);
// makeRow(redShoes);











