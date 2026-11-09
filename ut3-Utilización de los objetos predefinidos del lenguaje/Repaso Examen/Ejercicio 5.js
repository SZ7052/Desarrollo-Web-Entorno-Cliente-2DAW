/*EJERCICIO 5: Storage & Cookies — Guardado de Estudios de Variantes
Firma: guardarEstudioAjedrez(idEstudio, estudioDataObj, duracionDiasCookie)
Permite guardar y mantener en el almacenamiento local del cliente los estudios del jugador.
• Requisitos de Lógica:
 1. Serializa estudioDataObj en JSON mediante JSON.stringify().
 2. Guarda el estudio en localStorage bajo la clave `estudio_${idEstudio}` dentro de un bloque try...catch.
 3. Guarda la clave `ultimo_estudio_id` en sessionStorage.
 4. Fija la cookie `estudio_activo=idEstudio; max-age=SEGUNDOS; path=/`.
• Retorno Esperado:
 Devuelve true si el guardado se completa con éxito, o false si ocurre algún fallo.*/