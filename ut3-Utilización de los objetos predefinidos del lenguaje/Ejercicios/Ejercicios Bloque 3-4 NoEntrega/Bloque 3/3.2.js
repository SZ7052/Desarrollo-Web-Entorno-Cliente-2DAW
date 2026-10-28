const fecha = new Date();

console.log(formatearFechaTorneo(fecha));


function formatearFechaTorneo(fechaObj){
let tiempo=fechaObj.toLocaleDateString("es-ES");
return(`${tiempo.getDate()} de ${tiempo.getMonth()} de ${tiempo.getFullYear()}`);

}