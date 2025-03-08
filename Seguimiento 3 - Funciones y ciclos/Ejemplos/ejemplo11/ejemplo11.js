function calcularEstadoComputadora (pitido, discoDuro, unidadGira) {

    if (pitido === true) {
        discoDuro === true ? alert("está averiada ") : (unidadGira === true ? alert("póngase en contacto con el técnico de apoyo ") : alert("verificar contactos de la unidad "));
    }
    else {
        discoDuro === true ? alert("comprueba las conexiones de altavoces") : alert("Traiga la computadora para repararla en la central");
    }
}

function preguntarUnidadGira () {
    let pitido = prompt("¿La lavadora emite un pitido? (si/no)").toLowerCase();

    let discoDuro = false;
    let unidadGira = false;

    if (pitido === "si") {
        discoDuro = prompt("¿El disco duro gira? (si/no)").toLowerCase() === "si";
        if (discoDuro === false) {
            unidadGira = prompt("¿La unidad gira? (si/no)").toLowerCase() === "si";
        }
    } else {
        discoDuro = prompt("¿El disco duro gira?").toLowerCase() === "si";
    }
    calcularEstadoComputadora (pitido === "si", discoDuro, unidadGira);
}

let continuar = "si";

while (continuar === "si") {
    preguntarUnidadGira ();

    continuar = prompt("¿Desea continuar? (si/no)").toLowerCase();
}

