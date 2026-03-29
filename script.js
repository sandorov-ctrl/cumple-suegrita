// TUS FRASES 
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
const fondoUniverso = document.getElementById('fondo-animado');

// El nuevo botón de control manual
const btnAdmirar = document.getElementById('btn-admirar-mensaje');
let florSeleccionadaId = null; // Memoria del sistema

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

// INTERACCIÓN 1: ZOOM A LA FLOR
naves.forEach(nave => {
    nave.addEventListener('click', () => {
        // Soltamos cualquier otra flor que estuviera enfocada
        naves.forEach(n => n.classList.remove('enfocada'));

        // Enfocamos la flor tocada (Zoom Extremo)
        nave.classList.add('enfocada');

        // Guardamos su ID en la memoria
        florSeleccionadaId = nave.getAttribute('data-id');

        // Mostramos el botón para permitirle leer el mensaje cuando ella decida
        btnAdmirar.classList.replace('oculto', 'activo');
    });
});

// INTERACCIÓN 2: LEER EL MENSAJE
btnAdmirar.addEventListener('click', () => {
    // Cargamos el texto
    textoRegalo.textContent = frasesUnicas[florSeleccionadaId];

    // Mostramos la hoja pergamino
    overlay.classList.replace('modal-oculto', 'modal-activo');

    // Escondemos el botón de leer mensaje
    btnAdmirar.classList.replace('activo', 'oculto');
});

// VOLVER A LA GRAVEDAD CERO
btnVolver.addEventListener('click', () => {
    overlay.classList.replace('modal-activo', 'modal-oculto');
    naves.forEach(nave => nave.classList.remove('enfocada'));
    btnAdmirar.classList.replace('activo', 'oculto'); // Por seguridad
    florSeleccionadaId = null; // Limpiamos la memoria
});