function calcular(){
    let ventas = parseInt(document.getElementById("ventas").value);
    let sueldo = 1000;
    let producto = 700;
    let totalC = ventas*producto;
    let totalM = sueldo + totalC;
    if (isNaN(ventas)){
        alert("ingrese unicamente numeros");
    }
    else {
        document.getElementById("salidaC").innerHTML = "Su salario por comision extra es de: " + totalC;
        document.getElementById("salidaM").innerHTML = "Su salario mensual es de: " + totalM;
    }


}