// Base de datos de frases (Ajusta los textos como sientas)
const frases = [
    "Porque desde el primer día me hiciste sentir parte de la familia.",
    "Por ser una madre excepcional y criar a la persona más maravillosa.",
    "Por tu comida de los domingos que lo cura todo.",
    "Por esa sonrisa que tienes siempre y que contagia alegría.",
    "Porque eres un pilar de fuerza e inspiración para todos nosotros.",
    "¡FELIZ CUMPLEAÑOS! Que este día esté lleno de magia y muchísimo amor."
];

// Nodos del DOM
const btnAbrir = document.getElementById('btn-abrir');
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaRamo = document.getElementById('pantalla-ramo');
const musica = document.getElementById('musica-fondo');

const flores = document.querySelectorAll('.flor');
const overlay = document.getElementById('pantalla-mensaje');
const hoja = document.querySelector('.hoja-animada');
const textoFinal = document.getElementById('texto-final');
const btnCerrar = document.getElementById('btn-cerrar');

// Ignición
btnAbrir.addEventListener('click', () => {
    musica.play();
    pantallaInicio.classList.replace('activa', 'oculta');
    pantallaRamo.classList.replace('oculta', 'activa');
});

// Interacción con flores
flores.forEach(flor => {
    flor.addEventListener('click', () => {
        const computedStyle = window.getComputedStyle(flor);
        const originalTransform = computedStyle.transform;

        // Oscurecemos el resto
        flores.forEach(f => f.classList.add('opaca'));
        flor.classList.remove('opaca');

        // La levantamos aplicando el CSS dinámico
        flor.style.transform = `${originalTransform} translateY(-100px) scale(1.1)`;
        flor.classList.add('levantada');

        // Mostramos el mensaje
        const id = flor.getAttribute('data-id');
        textoFinal.textContent = frases[id];

        setTimeout(() => {
            overlay.classList.replace('modal-oculto', 'modal-activo');
            hoja.classList.add('volar-hoja');
        }, 600);
    });
});

// Cerrar y resetear estado
btnCerrar.addEventListener('click', () => {
    overlay.classList.replace('modal-activo', 'modal-oculto');
    hoja.classList.remove('volar-hoja');

    flores.forEach(flor => {
        flor.classList.remove('opaca');
        flor.classList.remove('levantada');
        flor.style.transform = '';
    });
});