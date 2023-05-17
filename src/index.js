const $botonJugar = document.querySelector(".boton-jugar");

let juegoComenzado = false;
let numeroDeRonda = 0;
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
  $botonJugar.id = "";
  $botonJugar.disabled = false;
}

function mostrarIndicadorTurnos() {
  const $contenedorIndicadorTurnos = document.querySelector(".contenedor-indicador-turnos");
  $contenedorIndicadorTurnos.id = "";
}

function actualizarTurnos() {
  const $indicadorTurnos = document.querySelector(".indicador-turnos");

  if (indicadorDeTurnos === "maquina") {
    $indicadorTurnos.textContent = "Turno de la máquina!";
  } else {
    $indicadorTurnos.textContent = "Es tu turno!";
  }
}

function gestionarRondas() {
  if (juegoComenzado === false) {
    juegoComenzado = true;
    numeroDeRonda++;

    actualizarIndicadorTurnos();
    actualizarNumeroRonda();
    actualizarTurnos();
  } else {
    numeroDeRonda++;

    if (indicadorDeTurnos === "maquina") {
      let tiempoEspera = listaSecuenciaMaquina.length * 1000;
      setTimeout(() => {
        actualizarIndicadorTurnos();
        actualizarNumeroRonda();
        actualizarTurnos();
      }, tiempoEspera);
    } else {
      let tiempoEspera = listaSecuenciaMaquina.length * 1000;
      setTimeout(() => {
        actualizarIndicadorTurnos();
        actualizarNumeroRonda();
        actualizarTurnos();
      }, tiempoEspera);
    }
  }
}

function actualizarIndicadorTurnos() {
  if (indicadorDeTurnos === "") {
    indicadorDeTurnos = "maquina";
  } else if (indicadorDeTurnos === "maquina") {
    let tiempoEspera = secuenciaMaquina.length * 1000;

    setTimeout(() => {
      indicadorDeTurnos = "usuario"
    }, tiempoEspera);
  } else if (indicadorDeTurnos === "usuario") {
    indicadorDeTurnos = "maquina";
  }
}

$botonJugar.addEventListener("click", () => {
  gestionarRondas();
  ocultarBotonJugar();
  mostrarIndicadorTurnos();

  setTimeout(() => {
    secuenciaMaquina();
  }, 0500);
});
