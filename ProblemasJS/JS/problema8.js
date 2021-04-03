function calcular(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let numero3 = parseInt(document.getElementById("numero3").value);
    let numeros = [];
    if (isNaN(numero2) && isNaN(numero1) && isNaN(numero3)){
        alert("Introduzca unicamente numeros");
    }
    else {
        if (numero1 != numero2 && numero2 != numero3){
            numeros.push(numero1,numero2,numero3);
            for (let i = 1; i<=3 ; i++){
                for (let a = 0 ; a<3 ;a++) {
                    if (numeros[a]>= numeros[a + 1]){
                        let mesita = numeros[a];
                        numeros[a] = numeros[a + 1];
                        numeros[a +1] = mesita;
                    }
                }
            }
            document.getElementById("salida").innerHTML = "El numero mayor es: " + numeros[2];
            console.log(numeros[2]);
        }
        else {
            alert("Solo se aceptan numeros distintos");
        }
    }
}