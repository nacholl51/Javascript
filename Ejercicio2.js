var dato1 = prompt("Introduce el valor máximo:");

var maximo = parseInt(dato1);

var numero = 0;
var texto = "";

while(numero < (maximo + 1)){
    if (numero % 2 === 0){
        texto = texto + numero + " ";
    }
    numero = numero + 1;
}

textofinal = "Los números paers entre 0 y " + maximo + " son : \n" + texto;

alert(textofinal);
console.log(textofinal);
