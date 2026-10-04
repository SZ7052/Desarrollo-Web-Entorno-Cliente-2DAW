/*BLOQUE 01: Telemetría de Satélite CubeSat (2,0 Puntos)
Un nanosatélite registra en su ordenador de a bordo la carga de su batería y la paridad de la órbita actual.
1. Declara las variables bateriaCarga = 85, consumoSensor = 12 y orbitaNumero = 14.
2. Resta el consumo de la carga usando la asignación compuesta (-=).
3. Determina la fase orbital (diurna/nocturna) mediante la paridad del número de órbita (orbitaNumero % 2 ===
    0).
4. Evalúa con un operador ternario si el satélite está en 'ESTABLE' o 'MODO_AHORRO' (si carga < 30).
5. Imprime el reporte con Template Literals e incluye el tipo de dato de las variables usando typeof.*/

let bateriaCarga = 85;
let consumoSensor = 12;
let orbitaNumero = 14;

bateriaCarga -= consumoSensor ;

let fase = (orbitaNumero % 2 === 0) ? 'diurna' : 'nocturna';

let modoahorro = (bateriaCarga < 30) ? 'MODO_AHORRO' : 'ESTABLE';

console.log(`La Bateria tiene ${bateriaCarga} , la fase ${fase} y esta en ${modoahorro}`);
console.log(`${typeof bateriaCarga} ${typeof fase} ${typeof modoahorro}`);
