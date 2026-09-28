/*Kata 4.3 [Reto de Ampliación]: Procesador de Partidas PGN con for...of,
break y continue
Objetivo: Iterar sobre un array de movimientos de ajedrez usando for...of, omitiendo comentarios con
continue e interrumpiendo el flujo con break ante un jaque mate o movimiento ilegal.
Instrucciones: En un archivo kata4_3.js:
1. Crea un array de jugadas en notación algebraica: const HISTORIAL = ['e4', 'e5', 'Nf3', '{comentario}',
'Nc6', 'Bc4', 'Bc5', 'Qxf7#'];.
2. Recorre el historial usando for (const jugada of HISTORIAL).
3. Si la jugada empieza por '{', usa continue para saltar la iteración sin procesarla.
4. Si la jugada contiene '#' (jaque mate), imprímela, notifica la victoria en pantalla usando textContent y
usa break para terminar el bucle inmediatamente.*/

