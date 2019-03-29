/* global Product, Cart */

'use strict';

// TODO: Create a "Cart" constructor (named Cart) that has item and quantity
// properties, and builds an array of items as you create instances
var Cart = function(item, quantity, filepath) {
  this.item = item; 
  this.quantity = quantity; 
  this.filePath = filePath;
  Cart.allItems.push(this);
}
Cart.allItems = [];

// Product Contructor
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('./img/bag.jpg', 'Bag');
  new Product('./img/banana.jpg', 'Banana');
  new Product('./img/bathroom.jpg', 'Bathroom');
  new Product('./img/boots.jpg', 'Boots');
  new Product('./img/breakfast.jpg', 'Breakfast');
  new Product('./img/bubblegum.jpg', 'Bubblegum');
  new Product('./img/chair.jpg', 'Chair');
  new Product('./img/cthulhu.jpg', 'Cthulhu');
  new Product('./img/dog-duck.jpg', 'Dog-Duck');
  new Product('./img/dragon.jpg', 'Dragon');
  new Product('./img/pen.jpg', 'Pen');
  new Product('./img/sweep.jpg', 'Pet Sweep');
  new Product('./img/scissors.jpg', 'Scissors');
  new Product('./img/shark.jpg', 'Shark');
  new Product('./img/sweep.jpg', 'Sweep');
  new Product('./img/tauntaun.jpg', 'Taun-Taun');
  new Product('./img/unicorn.jpg', 'Unicorn');
  new Product('./img/usb.gif', 'USB');
  new Product('./img/water-can.jpg', 'Water Can');
  new Product('./img/wine-glass.jpg', 'Wine Glass');
}

function addImgCat() {
  var selectElement = document.getElementById('catalog');
  for (var i in Product.allProducts) {
    var img = document.createElement('img');
    img.textContent = Product.allProducts[i].filePath;
    img.setAttribute('data-index', Product.allProducts[i]);
    img.src = Product.allProducts[i].filePath;
      catalog.appendChild(img);
  }
}
// Initialize the app by creating the big list of products with images and names

generateCatalog();
addImgCat();