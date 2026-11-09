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