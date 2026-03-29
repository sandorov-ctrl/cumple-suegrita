// Tus 6 mensajes personalizados
const frasesParaSuegra = [
    "Porque desde el primer momento me abriste tu corazón y tu familia.",
    "Por ser una madre maravillosa y criar a la persona más increíble.",
    "Por tu alegría infinita, tus abrazos y tus consejos siempre sabios.",
    "Porque eres un ejemplo inagotable de fuerza, dedicación y ternura.",
    "Por tus comidas deliciosas y los momentos mágicos compartidos juntos.",
    "¡FELIZ CUMPLEAÑOS! Que este 30 de marzo sea tan especial como tú."
];

// Nodos del sistema
const btnActivar = document.getElementById('btn-activar');
const pInicio = document.getElementById('pantalla-inicio');
const pRamo = document.getElementById('pantalla-ramo');
const musica = document.getElementById('musica-fondo');

const flores = document.querySelectorAll('.flor-acuarela');
const overlay = document.getElementById('pantalla-mensaje');
const tarjeta = document.querySelector('.tarjeta-regalo');
const texto = document.getElementById('texto-regalo');
const btnVolver = document.getElementById('btn-volver');

// SECUENCIA 1: Activación y Comienzo de la Música
btnActivar.addEventListener('click', () => {
    musica.play();

    // Transición suave entre pantallas
    pInicio.classList.replace('activa', 'oculta');
    pRamo.classList.replace('oculta', 'activa');
});

// SECUENCIA 2: Selección de Flor
flores.forEach(flor => {
    flor.addEventListener('click', () => {
        // Obtenemos la inclinación original de CSS
        const computedStyle = window.getComputedStyle(flor);
        const originalTransform = computedStyle.transform;

        // Efecto Visual en el ramo
        flores.forEach(f => f.classList.add('desenfocada'));
        flor.classList.remove('desenfocada');

        // Elevación limpia, manteniendo la rotación original
        flor.style.transform = `${originalTransform} translateY(-100px) scale(1.1)`;
        flor.classList.add('seleccionada');

        // Activación de la Tarjeta Mensaje con retraso para drama
        const id = flor.getAttribute('data-id');
        texto.textContent = frasesParaSuegra[id];

        setTimeout(() => {
            // Mostramos el overlay
            overlay.classList.replace('modal-oculto', 'modal-activo');
            // Lanzamos la animación de vuelo de la tarjeta
            tarjeta.classList.add('volando');
        }, 500); // Retraso de 0.5 segundos
    });
});

// SECUENCIA 3: Cerrar y Resetear
btnVolver.addEventListener('click', () => {
    overlay.classList.replace('modal-activo', 'modal-oculto');
    tarjeta.classList.remove('volando'); // Quitamos la clase para que pueda volver a volar

    // Reseteamos el ramo
    flores.forEach(flor => {
        flor.classList.remove('desenfocada');
        flor.classList.remove('seleccionada');
        flor.style.transform = ''; // Vuelve al estado CSS original
    });
});