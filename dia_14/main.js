let frutas = ["manzana", "platano", "naranjas" , "peras" , ];
console.log(frutas);

let numeros = ["1", "2", "3", "4", "5"]
console.log(numeros)

numeros.push("6")
console.log(numeros)

let notas=[100,89,20,45,52];



let numerosx = ["50", "222", "3", "46", "56"]

let dobles = [];

let i = 0;
do {
  let numero = parseFloat(numerosx[i]) * 2;
  dobles.push(numero);
  i++;
} while (i < numeros.length);

console.log("Array original:", numerosx);
console.log("Array con dobles:", dobles); 



let notasFunval = [100, 90, 10, 15, 67, 70, 0, 88];

let suma = 0;
let cantidadNotas = 0;


notasFunval.forEach((nota) => {
  suma = suma + nota;
  cantidadNotas++;
});


let promedio = suma / cantidadNotas;


console.log("Notas:", notasFunval);
console.log("Suma de las notas:", suma);
console.log("Cantidad de notas:", cantidadNotas);
console.log("Promedio de las notas:", promedio); 


array
includes

map
slice

find
filter
