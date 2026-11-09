/*EJERCICIO 3: Date — Control de Vigencia de Licencias FIDE
Firma: evaluarLicenciaArbitro(fechaEmisionIso, vigenciaAnos, fechaControlIso)
Verifica la caducidad y vigencia de las tarjetas de arbitraje internacional.
• Requisitos de Lógica:
 1. Crea objetos Date a partir de fechaEmisionIso y fechaControlIso.
 2. Calcula la fecha de expiración sumando vigenciaAnos a la fecha de emisión.
 3. Compara en milisegundos si fechaControlIso sobrepasa la expiración para determinar si está caducada.
 4. Formatea la fecha de expiración en español con .toLocaleDateString('es-ES').
• Retorno Esperado:
 Devuelve un objeto con la estructura: { esVigente: true, fechaExpiracionStr: "15/10/2028" }*/

/**
 * EJERCICIO 3 (Bloque 03: Date)
 * @param {string} fechaEmisionIso - Cadena de fecha ISO (ej. "2026-01-15T10:00:00Z").
 * @param {number} diasValidez - NÃºmero entero de dÃ­as de validez de la licencia.
 * @returns {Object|null} Objeto { vigente, fechaCaducidadMs, fechaCaducidadFormat } o null si la fecha/dÃ­as son invÃ¡lidos.
 */


const r3 = evaluarLicenciaArbitro("2026-01-01T00:00:00Z", 365, "2027-01-01T00:00:00Z");
console.log(r3);


function evaluarLicenciaArbitro(fechaEmisionIso, vigenciaAnos, fechaControlIso)  {





    return {
        esVigente: esVigente,
        fechaExpiracionStr: fechaenformatoEspanol
    };
}