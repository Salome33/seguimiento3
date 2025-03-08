function calcularPorcentajeFinal(fisica, quimica, biologia, matematicas, informatica) {

    let promedio = (fisica + quimica + biologia + matematicas + informatica) / 5;
    let porcentajeFinal;

    if (promedio < 60) {
        porcentajeFinal = "porcentajeMalo";
    } else if (promedio >= 60 && promedio < 80) {
        porcentajeFinal = "porcentajeBueno";
    } else {
        porcentajeFinal = "porcentajeExcelente";
    }
    return porcentajeFinal
}

let continuar = "si";

while (continuar === "si") {

let fisica = parseInt(prompt("Ingrese su nota de física"));
let quimica = parseInt(prompt("Ingrese su nota de química"));
let biologia = parseInt(prompt("Ingrese su nota de biología"));
let matematicas = parseInt(prompt("Ingrese su nota de matemáticas"));
let informatica = parseInt(prompt("Ingrese su nota de informática"));

    porcentajeFinal = calcularPorcentajeFinal(fisica, quimica, biologia, matematicas, informatica);

    switch (porcentajeFinal) {
        case "porcentajeMalo":
            alert("Su calificación es mala");
            break;
        case "porcentajeBueno":
            alert("Su calificación es buena");
            break;
        case "porcentajeExcelente":
            alert("Su calificación es excelente");
            break;
    } continuar = prompt("¿Desea continuar?(si/no): ").toLowerCase()
}