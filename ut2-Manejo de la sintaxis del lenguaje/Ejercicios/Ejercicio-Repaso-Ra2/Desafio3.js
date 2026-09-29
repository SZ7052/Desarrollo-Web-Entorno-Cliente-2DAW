/*Desafío 3: Generador Algorítmico y Buscador de Casillas 8x8 (3.5
Puntos)
Escenario: En tu archivo desafio3.js, implementa la iteración bidimensional del tablero:
1. Mediante dos bucles for anidados (filas de 8 a 1 y columnas de 'a' a 'h'), genera las 64 coordenadas
algebraicas.
2. Utiliza la fórmula de paridad (fila + colIndex) % 2 === 0 para determinar si la casilla es clara u oscura.
3. Almacena en un array las jugadas de una partida. Usa un bucle for...of para recorrerlo, saltando
comentarios con continue e interrumpiendo el recorrido con break cuando detectes la jugada final de jaque*/

const Columnas = ["a","b","c","d","e","f","g","h"];


for (let i = 8; i >= 1 ; i--) {
    for (let j = 0; j< Columnas.length ; j++) {
    const columna = Columnas[j];
    const coordenadas = `${columna}${i}`;
    const esClaro = (i + j) % 2 === 0;
    const tipo = esClaro ? "Claro":"Oscuro";
    console.log(`Casilla ${coordenadas} : tipo : ${tipo}`);
    }
}
console.log(`64 casillas`);

const jugadas = ["e4", "e5", "Cf3", "Cc6", "// Apertura Italiana",
    "Ab5", "a6", "Aa4", "Cf6", "De2", "Dh4#", "Re7"];



for (const jugada of jugadas) {
    if (jugada.startsWith("//")) {
        console.log(`Saltando Comentario : ${jugada}`);
        continue;
    }

    console.log(`Jugadas : ${jugada}`);

    if (jugada.includes("#")) {
        console.log(`Jaque Mate en Jugada : ${jugada}`);
        break;
    }
}
