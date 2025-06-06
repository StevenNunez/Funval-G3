/*let frutas = ["manzana", "platano", "naranjas" , "peras" , ];
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
filter */

/* tenemos un array de estudiantes con diferentes notas quiero q me muestre un listado
de los estudiantes aprobados, se considerara aprobado aquel q tenga un promedio mayor a 51 */


let estudiantes = [
  {
    nombre: "Marco",
    edad: 22,
    pais: "Peru", //estudiantes[0]
    notas: [100, 90, 0, 51, 85],
  },
  {
    nombre: "Pablo",
    edad: 33,
    pais: "Argentina", //estudiantes[1]
    notas: [90, 75, 0, 0, 10],
  },
  {
    nombre: "Thomas",
    edad: 21, //estudiantes[2]
    pais: "Argentina",
    notas: [51, 30, 20, 41, 85],
  },
  {
    nombre: "Woodleine",
    edad: 33, //estudiantes[2]
    pais: "Chile",
    notas: [88, 11, 33, 77, 99],
  },
  {
    nombre: "Kevin",
    edad: 28, //estudiantes[2]
    pais: "Bolivia",
    notas: [31, 30, 12, 51, 77],
  },
];

/*
console.log("Estudiantes aprobados (promedio > 51):");

for (let index = 0; index < estudiantes.length; index++) {
  let suma = 0;
  for (let index2 = 0; index2 < estudiantes[index].notas.length; index2++) {
    suma += estudiantes[index].notas[index2];
  }
  let promedio = suma / estudiantes[index].notas.length;
  
  if (promedio > 51) {
    console.log(`Nombre: ${estudiantes[index].nombre}, País: ${estudiantes[index].pais}, Promedio: ${promedio.toFixed(2)}`);
  }
}
  */


/* del array de estudiantes mostrar a todos los estudiantes que pertenezcan al pais de argentina */



let estudiantesArgentina = estudiantes.filter(estudiante => estudiante.pais === "Argentina");


console.log("Estudiantes de Argentina:");