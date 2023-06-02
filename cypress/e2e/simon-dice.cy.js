const URL = "http://192.168.1.41:8080/docs/";

context("Simón Dice V2", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  describe("Comprueba visibilidad", () => {
    it("Comprueba que la cabecera de la página esté visible", () => {
      cy.get(".cabecera").should("be.visible");
    });

    it("Comprueba que el tablero esté visible", () => {
      cy.get(".tablero").should("be.visible");
    });

    it("Comprueba que el pie de la página esté visible", () => {
      cy.get(".record-usuario").should("be.visible");
    });
  });

  describe("Prueba inicio juego", () => {
    it("Presiona botón jugar", () => {
      cy.get(".boton-jugar").should("be.visible").click();
    });

    it("Comprueba que el título de la ronda cambie al darle click a botón jugar", () => {
      cy.get(".visor-rondas").should("have.value", "Ronda #0");
      cy.get(".boton-jugar").should("be.visible").click();
      cy.get(".visor-rondas").should("have.value", "Ronda #1");
    });

    it("Comprueba que el botón jugar desaparezca al hacer click en botón jugar", () => {
      cy.get(".boton-jugar").should("be.visible").click();
      cy.get(".boton-jugar").should("not.be.visible");
    });

    it("Comprueba que se muestre el indicador de turnos luego de dar click a botón jugar", () => {
      cy.get(".boton-jugar").should("be.visible").click();
      cy.get(".indicador-turnos").should("be.visible");
    });

    it("Comprueba que el indicador de turnos indique el turno de la máquina", () => {
      cy.get(".boton-jugar").should("be.visible").click();
      cy.get(".indicador-turnos").should("have.text", "Turno de la máquina!");
    });

    it("Comprueba que luego del turno de la máquina viene el turno del usuario", () => {
      cy.get(".boton-jugar").should("be.visible").click();
      cy.get(".indicador-turnos").should("have.text", "Turno de la máquina!");
      cy.get(".indicador-turnos").should("have.text", "Es tu turno!");
    });

    it("Comprueba que la máquina haya elegido un color", () => {
      cy.get(".boton-jugar").should("be.visible").click();
      cy.get(".cuadro-tablero").should("have.length", 4);
      cy.get(".cuadro-tablero").then(($cuadroTablero) => {
        cy.wrap($cuadroTablero).should(($cuadro) => {
          const idCuadro = $cuadro.attr("id");

          if (idCuadro === "verde-iluminado") {
            cy.wrap($cuadro).should("have.id", "verde-iluminado");
          } else if (idCuadro === "rojo-iluminado") {
            cy.wrap($cuadro).should("have.id", "rojo-iluminado");
          } else if (idCuadro === "amarillo-iluminado") {
            cy.wrap($cuadro).should("have.id", "amarillo-iluminado");
          } else if (idCuadro === "azul-iluminado") {
            cy.wrap($cuadro).should("have.id", "azul-iluminado");
          }
        });
      });
    });
  });
});
