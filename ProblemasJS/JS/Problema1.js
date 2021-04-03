
function calcular(){
    let cantidad = parseInt(document.getElementById("inversion").value);
    let mes = parseInt(document.getElementById("meses").value);
    let total;
    if (isNaN(cantidad) && isNaN(mes)){
        alert("ingrese unicamente numeros");
    }
    else{
        total = (cantidad*0.98)*mes;
        document.getElementById("salida").innerHTML = "El total es de: " + total;
    }

}