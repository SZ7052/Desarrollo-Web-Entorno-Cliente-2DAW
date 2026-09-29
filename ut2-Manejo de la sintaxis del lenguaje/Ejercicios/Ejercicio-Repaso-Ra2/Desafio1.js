/*Desafío 1: Módulo de Puntuación Material y Control de Turno (3
Puntos)
Escenario: En tu archivo desafio1.js, debes desarrollar la lógica para llevar el marcador de una partida de
ajedrez:
1. Declara constantes con los valores de las piezas: PEON=1, CABALLO=3, ALFIL=3, TORRE=5, DAMA=9.
2. Declara variables para acumular los puntos de las Blancas y de las Negras inicializadas a 0.
3. Simula una secuencia de 4 capturas acumulando los puntos con asignación compuesta (+=).
4. Dado un número de jugada actual (ej. let jugada = 15;), calcula con el operador módulo (%) de quién es
el turno.
5. Muestra en la consola el informe completo utilizando exclusivamente Template Literals y comprueba los
tipos de datos con typeof.*/
// Requerimiento Desafío 1 - Estructura de salida requerida en consola:
// Puntuación Blancas: X pts | Puntuación Negras: Y pts
// Ventaja Material: Z pts
// Estado del Turno: Jugada 15 (Mueven Blancas ♔)

const PEON=1;
const CABALLO=3;
const ALFIL=3;
const TORRE=5;
const DAMA=9;

let puntosBlancas = 0;
let puntosNegras  = 0;
let jugada = 15;
let turno = "";
let ventaja=0;

puntosBlancas += PEON + CABALLO + ALFIL + TORRE;
puntosNegras += CABALLO + ALFIL + TORRE;

ventaja = puntosBlancas - puntosNegras;

if (jugada % 2 == 0){
turno = 'Mueven Negras';
}else{
    turno = 'Mueven Blancas';
}

console.log(`Puntuación Blancas: ${puntosBlancas} (${typeof puntosBlancas}) pts |  Puntuación Negras : ${puntosNegras} (${ typeof puntosNegras}) pts`);
console.log(`Ventaja Material: ${ventaja} (${typeof ventaja}) pts`);
console.log(`Estado del Turno: Jugada ${jugada} (${typeof jugada}) (${turno} (${typeof turno}))`);







