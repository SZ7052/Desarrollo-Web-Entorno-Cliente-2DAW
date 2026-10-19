/*Ejercicio 1: Sanitizador de Datos de Torneo y Cálculo de Performance FIDE
Escenario: En la plataforma de ajedrez web recibimos cadenas con resúmenes de torneos introducidas por los usuarios.
A menudo contienen espacios accidentales, mezclas de mayúsculas/minúsculas y números en formato texto que
debemos validar e interpretar.
Crea la función procesarResumenTorneo(cadenaEntrada) que procese una cadena con la siguiente estructura:
const entrada = " TORNEO: FIDE Madrid Masters 2026 | PUNTOS: 4.5/6 | ELO_MEDIO: 2150.80 ";
Requerimientos Técnicos Paso a Paso:
• 1. Saneamiento de Cadena (String): Elimina los espacios de los extremos con trim(). Extrae el nombre del torneo
(entre 'TORNEO:' y el primer signo '|'), límpialo de espacios y conviértelo totalmente a mayúsculas con toUpperCase().
• 2. Extracción y Despiece de Puntos (String & Number): Localiza la subcadena de puntos (ej. "4.5/6") desglosándola
mediante split('/'). Parsea los puntos ganados con Number.parseFloat() y el total de partidas con Number.parseInt().
• 3. Validación de ELO Medio (Number): Extrae el valor de ELO medio ("2150.80"), conviértelo a número flotante y
verifica estrictamente que sea un valor numérico válido utilizando !Number.isNaN() y Number.isFinite().
• 4. Cálculo Matemático de Performance FIDE (Math):
a) Calcula la tasa de victoria $P = \text{puntos} / \text{totalPartidas}$.
b) Calcula el ajuste de rating FIDE $d_p = \text{Math.round}(400 \times \text{Math.log10}(P / (1 - P)))$.
c) Determina la Performance final: $\text{Performance} = \text{Math.round}(\text{eloMedio} + d_p)$.
• 5. Salida Formateada (String + toFixed): Devuelve una cadena con Template Literals que incluya el porcentaje de
victoria formateado a 1 decimal mediante .toFixed(1):
Resultado esperado: "TORNEO: FIDE MADRID MASTERS 2026 | Rendimiento: 75.0% | Performance Rating: 2341 ELO"*/

const entrada = " TORNEO: FIDE Madrid Masters 2026 | PUNTOS: 4.5/6 | ELO_MEDIO: 2150.80 ";





function procesarResumenTorneo(entradas){
    //1
    let sinespacio = entradas.trim();
    let inicio = sinespacio.indexOf("TORNEO:");
    let fin = sinespacio.indexOf("|");

    let nombretorneo = sinespacio.slice(inicio,fin).toUpperCase().trim();
    //2
    let inicio2 = sinespacio.indexOf("PUNTOS:")+7;
    let fin2 = sinespacio.lastIndexOf("|");

    let puntos = sinespacio.slice(inicio2,fin2).trim().split("/");

    let puntosganados = parseFloat(puntos[0]);
    let partidas = parseInt(puntos[1]);
    //3
    let inicio3=sinespacio.lastIndexOf("2150.80");

    let elo= sinespacio.slice(inicio3);
    let elofloat= parseFloat(elo);
    //4
    let P = puntosganados/partidas;
    let dp = Math.round(400*Math.log10(P/(1-P)));
    let performanceFinal = Math.round(elofloat + dp);
    //5
    let rendi = ((puntosganados/partidas)*100).toFixed(1);

    let result = `${nombretorneo} | Rendimiento: ${rendi}% | Performance Rating: ${performanceFinal} ELO`;

    return result;

    /*console.log(rendi);
    console.log(performanceFinal);
    console.log(!Number.isNaN(elofloat));
    console.log(Number.isFinite(elofloat));
    console.log(elofloat);
    console.log(partidas);
    console.log(puntosganados);
    console.log(nombretorneo);
    console.log(puntos);*/
}


console.log(procesarResumenTorneo(entrada));