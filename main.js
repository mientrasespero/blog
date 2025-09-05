window.addEventListener('load', function() {
        // ¡Usa las nuevas dimensiones de la imagen RECORTADA!
        const totalBgWidth = 5760;  // Ancho sigue igual (o el nuevo si lo recortaste)
        const totalBgHeight = 2466; // Nuevo alto (3240 - 200 - 200)
        
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        const maxX = totalBgWidth - viewportWidth;
        const maxY = totalBgHeight - viewportHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        document.body.style.backgroundPosition = `-${randomX}px -${randomY}px`;
    });

// --- CÓDIGO NUEVO PARA EL CURSOR ANIMADO ---
const customCursor = document.getElementById('custom-cursor');

// Escucha el movimiento del mouse en toda la página
document.addEventListener('mousemove', function(e) {
    // Mueve el div 'custom-cursor' a la posición del mouse
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});

// Opcional: Esconde el cursor personalizado cuando sale de la ventana
document.addEventListener('mouseout', function() {
    customCursor.style.opacity = '0';
});
document.addEventListener('mouseover', function() {
    customCursor.style.opacity = '1';
});