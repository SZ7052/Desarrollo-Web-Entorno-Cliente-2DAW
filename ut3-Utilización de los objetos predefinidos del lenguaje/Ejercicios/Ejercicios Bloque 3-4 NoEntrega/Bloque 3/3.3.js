const tiempoinicio= new Date(2025,9,21);
const tiempofin=new Date(2025,9,30);



console.log(calcularTiempoPensamiento(tiempoinicio,tiempofin));

function calcularTiempoPensamiento(inicioMs,finMs){

    const duracion=finMs-inicioMs;
    const segundos=duracion/1000;
    return (`${segundos} s`)

}