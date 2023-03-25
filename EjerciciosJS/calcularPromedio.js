let nota1 = parseFloat(prompt("Ingrese la primera nota: "))
let nota2 = parseFloat(prompt("Ingrese la segunda nota: "))
let nota3 = parseFloat(prompt("Ingrese la tercera nota: "))
let promedio;
promedio = (nota1+nota2+nota3)/3;

document.write("Su promedio es: " ,promedio)
    if(promedio >= 3){
        console.log("Aprobo")
    }
    else{
        console.log("Reprueba")
    }