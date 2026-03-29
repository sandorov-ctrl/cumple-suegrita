// --- BASE DE DATOS: TUS FRASES ---
// Cada frase corresponde a un data-id de las flores (0 al 5)
// Tienes que editar lo que está entre comillas con tu mensaje real
const mensajesParaMamá = [
    // Mensaje 1 (data-id="0")
    "Eres la mejor MADRE del mundo. Gracias por tu amor incondicional, tus abrazos que curan todo y por estar siempre ahí, en las buenas y en las malas. Te adoro.",

    // Mensaje 2 (data-id="1")
    "Eres una SUEGRA maravillosa. Gracias por recibirme en tu familia con los brazos abiertos y por quererme como a un hijo más. Es un honor ser parte de tu vida.",

    // Mensaje 3 (data-id="2")
    "Admiro tu fuerza y tu alegría. Eres una AMIGA increíble para todos los que te rodean. Tu sonrisa ilumina cualquier habitación. ¡Gracias por ser tú!",

    // Mensaje 4 (data-id="3")
    "Gracias por todas las lecciones, los consejos sabios y, por supuesto... ¡por tus comidas deliciosas! Eres el pilar de esta familia.",

    // Mensaje 5 (data-id="4")
    "Mañana es un día especial: ¡tu cumpleaños el 30 de marzo! Que este año te traiga muchísima salud, viajes, risas y momentos inolvidables juntos.",

    // Mensaje 6 (data-id="5")
    "Hoy celebramos todo lo que eres. Una mujer excepcional, madre, suegra y amiga. ¡Feliz cumpleaños adelantado! Te queremos muchísimo."
];

// --- LÓGICA DE CONTROL ---

// Nodos del DOM
const btnActivar = document.getElementById('btn-activar');
const pInicio = document.getElementById('pantalla-inicio');
const pJardin = document.getElementById('pantalla-jardin');
const musica = document.getElementById('musica-fondo');

const tarjetasFlor = document.querySelectorAll('.tarjeta-flor');
const overlay = document.getElementById('pantalla-mensaje');
const contenedorHoja = document.querySelector('.hoja-voladora-contenedor');
const textoRegalo = document.getElementById('texto-regalo');
const btnVolver = document.getElementById('btn-volver');

// SECUENCIA 1: Activación y Comienzo de la Música
btnActivar.addEventListener('click', () => {
    // Play Música (Here Comes the Sun)
    musica.play();

    // Transición suave entre pantallas
    pInicio.classList.replace('activa', 'oculta');
    pJardin.classList.replace('oculta', 'activa');
});

// SECUENCIA 2: Clic en las flores del jardín
tarjetasFlor.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        // Obtenemos el ID del mensaje
        const id = tarjeta.getAttribute('data-id');

        // Cargamos el texto en el modal
        textoRegalo.textContent = mensajesParaMamá[id];

        // Abrimos el modal
        overlay.classList.replace('modal-oculto', 'modal-activo');
        // Lanzamos la animación de vuelo de la hoja
        contenedorHoja.classList.add('volando');
    });
});

// SECUENCIA 3: Cerrar y Resetear
btnVolver.addEventListener('click', () => {
    // Ocultamos el modal
    overlay.classList.replace('modal-activo', 'modal-oculto');
    // Quitamos la clase de animación para que pueda volver a volar después
    contenedorHoja.classList.remove('volando');
});