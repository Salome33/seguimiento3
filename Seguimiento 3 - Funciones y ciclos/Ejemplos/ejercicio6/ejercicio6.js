function calcularNumeroMayor(num1, num2, num3) {
    let numeroMayor;
    if (num1 > num2 && num1 > num3) {
        numeroMayor = num1;
    } else if (num2 > num1 && num2 > num3) {
        numeroMayor = num2;
    } else {
        numeroMayor = num3;
    }
    return numeroMayor;
}

let continuar = "si";

while (continuar === "si") {

    let num1 = parseInt(prompt("Ingrese el primer número"));
    let num2 = parseInt(prompt("Ingrese el segundo número"));
    let num3 = parseInt(prompt("Ingrese el tercer número"));

    alert("El número mayor es: " + calcularNumeroMayor(num1, num2, num3));

    continuar = prompt("¿Desea continuar? (si/no): ").toLowerCase();
}