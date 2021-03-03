'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById( 'cart' );
table.addEventListener( 'click', removeItemFromCart );
let cart;

function loadCart() {
  const cartItems = JSON.parse( localStorage.getItem( 'cart' ) ) || [];
  cart = new Cart( cartItems );
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  table.removeRows;
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  const tableElement = document.getElementById( 'cart' );
  // TODO: Find the table body
  const tr1 = document.createElement( 'tr' );
  tableElement.appendChild( tr1 );

  for( let i = 0;i < cart.items.length;i++ )
  {
    const td = document.createElement( 'td' );
    tr1.appendChild( td );
    td.textContent = 'X';
    const td1 = document.createElement( 'td' );
    tr1.appendChild( td1 );
    td.textContent = cart.items[i].quantity;
    const td2 = document.createElement( 'td' );
    tr1.appendChild( td2 );
    td2.textContent = cart.items[i].Product;

    // TODO: Iterate over the items in the cart
    // TODO: Create a TRdelete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and ea
    // TODO: Create a TD for the ch of the TD's to the TR

  }
}
function removeItemFromCart( event ) {
  if( clickedElement.id === 'tr1' ){
    Cart.prototype.removeItem();
  }
  localStorage.setItem( 'Items', JSON.stringify( Product.allProducts ) );
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
