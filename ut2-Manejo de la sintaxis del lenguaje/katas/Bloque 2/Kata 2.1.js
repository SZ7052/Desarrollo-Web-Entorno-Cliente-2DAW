/*Kata 2.1 [Nivel Básico / Refuerzo]: Calculadora de Ventaja Material
(Aritméticos y Asignación)
Objetivo: Calcular la puntuación total de piezas capturadas y la diferencia de material usando
operadores aritméticos y asignación compuesta (+=, -=).
    Instrucciones: En un archivo kata2_1.js:
1. Declara constantes con el valor estándar de cada pieza: PEON = 1, CABALLO = 3, ALFIL = 3, TORRE =
    5, DAMA = 9.
2. Inicializa las variables de puntuación acumulada: puntosBlancas = 0 y puntosNegras = 0.
3. Simula la captura de piezas sumando puntos con +=: las blancas capturan 1 Dama (♛) y 2 Peones
(♟); las negras capturan 1 Torre (♖) y 1 Caballo (♘).
4. Calcula la diferencia de ventaja material (puntosBlancas - puntosNegras).
5. Muestra en consola los totales y la ventaja formateados mediante Template Literals.*/


const PEON = 1;
const CABALLO = 3;
const ALFIL = 3;
const TORRE = 5;
const DAMA = 9;

let puntosBlancas = 0;
let puntosNegras = 0;

puntosBlancas += DAMA + 2*PEON ;
puntosNegras += TORRE + CABALLO;

let diferencia = 0;

diferencia = puntosBlancas - puntosNegras;

console.log(`puntos totales Blancas: ${puntosBlancas},
puntos totales Negras: ${puntosNegras}`);
console.log(`diferencia: ${diferencia} | tiene las Blancas una ventaja de: ${diferencia} puntos`);