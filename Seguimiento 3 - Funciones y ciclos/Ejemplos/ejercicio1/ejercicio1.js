let salario1 = 30000
let salario2 = 33000


let continuar = prompt("¿desea continuar? (si/no): ").toLowerCase()

function calcularSalario (horas, salario){
    return horas * salario
}

while(continuar === "si"){
    let nombre = prompt("ingrese su nombre")
    let horas = parseInt(prompt("ingrese la cantidad de horas"))

    if (horas > 1 && horas <= 10){
        salarioTotal1 = calcularSalario(horas, salario1)
        alert ("señor/a " + nombre + ", el numero de horas es: " + horas + " y su salario equivale a " + salarioTotal1)

    }else if (horas > 10) {
        salarioTotal2 = calcularSalario(horas, salario2)
        alert ("señor/a " + nombre + ", el numero de horas es: " + horas + " y su salario equivale a " + salarioTotal2)
    }
    else{
        alert("No se pudo calcular su salario")
    }

    continuar = prompt("¿desea continuar? (si/no): ").toLowerCase()
}
