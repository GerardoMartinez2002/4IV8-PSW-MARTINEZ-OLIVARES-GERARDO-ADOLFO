function calcular(){
    let hombres = parseInt(document.getElementById("hombres").value);
    let mujeres = parseInt(document.getElementById("mujeres").value);
    let totalHM = hombres + mujeres;
    let pHombres = (hombres*100)/totalHM;
    let pMujeres = (mujeres*100)/totalHM;
    if (isNaN(hombres) && isNaN(mujeres)){
        alert("ingrese unicamente numeros");
    }
    else {
        document.getElementById("salida").innerHTML = "El porcentaje de hombres es de: " + Math.round(pHombres) + "% " + "El porcentaje de mujeres es de: " + Math.round(pMujeres) + "%";
    }
}
