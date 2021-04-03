function calcular(){
    let monto = parseInt(document.getElementById("monto").value);
    let total = monto * 0.85;
    if (isNaN(monto)){
        alert("ingrese unicamente numeros");
    }
    else {
        document.getElementById("salida").innerHTML = "total a pagar: $" + total;
    }

}