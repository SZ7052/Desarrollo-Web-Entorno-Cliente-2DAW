/*Kata 1.1 [Nivel Básico / Refuerzo]: Ficha de Datos del Jugador y Estado
Inicial
Objetivo: Declarar variables para almacenar el estado inicial de una partida e inspeccionar tipos con typeof y
piezas Unicode (♔, ♟).
Instrucciones: En un archivo kata1_1.js:
1. Declara NOMBRE_JUGADOR con tu nombre.
2. Declara piezasBlancas = 16; y esTurnoBlancas = true;.
3. Declara piezaSeleccionada; (sin valor -> undefined) y piezaCapturada = null;.
4. Muestra en consola el tipo de dato de cada variable usando typeof y Template Literals.*/ 

const NOMBRE_JUGADOR = "Shuai";
let piezasBlancas = 16;
let esTurnoBlancas = true;
let piezaSeleccionada;
let piezaCapturada = null;

console.log(`Jugador: ${NOMBRE_JUGADOR}(Tipo: ${typeof NOMBRE_JUGADOR})`);
console.log(`${piezasBlancas}(Tipo: ${typeof piezasBlancas})`);
console.log(`${esTurnoBlancas}(Tipo: ${typeof esTurnoBlancass})`);
console.log(`${piezaSeleccionada}(Tipo: ${typeof piezaSeleccionada})`);
console.log(`${piezaCapturada}(Tipo: ${typeof piezaCapturada})`);