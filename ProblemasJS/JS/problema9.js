function calcular(){
    let horas = parseInt(document.getElementById("horas").value);
    let extras;
    let extras3;
    if (isNaN(horas)){
        alert("Introduzca unicamente numeros");
    }
    else{
        if(horas <= 40){
            document.getElementById("salida").innerHTML = "Usted no tiene horas extra";
        }
        else if (horas > 40 && horas <= 48){
            extras = horas - 40;
            document.getElementById("salida").innerHTML = "Usted tiene " + extras + " hora(s) extra con valor doble al base";
        }
        else if (horas > 48){
            extras = horas - 40;
            extras3 = extras - 8;
            if (extras3 >=1){
                document.getElementById("salida").innerHTML = "Usted tiene " + extras + " hora(s) extra con valor doble y " + extras3 + " hora(s) de valor triple";
            }

        }
    }
}