// aqui podemos poner comentarios en una sola fila

/*ya 
puedo
poner
comentarios
multi-linea */

/* console.log  LA MANERA DE MOSTRAR COSAS EN CONSOLA */

console.log("HOLA MUNDO");

console.log(3 + 2);

console.log("hola mundo y amigos de funval");

let var1 = 12;

console.log(var1);

/* CREACION DE VARIABLES Y CONSTANTES */

// var
var pepito = "hola pepito"; //NO DEBE USARSE POR EL SCOPE GLOBAL Q TIENE
console.log(pepito);
// let
let juanito = "hola juanito";
console.log(juanito);
juanito = 77;
console.log(juanito);
//const
const pedrito = "hola pedrito";
console.log(pedrito);
// pedrito = "hola kevin"; NO SE PUEDE REASIGNAR UNA CONSTANTE!!!!!!
/* lower CAMEL CASE */
let apellidoPaterno;
let apellidoMaterno;
let apellidoPaternoAbuelo;

/* TIPOS DE DATOS PRIMITIVOS */
// TENEMOS 7 TIPOS DE DATOS PRIMITIVOS

/* STRING */
let nombre = "Kevin"; // string o cadena de texto
let apellido = "Rodriguez Calderon"; // se toma todos los caracteres incluyendo los espacios

/* NUMBER */
let enteros = 12; //enteros
let decimales = 45.5; //flotantes o decimales
let negativo = -15; //negativos

/* BOOLEAN */
let johan = true; //o es verdadero
let nojohan = false; // o es falso

/* UNDEFINED */
let indefinida;

/* NULL */
let valor_null = null;

/* symbol */
let simbolo = Symbol("numerico2");

/* BIG INT */
let numeroGrande = 21348734958439567349879813749812798347129847912847n;
let numeroGrande2 = BigInt(21348734958439567349879813749812798347129847912847);

console.log(typeof nombre);
console.log(typeof enteros);
console.log(typeof johan);
console.log(typeof indefinida);
console.log(typeof valor_null);
console.log(typeof simbolo);
console.log(typeof numeroGrande);

// 1. Escribe un comentario en una línea

// 2. Escribe un comentario en varias líneas

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

// 4. Imprime por consola el valor de todas las variables

// 5. Imprime por consola el tipo de todas las variables

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/* OPERADORES ARITMETICOS */

/*  SUMA */

let a = 2;
let b = 3;
let resultado = a + b;
let suma = 5 + 2;

/* RESTA */

let resta = b - a;

/* multiplicacion */

let multiplicacion = a * b;

/* division */
let division = a / b;

/* MODULO */
let modulo = a % b;

/* exponencial */
let exponente = a ** b;

/* incremento */
a++; //a=a+1

/* decremento */
a--; //a=a-1

/* OPERADORES DE ASIGNACION */

let var_322 = 23;
var_322 = 34;

/* de suma */

var_322 += 10; /// var_322= var_322 +10

/* de resta */
var_322 -= 5; // var_322= var_322 -5

/* de multiplicacion */
var_322 *= 2; // var_322= var_322 *2
console.log(var_322);

/* de division */
var_322 /= 2;
console.log(var_322); // var_322= var_322 /2

/* OPERADORES DE COMPARACION */

let aa = 10;
let bb = 23;

let resultadito =
  aa == bb; /* ==  FALSE OR TRUE SOLO COMPARA EL DATO MAS NO EL TIPO DE DATO*/
console.log(resultadito);

let resultado1 = aa === bb;
console.log(
  resultado1
); /* ===  FALSE OR TRUE SOLO COMPARA EL DATO y EL TIPO DE DATO*/

/* comparador mayor estricto que */
let resultado2 = aa > bb; /* MAYO ESTRICTO QUE*/
/* comparador mayor igual que */
resultado2 = aa >= bb; /* mayor o igual q */

aa = 60;
bb = 59;

/* comparador menor estricto que */
resultado2 = aa < bb; /* menor ESTRICTO QUE true*/
/* comparador menor igual que */
resultado2 = aa <= bb; /* menor o igual q */

/* OPERADORES LOGICOS */
// AND &&
// OR  ||
//NOT !

let permisoMama = true;
let permisoPapa = false;
let mayorEdad = true;

/* let entrarDiscoteca = permisoMama && mayorEdad;
let salidaCasa = permisoMama || permisoPapa;

resultado = entrarDiscoteca && !salidaCasa; */

resultado = permisoMama && mayorEdad && (permisoMama || permisoPapa);

console.log(resultado);

console.log(!mayorEdad);
/* console.log(salidaCasa); */
/* console.log(entrarDiscoteca); */

/* EJERCICIOS */

let platita = true;
let recomendacion = true;
let bloqueos = true;
let animos = true;
let temploAbierto = false;

let salirBarrio = platita && recomendacion;

animos = !bloqueos && temploAbierto;

let ingresarTemplo = temploAbierto && animos && recomendacion;

let macdonald = true;

let caminar = true;
let cansado = false;

let deporte = caminar && cansado;
let descanso = caminar || cansado;

let internet = true;
let verOnepiece = true;

internet && verOnepiece
  ? console.log("profe feliz")
  : console.log("profesor triste");

let edadPablo = 33;
let edadJeff = 18;

edadJeff > edadPablo
  ? console.log("hermano Jeff es mayor")
  : console.log("hermano Pablo es mayor");

let x = 8;
let y = 6;
let z = 4;

x > y
  ? x > z
    ? console.log("x es el mayor")
    : console.log("z es el mayor")
  : y > z
  ? console.log("y es mayor")
  : console.log("z es mayor");

// 1. Crea una variable para cada operación aritmética

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

// 5. Utiliza el operador lógico and

// 6. Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

let suma1 = 4;
let resta1 = 37;
let division1 = 2;
let multiplicacion1 = 8;

let suma2 = 1;
let resta2 = 2;
let multiplicacion2 = 3;
let division2 = 4;

suma2 += suma1; // suma2 = suma2 + suma1
resta2 -= resta1; // resta2 = resta2 - resta1
division2 /= division1; // division2 = division2/division1
multiplicacion2 *= multiplicacion1; // multiplicacion2 = multiplicacion2 * multiplicacion1

console.log(resta1 > resta2);
console.log(multiplicacion1 === 8);
console.log(multiplicacion2 >= suma2);
console.log(division2 <= multiplicacion1);
console.log(10 < 15);

console.log(!(resta1 > resta2));
console.log(!(multiplicacion1 === 8));
console.log(!(multiplicacion2 >= suma2));
console.log(!(division2 <= multiplicacion1));
console.log(!(10 < 15));

let respuesta = (resta2 && suma2) >= 1; /// (resta2 >= 1) && (suma2 >=1)
respuesta = suma2 < resta2 || division2 <= multiplicacion2;
let combinacion = (suma2 && division2) === true || resta1 > resta2;

/* condicion ? expresionTRUE : expresionFalse; */

resta2 > 20
  ? console.log("resta es mayo q 20")
  : console.log("resta no es mayor a 20");