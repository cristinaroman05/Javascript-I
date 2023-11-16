/*
    Completar el código de la función para que 
    devuelva la frase recibida sin el primer y último parámetro.

*/

let sentence = 'Hola Don Pepito, hola Don José';

function deleteFirsLast(str){
    return str.substring(1, str.length - 1);
}

console.log(deleteFirsLast(sentence));
