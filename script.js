// Definimos nuestra base de datos local usando un Array (una lista ordenada)
const razones = [
    "Porque siempre tienes una sonrisa y un consejo sabio cuando más se necesita.",
    "Por tus comidas increíbles de los domingos que nos unen a todos.",
    "Porque me has aceptado en la familia como a un hijo más desde el primer día.",
    "Por la paciencia infinita que tienes con todos nosotros.",
    "Porque eres un ejemplo de fuerza, trabajo y dedicación constante.",
    "Por esa energía inagotable que contagia alegría a toda la casa.",
    "Porque criar a la persona que amo es el mayor regalo que podrías haberme dado.",
    "¡Por muchísimos cumpleaños más compartiendo juntos! ¡Felices 50 y pico! 🎂"
];

// Capturamos los elementos del DOM (nuestros componentes de hardware virtual)
const botonBuscar = document.getElementById('btn-buscar');
const pantallaBusqueda = document.getElementById('pantalla-busqueda');
const pantallaResultados = document.getElementById('pantalla-resultados');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const musica = document.getElementById('musica-fondo');

// Secuencia de ignición: ¿Qué pasa al hacer clic?
botonBuscar.addEventListener('click', () => {

    // 1. Iniciamos el motor de audio (los navegadores requieren que el usuario interactúe primero para reproducir sonido)
    musica.play();

    // 2. Modificamos el estado visual (CSS) para cambiar de interfaz
    pantallaBusqueda.classList.remove('activa');
    pantallaBusqueda.classList.add('oculta');

    pantallaResultados.classList.remove('oculta');
    pantallaResultados.classList.add('activa');

    // 3. Bucle Iterativo: Recorremos nuestro Array y creamos elementos HTML al vuelo
    razones.forEach((razon, index) => {
        // Creamos un nuevo "nodo" div en la memoria
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');
        tarjeta.innerHTML = `<p>${razon}</p>`;

        // Retrasamos la animación de cada tarjeta multiplicando el índice, 
        // para que caigan en cascada como estrellas fugaces (0.2s, 0.4s, 0.6s...)
        tarjeta.style.animationDelay = `${index * 0.2}s`;

        // Inyectamos el nodo en el DOM visible
        contenedorTarjetas.appendChild(tarjeta);
    });
});