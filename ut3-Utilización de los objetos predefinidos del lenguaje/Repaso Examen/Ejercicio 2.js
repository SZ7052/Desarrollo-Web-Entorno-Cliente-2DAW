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

/**
 * EJERCICIO 2 (Bloque 02: String)
 * @param {string} cadenaNoticiaRaw - Cadena de texto bruta con el noticia.
 * @param {string} codigoECO - 4 caracteres (rellenando con 'E' a la izquierda )
 * @returns {string|null} Cadena formateada "[APERTURA] RESUMEN_EN_MAYUSCULAS" o null si la entrada es invÃ¡lida.
 */

const r2 = formatearTitularPartida("carlsen - nakamura en ronda final", "defensa siciliana");
console.log(r2);

function formatearTitularPartida(cadenaNoticiaRaw, codigoECO) {

    const textoLimpio= cadenaNoticiaRaw.trim().replaceAll("_"," ").toLowerCase();

    const ecoFmt

    return `[${ecoFmt}] ${textoLimpio}`;
}