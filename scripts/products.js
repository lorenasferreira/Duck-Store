export const products = [
  {
    id: 1,
    name: "Pato DJ",
    price: 5,
    stock: 7,
    image: "./assets/img/dj.jpg",
    category: "musica"
  },
  {
    id: 2,
    name: "Pato Joker",
    price: 5,
    stock: 3,
    image: "./assets/img/jokerrecortada.png",
    category: "cine"
  },
  {
    id: 3,
    name: "Fontanero",
    price: 5,
    stock: 12,
    image: "./assets/img/fontanerito1.png",
    category: "trabajo"
  },
  {
    id: 4,
    name: "Pato Ciclista",
    price: 5,
    stock: 9,
    image: "./assets/img/recortadaciclista.png",
    category: "deporte"
  },
    {
  id: 5,
    name: "Pato nadador",
    price: 5,
    stock: 7,
    image: "./assets/img/nadador.jpg",
    category: "musica"
  },
  {
    id: 6,
    name: "Pato Duck&roll",
    price: 5,
    stock: 3,
    image: "./assets/img/duckroll.jpg",
    category: "cine"
  },
  {
    id: 7,
    name: "Pato Gamer",
    price: 5,
    stock: 12,
    image: "./assets/img/gamer.png",
    category: "trabajo"
  },
  {
    id: 8,
    name: "Pato Oficinista",
    price: 5,
    stock: 2,
    image: "./assets/img/oficinista.jpg",
    category: "deporte"
  }]


  const container = document.querySelector(".sectionmadredecajamadre");

function renderProducts() {
  container.innerHTML = "";
  products.forEach(pato => {
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

renderProducts();