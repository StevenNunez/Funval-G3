
const celdas = document.querySelectorAll('[data-cell]');
const indicadorTurno = document.getElementById('indicador-turno');
const puntajeX = document.getElementById('puntaje-x');
const puntajeO = document.getElementById('puntaje-o');
const puntajeEmpates = document.getElementById('puntaje-empates');
const modalResultado = document.getElementById('modal-resultado');
const mensajeResultado = document.getElementById('mensaje-resultado');
const textoGanador = document.getElementById('texto-ganador');
const botonSalir = document.getElementById('boton-salir');
const botonSiguienteRonda = document.getElementById('boton-siguiente-ronda');
const botonReiniciar = document.getElementById('boton-reiniciar');
const modalReiniciar = document.getElementById('modal-reiniciar');
const cancelarReinicio = document.getElementById('cancelar-reiniciar');
const confirmarReinicio = document.getElementById('confirmar-reiniciar');


let tablero = ['', '', '', '', '', '', '', '', ''];
let jugadorActual = 'X';
let puntajeJugadorX = 0;
let puntajeJugadorO = 0;
let empates = 0;
let juegoActivo = true;


const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
];


function manejarClicCelda(e) {
    const celda = e.target.closest('div');
    const indice = celda.getAttribute('data-cell');

    if (tablero[indice] !== '' || !juegoActivo) return;

 
    tablero[indice] = jugadorActual;
    celda.innerHTML = `<span class="text-5xl md:text-6xl ${jugadorActual === 'X' ? 'text-[#31C3BD]' : 'text-[#F2B137]'}">${jugadorActual}</span>`;


    if (verificarGanador()) {
        juegoActivo = false;
        actualizarPuntaje(jugadorActual);
        mostrarResultado(`${jugadorActual} TAKES TE ROUND`, jugadorActual === 'X' ? '¡X WINS!' : '¡O WINS!');
        return;
    }


    if (tablero.every(celda => celda !== '')) {
        juegoActivo = false;
        empates++;
        puntajeEmpates.textContent = empates;
        mostrarResultado('ROND TIED', '¡TIEE!');
        return;
    }

   
    jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
    indicadorTurno.textContent = jugadorActual;
    indicadorTurno.parentElement.firstChild.textContent = `${jugadorActual} TURN`;
}


function verificarGanador() {
    return combinacionesGanadoras.some(combinacion => {
        return combinacion.every(indice => tablero[indice] === jugadorActual);
    });
}


function actualizarPuntaje(ganador) {
    if (ganador === 'X') {
        puntajeJugadorX++;
        puntajeX.textContent = puntajeJugadorX;
    } else {
        puntajeJugadorO++;
        puntajeO.textContent = puntajeJugadorO;
    }
}


function mostrarResultado(mensaje, ganador) {
    mensajeResultado.textContent = mensaje;
    textoGanador.textContent = ganador;
    textoGanador.className = `text-3xl font-bold ${ganador.includes('X') ? 'text-[#31C3BD]' : ganador.includes('O') ? 'text-[#F2B137]' : 'text-[#A8BFC9]'}`;
    modalResultado.classList.remove('hidden');
}


function reiniciarTablero() {
    tablero = ['', '', '', '', '', '', '', '', ''];
    jugadorActual = 'X';
    juegoActivo = true;
    indicadorTurno.textContent = 'X';
    indicadorTurno.parentElement.firstChild.textContent = 'X TURN';
    celdas.forEach(celda => celda.innerHTML = '');
}


function iniciarNuevaRonda() {
    reiniciarTablero();
    modalResultado.classList.add('hidden');
}


function manejarReinicio() {
    modalReiniciar.classList.remove('hidden');
}


function confirmarReinicioJuego() {
    reiniciarTablero();
    puntajeJugadorX = 0;
    puntajeJugadorO = 0;
    empates = 0;
    puntajeX.textContent = puntajeJugadorX;
    puntajeO.textContent = puntajeJugadorO;
    puntajeEmpates.textContent = empates;
    modalReiniciar.classList.add('hidden');
}


function cancelarReinicioJuego() {
    modalReiniciar.classList.add('hidden');
}


function salirJuego() {
    reiniciarTablero();
    puntajeJugadorX = 0;
    puntajeJugadorO = 0;
    empates = 0;
    puntajeX.textContent = puntajeJugadorX;
    puntajeO.textContent = puntajeJugadorO;
    puntajeEmpates.textContent = empates;
    modalResultado.classList.add('hidden');
}


celdas.forEach(celda => celda.addEventListener('click', manejarClicCelda));
botonSiguienteRonda.addEventListener('click', iniciarNuevaRonda);
botonSalir.addEventListener('click', salirJuego);
botonReiniciar.addEventListener('click', manejarReinicio);
confirmarReinicio.addEventListener('click', confirmarReinicioJuego);
cancelarReinicio.addEventListener('click', cancelarReinicioJuego);