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