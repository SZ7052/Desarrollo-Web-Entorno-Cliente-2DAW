/*EJERCICIO 1: Number & Math — Balance de Ventaja Material
Firma: evaluarVentajaMaterial(piezasBlancasObj, piezasNegrasObj, factorPosicion)
Crea una función que calcule el balance material entre piezas blancas y negras en un tablero.
• Requisitos de Lógica:
 1. Valida de forma estricta que factorPosicion sea un número entero finito y mayor o igual que 0.
 2. Calcula el valor total de las piezas blancas y negras sumando: Peón=1, Caballo=3, Alfil=3, Torre=5, Dama=9.
 3. Calcula la diferencia absoluta de material con Math.abs(valorBlancas - valorNegras).
 4. Calcula la ventajaAjustada multiplicando la diferencia por factorPosicion y redondeando con Math.round().
• Retorno Esperado:
 Devuelve un objeto con la estructura: { diferenciaBase: 4, ventajaAjustada: 6, tieneVentajaBlancas: true }*/

/**
 * DWEC (0612) - MÃ“DULO DE DESARROLLO WEB EN ENTORNO CLIENTE
 * UNIDAD DIDÃCTICA 3 / RA3: OBJETOS PREDEFINIDOS EN JAVASCRIPT (ES6+)
 *
 * PRÃCTICA DE REPASO INTEGRADORA: PLATAFORMA DE AJEDREZ WEB (VERSIÃ“N EVALUACIÃ“N REPASO)
 *
 * INSTRUCCIONES PARA EL ALUMNADO:
 * 1. NO MODIFIQUE los nombres de las funciones ni los nombres de sus parÃ¡metros.
 * 2. Respete ESTRICTAMENTE los nombres de las variables internas y las claves de retorno.
 * 3. Complete la lÃ³gica interna de cada funciÃ³n y reemplace 'return null;' o 'return false;' por su soluciÃ³n.
 */

/**
 * EJERCICIO 1 (Bloque 01: Number & Math)
 * @param {Object} piezasBlancasObj - Objeto con el conteo de piezas blancas { peones, caballos, alfiles, torres, damas }.
 * @param {Object} piezasNegrasObj - Objeto con el conteo de piezas negras { peones, caballos, alfiles, torres, damas }.
 * @param {number} factorPosicion - Factor multiplicador de posiciÃ³n de tablero (nÃºmero finito > 0).
 * @returns {Object|null} Objeto { puntosBlancas, puntosNegras, diferenciaMaterial, ventajaTotal, lider } o null si falla la validaciÃ³n.
 */

const r1 = evaluarVentajaMaterial({ peones: 8, caballos: 2, alfiles: 2, torres: 2, damas: 1 }, { peones: 7, caballos: 1, alfiles: 2, torres: 2, damas: 1 }, 1.2)
console.log(r1);

function evaluarVentajaMaterial(piezasBlancasObj, piezasNegrasObj, factorPosicion) {

    if(!Number.isFinite(factorPosicion) ||factorPosicion<0) {
        factorPosicion=0;
    }

    const valores = {
        peones: 1,
        caballos: 3,
        alfiles: 3,
        torres: 5,
        damas: 9
    };

    let valB =0;
    let valN =0;

    for (const [pieza, cantidad] of Object.entries(piezasBlancasObj)) {
        valB += valores[pieza] * cantidad;
    }

    for (const [pieza, cantidad] of Object.entries(piezasNegrasObj)) {
        valN += valores[pieza] * cantidad;
    }

    let difBase=Math.abs(valB - valN);

    let ventajaAjustada=Math.round(difBase*factorPosicion);



    return {
        diferenciaBase: difBase,
        ventajaAjustada: ventajaAjustada,
        tieneVentajaBlancas: valB >= valN
    };
}