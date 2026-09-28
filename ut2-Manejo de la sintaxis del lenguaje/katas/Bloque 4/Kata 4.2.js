/*Kata 4.2 [Nivel Intermedio]: Recorrido de la Matriz 8x8 del Tablero
(Bucles Anidados for)
Objetivo: Utilizar dos bucles for anidados para iterar sobre las 8 filas y 8 columnas del tablero de ajedrez,
calculando coordenadas algebraicas y alternancia de colores.
Instrucciones: En un archivo kata4_2.js:
1. Define un array con las columnas: const COLUMNAS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];.
2. Usa un bucle exterior para recorrer las filas (de 8 a 1) y un bucle interior para las columnas (de 0 a 7).
3. Calcula si la casilla es clara u oscura con la expresión (fila + columnaIndex) % 2 === 0.
4. Muestra en la consola la coordenada completa (ej. e4) y su color correspondiente.*/
const  COLUMNAS =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

