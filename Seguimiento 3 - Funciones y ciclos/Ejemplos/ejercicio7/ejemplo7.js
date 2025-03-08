function calcularAyudaEconomica (edad, genero){
    let ayuda;

    if (genero == "mujer") {
        if(edad > 50){
            ayuda = 120000;
        }else if (edad >= 30 && edad <= 50){
            ayuda = 100000;
        }else {
            ayuda = "no recibe ayuda";
        }
    }else{
        ayuda = 40000;
    }
    return ayuda;
}

let continuar = "si";

while (continuar == "si") {

    let genero = prompt("ingrese su genero: (hombre/mujer)").toLowerCase();
    let edad = parseInt(prompt("ingrese su edad"));

    alert ("su valor de ayuda mensual es: " + calcularAyudaEconomica(edad, genero));

    continuar = prompt("¿Desea continuar (si/no)?").toLowerCase();
}

