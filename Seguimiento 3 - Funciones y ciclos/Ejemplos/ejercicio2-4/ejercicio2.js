function impar_par(numero) {
    if (numero % 2 == 0) {
        return `Su número ${numero} es par`;
    } else {
        return `Su número ${numero} es impar`;
    }
}
let continuar = "si";
while (continuar === "si"){
    let numero = parseInt(prompt("Ingrese cualquier numero entero"))

    let resultado = impar_par(numero)

    alert(resultado)

    continuar = prompt("¿Desea continuar? (si/no)").toLowerCase()
}