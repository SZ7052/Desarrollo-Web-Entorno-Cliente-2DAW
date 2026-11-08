function iniciarSesionSalaTorneo(urlPrueba, minutosExpiracion) {
    const urlUsada = urlPrueba || window.location.search;
    const indiceInterrogacion = urlUsada.indexOf('?');
    const searchStr = indiceInterrogacion !== -1 ? urlUsada.slice(indiceInterrogacion + 1) : urlUsada;

    const pares = searchStr.split('&');
    let id = "";
    let jugador = "";
    let elo = "";

    for (let par of pares) {
        const divisor = par.indexOf('=');
        if (divisor !== -1) {
            const clave = par.slice(0, divisor);
            const valor = par.slice(divisor + 1);
            if (clave === 'id') id = decodeURIComponent(valor);
            if (clave === 'jugador') jugador = decodeURIComponent(valor);
            if (clave === 'elo') elo = decodeURIComponent(valor);
        }
    }

    const sesionObj = {
        id: id,
        jugador: jugador,
        elo: Number(elo),
        loginTime: Date.now()
    };

    try {
        sessionStorage.setItem('fide_sesion_activa', JSON.stringify(sesionObj));
    } catch (error) {
        console.error("Error al guardar la sesión en sessionStorage:", error);
    }

    const anchoViewport = window.innerWidth;
    const altoViewport = window.innerHeight;
    console.log(`Viewport actual - Ancho: ${anchoViewport}px, Alto: ${altoViewport}px`);

    const tiempoMs = minutosExpiracion * 60 * 1000;
    setTimeout(() => {
        sessionStorage.removeItem('fide_sesion_activa');
        window.location.replace('/lobby');
    }, tiempoMs);

    return sesionObj;
}