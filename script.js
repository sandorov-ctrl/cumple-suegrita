// Base de datos de Frases
const frases = [
    "Eres la mejor madre. Tu amor incondicional es mi mayor regalo. ¡Te adoro!",
    "Eres una suegra excepcional. Gracias por acogerme con tanto cariño en la familia.",
    "Más que familia, eres una amiga increíble. Tu fuerza y alegría me inspiran.",
    "Gracias por tus consejos sabios, tu paciencia y por esas comidas de los domingos.",
    "Mañana es tu día, 30 de marzo. ¡Que este nuevo año de vida esté lleno de magia!",
    "Hoy celebramos a la mujer espectacular que eres. ¡Feliz cumpleaños adelantado!"
];

const mensajesSecretos = [
    "¡Encontraste un secreto! Quería decirte que tu sonrisa ilumina nuestra casa.",
    "¡Otro secreto! Nunca dejes de ser esa persona tan maravillosa y llena de luz."
];

// Elementos
const btnActivar = document.getElementById('btn-activar');
const pInicio = document.getElementById('pantalla-inicio');
const pRamo = document.getElementById('pantalla-ramo');
const musica = document.getElementById('musica-fondo');

const flores = document.querySelectorAll('.flor-viva');
const secretos = document.querySelectorAll('.secreto');
const overlay = document.getElementById('pantalla-mensaje');
const hojaContenedor = document.querySelector('.hoja-voladora');
const textoRegalo = document.getElementById('texto-regalo');
const btnVolver = document.getElementById('btn-volver');
const universo = document.getElementById('universo-fondo');

// GENERADOR DE ARTE DE FONDO (Las flores que caen por el fondo)
// Como un buen ingeniero, automatizamos esto con un bucle
function crearFloresDeFondo() {
    for (let i = 0; i < 15; i++) {
        let florFondo = document.createElement('img');
        florFondo.src = 'assets/boton-flor.png';
        florFondo.classList.add('flor-fondo-animada');

        // Matemáticas aleatorias para posición, tamaño y velocidad
        let tamano = Math.random() * 40 + 20; // Entre 20px y 60px
        let posicionX = Math.random() * 100; // Posición horizontal aleatoria
        let duracion = Math.random() * 15 + 10; // Entre 10s y 25s de viaje
        let retraso = Math.random() * 10;

        florFondo.style.width = `${tamano}px`;
        florFondo.style.left = `${posicionX}vw`;
        florFondo.style.animationDuration = `${duracion}s`;
        florFondo.style.animationDelay = `-${retraso}s`;

        universo.appendChild(florFondo);
    }
}

// INICIAR SISTEMA
btnActivar.addEventListener('click', () => {
    musica.play();
    pInicio.classList.replace('activa', 'oculta');
    pRamo.classList.replace('oculta', 'activa');

    // Le damos clase de flotar a las flores del ramo
    flores.forEach((flor, index) => {
        flor.classList.add(index % 2 === 0 ? 'flotando-1' : 'flotando-2');
    });

    crearFloresDeFondo(); // Encendemos el fondo mágico
});

// INTERACCIÓN: FLORES DEL RAMO
flores.forEach(flor => {
    flor.addEventListener('click', () => {
        const id = flor.getAttribute('data-id');
        abrirMensaje(frases[id]);
    });
});

// INTERACCIÓN: SECRETOS
secretos.forEach((secreto, index) => {
    secreto.addEventListener('click', () => {
        abrirMensaje(mensajesSecretos[index]);
    });
});

// FUNCIÓN PARA VOLAR LA HOJA
function abrirMensaje(texto) {
    textoRegalo.textContent = texto;
    overlay.classList.replace('modal-oculto', 'modal-activo');
    hojaContenedor.classList.add('animacion-vuelo');
}

// CERRAR
btnVolver.addEventListener('click', () => {
    overlay.classList.replace('modal-activo', 'modal-oculto');
    hojaContenedor.classList.remove('animacion-vuelo');
});