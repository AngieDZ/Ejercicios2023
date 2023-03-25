function calculadora() {
    const operacionesMatemticas = ['suma', 'resta', 'multiplicacion', 'division', 'exponente']
    let operacion = (prompt("Escoga la operacion que desee: SUMA, RESTA, MULTIPLICACION, DIVISION, EXPONENTE "))
    let num1;
    let num2;
    let resultado;

    if (operacionesMatemticas.includes(operacion.toLocaleLowerCase())) {
        if (operacion.toLocaleLowerCase() == 'exponente') {
            num1 = prompt("Ingrese la Base: ");
            if (isNaN(num1)) {
                alert(`Solo se permiten valores numericos, Valor Insertado: ${num1}.`)
                throw new Error(`Solo se permiten valores numericos, Valor Insertado: ${num1}.`);
            }
            num2 = prompt("Ingrese el Exponente: ");
            if (isNaN(num2)) {
                alert(`Solo se permiten valores numericos, Valor Insertado: ${num2}.`)
                throw new Error(`Solo se permiten valores numericos, Valor Insertado: ${num2}.`);
            }
        } else {
            num1 = prompt("Ingrese un numero: ");
            if (isNaN(num1)) {
                alert(`Solo se permiten valores numericos, Valor Insertado: ${num1}.`)
                throw new Error(`Solo se permiten valores numericos, Valor Insertado: ${num1}.`);
            }
            num2 = prompt("Ingrese un segundo numero: ");
            if (isNaN(num2)) {
                alert(`Solo se permiten valores numericos, Valor Insertado: ${num2}.`)
                throw new Error(`Solo se permiten valores numericos, Valor Insertado: ${num2}.`);
            }
        }
    }

    switch (operacion.toLocaleLowerCase()) {
        case "suma":
            resultado = parseFloat(num1) + parseFloat(num2)
            document.write("la suma de los numeros es: ".concat(resultado))
            break;
        case "resta":
            resultado = parseFloat(num1) - parseFloat(num2)
            document.write(" la resta de los numeros es: ".concat(resultado))
            break;
        case "multiplicacion":
            resultado = parseFloat(num1) * parseFloat(num2)
            document.write(" la multiplicacion de los numeros es: ".concat(resultado))
            break;
        case "division":
            resultado = parseFloat(num1) / parseFloat(num2)
            document.write(" la division de los numeros es: ".concat(resultado))
            break;
        case "exponente":
            resultado = parseFloat(num1) ** parseFloat(num2)
            document.write(" El exponente de los numeros es: ".concat(resultado))
            break;
        default:
            alert(`La operacion que intentas realizar no esta configurada, no es valida o no es una operacion matematica, Valor Insertado: ${operacion.toLocaleLowerCase()}.`)
            throw new Error(`La operacion que intentas realizar no esta comfigurada, no es valida o no es una operacion matematica, Valor Insertado: ${operacion.toLocaleLowerCase()}.`);
    }
}

console.log(calculadora())
