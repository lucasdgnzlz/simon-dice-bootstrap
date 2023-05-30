function guardarColorUsuario(color) {
  listaSecuenciaUsuario.push(color);
}

function mostrarColorElegidoUsuario(cuadroElegido) {
  if (cuadroElegido.classList.contains("cuadro-verde")) {
    cuadroElegido.id = "verde-iluminado";
  } else if (cuadroElegido.classList.contains("cuadro-rojo")) {
    cuadroElegido.id = "rojo-iluminado";
  } else if (cuadroElegido.classList.contains("cuadro-amarillo")) {
    cuadroElegido.id = "amarillo-iluminado";
  } else if (cuadroElegido.classList.contains("cuadro-azul")) {
    cuadroElegido.id = "azul-iluminado";
  }

  setTimeout(() => {
    cuadroElegido.id = "";
  }, 0500);
}

function validarColorCorrecto() {
  let ultimoColorUsuario = listaSecuenciaUsuario[listaSecuenciaUsuario.length - 1];
  let ultimoColorMaquina = listaSecuenciaMaquina[listaSecuenciaUsuario.length - 1];

  if (ultimoColorMaquina === ultimoColorUsuario) {
    if (listaSecuenciaUsuario.length === listaSecuenciaMaquina.length) {
      listaSecuenciaUsuario = [];
      gestionarRondas();

      setTimeout(function () {
        secuenciaMaquina();
      }, 600);
    }
  } else {
    indicadorDeTurnos = "";
    terminarJuego();
  }
}

Object.values(cuadrosTablero).forEach((cuadro) => {
  cuadro.addEventListener("click", () => {
    if (indicadorDeTurnos === "usuario") {
      guardarColorUsuario(cuadro);
      mostrarColorElegidoUsuario(cuadro);
      validarColorCorrecto();
    }
  });
});
