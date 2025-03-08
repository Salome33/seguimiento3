function sumarAngulos (angulo1, amgulo2, angulo3){
    if ((angulo1 + amgulo2 + angulo3) === 180 ){
        alert("su triangulo es válido");
    } else {
        alert("su ángulo es inválido")
    }
}
let continuar = "si";

while (continuar === "si"){
    let angulo1 = parseInt(prompt("ingrese el primer ángulo"));
    let angulo2 = parseInt(prompt("ingrese el segundo ángulo"));
    let angulo3 = parseInt(prompt("ingrese el tercer ángulo"));

    sumarAngulos(angulo1, angulo2, angulo3)
    continuar = prompt("¿Desea continuar (si/no)?").toLowerCase();
}