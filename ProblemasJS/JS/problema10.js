function calcular(){
    let antiguedad = parseInt(document.getElementById("antiguedad").value);
    let salario = parseFloat(document.getElementById("salario").value);
    let utilidad = 0;
    let total = 0;
    if(isNaN(salario)){
        alert("Introduzca unicamente numeros");
    }
    else {
        if (antiguedad == 1){
            utilidad = salario * 0.05;
        }
        else if(antiguedad == 2){
            utilidad = salario * 0.07;
        }
        else if(antiguedad == 3){
            utilidad = salario * 0.10;
        }
        else if(antiguedad == 4){
            utilidad = salario * 0.15;
        }
        else if(antiguedad == 5){
            utilidad = salario * 0.20;
        }
        total = salario + utilidad;
        document.getElementById("salida").innerHTML = "su salario mesual es: " + total + " con utilidad de: " + Math.round(utilidad);
    }
}
