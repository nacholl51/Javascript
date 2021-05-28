var dato1 = prompt("Intoduce el primer número:");
var dato2 = prompt("Introduce el segundo número:");
var operacion = prompt("Intoduce la operación a realizar:")


var numero1 = parseInt(dato1);
var numero2 = parseInt(dato2);

var resultado = null;
var texto = null;

if(operacion === "+"){
//operación de sumar el número1 y el número2
    resultado = numero1 + numero2;
    texto = "La suma de " + numero1 + " y " + numero2 + " es igual a " + resultado;
} else if (operacion === "-") {
    resultado = numero1 - numero2;
    texto = "La resta de " + numero1 + " y " + numero2 + " es igual a " + resultado;
} else if (operacion === "*") {
    resultado = numero1 * numero2;
    texto = "La multiplicación de " + numero1 + " y " + numero2 + " es igual a " + resultado;
} else if (operacion === "/") {
    resultado = numero1 + numero2;
    texto = "La división de " + numero1 + " y " + numero2 + " es igual a " + resultado;
} else {
    texto = "Operación no permitida" }

alert(texto)
console.log(texto);