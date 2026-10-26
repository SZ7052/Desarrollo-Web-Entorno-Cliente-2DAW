/*Ejercicio 1: Reloj de Sala Blitz con Incremento Fischer (Date + setInterval/clearInterval)
Desarrolla la función crearRelojAjedrezBlitz(tiempoInicialSeg, incrementoSeg, callbackActualizar, callbackFin).
• Sincronización de Tiempo Real (Date.now()): Al iniciar el turno, registra la marca de tiempo de inicio tInicio = Date.now().
• Ticker Asíncrono (setInterval): Configura un temporizador con intervalo de 100ms que calcule en cada pulso el tiempo
consumido real tConsumido = Math.floor((Date.now() - tInicio) / 1000) y determine los segundos restantes segRestantes =
tiempoInicialSeg - tConsumido.
• Formateo Digital (Date / padStart): Formatea los segundos restantes a la cadena digital 'MM:SS' asegurando 2 dígitos en
minutos y segundos mediante String().padStart(2, '0').
• Finalización (clearInterval): Si segRestantes <= 0, detén inmediatamente el reloj con clearInterval() e invoca
callbackFin('¡Caída de Bandera!').
• Función de Cierre de Turno: La función debe retornar un objeto con el método detenerYSumarIncremento() que detenga
el intervalo activo, sume el incrementoSeg al tiempo restante y devuelva la nueva marca de tiempo formateada con new
Date().toLocaleTimeString('es-ES').
// Estructura de prueba en consola:
const reloj = crearRelojAjedrezBlitz(180, 3, (tiempoTxt) => console.log(), console.warn);
// Resultado esperado a los 2 segundos: '02:58'
// Al llamar a reloj.detenerYSumarIncremento() -> Detiene temporizador y devuelve la hora local
formateada.*/

function crearRelojAjedrezBlitz(tiempoInicialSeg, incrementoSeg, callbackActualizar, callbackFin) {
    const tInicio = Date.now();
    let segRestantes = tiempoInicialSeg;

    const ticker_asincrono = setInterval(() => {
        const tConsumido = Math.floor((Date.now() - tInicio) / 1000);
        segRestantes = tiempoInicialSeg - tConsumido;

        if (segRestantes <= 0) {
            clearInterval(ticker_asincrono);
            segRestantes = 0;
            callbackFin('¡Caída de Bandera!');
            return;
        }

        const mins = Math.floor(segRestantes / 60).toString().padStart(2, '0');
        const segs = (segRestantes % 60).toString().padStart(2, '0');
        const tiempoTxt = `${mins}:${segs}`;

        callbackActualizar(tiempoTxt);
    }, 100);

    return {
        detenerYSumarIncremento() {
            clearInterval(ticker_asincrono);
            segRestantes += incrementoSeg;
            return new Date().toLocaleTimeString('es-ES');
        }
    };
}

const reloj = crearRelojAjedrezBlitz(
    180,
    3,
    (tiempoTxt) => console.log("Tiempo actual:", tiempoTxt),
    (msg) => console.warn(msg)
);

setTimeout(() => {
    const horaCierre = reloj.detenerYSumarIncremento();
    console.log("Turno cerrado a las:", horaCierre);
}, 2000);