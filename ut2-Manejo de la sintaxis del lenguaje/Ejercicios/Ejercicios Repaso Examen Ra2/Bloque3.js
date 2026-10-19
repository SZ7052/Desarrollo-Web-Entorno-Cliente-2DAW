/*BLOQUE 03: Control de Acceso a Quirófano Automatizado (2,5 Puntos)
El sistema informático de un hospital debe validar la entrada del personal médico a la zona de quirófanos:
    1. Declara las variables biometriaOK = true, nivelLicencia = 4, modoEmergencia = false y quirofanoBloqueado =
    false.
2. La entrada se autoriza si la biometría es correcta (biometriaOK), la licencia es mayor o igual a 3 o está activo el
modo emergencia (nivelLicencia >= 3 || modoEmergencia), Y el quirófano NO está bloqueado
(!quirofanoBloqueado).
3. Construye la condición lógica combinada (&&, ||, !) dentro de una estructura if / else e imprime por consola si el
    acceso se concede o se deniega.*/

let biometriaOK = true;
let nivelLicencia = 4;
let modoEmergencia = false;
let quirifanoBloqueado= false;
let entrada;

if (biometriaOK && (nivelLicencia>=3 ||
    modoEmergencia===true) && quirifanoBloqueado===false) {
    entrada= "Se concede";
} else{
    entrada="Se deniega";
}

console.log(entrada);