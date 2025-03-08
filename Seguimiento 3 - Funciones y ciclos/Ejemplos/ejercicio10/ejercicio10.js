function calcularValorCopias (cantidad, valor){
    let valorTotal = (cantidad * valor);
    return valorTotal;
}

function asignarCostoCopias (cantidad, valor){
    if (cantidad > 0 && cantidad < 500){
        valor = 120;
    }else if (cantidad >= 500 && cantidad < 750) {
        valor = 100;
    }else if (cantidad >= 750 && cantidad < 1000) {
        valor = 80;
    }else if (cantidad >= 1000) {
        valor = 50;
    }else {
        valor = "no hay costo";
    }
    return calcularValorCopias (cantidad, valor);
}
 let continuar = "si";

while (continuar === "si") {
    let cantidadCopias = parseInt(prompt("ingrese la cantidad de copias a imprimir"));

    let valorTotal = asignarCostoCopias(cantidadCopias);
    alert ("la cantidad de hpjas a imprimir es: " + valorTotal)

    continuar = prompt("¿Desea continuar? (si/no)").toLowerCase();
}