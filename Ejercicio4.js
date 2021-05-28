function media1(numeros) {
    var total = 0;
    for (numero1 of numeros) {
        total = total + numero1;
    }
    var longitud = numeros.length;
    var media1 = total / longitud;
    return media1;
}

var numeros = [5,4,6,7,9,10,15];
var resultado = media1(numeros);
var texto = "EL resultado es igual a " + resultado;

console.log(texto);