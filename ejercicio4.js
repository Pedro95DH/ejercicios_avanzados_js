// 1. Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

// Haz varios ejemplos y compruébalos.

function findArrayIndex(main, text) {
  for (let i = 0; i < main.length; i++) {
    if (main[i] === text) {
      return i;
    }
  }
  return -1;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Luke"),"\n");

// 2. Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

// Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.


//HACIENDOLO DE MANERA RUDIMENTARIA:

function removeItem(main, text) {
  const newMain = [];
  for (const character of main) {
    if (character !== text){
      newMain.push(character);
    }
  }
  return newMain;
}

console.log(removeItem(mainCharacters, "Anakin"),"\n");

//HACIENDOLA LO MAS RESUMIDO POSIBLE:

mainCharacters.splice(findArrayIndex(mainCharacters, "Anakin"), 1);

console.log(mainCharacters);
