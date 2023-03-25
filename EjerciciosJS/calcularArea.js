function area(base,altura){
    let multi = base * altura;
    let resultado = multi / 2;
    return resultado
}
console.log (area(2,2))

let base = parseInt(prompt("Ingrese base: "));
let altura = parseInt(prompt("Ingrese altura: "));
let area2;
area2 = (base * altura)/2;
document.write("El area del triangulo es: " + area2)

