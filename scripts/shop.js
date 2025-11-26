document.addEventListener('DOMContentLoaded', () => {
    
    // Pecios del patito y del envio
    const UNIT_PRICE = 5.00; 
    const PRODUCT_NAME = 'Patito Rubber Joker';
    const PRODUCT_IMAGE_SRC = './assets/img/jokerrecortada.png'; 
    const SHIPPING_COST = 8.00;
    
    // Traemos la canidad de la otra pagina
    const urlParams = new URLSearchParams(window.location.search);
    let quantity = parseInt(urlParams.get('qty')) || 0;

    // Referencias DOM
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    checkoutItems.innerHTML = '';
    
    if (quantity === 0) {
        checkoutItems.innerHTML = `<li style="list-style: none; padding: 20px; text-align: center;">
            No hay patitos en tu carrito. <a href="detail.html" style="color: #298087; text-decoration: none;">Volver a la página del producto</a>
        </li>`;
        checkoutTotal.textContent = `Total: € 0.00`;
        checkoutBtn.style.display = 'none';
        return; 
    }

    // Costos
    const subtotal = quantity * UNIT_PRICE;
    const finalTotal = subtotal + SHIPPING_COST;
    
    // 5. Foto de patito
    const productLi = document.createElement('li');
    productLi.classList.add('checkout-item', 'product-row');
    
    productLi.innerHTML = `
        <div class="product-info-column">
            <img src="${PRODUCT_IMAGE_SRC}" alt="${PRODUCT_NAME}">
            <span>${PRODUCT_NAME}</span>
        </div>
        <span class="unit-price">€ ${UNIT_PRICE.toFixed(2)}</span>
        <span class="item-quantity">${quantity} unidades</span>
        <span class="item-subtotal">€ ${subtotal.toFixed(2)}</span>
        <button data-action="remove" style="background: none; border: none; visibility: hidden;">X</button>
    `;
    
    checkoutItems.appendChild(productLi);

    // costos del envio
    const shippingLi = document.createElement('li');
    shippingLi.classList.add('checkout-item', 'shipping-row');
    
    shippingLi.innerHTML = `
        <span style="grid-column: 1 / span 3; text-align: right;">Gastos de Envío:</span>
        <span style="text-align: right;">€ ${SHIPPING_COST.toFixed(2)}</span>
        <button style="visibility: hidden;">X</button>
    `;
    checkoutItems.appendChild(shippingLi);

    // suma del total
    checkoutTotal.innerHTML = `<strong>Total a Pagar:</strong> € ${finalTotal.toFixed(2)}`;

    // Boton de finalizar)
    checkoutBtn.addEventListener('click', () => {
        alert('¡Simulación de compra finalizada! Total: € ' + finalTotal.toFixed(2));
    });
});