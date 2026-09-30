/*Declara constantes para asignar puntos
a las piezas del ajedrez */

const PEON = 1,
    CABALLO = 3,
    ALFIL = 3,
    TORRE = 5,
    DAMA = 9;

/*Declara la variables puntosBlancas y puntosNegras para asignar
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

/*Declara la variable jugada para simular el numero de la jugada en la partida*/

let jugada = 1;

/*Indica el turno de cada jugador según el numero de jugada*/

/*Se asigna el turno a cada uno mediante la condicional if
* en el que se calcula el modulo de 2 de la "jugada" si es de resto 0
* es turno de negras y el resto de jugadas turno de blancas */

/*Imprime por consola que turno y que jugada es*/
if (jugada % 2 === 0) {
    console.log(`Turno de negras (Jugada -> ${jugada})`);
} else {
    console.log(`Turno de blancas (Jugada -> ${jugada})`);
}

/*Intento de hacer un programa funcional*/
jugada += 1;

/*Da información de los puntos que tiene las blancas y negras en total */

/*Indica por consola también el tipo de dato que es la variable "puntosBlancas":{Number} y "puntosNegras":{Number}*/
console.log(
    `Puntos de las Blancas: ${puntosBlancas} - Tipo de dato: ${typeof puntosBlancas}`,
);

console.log(
    `Puntos de las Negras: ${puntosNegras} - Tipo de dato: ${typeof puntosNegras}`,
);

/*Declara la variable para el calculo posterior*/

let ventajaMaterial = 0;

/*Da información de que ventaja hay en la partida */

/*El calculo que aplica tiene la logica de si la "ventajaMaterial "
* diese numero positivo seria ventaja para las Blancas y en caso contrario
* para las Negras .
* esto daria lugar a otras configuraciones como si tiene ventaja las Blancas
* imprimir un texto por consola o etc*/

console.log(
    `Ventaja material : ${(ventajaMaterial = puntosBlancas - puntosNegras)}`,
);
