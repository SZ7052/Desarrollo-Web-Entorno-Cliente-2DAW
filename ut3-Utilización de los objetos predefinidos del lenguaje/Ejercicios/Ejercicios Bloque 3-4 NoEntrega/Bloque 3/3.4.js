const ahora = 100000;

console.log(obtenerTiempoFormateadoReloj(ahora));


function obtenerTiempoFormateadoReloj(msRestantes){
const segundos = Math.floor(msRestantes/1000);
const minutos = Math.floor(segundos/60);
return `${minutos.toString().padStart(2,'0')}:${minutos.toString().padStart(2,'0')}`;
}