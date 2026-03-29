// --- BASE DE DATOS: TUS FRASES PERSONALIZADAS ---
// Cada frase corresponde a un data-id de las flores (0 al 5)
// Tienes que editar lo que está entre comillas con tu mensaje real
const mensajesParaSuegra = [
    // Mensaje 1 (data-id="0")
    "Gracias por acogerme en tu familia con tanto cariño. Eres una suegra maravillosa.",

    // Mensaje 2 (data-id="1")
    "Por criar a la persona más increíble del mundo. Eres una madre excepcional.",

    // Mensaje 3 (data-id="2")
    "Tu alegría y energía nos inspiran a todos. Eres una mujer espectacular.",

    // Mensaje 4 (data-id="3")
    "Por todas las risas compartidas y las comidas deliciosas de los domingos. ¡Gracias!",

    // Mensaje 5 (data-id="4")
    "Este 30 de marzo celebramos tu vida. ¡Que se cumplan todos tus sueños!",

    // Mensaje 6 (data-id="5")
    "¡Feliz cumpleaños, mamá! Te queremos muchísimo hoy y siempre."
];

// --- LÓGICA DE CONTROL ---

// Nodos del DOM
const btnActivar = document.getElementById('btn-activar');
const pInicio = document.getElementById('pantalla-inicio');
const pRamo = document.getElementById('pantalla-ramo');
const musica = document.getElementById('musica-fondo');

const flores = document.querySelectorAll('.flor-acuarela');
const overlay = document.getElementById('pantalla-mensaje');
const contenedorHoja = document.querySelector('.hoja-horizontal-contenedor');
const textoRegalo = document.getElementById('texto-regalo');
const btnVolver = document.getElementById('btn-volver');
const capaMagia = document.getElementById('polvo-magico');

// SISTEMA DE PARTÍCULAS (Luciérnagas de fondo constantes)
function generarPolvoMagico() {
    for (let i = 0; i < 30; i++) {
        let luz = document.createElement('div');
        luz.classList.add('luciernaga');

        let size = Math.random() * 4 + 2; // entre 2 y 6 px
        let posX = Math.random() * 100; // 0 a 100% del ancho
        let duration = Math.random() * 10 + 5; // 5 a 15 segundos
        let delay = Math.random() * 5;

        luz.style.width = `${size}px`;
        luz.style.height = `${size}px`;
        luz.style.left = `${posX}vw`;
        luz.style.animationDuration = `${duration}s`;
        luz.style.animationDelay = `${delay}s`;

        capaMagia.appendChild(luz);
    }
}
generarPolvoMagico(); // Lo encendemos desde el principio

// SECUENCIA 1: Activación y Comienzo de la Música
btnActivar.addEventListener('click', () => {
    // Play Música
    musica.play();

    // Transición suave entre pantallas
    pInicio.classList.replace('activa', 'oculta');
    pRamo.classList.replace('oculta', 'activa');
});

// SECUENCIA 2: Clic en las flores artesanales
flores.forEach(flor => {
    flor.addEventListener('click', () => {
        // Cargamos el mensaje correcto en el pergamino
        const id = flor.getAttribute('data-id');
        textoRegalo.textContent = mensajesParaSuegra[id];

        // Aparece la capa oscura y borrosa
        overlay.classList.replace('modal-oculto', 'modal-activo');

        // La hoja vuela hacia la pantalla con efecto 3D
        contenedorHoja.classList.add('vuelo-espectacular');
    });
});

// SECUENCIA 3: Cerrar y Resetear
btnVolver.addEventListener('click', () => {
    // Ocultamos el overlay
    overlay.classList.replace('modal-activo', 'modal-oculto');
    // Quitamos la clase de animación para que pueda volver a volar después
    contenedorHoja.classList.remove('vuelo-espectacular');
});