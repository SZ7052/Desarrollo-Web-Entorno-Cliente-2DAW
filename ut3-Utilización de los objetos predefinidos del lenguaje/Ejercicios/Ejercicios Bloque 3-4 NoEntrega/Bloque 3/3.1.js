let fecha={
    dia: 28,
    mes: "octubre",
    anio: 2026
};



console.log(obtenerTimestampJugada(fecha));

function obtenerTimestampJugada(fechaObj){
let nuevafecha=fechaObj.toLocaleString("es-ES");
return Date.now(nuevafecha)
}