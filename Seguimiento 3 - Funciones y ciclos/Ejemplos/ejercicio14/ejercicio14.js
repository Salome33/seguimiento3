function calcularPrecioTopping(tamaño, costoTopping) {

    let precioBase = tamaño === "grande" ? 12000 : 6000;
    let costoTotalToppings = 0

    let toppings = costoTopping.split(",").map(t => t.trim());

    for (let topping of toppings) {
        switch (topping) {
            case "tocineta":
                costoTotalToppings += 3000;
                break;
            case "pavo":
                costoTotalToppings += 3000;
                break;
            case "queso":
                costoTotalToppings += 2500;
                break;
            case "jalapeno":
                costoTotalToppings += 0;
                break;
            default:
                alert(`Topping no válido: ${topping}`);  
                break;
        }
    }

    let precioTotal = precioBase + costoTotalToppings;
    return precioTotal;
}

let continuar = "si";
while (continuar === "si") {
    let tamaño = prompt("Ingrese el tamaño del sándwich (grande/pequeño)").toLowerCase().trim();
    let costoToppings = prompt("Ingrese los toppings que desea (jalapeno, queso, pavo, tocineta). Sepárelos por comas").toLowerCase();

    alert("El valor total es: " + calcularPrecioTopping(tamaño, costoToppings));

    continuar = prompt("¿Desea ordenar algo más? (si/no)").toLowerCase().trim();
}

alert("Cerrando el programa...")

