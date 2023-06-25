var cartItems = [];
var totalCost = 0;



function addToCart(name, price) {
  cartItems.push({ name: name, price: price });
  totalCost += price;
  updateCartCount();
}

function updateCartCount() {
  var cartCount = document.getElementById("cartCount");
  cartCount.textContent = cartItems.length;
}

function openCart() {
  var cartOverlay = document.getElementById("cartOverlay");
  var cartList = document.getElementById("cartList");

  cartList.innerHTML = "";
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    var listItem = document.createElement("li");
    listItem.textContent = item.name + " - $" + item.price;
    cartList.appendChild(listItem);
  }

  var totalCostElem = document.getElementById("totalCost");
  totalCostElem.textContent = "Total: $" + totalCost;

  cartOverlay.style.display = "flex";
}

function placeOrder() {

    
    cartItems = [];
    totalCost = 0;
    updateCartCount();
    alert('Order placed!');
  
    closeCart();
 
  }

function closeCart() {
  var cartOverlay = document.getElementById("cartOverlay");
  cartOverlay.style.display = "none";
}

