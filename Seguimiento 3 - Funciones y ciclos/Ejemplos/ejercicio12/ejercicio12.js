function determinarModeloDefectuso (modelo) {

    if (modelo !== "119" && modelo !== "179" && modelo !== "189" && modelo !== "195" && modelo !== "221" && modelo !== "780") {
        alert ("su automovil no esta defectuoso ");
    } else {
        alert ("su modelo está defectuoso, llevar a garantía ");
    }
}

let continuar = "si";

while (continuar === "si") {
    let modelo = prompt("ingrese el modelo de su vehículo");

    determinarModeloDefectuso (modelo);

    continuar = prompt("¿Desea continuar? (si/no)").toLowerCase();
}