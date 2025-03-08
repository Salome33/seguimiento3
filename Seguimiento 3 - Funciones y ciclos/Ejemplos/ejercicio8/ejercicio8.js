function calcularMensualidadGym(dias) {
    let mensualidad;

    if (dias === 15) {
        mensualidad = "$18000";
    } else if (dias === 30) {
        mensualidad = "$35000";
    } else if (dias === 90) {
        mensualidad = "$86000";
    } else {
        mensualidad = "no se pudo calcular";
    }
    return mensualidad;
}

let continuar = "si";

while (continuar === "si") {

    let dias = parseInt(prompt("Ingrese la cantidad de días: (15/30/90)"));

    alert("Su costo a pagar es: " + calcularMensualidadGym(dias));

    continuar = prompt("¿Desea continuar (si/no)?").toLowerCase();
}

