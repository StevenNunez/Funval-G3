// Calculadora de Steven Nuñez // 

let opcion;
let esNumeroValido = function(valor) {
  let resultado = !isNaN(valor) && valor > 0;
  return resultado; 
};

do {
  opcion = prompt(
    "Calculadora de Steven Areas Geometricas\n" +
    "1) Calcular area del cuadrado\n" +
    "2) Calcular area del rectangulo\n" +
    "3) Calcular area del triangulo\n"
  );

  opcion = parseInt(opcion);

  if (isNaN(opcion) || opcion < 1 || opcion > 3) {
    alert("Error: Ingrese una opción (1, 2 o 3).");
    continue;
  }

 
  switch (opcion) {
    case 1: 
      let lado = prompt("Ingrese lado del cuadrado:");
      lado = parseFloat(lado);
      if (esNumeroValido(lado)) {
        let areaCuadrado = lado * lado; 
        alert(`El área del cuadrado es: ${areaCuadrado}`);
      } else {
        alert("Error");
      }
      break;

    case 2: 
      let baseRect = prompt("Ingrese la base del rectángulo:");
      let alturaRect = prompt("Ingrese la altura del rectángulo:");
      baseRect = parseFloat(baseRect);
      alturaRect = parseFloat(alturaRect);
      if (esNumeroValido(baseRect) && esNumeroValido(alturaRect)) {
        let areaRectangulo = baseRect * alturaRect; 
        alert(`El área del rectángulo es: ${areaRectangulo}`);
      } else {
        alert("Error:");
      }
      break;

    case 3: 
      let baseTri = prompt("Ingrese la base del triángulo:");
      let alturaTri = prompt("Ingrese la altura del triángulo:");
      baseTri = parseFloat(baseTri);
      alturaTri = parseFloat(alturaTri);
      if (esNumeroValido(baseTri) && esNumeroValido(alturaTri)) {
        let areaTriangulo = (baseTri * alturaTri) / 2; 
        alert(`El área del triángulo es: ${areaTriangulo}`);
      } else {
        alert("Error");
      }
      break;
  }

  let continuar = prompt("¿Desea realizar otro cálculo? (sí/no)");
  if (continuar.toLowerCase() !== "sí" && continuar.toLowerCase() !== "si") {
    alert("Gracias por usar la calculadora de Steven!!!");
    break;
  }
} while (true);

