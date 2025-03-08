let lavadoraGrande = 4000;
let lavadoraPequeña = 3000;
let cantidad;
let horas;

function descuento(costoBase, cantidad) {
    let costoTotal;

    if (cantidad > 3) {
        let descuento = costoBase * 0.03;
        costoTotal = costoBase - descuento;
    } else {
        costoTotal = costoBase;
    }

    return costoTotal;
}

let continuar = prompt("¿Desea continuar?: (si/no): ").toLowerCase();

while (continuar === "si") {

    let lavadoraIngresada = prompt("Ingrese el tipo de lavadora que desea alquilar: grande o pequena: ").toLowerCase();

    if (lavadoraIngresada === "grande" || lavadoraIngresada === "pequena") {

        cantidad = parseInt(prompt("Ingrese la cantidad de lavadoras que desea alquilar: "));
        horas = parseInt(prompt("Ingrese la cantidad de horas que desea alquilar la lavadora: "));

        let costoBase;

        if (lavadoraIngresada === "grande") {
            costoBase = lavadoraGrande * horas * cantidad;
        } else if (lavadoraIngresada === "pequena") {
            costoBase = lavadoraPequeña * horas * cantidad;
        }

        let costoTotal = descuento(costoBase, cantidad);

        alert("Costo total por alquilar " + cantidad + " lavadoras tipo " + lavadoraIngresada + " por " + horas + " horas: " + costoTotal);

    } else {
        alert("Por favor ingrese un tipo de lavadora válido.");
    }

    continuar = prompt("¿Desea continuar?: (si/no): ").toLowerCase();
}

