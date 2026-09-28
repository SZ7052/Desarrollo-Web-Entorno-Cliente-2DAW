/*Kata 3.3 [Reto de Ampliación]: Promoción del Peón con Operador
Ternario y DOM
Objetivo: Detectar la coronación de un peón que alcanza la fila 8 e interactuar con el DOM utilizando la
sintaxis compacta del operador ternario.
Tareas en kata3_3.js:
1. Define la fila alcanzada por un peón blanco: const filaAlcanzada = 8;.
2. Evalúa con el operador ternario si el peón ha promocionado: const figuraFinal = (filaAlcanzada === 8) ? '♕'
: '♙';.
3. Crea una función promocionar() que reemplace el texto de la casilla en el HTML usando textContent.
4. Asigna la acción a un botón mediante addEventListener('click', promocionar).
*/

const filaAlcanzada = 8;
