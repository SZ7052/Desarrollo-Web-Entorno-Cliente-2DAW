/*EJERCICIO 2: String — Generador de Titulares de Noticias del Torneo
Firma: formatearTitularPartida(cadenaNoticiaRaw, codigoECO)
Procesa y limpia una cadena de noticia en bruto recibida del servidor de noticias.
• Requisitos de Lógica:
 1. Elimina espacios en blanco sobrantes al inicio y final con .trim() y guarda en textoLimpio.
 2. Reemplaza todos los guiones bajos '_' por espacios ' ' usando .replaceAll().
 3. Convierte el titular a mayúsculas con .toUpperCase().
 4. Formatea el codigoECO asegurando que tenga 4 caracteres (rellenando con 'E' a la izquierda con .padStart()).
• Retorno Esperado:
 Devuelve la cadena con formato: "[ECO_FORMAT] TITULAR_MAYUSCULAS" (ej. "[E0B2] CARLSEN VENCE A
NEPOMNIACHTCHI").*/