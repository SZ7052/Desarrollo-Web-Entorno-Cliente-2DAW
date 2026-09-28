/*Kata 4.1 [Nivel Básico / Refuerzo]: Contador de Movimientos y Regla de
las 50 Jugadas (Bucle while / do-while)
Objetivo: Simular mediante un bucle while o do...while el avance de turnos de una partida, controlando el
límite de 50 jugadas sin capturas antes de declarar tablas.
Instrucciones: Crea un archivo kata4_1.js:
1. Declara una variable jugadasSinCaptura = 0; y la constante MAX_JUGADAS = 50;.
2. Mediante un bucle while, incrementa jugadasSinCaptura de 1 en 1 simulando el paso de los turnos.
3. Imprime por consola cada turno formateado con Template Literals (ej. `Turno ${jugadasSinCaptura}: sin
peones ni capturas`).
4. Al alcanzar el límite de 50, detén la ejecución e imprime un mensaje de tablas de partida.*/

let jugadasSinCaptura = 0;
const MAX_JUGADAS = 50;

while (jugadasSinCaptura < MAX_JUGADAS){
    jugadasSinCaptura++;
    console.log(`jugadasSinCaptura${jugadasSinCaptura}:Movimiento sin captura`);
}

if (jugadasSinCaptura === MAX_JUGADAS){
    console.log(`Maximo de jugadaas`);
}