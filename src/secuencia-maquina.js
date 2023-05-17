let obtenerNumeroAleatorio = () => {
  let cantidadColores = Object.keys(coloresTablero).length;

  return Math.floor(Math.random() * cantidadColores);
};

function obtenerColorAleatorio() {
  let numeroAleatorio = obtenerNumeroAleatorio();

  if (numeroAleatorio === 0) {
    return coloresTablero.$colorVerde;
  } else if (numeroAleatorio === 1) {
    return coloresTablero.$colorRojo;
  } else if (numeroAleatorio === 2) {
    return coloresTablero.$colorAmarillo;
  } else if (numeroAleatorio === 3) {
    return coloresTablero.$colorAzul;
  }
}

function guardarColorMaquinaEnLista(colorObtenido) {
  listaSecuenciaMaquina.push(colorObtenido);
}

function mostrarColoresMaquina(colorMaquina) {
  if (colorMaquina === coloresTablero.$colorVerde) {
    colorMaquina.id = "verde-iluminado";
  } else if (colorMaquina === coloresTablero.$colorRojo) {
    colorMaquina.id = "rojo-iluminado";
  } else if (colorMaquina === coloresTablero.$colorAmarillo) {
    colorMaquina.id = "amarillo-iluminado";
  } else if (colorMaquina === coloresTablero.$colorAzul) {
    colorMaquina.id = "azul-iluminado";
  }

  setTimeout(() => {
    colorMaquina.id = "";
  }, 500);
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
  actualizarIndicadorTurnos();
}
