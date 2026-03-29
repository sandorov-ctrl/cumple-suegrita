// TUS FRASES (Edita lo que está entre comillas)
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

// MOTOR DE UNIVERSO (Flores flotando aleatoriamente en el fondo)
// Array con todos tus dibujos para el fondo
const arteFondo = ['flor1.png', 'flor2.png', 'flor3.png', 'flor4.png', 'flor5.png', 'flor6.png', 'boton-flor.png'];

function encenderUniverso() {
    for (let i = 0; i < 20; i++) {
        let imgAleatoria = arteFondo[Math.floor(Math.random() * arteFondo.length)];
        let florFondo = document.createElement('img');
        florFondo.src = `assets/${imgAleatoria}`;
        florFondo.classList.add('flor-ambiente');

        // Matemáticas del caos (aleatoriedad)
        let size = Math.random() * 40 + 20; // 20px a 60px
        let posX = Math.random() * 100; // Ancho
        let duracion = Math.random() * 20 + 15; // Velocidad de deriva
        let retraso = Math.random() * 10;

        florFondo.style.width = `${size}px`;
        florFondo.style.left = `${posX}vw`;
        florFondo.style.animationDuration = `${duracion}s`;
        florFondo.style.animationDelay = `-${retraso}s`; // Para que ya haya flores al iniciar

        fondoUniverso.appendChild(florFondo);
    }
}
encenderUniverso(); // Iniciamos el fondo desde el primer momento

// IGNICIÓN: CONFETI + MÚSICA + EXPANSIÓN
btnActivar.addEventListener('click', () => {
    // 1. Explosión de Confeti (Motor Canvas)
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff9a9e', '#fecfef', '#a1c4fd']
    });

    // 2. Play Música
    musica.play();

    // 3. Transición de Pantallas
    pInicio.classList.replace('activa', 'oculta');
    pJardin.classList.replace('oculta', 'activa');

    // 4. Desplegar flores desde el centro (Retraso de medio segundo para que pase la explosión)
    setTimeout(() => {
        naves.forEach(nave => nave.classList.add('desplegada'));
        tituloJardin.classList.add('mostrar-titulo');
    }, 500);
});

// INTERACCIÓN: LA FLOR VIAJA AL CENTRO
naves.forEach(nave => {
    nave.addEventListener('click', () => {
        // La flor hace "Zoom" al centro de la pantalla
        nave.classList.add('enfocada');

        // Cargamos el mensaje correcto
        const id = nave.getAttribute('data-id');
        textoRegalo.textContent = frasesUnicas[id];

        // Mostramos el modal de la hoja con un pequeño retraso
        // Esto permite que el usuario vea la flor llegar al centro ANTES de que la hoja la cubra
        setTimeout(() => {
            overlay.classList.replace('modal-oculto', 'modal-activo');
        }, 600);
    });
});

// VOLVER A LA GRAVEDAD CERO
btnVolver.addEventListener('click', () => {
    // Ocultamos la hoja
    overlay.classList.replace('modal-activo', 'modal-oculto');

    // Le decimos a la flor que vuelva a su sitio
    naves.forEach(nave => nave.classList.remove('enfocada'));
});