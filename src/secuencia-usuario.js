function guardarColorUsuario(color) {
  listaSecuenciaUsuario.push(color);
  console.log("La secuencia del usuario:", listaSecuenciaUsuario); 
  // Estos console.log son únicamente para comprobar que se guarde correctamente el color
  console.log("La secuencia de la máquina:", listaSecuenciaMaquina); 
  // Estos console.log son únicamente para comprobar que se guarde correctamente el color
}

Object.values(coloresTablero).forEach((color) => {
  color.addEventListener("click", () => {
    if(indicadorDeTurnos === "usuario"){
      guardarColorUsuario(color);
    }
  });
});

