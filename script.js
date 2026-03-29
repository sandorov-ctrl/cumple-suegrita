// 1. SISTEMA DE AUDIO
// Reproducimos la música en cuanto ella toque la pantalla por primera vez
let musicaIniciada = false;
document.addEventListener('touchstart', () => {
    if (!musicaIniciada) {
        document.getElementById('musica-fondo').play();
        musicaIniciada = true;
    }
});

document.addEventListener('click', () => {
    if (!musicaIniciada) {
        document.getElementById('musica-fondo').play();
        musicaIniciada = true;
    }
});

// 2. SISTEMA DE SENSORES (Intersection Observer)
// Configuramos el radar: le decimos que dispare la señal cuando el elemento esté al menos a un 10% visible
const opcionesDelRadar = {
    threshold: 0.1
};

// Creamos el observador
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        // Si el elemento ha entrado en el campo de visión...
        if (entrada.isIntersecting) {
            // Le añadimos la clase 'mostrar' que creamos en CSS para que aparezca
            entrada.target.classList.add('mostrar');
        }
    });
}, opcionesDelRadar);

// Buscamos todas las secciones que tengan la clase 'oculta' y les ponemos el radar
const elementosOcultos = document.querySelectorAll('.oculta');
elementosOcultos.forEach((elemento) => {
    observador.observe(elemento);
});

// 3. SISTEMA DE PARTÍCULAS (Carga explosiva de confeti)
const botonSorpresa = document.getElementById('btn-sorpresa');

botonSorpresa.addEventListener('click', () => {
    // Usamos la librería externa que importamos en el HTML
    // Dispara confeti con una física de dispersión específica
    confetti({
        particleCount: 150, // Número de partículas
        spread: 80,         // Ángulo de apertura
        origin: { y: 0.6 }, // Desde dónde sale (60% de la pantalla hacia abajo)
        colors: ['#f8c291', '#ffffff', '#4285F4', '#34A853'] // Colores
    });
});