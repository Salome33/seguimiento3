function calcularValorTotal(cargoFijo, minutosInternacionales, paqueteDatos, minutosConsumidos){
    let valor = cargoFijo + paqueteDatos + (minutosInternacionales * minutosConsumidos);
    return valor;
}

let continuar = "si";

while (continuar === "si") {
    let operador = prompt("Ingrese el tipo de operador (tigo, claro, movistar): ").toLowerCase();
    let minutosUsados = parseInt(prompt("Ingrese la cantidad de minutos usados: "));
    let valorTotal;

    switch (operador) {
        case "tigo":
            valorTotal = calcularValorTotal(45000, 200, 12000, minutosUsados);
            alert("El valor total para Tigo es: " + valorTotal);
            break;
        case "claro":
            valorTotal = calcularValorTotal(30000, 100, 18000, minutosUsados);
            alert("El valor total para Claro es: " + valorTotal);
            break;
        case "movistar":
            valorTotal = calcularValorTotal(40000, 250, 8000, minutosUsados);
            alert("El valor total para Movistar es: " + valorTotal);
            break;
        default:
            alert("Operador no reconocido. Por favor ingrese 'tigo', 'claro' o 'movistar'.");
            break;
    }

    continuar = prompt("¿Desea continuar? (si/no)").toLowerCase();
}