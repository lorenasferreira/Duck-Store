document.addEventListener('DOMContentLoaded', () => {
    const qtyInput = document.getElementById('qty-input');
    const minusBtn = document.getElementById('qty-minus');
    const plusBtn = document.getElementById('qty-plus');
    const resetBtn = document.getElementById('qty-reset');
    const addToCartLink = document.getElementById('add-to-cart-link'); 

    if (!qtyInput || !minusBtn || !plusBtn || !resetBtn || !addToCartLink) {
        return; 
    }

    // poner y quitar patitos
    plusBtn.addEventListener('click', () => {
        let currentValue = parseInt(qtyInput.value) || 0;
        if (currentValue < 99) { 
            qtyInput.value = currentValue + 1;
        }
    });

    minusBtn.addEventListener('click', () => {
        let currentValue = parseInt(qtyInput.value) || 0;
        const minValue = parseInt(qtyInput.min); 

        if (currentValue > minValue) {
            qtyInput.value = currentValue - 1;
        }
    });

    resetBtn.addEventListener('click', () => {
        qtyInput.value = 0;
    });

    // Accion del boton añadir al carrito
    addToCartLink.addEventListener('click', (event) => {
        event.preventDefault(); 

        let quantity = parseInt(qtyInput.value) || 0;

        if (quantity > 0) {
          
            //envio de la url a la pagina. del carrito
            
            const shopUrl = `shop.html?item=joker&qty=${quantity}`;
            window.location.href = shopUrl; 
        } else {
            alert('Por favor, selecciona al menos 1 patito para añadir al carrito.');
        }
    });
});