import { products } from "./scripts/products.js";
import { filterByCategory } from "./scripts/filters.js";

const container = document.querySelector(".sectionmadredecajamadre");
const select = document.querySelector("#typeFilter");

function renderCatalog(lista) {
  container.innerHTML = ""; // limpiar antes de renderizar
  lista.forEach(pato => {
    container.innerHTML += `
      <div class="cajamadre">
        <img class="imagencaja" src="${pato.image}" alt="${pato.name}">
        <p class="parrafo"><b>${pato.name}</b> Precio=${pato.price}€ stock=${pato.stock} unidades</p>
        <button class="carrito" data-id="${pato.id}">Agregar al carrito</button>
        <a href="./detail.html" target="_blank" class="position"><b>+ Más Información</b></a>
      </div>
    `;
  });
}

renderCatalog(products);



// Evento de cambio en el select
select.addEventListener("change", () => {
  const categoria = select.value;                 // lee la categoría seleccionada
  const filtrados = filterByCategory(categoria);  // filtra productos
  renderCatalog(filtrados);                       // renderiza solo esos
});

