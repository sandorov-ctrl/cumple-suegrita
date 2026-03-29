// Base de datos de razones (El Array)
// Cada posición [0, 1, 2, 3, 4] corresponde a un regalo
const mensajes = [
    "Eres la mejor suegra porque me abriste las puertas de tu familia con un amor incondicional desde el primer minuto.",
    "Eres una madre excepcional. Ver el amor y los valores que has inculcado me confirma lo increíble que eres.",
    "Eres una amiga maravillosa. Siempre tienes un consejo honesto, una sonrisa sincera y un café listo para compartir.",
    "Admiro profundamente tu fuerza. Eres un pilar inquebrantable que nos sostiene y nos inspira a ser mejores cada día.",
    "¡Feliz cumpleaños! Que este año esté lleno de salud, viajes, risas y momentos inolvidables juntos. ¡Te queremos muchísimo!"
];

// Captura de elementos de hardware
const btnMagico = document.getElementById('btn-magico');
const contInicio = document.getElementById('contenedor-inicio');
const contRamo = document.getElementById('contenedor-ramo');
const regalos = document.querySelectorAll('.regalo');
const musica = document.getElementById('musica-fondo');

// Elementos del Modal
const modal = document.getElementById('modal-mensaje');
const textoModal = document.getElementById('texto-modal');
const btnCerrar = document.getElementById('cerrar-modal');

// SECUENCIA 1: Ignición (Click en el botón mágico)
btnMagico.addEventListener('click', () => {
    // 1. Música ON
    musica.play();

    // 2. Cambio de estado visual
    contInicio.classList.replace('activo', 'oculto');
    contRamo.classList.replace('oculto', 'activo'); // Esto hace que el HTML cambie a display: flex;

    // 3. Disparar regalos con un ligero retraso para que vea el ramo primero
    setTimeout(() => {
        regalos.forEach(regalo => {
            regalo.classList.add('desplegado');
        });
    }, 500); // 500 milisegundos de retraso
});

// SECUENCIA 2: Interacción con la carga útil (Click en los regalos)
regalos.forEach(regalo => {
    regalo.addEventListener('click', () => {
        // Obtenemos el ID numérico que le pusimos en el HTML (data-id)
        const idMensaje = regalo.getAttribute('data-id');

        // Buscamos ese mensaje en nuestro Array
        textoModal.textContent = mensajes[idMensaje];

        // Mostramos la ventana
        modal.classList.replace('oculto', 'activo');
    });
});

// SECUENCIA 3: Cerrar la ventana
btnCerrar.addEventListener('click', () => {
    modal.classList.replace('activo', 'oculto');
});