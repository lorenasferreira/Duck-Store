function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("duckCart")) || {};
  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = totalItems;
}

updateCartCount();
