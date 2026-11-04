/*Ejercicio 2: Guardado de Tablero FEN, Detección de Red y Cookie FIDE
(localStorage + document.cookie + navigator)
Durante el transcurso de una partida de ajedrez, es fundamental guardar el estado actual del tablero en formato FEN
de forma permanente, registrar las preferencias de tema del usuario en una cookie y comprobar si hay conexión a
Internet.
Crea la función sincronizarEstadoTablero(cadenaFEN, temaVisual) que realice el siguiente proceso:
1. Auditoría de Red: Comprueba el estado de conexión con navigator.onLine. Si no hay conexión (false), debe mostrar
un aviso con alert() o devolver un mensaje de advertencia.
2. Persistencia Local Segura: Estructura un objeto con la posición actual { fen: cadenaFEN.trim(), timestamp:
Date.now(), fechaLegible: new Date().toLocaleString('es-ES') }. Guárdalo en localStorage bajo la clave
'fide_partida_guardada' empleando JSON.stringify() dentro de un bloque try...catch para prevenir excepciones de cuota
(QuotaExceededError).
3. Gestión de Cookie: Escribe una cookie en document.cookie con la preferencia de tema (fide_theme=temaVisual;
max-age=604800; path=/) aplicando encodeURIComponent() sobre el valor.
4. Retorno: Recupera el objeto recién guardado con localStorage.getItem(), des-serialízalo con JSON.parse() y
devuélvelo.
*/