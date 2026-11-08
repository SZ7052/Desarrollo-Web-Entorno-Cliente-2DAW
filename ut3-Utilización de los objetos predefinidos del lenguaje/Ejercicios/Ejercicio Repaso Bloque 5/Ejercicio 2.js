function sincronizarEstadoTablero(cadenaFEN, temaVisual) {
    if (!navigator.onLine) {
        alert("¡Atención! Conexión a Internet perdida. Los cambios se guardarán localmente.");
        console.warn("Estado de red: Offline");
    }

    const partidaObj = {
        fen: cadenaFEN.trim(),
        timestamp: Date.now(),
        fechaLegible: new Date().toLocaleString('es-ES')
    };

    try {
        localStorage.setItem('fide_partida_guardada', JSON.stringify(partidaObj));
    } catch (error) {
        console.error("Error: Límite de almacenamiento local superado (QuotaExceededError).", error);
    }

    const temaCodificado = encodeURIComponent(temaVisual);
    document.cookie = `fide_theme=${temaCodificado}; max-age=604800; path=/`;

    const itemGuardado = localStorage.getItem('fide_partida_guardada');
    return itemGuardado ? JSON.parse(itemGuardado) : null;
}