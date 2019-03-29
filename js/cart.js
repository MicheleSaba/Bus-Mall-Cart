'use strict';

var Cart = [];


// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem('cart')) || [];
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // document.getElementsByTagName('tr').deleteRow(0)
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
    var tbody = document.getElementsByTagName('tbody')[0];
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  for (var i in Cart) {
    var tRow = document.createElement('tr');
    // var delete = document.createElement('td');
    var quantity = document.createElement('td');
    var item = document.createElement('td');

    // delete.textContent = Cart[i].item;
    quantity.textContent = Cart[i].quantity;
    item.textContent = Cart[i].item;
    tRow.appendChild(quantity);
    tRow.appendChild(item);
    tbody.appendChild(tRow);
  }
  
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  // var items = Cart.filter(function(item) => {
  //   return (item.name !== name &&)
  // }


  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();