/*Ejercicio 2: Analizador FEN y Generador de Casilla de Ataque Aleatoria
Escenario: Un módulo de entrenamiento para bot de ajedrez recibe la cadena FEN inicial de una apertura y debe
desglosar las piezas de la primera fila para seleccionar una casilla objetivo al azar con su probabilidad porcentual.
Crea la función analizarFENVilaAleatoria(cadenaFEN) para la posición:
const fenPrueba = "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3";
Requerimientos Técnicos Paso a Paso:
• 1. Extracción de Disposición (String): Corta la cadena FEN con slice() e indexOf(' ') para conservar únicamente el
primer campo con la posición del tablero ("r1bqkbnr/pppp1ppp/.../RNBQKB1R").
• 2. Despiece por Filas (String & Array): Separa las 8 filas del tablero con split('/') y extrae la fila 1 de piezas blancas
(índice 7, cadena "RNBQKB1R").
• 3. Conteo de Piezas Blancas (String): Bucle o método de reemplazo/conteo para determinar cuántas piezas en
mayúscula (excluyendo números) existen en la fila 1.
• 4. Selección de Columna Aleatoria (Math.random & Math.floor): Genera un número entero aleatorio para la columna
entre 0 y 7 usando Math.floor(Math.random() * 8).
• 5. Conversión de Columna a Letra (String.fromCharCode): Convierte el entero (0 a 7) en su letra algebraica ('a' a 'h')
usando String.fromCharCode(97 + colIndex).
• 6. Cálculo de Probabilidad y Retorno (Number / toFixed): Calcula la probabilidad de seleccionar esa columna ((1 / 8) *
100), dale formato de 2 decimales con .toFixed(2) y devuelve un objeto con:
{ fila1: "RNBQKB1R", casillaSeleccionada: "e1", probabilidad: "12.50%" }*/


const fenPrueba = "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3";




function analizarFUNVilaAleatoria(cadenaFEN){
    //1
    let cadena=cadenaFEN;
    let final = cadena.indexOf(" ");
    let FEN = cadena.slice(0,final);
    //2
    let ochofilas=FEN.split("/");
    let fila1=ochofilas[7];
    //3
    let contador= 0;
   for (let i = 0; i < fila1.length; i++){
       if(isNaN(fila1[i])){
           contador++;
       }
   }
    //4
    let Columalea=Math.floor(Math.random()*8);
    //5
    for

    console.log(Columalea);
    console.log(contador);
    console.log(FEN);
    console.log(fila1);
}

console.log(analizarFUNVilaAleatoria(fenPrueba));