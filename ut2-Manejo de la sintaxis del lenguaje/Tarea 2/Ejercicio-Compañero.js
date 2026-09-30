
const PEON = 1,
    CABALLO = 3,
    ALFIL = 3,
    TORRE = 5,
    DAMA = 9;

let puntosBlancas = 0,
    puntosNegras = 0;

puntosBlancas += PEON;
puntosNegras += CABALLO;
puntosNegras += ALFIL;
puntosBlancas += TORRE;
puntosNegras += DAMA;

let jugada = 1;
if (jugada % 2 === 0) {
    console.log("Turno de blancas (Jugada -> ${jugada})");
} else {
    console.log(`Turno de blancas (Jugada -> ${jugada})`);
}
jugada += 1;

console.log(
    `Puntos de las Blancas: ${puntosBlancas} - Tipo de dato: ${typeof puntosBlancas}`,
);
console.log(
    `Puntos de las Negras: ${puntosNegras} - Tipo de dato: ${typeof puntosNegras}`,
);
let ventajaMaterial = 0;

console.log(
    `Ventaja material : ${(ventajaMaterial = puntosBlancas - puntosNegras)}`,
);