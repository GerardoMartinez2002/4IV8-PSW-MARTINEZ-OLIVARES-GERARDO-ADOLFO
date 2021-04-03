function calcular(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let total=0;
    if (isNaN(numero1) && isNaN(numero2)){
        alert("Introduzca numeros unicamente");
    }
    else if (numero2 == numero1){
        total = parseInt(numero1) * parseInt(numero2);
        document.getElementById("salida").innerHTML = "El resultado es: " + total;
    }
    else {
        total = parseInt(numero1) + parseInt(numero2);
        document.getElementById("salida").innerHTML = "El resultado es: " + total;
    }

}