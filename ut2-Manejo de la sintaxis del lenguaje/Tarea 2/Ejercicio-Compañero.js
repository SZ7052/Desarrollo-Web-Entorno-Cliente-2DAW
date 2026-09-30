/*Declara constantes para asignar puntos
a las piezas del ajedrez */

const PEON = 1,
    CABALLO = 3,
    ALFIL = 3,
    TORRE = 5,
    DAMA = 9;

/*Declara la variable let para asignar
* los puntos que tiene el jugador de piezas blancas
* y negras al comer las piezas anteriores*/

let puntosBlancas = 0,
    puntosNegras = 0;
/*Aqui simula los piezas que han comido cada jugador;
* en este caso las Blancas tiene al PEON y TORRE
* y las Negras tiene al CABALLO , ALFIL Y DAMA */

/*Obtiene el calculo total de puntuación que tiene
* las Blancas y Negras.
* Con la ayuda de += */

puntosBlancas += PEON;
puntosNegras += CABALLO;
puntosNegras += ALFIL;
puntosBlancas += TORRE;
puntosNegras += DAMA;


let jugada = 1;

if (jugada % 2 === 0) {
    console.log("Turno de blancas (Jugada -> ${jugada})");
} else {
    console.log(`Turno de blancas (Jugada -> ${jugada})`);
}
jugada += 1;

console.log(
    `Puntos de las Blancas: ${puntosBlancas} - Tipo de dato: ${typeof puntosBlancas}`,
);

console.log(
    `Puntos de las Negras: ${puntosNegras} - Tipo de dato: ${typeof puntosNegras}`,
);

let ventajaMaterial = 0;

console.log(
    `Ventaja material : ${(ventajaMaterial = puntosBlancas - puntosNegras)}`,
);