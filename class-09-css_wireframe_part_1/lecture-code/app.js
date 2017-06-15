'use strict';

function Item(name, price, color) {
  this.name = name;
  this.color = color;
  this.price = price;
}

Item.prototype.makeRow = function(){
  //Step 1 - create element
  var newRowEl = document.createElement('tr'); //<tr></tr>

  //Step 2 - Configure/Mutate the ROW element
  var itemDataEl = document.createElement('td'); //<td></td>
  itemDataEl.textContent = this.name; //<td>this.name</td>
  newRowEl.appendChild(itemDataEl); 
  
  // <tr>
  //  <td>this.name</td>
  // </tr>

  //var priceDataEl = document.createElement('td'); //<td></td>
  itemDataEl.textContent = this.price; //<td>this.price</td>
  newRowEl.appendChild(itemDataEl);
  
  //<tr>
  // <td>this.name</td>
  // <td>this.price</td>
  //</tr>

  //var colorEl = document.createElement('td');
  itemDataEl.textContent = this.color;
  newRowEl.appendChild(itemDataEl);

  //Step 3 - Append element to the DOM
  tableBodyEl.appendChild(newRowEl);
};

var tableEl = document.getElementById('generated-table');
var tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);

var blackShoes = new Item('Shoes', '49.99', 'Black');
var whiteShoes = new Item('Shoes', '39.99', 'White');
var brownShoes = new Item('Shoes', '9.00', 'Brown');
var redShoes = new Item('Shoes', '199.00', 'Blingy Red');

var newShoesArray = [];

for (var i = 1; i <= 10; i++) {
  var newShoes = new Item('Shoes ' + i, '19.99', 'Rainbow');
  newShoesArray.push(newShoes);
}

var allItems = [blackShoes, whiteShoes, brownShoes, redShoes];

allItems = allItems.concat(newShoesArray);

console.log(allItems);

for (var j = 0; j < allItems.length; j++) {
  var currentItem = allItems[j];
  currentItem.makeRow();
  //allItems[j].makeRow()
}

var formEl = document.getElementById('form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  console.log(event.target.itemName.value);
  // console.log(event.target.itemPrice.value);
  // console.log(event.target.itemColor.value);

  var itemName = event.target.itemName.value;
  var itemPrice = event.target.itemPrice.value;
  var itemColor = event.target.itemColor.value;

  var newItem = new Item(itemName, itemPrice, itemColor);
  newItem.makeRow();
}


var bodyElement = document.body;

bodyElement.addEventListener('mousemove', tableClicked);

function tableClicked(event){
  console.log(event.target);
}
























