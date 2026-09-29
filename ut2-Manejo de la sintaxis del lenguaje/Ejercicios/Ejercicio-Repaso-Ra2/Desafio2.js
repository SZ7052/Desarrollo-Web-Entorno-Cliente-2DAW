/*Desafío 2: Árbitro de Reglas Especiales y Coronación (3.5 Puntos)
Escenario: En tu archivo desafio2.js, programa el motor de toma de decisiones para validar reglas de
juego:
1. Evaluación de Enroque (if / else combinados): Declara las booleanas reyMovido, torreMovida y
enJaque.
Un enroque solo es legal si el rey no se ha movido (!reyMovido), la torre tampoco (!torreMovida) y
no hay jaque (!enJaque).
2. Comportamiento por Pieza (switch): Dado el nombre de una pieza ('torre', 'caballo', 'peon', etc.),
imprime su rango de movimiento. Incluye obligatoriamente la sección default para manejar casillas vacías
o entradas inválidas.
3. Promoción de Peón (Operador Ternario): Dada la fila de destino de un peón (1 a 8), utiliza un
operador ternario para asignar la figura promocionada: si llega a la fila 8 (o fila 1 en negras) se transforma
en Dama ('♛' / '♕'), en caso contrario sigue siendo Peón.*/

let reyMovido = true;
let torreMovida = true;
let enJaque = true;
const Pieza = "torre";
let movimiento = "";
let enroque = "";

let filadestino = 8;
const Peón = (filadestino=== 1|| filadestino ===8) ? "('♛' / '♕')" : "Peón";

if (!reyMovido && !torreMovida && !enJaque) {
enroque = "Se puede hacer enroque";
}else {
    enroque = "No se puede hacer enroque";
}

switch (Pieza) {
    case "torre":
        movimiento = "La Torre se mueve en línea recta, horizontal o verticalmente.";
        break;
    case "rey":
        movimiento = "El Rey mueve una casilla en cualquier dirección.";
        break;
    case "dama":
        movimiento = "La Dama mueve en cualquier dirección las casillas que quiera.";
        break;
    case "alfil":
        movimiento = "El Alfil se mueve en diagonal.";
        break;
    case "caballo":
        movimiento = "El Caballo mueve en forma de L y puede saltar piezas.";
        break;
    case "peón":
        movimiento = "El Peón mueve una casilla hacia adelante.";
        break;
    default:
        movimiento = "pieza no reconocida o casilla vacia.";
}


console.log(`Transformación del Peón para fila destino: ${filadestino} es ${Peón}`);
console.log(`Comportamiento de la pieza : ${Pieza} : ${movimiento}`);
console.log(`Evalución de enroque : ${enroque}`);

