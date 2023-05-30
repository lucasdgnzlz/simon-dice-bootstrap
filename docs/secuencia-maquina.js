let obtenerNumeroAleatorio = () => {
  let cantidadColores = Object.keys(cuadrosTablero).length;

  return Math.floor(Math.random() * cantidadColores);
};

function obtenerColorAleatorio() {
  let numeroAleatorio = obtenerNumeroAleatorio();

  if (numeroAleatorio === 0) {
    return cuadrosTablero.$cuadroVerde;
  } else if (numeroAleatorio === 1) {
    return cuadrosTablero.$cuadroRojo;
  } else if (numeroAleatorio === 2) {
    return cuadrosTablero.$cuadroAmarillo;
  } else if (numeroAleatorio === 3) {
    return cuadrosTablero.$cuadroAzul;
  }
}

function guardarColorMaquinaEnLista(colorObtenido) {
  listaSecuenciaMaquina.push(colorObtenido);
}

function mostrarColoresMaquina(colorMaquina) {
  if (indicadorDeTurnos === "maquina") {
    if (colorMaquina === cuadrosTablero.$cuadroVerde) {
      colorMaquina.id = "verde-iluminado";
    } else if (colorMaquina === cuadrosTablero.$cuadroRojo) {
      colorMaquina.id = "rojo-iluminado";
    } else if (colorMaquina === cuadrosTablero.$cuadroAmarillo) {
      colorMaquina.id = "amarillo-iluminado";
    } else if (colorMaquina === cuadrosTablero.$cuadroAzul) {
      colorMaquina.id = "azul-iluminado";
    }

    setTimeout(() => {
      colorMaquina.id = "color-vanilla";
    }, 300);
  }
}

function gestionarColoresMaquina() {
  for (let i = 0; i < listaSecuenciaMaquina.length; i++) {
    let color = listaSecuenciaMaquina[i];
    const retrasoEnMilisegundos = (i + 1) * 1000;

    setTimeout(() => {
      mostrarColoresMaquina(color);
    }, retrasoEnMilisegundos);
  }
}

function secuenciaMaquina() {
  let colorObtenido = obtenerColorAleatorio();
  guardarColorMaquinaEnLista(colorObtenido);
  gestionarColoresMaquina();

  setTimeout(() => {
    gestionarActualizacionesTurnos();
  }, 780);
}
