/*EJERCICIOS BÁSICOS JAVASCRIPT
1. Hola, Mundo
Escribe un programa que muestre "Hola, Mundo" en la consola.
2. Suma de dos números
Crea un programa que pida al usuario dos números y muestre su suma.
3. Número par o impar
Escribe un programa que pida un número y determine si es par o impar.
4. Calcular el área de un triángulo
Crea un programa que calcule el área de un triángulo a partir de su base y altura.
5. Contador de vocales
Pide al usuario una palabra y cuenta cuántas vocales tiene.
6. Adivina el número
Crea un juego que genere un número aleatorio entre 1 y 10 y permita al usuario adivinarlo.
7. Inversión de cadena
Crea un programa que invierta una cadena de texto proporcionada por el usuario.
8. Número mayor
Escribe un programa que pida tres números al usuario y muestre cuál es el mayor.
9. Generador de tabla de multiplicar
Crea un programa que pida un número y muestre su tabla de multiplicar hasta el 10.
10. Calculadora simple
Escribe un programa que actúe como una calculadora simple, permitiendo al usuario sumar,
    restar, multiplicar o dividir dos números.*/

//1.

/* console.log ('Hola Mundo');*/

//2.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Dime el primer numero: ", (numero1) => {
    rl.question("Dime el segundo numero: ", (numero2) => {

        let suma = Number(numero1) + Number(numero2);

        console.log(`El total es: ${suma}`);

        rl.close();
    });
});

//3.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Dime el primer numero: ", (numero1) => {
    if()
}

//4.



//5.



//6.



//7.



//8.



//9.



//10.

