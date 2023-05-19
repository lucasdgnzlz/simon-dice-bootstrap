const $botonJugar = document.querySelector(".boton-jugar");

let juegoComenzado = false;
let numeroDeRonda = 0;
let recordRonda = 0;
let indicadorDeTurnos = "";

let listaSecuenciaMaquina = [];
let listaSecuenciaUsuario = [];

let cuadrosTablero = {
  $cuadroVerde: document.querySelector(".cuadro-verde"),
  $cuadroRojo: document.querySelector(".cuadro-rojo"),
  $cuadroAmarillo: document.querySelector(".cuadro-amarillo"),
  $cuadroAzul: document.querySelector(".cuadro-azul"),
};

function actualizarNumeroRonda() {
  const $visorRondas = document.querySelector(".visor-rondas");
  $visorRondas.value = `Ronda #${numeroDeRonda}`;
}

function ocultarBotonJugar() {
  const $contenedorBotonJugar = document.querySelector(".contenedor-boton");
  $contenedorBotonJugar.id = "oculto";
  $botonJugar.disabled = true;
}

function mostrarBotonJugar() {
  const $contenedorBotonJugar = document.querySelector(".contenedor-boton");
  $contenedorBotonJugar.id = "";
  $botonJugar.disabled = false;
}

function mostrarIndicadorTurnos() {
  const $contenedorIndicadorTurnos = document.querySelector(".contenedor-indicador-turnos");
  $contenedorIndicadorTurnos.id = "";
}

function ocultarIndicadorTurnos() {
  const $contenedorIndicadorTurnos = document.querySelector(".contenedor-indicador-turnos");
  $contenedorIndicadorTurnos.id = "oculto";
}

function actualizarTurnos() {
  if (indicadorDeTurnos === "") {
    indicadorDeTurnos = "maquina";
  } else if (indicadorDeTurnos === "maquina") {
    indicadorDeTurnos = "usuario";
  } else if (indicadorDeTurnos === "usuario") {
    indicadorDeTurnos = "maquina";
  } else {
    return false;
  }
}

function imprimirTurnos() {
  const $indicadorTurnos = document.querySelector(".indicador-turnos");

  if (indicadorDeTurnos === "maquina") {
    $indicadorTurnos.textContent = "Turno de la máquina!";
  } else {
    $indicadorTurnos.textContent = "Es tu turno!";
  }
}

function gestionarActualizacionesTurnos() {
  const retrasoEnMilisegundos = listaSecuenciaMaquina.length * 1000;
  setTimeout(function () {
    actualizarTurnos();
    imprimirTurnos();
  }, retrasoEnMilisegundos);
}

function gestionarRondas() {
  if (juegoComenzado === false) {
    juegoComenzado = true;
    numeroDeRonda++;

    actualizarTurnos();
    actualizarNumeroRonda();
    imprimirTurnos();
  } else {
    numeroDeRonda++;

    if (indicadorDeTurnos === "maquina") {
      let tiempoEspera = listaSecuenciaMaquina.length * 1000;
      setTimeout(() => {
        indicadorDeTurnos = "usuario";
        actualizarNumeroRonda();
        imprimirTurnos();
      }, tiempoEspera);
    } else {
      indicadorDeTurnos = "maquina";
      actualizarNumeroRonda();
      imprimirTurnos();
    }
  }
}

function mostrarTituloFinDelJuego() {
  let $visorRondas = document.querySelector(".visor-rondas");
  $visorRondas.value = "Fin del juego!";
}

function reiniciarDatos() {
  listaSecuenciaMaquina = [];
  listaSecuenciaUsuario = [];
  numeroDeRonda = 0;
}

function mostrarRecordAlcanzado() {
  let $recordUsuario = document.querySelector(".record-usuario");

  if (recordRonda === 0) {
    recordRonda = numeroDeRonda;
  } else if (recordRonda > 0 && recordRonda < numeroDeRonda) {
    recordRonda = numeroDeRonda;
  }

  $recordUsuario.textContent = `Récord: Ronda#${recordRonda}`;
}

function terminarJuego() {
  mostrarTituloFinDelJuego();
  mostrarBotonJugar();
  ocultarIndicadorTurnos();
  mostrarRecordAlcanzado();
  reiniciarDatos();
}

$botonJugar.addEventListener("click", () => {
  gestionarRondas();
  ocultarBotonJugar();
  mostrarIndicadorTurnos();

  setTimeout(() => {
    secuenciaMaquina();
  }, 0500);
});
