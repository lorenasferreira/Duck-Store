import { products } from "./products.js";

const container = document.querySelector(".sectionmadredecajamadre");
const filterSelect = document.getElementById("category-filter");

function renderProducts(ducks = products) {
  container.innerHTML = "";

  if (ducks.length === 0) {
    container.innerHTML = '<p class="no-results">🦆 No se encontraron patitos en esta categoría. 😭</p>';
    return;
  }

  ducks.forEach((duck) => {
    const card = document.createElement("div");
    card.classList.add("cajamadre");
    card.innerHTML = `
      <img class="imagencaja" src="${duck.image}" alt="${duck.name}">
      <p class="parrafo"><b>${duck.name}</b> Precio=${duck.price}€ stock=${duck.stock} unidades</p>
      <div class="button-group">
        <button class="decrease" data-id="${duck.id}">➖</button>
        <button class="carrito" data-id="${duck.id}">Ver detalle</button>
        <button class="increase" data-id="${duck.id}">➕</button>
      </div>
    `;
    container.appendChild(card);
  });

  attachEventListeners();
}

function attachEventListeners() {
  document.querySelectorAll(".carrito").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      window.location.href = `./detail.html?id=${id}`;
    });
  });

  document.querySelectorAll(".increase").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.getAttribute("data-id"));
      console.log(`Aumentar cantidad de patito ID ${id}`);
    });
  });

  document.querySelectorAll(".decrease").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.getAttribute("data-id"));
      console.log(`Diminuir quantidade de patito ID ${id}`);
    });
  });
}

if (filterSelect) {
  filterSelect.addEventListener("change", (event) => {
    const category = event.target.value;
    if (category === "all") {
      renderProducts(products);
    } else {
      const filtered = products.filter((p) => p.category === category);
      renderProducts(filtered);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});