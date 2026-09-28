/*Kata 2.2 [Nivel Intermedio]: Validador de Turnos y Paridad (% e
Igualdad Estricta ===)
Objetivo: Determinar a qué jugador le corresponde mover según el número de jugada actual utilizando
el operador resto (%) y comparaciones estrictas.
    Instrucciones: En un archivo kata2_2.js:
1. Declara la variable numeroJugada = 7.
2. Evalúa si la jugada es impar con numeroJugada % 2 !== 0 para determinar si es turno de Blancas.
3. Compara mediante operadores relacionales (>, <) si las Blancas superan en más de 3 puntos a las
Negras.
4. Muestra en consola mensajes claros evaluando si el turno es válido y si la ventaja es significativa.*/

let numeroJugada = 7;

if(numeroJugada % 2 !== 0){
    console.log(`turno de Blancas`)
}

const puntosBlancas = 11;
const puntosNegras = 8;
const ventajaClara = (puntosBlancas - puntosNegras) >= 3;
console.log(`ventaja : ${ventajaClara}`);