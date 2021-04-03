function calcular(){
    let parcial1 = parseInt(document.getElementById("Parcial1").value);
    let parcial2 = parseInt(document.getElementById("Parcial2").value);
    let parcial3 = parseInt(document.getElementById("Parcial3").value);
    let trabajoF = parseInt(document.getElementById("trabajoF").value);
    let eParcial1 = parseInt(document.getElementById("Eparcial1").value);
    let eParcial2 = parseInt(document.getElementById("Eparcial2").value);
    let eParcial3 = parseInt(document.getElementById("Eparcial3").value);
    if(parcial1 >= 0 && parcial2 >= 0 && parcial3 >= 0 && trabajoF >= 0){
        if(isNaN(eParcial1) || isNaN(eParcial2) || isNaN(eParcial3)){
            alert("introduzca unicamente numeros")
        }
        else {
            let parcialesP = ((parcial1 + parcial2 + parcial3) * 55)/30;
            let examenesP = ((eParcial1 + eParcial2 + eParcial3) * 30)/30;
            let trabajoP = (trabajoF * 15)/10;
            let promedioF = parcialesP + examenesP + trabajoP;
            document.getElementById("salida").innerHTML = "Promedio final: " + promedioF + " Promedio por parcial: " + parcialesP + " Promedio de examenes: " + examenesP + " Trabajo final: " + trabajoP;
        }
    }
    else {
        alert("complete todos los campos")
    }
}