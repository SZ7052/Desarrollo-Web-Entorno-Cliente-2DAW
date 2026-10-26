/*Ejercicio 2: Monitor de Estado de Sala, Responsive y Salida Segura (BOM + Date)
Desarrolla la función gestionarMonitorSalaTorneo(urlPrueba) que realice una auditoría integral del entorno del cliente:
• Desglose de Parámetros URL (location.search): A partir de urlPrueba o window.location.href (ej.
'http://localhost/game?sala=402&jugador=Jugador1#ronda1'), extrae los parámetros de consulta tras el signo '?' y
construye un objeto con las parejas clave-valor (ej. { sala: '402', jugador: 'Jugador1' }).
• Estado de Red y Registro de Pulso (navigator.onLine / Date): Comprueba si navigator.onLine es true. Genera una marca
de tiempo con la fecha y hora actual formateada en español mediante new Date().toLocaleString('es-ES').
• Adaptabilidad Responsive (window.innerWidth): Evalúa window.innerWidth y asigna la categoría: 'DESKTOP' (≥ 1024px),
'TABLET' (600px - 1023px) o 'MOBILE' (< 600px).
• Protección de Salida Segura (confirm / location.replace): Si el jugador está fuera de línea (online === false), lanza una
alerta de confirmación con window.confirm('Sin conexión. ¿Deseas reconectar con el Lobby?'). Si el usuario acepta, ejecuta
la redirección limpia window.location.replace('/lobby').
// Salida de retorno esperada:
{ parametrosUrl: { sala: '402', jugador: 'Jugador1' }, online: true, modoPantalla: 'DESKTOP',
registroPulso: '18/10/2026, 14:00:00' }*/

function gestionarMonitorSalaTorneo(urlPrueba) {
    const urlObjeto = new URL(urlPrueba);
    const parametrosUrl = {};

    urlObjeto.searchParams.forEach((valor, clave) => {
        parametrosUrl[clave] = valor;
    });

    const online = typeof navigator !== 'undefined' ? navigator.onLine : true;
    const registroPulso = new Date().toLocaleString('es-ES');
    const anchoPantalla = typeof window !== 'undefined' ? window.innerWidth : 1200;
    let modoPantalla = 'MOBILE';

    if (anchoPantalla >= 1024) {
        modoPantalla = 'DESKTOP';
    } else if (anchoPantalla >= 600) {
        modoPantalla = 'TABLET';
    }

    return {
        parametrosUrl: parametrosUrl,
        online: online,
        modoPantalla: modoPantalla,
        registroPulso: registroPulso
    };
}

let URL_PRUEBA = 'http://localhost/game?sala=402&jugador=Jugador1#ronda1';
console.log(gestionarMonitorSalaTorneo(URL_PRUEBA));

