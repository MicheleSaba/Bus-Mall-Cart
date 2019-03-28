/* global Product, Cart */

'use strict';

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  
  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var option = document.createElement('option');
    option.textContent = Product.allProducts[i].name;
      selectElement.appendChild(option);
  }
  }



// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  var item = document.getElementById("items").value
  var quantity = document.getElementById("quantity").value
  console.log(new Cart (item , quantity));

  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, create a new Cart item instance
}

// TODO: Save the contents of the cart to Local Storage
function saveCartToLocalStorage() {
  localStorage['cart'] = JSON.stringify(Cart.allItems);

}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  // var item = document.getElementById("items").value
  var itemCount = document.getElementById("itemCount")
  if(itemCount.textContent !== '') {
    var itemCounter = parseInt(itemCount.textContent) +
       parseInt(document.getElementById("quantity").value);

    itemCount.textContent = itemCounter;
  } else {
    itemCount.textContent = document.getElementById("quantity").value
  }
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var item = document.getElementById("items").value
  var quantity = document.getElementById("quantity").value

  for (var i in Cart.allItems) {
    var pContent = document.createElement('p');
    var qContent = document.createElement('p');
   
  }
  pContent.textContent = Cart.allItems[i].item;
  qContent.textContent = Cart.allItems[i].quantity;
    var contents = document.getElementById('cartContents');
    contents.appendChild(pContent);
    contents.appendChild(qContent);
 
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();