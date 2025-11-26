import { products } from "./products.js";

document.addEventListener("DOMContentLoaded", () => {
  const qtyInput = document.getElementById("qty-input");
  const minusBtn = document.getElementById("qty-minus");
  const plusBtn = document.getElementById("qty-plus");
  const resetBtn = document.getElementById("qty-reset");
  const addToCartLink = document.getElementById("add-to-cart-link");

  const img = document.querySelector(".product-image");
  const description = document.querySelector(".product-details p:nth-of-type(1)");
  const size = document.querySelector(".product-details p:nth-of-type(2)");
  const stock = document.querySelector(".product-details p:nth-of-type(3)");
  const price = document.querySelector(".product-details p:nth-of-type(4)");

  const params = new URLSearchParams(window.location.search);
  const duckId = parseInt(params.get("id"));

  const duck = products.find((p) => p.id === duckId);

  if (!duck) {
    document.querySelector(".product-page").innerHTML =
      "<p>Patito no encontrado 🥲</p>";
    return;
  }
  img.src = duck.image;
  img.alt = duck.name;
  description.innerHTML = `<strong>Descripción del producto:</strong> Diseño estilo ${duck.name}`;
  size.innerHTML = `<strong>Tamaño:</strong> 17cm x 9cm`;
  stock.innerHTML = `<strong>Stock:</strong> ${duck.stock} unidades`;
  price.innerHTML = `<strong>Precio:</strong> ${duck.price}€`;

  plusBtn.addEventListener("click", () => {
    let currentValue = parseInt(qtyInput.value) || 0;
    if (currentValue < 99) {
      qtyInput.value = currentValue + 1;
    }
  });

  minusBtn.addEventListener("click", () => {
    let currentValue = parseInt(qtyInput.value) || 0;
    const minValue = parseInt(qtyInput.min);
    if (currentValue > minValue) {
      qtyInput.value = currentValue - 1;
    }
  });

  resetBtn.addEventListener("click", () => {
    qtyInput.value = 0;
  });

  addToCartLink.addEventListener("click", (event) => {
    event.preventDefault();
    let quantity = parseInt(qtyInput.value) || 0;
    if (quantity > 0) {
      const shopUrl = `shop.html?item=${duck.id}&qty=${quantity}`;
      window.location.href = shopUrl;
    } else {
      alert("Por favor, selecciona al menos 1 patito para añadir al carrito.");
    }
  });
});