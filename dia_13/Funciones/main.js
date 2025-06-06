

let numero;

do{
  numerox = prompt("ingresa numero");
  numero = parseFloat(numero);
} while (numero >= 0);

console.log("se encontro numero")



/* ejercicios BUCLES */
/* 
    WHILE
1 Contar del 1 al 10:
2 Sumar los primeros 5 números:
    DO WHILE
3 Pedir un número hasta que el usuario escriba 0:
4 Pedir al usuario una contraseña hasta que acierte:
6 Leer números hasta que se escriba uno negativo:
    FOR
5 Contar hacia atrás del 5 al 1:
7 Mostrar los números pares del 1 al 20:
8 Mostrar la tabla del 5:
9 Contar de 10 a 1:

*/
/* 
let numeroInicial = 1;

while (numeroInicial <= 10) {
  console.log(numeroInicial);
  numeroInicial++;
}

numeroInicial = 0;
resultado = 0;

while (numeroInicial <= 5) {
  resultado = resultado + numeroInicial;
  numeroInicial++;
}
console.log(resultado); */

/* do while ejercicios */
/* let swich = true;
do {
  let datoUsuario = parseInt(prompt("ingresa un numero"));
  if (datoUsuario === 0) {
    swich = false;
  }
} while (swich);
alert("lograste salir de la matrix"); */

/* ejercicio contraseña correcta */
/* let swich = true;
do {
  let contraseña = prompt("ingresa tu contraseña");
  let contraseñaHasheada = "chanchito feliz";
  if (contraseña === contraseñaHasheada) {
    swich = false;
  } else {
    swich = true;
  }
} while (swich);

alert("FELICIDADES CONTRASEÑA CORRECTA"); */

//5 Contar hacia atrás del 5 al 1:

/* let numero = 5;

for (let index = 5; index >= 1; index--) {
  console.log(numero);
  numero--;
} */

/* ejercicios de funciones  */

function saludar() {
  console.log("hola amigos bienvenidos a este curso de JS");
}

saludar();

/* ejemplo con párametros */

function saludarNombre(nombre) {
  console.log("hola cm estas " + nombre + " querido amigo");
}

saludarNombre("Kevin");
saludarNombre("Thomas");
saludarNombre("Alan");

/* ejemplo con mas de 1 parametro */
function sumarVariables(a, b, c) {
  let resultado = 0;
  resultado = a + b + c;
  console.log(resultado);
}
