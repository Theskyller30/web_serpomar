let indice = 0;

function mostrarFoto(indice) {
    const fotos = document.getElementsByClassName('foto');
    const totalFotos = fotos.length;
    const anchoFoto = fotos[0].clientWidth;
    const desplazamiento = indice * -anchoFoto;
    document.querySelector('.carrusel-slide').style.transform = `translateX(${desplazamiento}px)`;

    // Actualiza la opacidad de las fotos
    Array.from(fotos).forEach((foto, index) => {
        foto.classList.remove('visible');
        if (index === indice) {
            foto.classList.add('visible'); // Asegurarse de que solo la imagen actual tenga plena opacidad
        }
    });
}

function moverCarrusel() {
    indice++;
    if (indice >= 6) { // Reinicia el índice si supera el número de fotos - 1
        indice = 0;
    }
    mostrarFoto(indice);
}

document.getElementById('prevBtn').addEventListener('click', function() {
    if (indice > 0) {
        indice--;
        mostrarFoto(indice);
    } else {
        indice = 5; // Cambia al último si está en el primero
        mostrarFoto(indice);
    }
});

document.getElementById('nextBtn').addEventListener('click', function() {
    if (indice < 5) { // Cambiar este valor según el número total de fotos menos uno.
        indice++;
        mostrarFoto(indice);
    } else {
        indice = 0; // Vuelve al inicio si está en el último
        mostrarFoto(indice);
    }
});

// Inicia el carrusel automáticamente
setInterval(moverCarrusel, 3000); // Cambia la imagen cada 3 segundos

mostrarFoto(indice); // Inicializa el carrusel mostrando la primera foto.