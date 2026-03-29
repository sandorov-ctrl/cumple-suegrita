// Frases
const frasesUnicas = [
    "Gracias por tu paciencia infinita y por abrazarme como a un hijo más.",
    "Eres una madre excepcional, mi mayor ejemplo de vida y superación.",
    "No solo eres familia, eres una amiga incondicional. ¡Te adoro!",
    "Por esos domingos de comida y risas que nos recargan el alma a todos.",
    "Este 30 de marzo es para celebrar tu luz. ¡Que seas inmensamente feliz!",
    "¡Feliz cumpleaños! Que la vida te devuelva toda la belleza que nos das."
];

// Nodos del Hardware
const btnActivar = document.getElementById('btn-activar');
const pInicio = document.getElementById('pantalla-inicio');
const pJardin = document.getElementById('pantalla-jardin');
const tituloJardin = document.getElementById('titulo-jardin');
const musica = document.getElementById('musica-fondo');

const naves = document.querySelectorAll('.flor-nave');
const overlay = document.getElementById('pantalla-mensaje');
const textoRegalo = document.getElementById('texto-regalo');
const btnVolver = document.getElementById('btn-volver');
const btnVerFlor = document.getElementById('btn-ver-flor');
const btnCerrarZoom = document.getElementById('btn-cerrar-zoom');
const fondoUniverso = document.getElementById('fondo-animado');

// MOTOR DE UNIVERSO (Fondo animado)
const arteFondo = ['flor1.png', 'flor2.png', 'flor3.png', 'flor4.png', 'flor5.png', 'flor6.png', 'boton-flor.png'];

function encenderUniverso() {
    for (let i = 0; i < 20; i++) {
        let imgAleatoria = arteFondo[Math.floor(Math.random() * arteFondo.length)];
        let florFondo = document.createElement('img');
        florFondo.src = `assets/${imgAleatoria}`;
        florFondo.classList.add('flor-ambiente');

        let size = Math.random() * 40 + 20;
        let posX = Math.random() * 100;
        let duracion = Math.random() * 20 + 15;
        let retraso = Math.random() * 10;

        florFondo.style.width = `${size}px`;
        florFondo.style.left = `${posX}vw`;
        florFondo.style.animationDuration = `${duracion}s`;
        florFondo.style.animationDelay = `-${retraso}s`;

        fondoUniverso.appendChild(florFondo);
    }
}
encenderUniverso();

// IGNICIÓN
btnActivar.addEventListener('click', () => {
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 }, colors: ['#ff9a9e', '#fecfef', '#a1c4fd'] });
    musica.play();
    pInicio.classList.replace('activa', 'oculta');
    pJardin.classList.replace('oculta', 'activa');

    setTimeout(() => {
        naves.forEach(nave => nave.classList.add('desplegada'));
        tituloJardin.classList.add('mostrar-titulo');
    }, 500);
});

// EVENTO PRINCIPAL: CLICK EN LA FLOR
naves.forEach(nave => {
    nave.addEventListener('click', () => {
        // La flor viaja al centro y se hace grande
        nave.classList.add('enfocada');

        // Cargamos el mensaje
        const id = nave.getAttribute('data-id');
        textoRegalo.textContent = frasesUnicas[id];

        // Mostramos la hoja inmediatamente (como querías)
        setTimeout(() => {
            overlay.classList.replace('modal-oculto', 'modal-activo');
        }, 500);
    });
});

// ACCIÓN: VOLVER AL JARDÍN DIRECTAMENTE
btnVolver.addEventListener('click', () => {
    overlay.classList.replace('modal-activo', 'modal-oculto');
    naves.forEach(nave => nave.classList.remove('enfocada'));
});

// ACCIÓN: VER LA FLOR
btnVerFlor.addEventListener('click', () => {
    // 1. Ocultamos el mensaje (la hoja)
    overlay.classList.replace('modal-activo', 'modal-oculto');
    // 2. Mostramos el botón de seguridad para volver
    btnCerrarZoom.classList.replace('oculto', 'activo');
    // (La flor se queda gigante en el centro porque mantiene su clase 'enfocada')
});

// ACCIÓN: REGRESAR DESDE LA VISTA DE LA FLOR
btnCerrarZoom.addEventListener('click', () => {
    // Ocultamos el botón de seguridad
    btnCerrarZoom.classList.replace('activo', 'oculto');
    // Soltamos la flor
    naves.forEach(nave => nave.classList.remove('enfocada'));
});