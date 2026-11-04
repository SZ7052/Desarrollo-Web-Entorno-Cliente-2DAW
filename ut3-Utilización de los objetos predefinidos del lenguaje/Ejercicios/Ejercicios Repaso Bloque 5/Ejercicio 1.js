/*Ejercicio 1: Autenticación de Sesión de Sala y Expiración por Inactividad (BOM +
sessionStorage + JSON)
En la plataforma web de ajedrez, cuando un jugador entra a una sala de torneo privada desde una URL con query string
(ej. /sala?id=804&jugador=Kasparov&elo=2812), queremos validar la entrada, guardar la sesión de forma temporal y
programar un temporizador de desconexión automática por inactividad.
Crea la función iniciarSesionSalaTorneo(urlPrueba, minutosExpiracion) que ejecute los siguientes pasos:
1. Extracción BOM: Extrae los parámetros id, jugador y elo inspeccionando la URL recibida o window.location.search
mediante métodos de String (indexOf, slice, split).
2. Persistencia Temporal: Serializa el objeto de usuario resultante ({ id, jugador, elo: Number(elo), loginTime:
Date.now() }) con JSON.stringify() y guárdalo en sessionStorage bajo la clave 'fide_sesion_activa'.
3. Temporizador Asíncrono: Mide las dimensiones del viewport con window.innerWidth/innerHeight para clasificar el
dispositivo. Programa un setTimeout() de minutosExpiracion * 60 * 1000 ms que, al cumplirse, elimine la clave con
sessionStorage.removeItem('fide_sesion_activa') y ejecute una redirección limpia a '/lobby' mediante
window.location.replace().
4. Retorno: Devuelve el objeto de sesión creado para poder verificarlo.*/

let URL='/sala?id=804&jugador=Kasparov&elo=2812';



function iniciarSesionSalaTorneo(urlPrueba,minutosExpiracion){

const localizado = URL.window.location.search;
let inicio = localizado.indexOf("id=")+3;
let final = localizado.indexOf("&");
let inicio2 = localizado.indexOf("jugador=")+8;
let inicio3 = localizado.indexOf("elo=")+4;

let jugador = localizado.slice(inicio2,final);
let elo = localizado.slice(inicio3,final);


let id= localizado.slice(inicio,final);

let visual=localizado.split("&");

usuario={
    id:id,
    jugador:jugador,
    elo:parseInt(elo),
    loginTime:Date.now()
}

const json=JSON.stringify(usuario);

sessionStorage.setItem('fide_sesion_activa',json);

}

