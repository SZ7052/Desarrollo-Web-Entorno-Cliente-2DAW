/*BLOQUE 04: Generador de Malla de Sensores de Radiación 5x8 (3,5 Puntos)
Una planta solar monitoriza sus paneles usando una cuadrícula de 5 filas por 8 columnas de sensores.
Se les proporciona la siguiente plantilla base en JavaScript para construir la matriz:
const FILAS = 5;
const COLS = 8;
const SIMBOLO_ACTIVO = "#";
const SIMBOLO_INACTIVO = ".";
let mapaSensores = "";
// Desarrollar el código aquí...
console.log(mapaSensores);
Ejercicio 4.1: Renderizado de la Cuadrícula 5x8 (3,5 Puntos)
• Bucles Anidados (2,0 pts): Utiliza dos bucles for anidados (filas de 0 a 4 y columnas de 0 a 7) para recorrer las
40 celdas de la malla.
• Lógica de Paridad Módular (1,5 pts): Determina si una celda está activa ("#") o inactiva (".") evaluando si la
suma del índice de fila y columna es par ((f + c) % 2 === 0). Acumula la cadena de texto separando celdas con
espacios y añadiendo un salto de línea (\n) al final de cada fila.
• Instrucción de Salida: Muestra el resultado acumulado por consola ejecutando console.log(mapaSensores)*/