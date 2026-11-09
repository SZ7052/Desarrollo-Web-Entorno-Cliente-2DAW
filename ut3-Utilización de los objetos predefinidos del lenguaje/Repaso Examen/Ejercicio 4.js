/*EJERCICIO 4: BOM & Navegador — Visor Web de Retransmisión en Directo
Firma: configurarTableroRetransmision(urlRetransmisionPrueba)
Configura las opciones de visualización según la URL del evento y las capacidades de la pantalla.
• Requisitos de Lógica:
 1. Verifica que urlRetransmisionPrueba contenga la sección '/live/' usando .includes().
 2. Comprueba el estado de conexión del usuario mediante navigator.onLine.
 3. Clasifica la pantalla con window.innerWidth: 'DESKTOP' (>=1024px), 'TABLET' (>=768px), o 'MOBILE'.
• Retorno Esperado:
 Devuelve un objeto con la estructura: { esValidaUrl: true, esOnline: true, modoVisor: 'DESKTOP' }
*/




/**
 * EJERCICIO 4 (Bloque 04: BOM, window, location, navigator)
 * @param {string} [urlRetransmisionPrueba] - URL opcional para pruebas de inspecciÃ³n.
 * @returns {Object} Objeto { partidaId, esOnline, modoVisor }.
 */


const r4 = configurarTableroRetransmision("/live?partidaId=FIDE_99");

function configurarTableroRetransmision(urlRetransmisionPrueba) {



    return { esValidaUrl, esOnline, modoVisor };
}
