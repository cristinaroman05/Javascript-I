/*
   Completar la función para que, recibida una palabra,
   devuelva el caracter que está en el medio. Si la palabra
   es par, devuelve los dos caracteres.

   Ejemplo: camión => mi

*/

let word = "camión";

function middleCharacter(str){
   
      let middleIndex = word.length / 2 - 1;
      return word.substring(middleIndex, middleIndex + 2);
    }
    


console.log(middleCharacter(word));