/*Desafío 1: Módulo de Puntuación Material y Control de Turno (3
Puntos)
Escenario: En tu archivo desafio1.js, debes desarrollar la lógica para llevar el marcador de una partida de
ajedrez:
    1. Declara constantes con los valores de las piezas: PEON=1, CABALLO=3, ALFIL=3, TORRE=5, DAMA=9.
2. Declara variables para acumular los puntos de las Blancas y de las Negras inicializadas a 0.
3. Simula una secuencia de 4 capturas acumulando los puntos con asignación compuesta (+=).
4. Dado un número de jugada actual (ej. let jugada = 15;), calcula con el operador módulo (%) de quién es
el turno.
5. Muestra en la consola el informe completo utilizando exclusivamente Template Literals y comprueba los
tipos de datos con typeof.*/
// Requerimiento Desafío 1 - Estructura de salida requerida en consola:
// Puntuación Blancas: X pts | Puntuación Negras: Y pts
// Ventaja Material: Z pts
// Estado del Turno: Jugada 15 (Mueven Blancas ♔)




/*Desafío 2: Árbitro de Reglas Especiales y Coronación (3.5 Puntos)
Escenario: En tu archivo desafio2.js, programa el motor de toma de decisiones para validar reglas de
juego:
1. Evaluación de Enroque (if / else combinados): Declara las booleanas reyMovido, torreMovida y
enJaque. Un enroque solo es legal si el rey no se ha movido (!reyMovido), la torre tampoco (!torreMovida) y
no hay jaque (!enJaque).
2. Comportamiento por Pieza (switch): Dado el nombre de una pieza ('torre', 'caballo', 'peon', etc.),
imprime su rango de movimiento. Incluye obligatoriamente la sección default para manejar casillas vacías
o entradas inválidas.
3. Promoción de Peón (Operador Ternario): Dada la fila de destino de un peón (1 a 8), utiliza un
operador ternario para asignar la figura promocionada: si llega a la fila 8 (o fila 1 en negras) se transforma
en Dama ('♛' / '♕'), en caso contrario sigue siendo Peón.*/




/*Desafío 3: Generador Algorítmico y Buscador de Casillas 8x8 (3.5
Puntos)
Escenario: En tu archivo desafio3.js, implementa la iteración bidimensional del tablero:
1. Mediante dos bucles for anidados (filas de 8 a 1 y columnas de 'a' a 'h'), genera las 64 coordenadas
algebraicas.
2. Utiliza la fórmula de paridad (fila + colIndex) % 2 === 0 para determinar si la casilla es clara u oscura.
3. Almacena en un array las jugadas de una partida. Usa un bucle for...of para recorrerlo, saltando
comentarios con continue e interrumpiendo el recorrido con break cuando detectes la jugada final de jaque*/
