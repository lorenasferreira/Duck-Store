document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contacto-form');
    const formContenedor = document.getElementById('formulario-contenedor');
    const mensajeExito = document.getElementById('mensaje-exito');
    const volverBtn = document.getElementById('volver-btn');

    form.addEventListener('submit', function(event) {
        
        event.preventDefault();

        formContenedor.style.display = 'none';

        mensajeExito.style.display = 'flex';
    });

    volverBtn.addEventListener('click', function() {
        mensajeExito.style.display = 'none';

        formContenedor.style.display = 'block';

        form.reset();
    });
});