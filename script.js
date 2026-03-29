// Tus mensajes
const frasesEspeciales = [
    "Porque desde el primer momento me abriste tu corazón.",
    "Por ser una madre maravillosa y una suegra excepcional.",
    "Admiro tu fuerza, tu alegría y tu forma de ver la vida.",
    "Gracias por tus consejos y por hacerme sentir en casa siempre.",
    "Mañana 30 de marzo es tu día. ¡Que este año te traiga magia!",
    "Celebramos a la mujer espectacular que eres. ¡Feliz cumpleaños!"
];

// Hardware Virtual
const btnActivar = document.getElementById('btn-activar');
const pInicio = document.getElementById('pantalla-inicio');
const pRamo = document.getElementById('pantalla-ramo');
const musica = document.getElementById('musica-fondo');

const flores = document.querySelectorAll('.flor-viva');
const overlay = document.getElementById('pantalla-mensaje');
const contenedorHoja = document.querySelector('.hoja-gigante-contenedor');
const textoRegalo = document.getElementById('texto-regalo');
const btnVolver = document.getElementById('btn-volver');
const capaMagia = document.getElementById('polvo-magico');

// SISTEMA DE PARTÍCULAS (Mata el "vacío" de la pantalla)
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

// IGNICIÓN Y TRANSICIÓN
btnActivar.addEventListener('click', () => {
    musica.play();
    pInicio.classList.replace('activa', 'oculta');
    pRamo.classList.replace('oculta', 'activa');

    // Asignar animaciones de respiración a las flores
    flores.forEach((flor, index) => {
        flor.classList.add(index % 2 === 0 ? 'respira-1' : 'respira-2');
    });
});

// INTERACCIÓN CON FLORES
flores.forEach(flor => {
    flor.addEventListener('click', () => {
        const id = flor.getAttribute('data-id');
        textoRegalo.textContent = frasesEspeciales[id];

        // Aparece la capa oscura y borrosa
        overlay.classList.replace('modal-oculto', 'modal-activo');

        // La hoja vuela hacia la pantalla con efecto 3D
        contenedorHoja.classList.add('vuelo-espectacular');
    });
});

// VOLVER AL RAMO
btnVolver.addEventListener('click', () => {
    overlay.classList.replace('modal-activo', 'modal-oculto');
    contenedorHoja.classList.remove('vuelo-espectacular');
});