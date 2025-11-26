

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
    category: "deporte"
  },
  {
    id: 6,
    name: "Pato Duck&roll",
    price: 5,
    stock: 3,
    image: "./assets/img/duckroll.jpg",
    category: "musica"
  },
  {
    id: 7,
    name: "Pato Gamer",
    price: 5,
    stock: 12,
    image: "./assets/img/gamer.jpg",
    category: "trabajo"
  },
  {
    id: 8,
    name: "Pato Oficinista",
    price: 5,
    stock: 2,
    image: "./assets/img/oficinista.jpg",
    category: "trabajo"
  }
];

const container = document.querySelector(".sectionmadredecajamadre");
const filterSelect = document.getElementById('category-filter');


function handleDetailClick(event) {

    event.stopPropagation(); 
    const duckId = event.currentTarget.getAttribute('data-id');

    if (duckId) {

        window.location.href = `./detail.html?id=${duckId}`;
    }
}

function attachDetailListeners() {
    const detailButtons = document.querySelectorAll('.carrito');

    detailButtons.forEach(button => {

        button.removeEventListener('click', handleDetailClick);

        button.addEventListener('click', handleDetailClick);
    });
}

/**
 * Renderizar los patitos
 * @param {Array} ducksToRender 
 */
function renderProducts(ducksToRender = products) {
  container.innerHTML = ""; // Limpieza del contenedor

  if (ducksToRender.length === 0) {
      container.innerHTML = '<p class="no-results">🦆 No se encontraron patitos en esta categoría. 😭</p>';
      return;
  }

  ducksToRender.forEach(pato => {
    const duckCard = document.createElement('div');
    duckCard.classList.add('cajamadre');
    duckCard.innerHTML = `
      <img class="imagencaja" src="${pato.image}" alt="${pato.name}">
      <p class="parrafo"><b>${pato.name}</b> Precio=${pato.price}€ stock=${pato.stock} unidades</p>
      
      <button class="carrito" data-id="${pato.id}">Ver Detalle y Agregar Patito</button>
    `;
    container.appendChild(duckCard);
  });
  
  // Vuelve a adjuntar los listeners a los botones recién creados
  attachDetailListeners();
}


// Filtros
if (filterSelect) {
    filterSelect.addEventListener('change', (event) => {
        const selectedCategory = event.target.value;

        if (selectedCategory === 'all') {
            // patitos general 
            renderProducts(products);
        } else {
            // Filtro de patitos por categoria
            const filteredDucks = products.filter(pato => pato.category === selectedCategory);
            renderProducts(filteredDucks);
        }
    });
}

// Renderizado inicial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});