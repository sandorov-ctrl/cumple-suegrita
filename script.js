// Tus frases perfectas
const frasesUnicas = [
    "Más allá de los detalles o la comida, lo que más disfruto es tu compañía. Gracias por abrazarme como a un hijo más.",
    "Agradezco de corazón cada consejo que me das. Me gusta escucharte porque tu energía me transmite una paz que no se encuentra en cualquier lado.",
    "Hay personas que te hacen sentir en casa sin importar dónde estés, y tú eres una de ellas. Gracias por ese cariño tan auténtico que me regalas siempre.",
    "Valoro muchísimo tu alegría y esa forma tan tuya de cuidar a los demás.",
    "Espero que pases un día genial, rodeada de amor y de las cosas que te hacen feliz. Te lo mereces muchísimo.",
    "Gracias por ser esa persona tan especial que siempre tiene un abrazo listo y una sonrisa sincera. Te quiero mucho."
];

// Nodos del Hardware
const btnActivar = document.getElementById('btn-activar');
const pInicio = document.getElementById('pantalla-inicio');
const pRamo = document.getElementById('pantalla-jardin');
const tituloJardin = document.getElementById('titulo-jardin');
const musica = document.getElementById('musica-fondo');

const flores = document.querySelectorAll('.flor-libre');
const overlay = document.getElementById('pantalla-mensaje');
const contenedorHoja = document.querySelector('.hoja-inmersiva-contenedor');
const textoRegalo = document.getElementById('texto-regalo');
const btnVolver = document.getElementById('btn-volver');
const btnVerFlor = document.getElementById('btn-ver-flor');
const btnCerrarZoom = document.getElementById('btn-cerrar-zoom');
const capaMagia = document.getElementById('universo-fondo');

// SISTEMA DE PARTÍCULAS
function generarPolvoMagico() {
    for (let i = 0; i < 30; i++) {
        let luz = document.createElement('div');
        luz.classList.add('luciernaga');
        let size = Math.random() * 4 + 2;
        let posX = Math.random() * 100;
        let duration = Math.random() * 10 + 5;
        let delay = Math.random() * 5;
        luz.style.width = `${size}px`;
        luz.style.height = `${size}px`;
        luz.style.left = `${posX}vw`;
        luz.style.animationDuration = `${duration}s`;
        luz.style.animationDelay = `${delay}s`;
        capaMagia.appendChild(luz);
    }
}
generarPolvoMagico();

// IGNICIÓN
btnActivar.addEventListener('click', () => {
    musica.play();
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 }, colors: ['#ff9a9e', '#fecfef', '#a1c4fd'] });
    pInicio.classList.replace('activa', 'oculta');
    pRamo.classList.replace('oculta', 'activa');

    setTimeout(() => {
        tituloJardin.classList.add('mostrar-titulo');
    }, 500);
});

// INTERACCIÓN CON FLORES
flores.forEach(flor => {
    flor.addEventListener('click', () => {
        // Oscurecemos las demás flores
        flores.forEach(f => f.classList.add('opaca'));

        // La flor que tocaste viaja al centro gigante
        flor.classList.remove('opaca');
        flor.classList.add('enfocada');

        const id = flor.getAttribute('data-id');
        textoRegalo.textContent = frasesUnicas[id];

        // Aparece la hoja después de medio segundo
        setTimeout(() => {
            overlay.classList.replace('modal-oculto', 'modal-activo');
            contenedorHoja.classList.add('vuelo-espectacular');
        }, 600);
    });
});

// VOLVER AL JARDÍN (Desde la Hoja)
btnVolver.addEventListener('click', () => {
    overlay.classList.replace('modal-activo', 'modal-oculto');
    contenedorHoja.classList.remove('vuelo-espectacular');

    flores.forEach(flor => {
        flor.classList.remove('opaca');
        flor.classList.remove('enfocada');
    });
});

// VER LA FLOR (Desde la Hoja)
btnVerFlor.addEventListener('click', () => {
    overlay.classList.replace('modal-activo', 'modal-oculto');
    contenedorHoja.classList.remove('vuelo-espectacular');
    btnCerrarZoom.classList.replace('oculto', 'activo');
});

// REGRESAR DESDE LA FLOR GIGANTE
btnCerrarZoom.addEventListener('click', () => {
    btnCerrarZoom.classList.replace('activo', 'oculto');

    flores.forEach(flor => {
        flor.classList.remove('opaca');
        flor.classList.remove('enfocada');
    });
});