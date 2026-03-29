// Base de Datos: Frases y Nombres de Plantas
const datosFlores = [
    { nombre: "Rosa Té", frase: "Gracias por tu paciencia infinita y por abrazarme como a un hijo más." },
    { nombre: "Lirio de Agua", frase: "Por ser una madre excepcional, mi mayor ejemplo de vida y superación." },
    { nombre: "Orquídea Silvestre", frase: "No solo eres familia, eres una amiga incondicional. ¡Te adoro!" },
    { nombre: "Tulipán Rosa", frase: "Por esos domingos de comida y risas que nos recargan el alma a todos." },
    { nombre: "Girasol Suave", frase: "Este 30 de marzo es para celebrar tu luz. ¡Que seas inmensamente feliz!" },
    { nombre: "Peonía Acuarela", frase: "¡Feliz cumpleaños, mamá! Te queremos muchísimo hoy y siempre." }
];

// Hardware Virtual
const btnActivar = document.getElementById('btn-activar');
const pInicio = document.getElementById('pantalla-inicio');
const pJardin = document.getElementById('pantalla-jardin');
const tituloJardin = document.getElementById('titulo-jardin');
const musica = document.getElementById('musica-fondo');

const naves = document.querySelectorAll('.flor-nave');
const overlay = document.getElementById('pantalla-mensaje');
const textoRegalo = document.getElementById('texto-regalo');
const btnVolver = document.getElementById('btn-volver');
const btnVerFlor = document.getElementById('btn-ver-flor');
const btnCerrarZoom = document.getElementById('btn-cerrar-zoom');
const nombrePlanta = document.getElementById('nombre-planta');
const capaMagia = document.getElementById('universo-fondo');

// SISTEMA DE PARTÍCULAS (Mata el "vacío")
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

// IGNICIÓN Y TRANSICIÓN
btnActivar.addEventListener('click', () => {
    musica.play(); // El navegador ya acepta M4A
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 }, colors: ['#ff9a9e', '#fecfef', '#a1c4fd'] });

    pInicio.classList.replace('activa', 'oculta');
    pJardin.classList.replace('oculta', 'activa');

    setTimeout(() => {
        naves.forEach(nave => nave.classList.add('desplegada'));
        tituloJardin.classList.add('mostrar-titulo');
    }, 500);
});

// INTERACCIÓN CON FLORES
naves.forEach(flor => {
    flor.addEventListener('click', () => {
        const id = flor.getAttribute('data-id');

        // La flor viaja al centro y se hace grande
        flor.classList.add('enfocada');

        // Cargamos los datos biográficos
        textoRegalo.textContent = datosFlores[id].frase;
        nombrePlanta.textContent = datosFlores[id].nombre;

        // Mostramos la hoja inmediatamente
        setTimeout(() => {
            overlay.classList.replace('modal-oculto', 'modal-activo');
        }, 500);
    });
});

// ACCIÓN: VOLVER AL JARDÍN DIRECTAMENTE
btnVolver.addEventListener('click', () => {
    overlay.classList.replace('modal-activo', 'modal-oculto');
    naves.forEach(nave => nave.classList.remove('enfocada'));
});

// ACCIÓN: VER LA FLOR (Aparece el nombre)
btnVerFlor.addEventListener('click', () => {
    // 1. Ocultamos el mensaje (la hoja)
    overlay.classList.replace('modal-activo', 'modal-oculto');

    // 2. Mostramos los elementos biográficos Detailed View
    btnCerrarZoom.classList.replace('oculto', 'activo');
    nombrePlanta.classList.replace('oculto', 'activo'); // Mostramos el nombre de la planta
});

// ACCIÓN: REGRESAR DESDE LA VISTA DE LA FLOR
btnCerrarZoom.addEventListener('click', () => {
    // Ocultamos elementos detallados
    btnCerrarZoom.classList.replace('activo', 'oculto');
    nombrePlanta.classList.replace('activo', 'oculto'); // Ocultamos el nombre

    // Soltamos la flor
    naves.forEach(nave => nave.classList.remove('enfocada'));
});