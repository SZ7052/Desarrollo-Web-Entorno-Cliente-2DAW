/*Kata 1.2 [Nivel Intermedio]: Figuras Unicode (♔, ♟, ♘, ♖, ♕) y Conversión
Explícita
Objetivo: Trabajar con caracteres Unicode de piezas de ajedrez y conversión explícita de cadenas a números
con Number().
Instrucciones: En kata1_2.js:
1. Guarda en constantes las figuras Unicode del Rey Blanco ('♔'), la Dama ('♕'), la Torre ('♖'), el Caballo ('♘') y
el Peón Negro ('♟').
2. Convierte explícitamente const casillasTexto = "64"; a número usando Number().
3. Muestra por consola las piezas Unicode y el número de casillas calculado.
*/

const ReyBlanco = '♔';
const LaDama= '♕';
const LaTorre = '♖';
const ElCaballo = '♘';
const ElPeonNegro = '♟';

const casillasTexto = "64";
const totalCasillas = Number(casillasTexto);
const casillasPorJugador = totalCasillas / 2;

console.log(`Tablero: ${totalCasillas} casillas (${casillasPorJugador} por bando).`);
console.log(`ReyBlanco = ${ReyBlanco} , LaDama = ${LaDama} , LaTorre = ${LaTorre}, 
ElCaballo = ${ElCaballo} ,ElPeonNegro = ${ElPeonNegro}`);