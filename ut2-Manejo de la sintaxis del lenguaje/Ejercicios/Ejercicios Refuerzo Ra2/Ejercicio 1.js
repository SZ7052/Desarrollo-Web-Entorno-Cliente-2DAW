/*Ejercicio 1 [Integrador]: Validador de Material y Estado de Enroque
Enunciado: Un jugador blanco tiene 1 Rey (♔), 1 Torre (♖) y 2 Peones (♙). El rival negro tiene 1 Rey (♚)
y 1 Dama (♛).
1. Declara constantes con los valores materiales: Peón=1, Torre=5, Dama=9.
2. Calcula el total de puntos de cada bando usando operadores aritméticos.
3. Usa un operador ternario para determinar qué bando tiene ventaja material y guárdalo en una
variable mensajeVentaja.
4. Mediante una estructura if con operadores lógicos (&&, !), verifica si las blancas pueden enrocar
(condiciones: reyMovido === false, torreMovida === false y enJaque === false).*/

const Peón=1;
const Torre=5;
const Dama=9;

let Blancas=(2*Peón) + Torre;
let Negras = Dama;

let reyMovido = false;
let torreMovido = false;
let enJaque = false;

let enroque;

let mensajeVentaja = Blancas > Negras ? "Blancas tiene la Ventaja" : "Negras tiene la Ventaja";

if(!reyMovido===false && !torreMovido===false && !enJaque===false ){
    enroque = "No se puede enrocar";
}else {
    enroque = "Se puede enrocar";
}

console.log(mensajeVentaja);
console.log(enroque);