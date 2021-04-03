function calcular(){
    let fechaU = document.getElementById("fecha").valueAsDate;
    let d = new Date();
    let diferencia = d - fechaU;
    let a = miliToAnos(diferencia);
    document.getElementById("salida").innerHTML = "Usted tiene " + a +" anos de edad"
}
function miliToAnos(mili){
    return Math.round(mili / ( 365 * 24 * 60 * 60 * 1000)) ;
}
