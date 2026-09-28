/*Kata 3.2 [Nivel Intermedio]: Validador de Movimientos según Pieza
(switch & default)
Objetivo: Utilizar la sentencia switch para ejecutar acciones distintas según el tipo de pieza de ajedrez
seleccionada por el jugador.
Tareas en kata3_2.js:
1. Crea una variable piezaSeleccionada con una figura Unicode (ej. '♞').
2. Evalúa la pieza con switch(piezaSeleccionada) describiendo la regla de movimiento para: ♔ (Rey), ♛
(Dama), ♖ (Torre), ♝ (Alfil), ♞ (Caballo) y ♟ (Peón).
3. Incluye de forma obligatoria el bloque default para manejar piezas no reconocidas o casillas vacías.
4. Asegúrate de colocar la sentencia break al final de cada caso.*/

const piezaSeleccionado = '♞';
let mensajeRegla ;

switch (piezaSeleccionado) {
    case '♔':
        mensajeRegla = "El Rey mueve una casilla en cualquier dirección.";
        break;
    case '♛':
        mensajeRegla = "La Dama mueve en cualquier dirección las casillas que quiera.";
        break;
    case '♖':
        mensajeRegla = 'La Torre se mueve en línea recta, horizontal o verticalmente';
        break;
    case '♝':
        mensajeRegla = 'El Alfil se mueve en diagonal';
        break;
    case '♞':
        mensajeRegla = "El Caballo mueve en forma de L y puede saltar piezas.";
        break;
    case '♟':
        mensajeRegla = "El Peón mueve una casilla hacia adelante.";
        break;
    default:
        mensajeRegla = 'pieza no reconocida o casilla vacia';
}
console.log(`Regla para${piezaSeleccionado}: ${mensajeRegla}`);