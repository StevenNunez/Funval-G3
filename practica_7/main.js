/* Ejercicios de Métodos de Arrays */

const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
];

/* 1) Recorrer y mostrar productos (forEach) */

console.log("1) Lista de productos:");
productos.forEach(producto => {
    console.log(`Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
});

/* 2) Crear un array de nombres de productos y verificar disponibilidad (map + includes)*/

let productosDisponibles = productos.map(producto => producto.nombre);
console.log("2) Nombres de productos disponibles:", productosDisponibles);

/* Verificar si un producto está disponible*/

let productoBuscado = "Webcam";
let estaDisponible = productosDisponibles.includes(productoBuscado);
console.log(`¿${productoBuscado} está disponible? ${estaDisponible ? "Sí" : "No"}`);

/* 3) Aplicar un descuento a los productos (map) */

let productosConDescuento = productos.map(producto => ({
    nombre: producto.nombre,
    precio: producto.precio * 0.9 
}));
console.log("3 Productos con 10% de descuento:");
console.log(productosConDescuento);

/* 4) Filtrar productos por precio (filter)*/

let productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("4) Productos con precio menor a $100:");
console.log(productosBaratos);

/* 5) Obtener los primeros productos (slice) */

let primerosProductos = productos.slice(0, 2);
console.log("5) Primeros 2 productos:");
console.log(primerosProductos);

/* 6) Ordenar productos por precio (sort)*/ 
let productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log("6) Productos ordenados por precio (menor a mayor):");
console.log(productosOrdenados);

/* 7) Invertir el orden de los productos (reverse)*/

let productosInvertidos = [...productos].reverse();
console.log("7) Productos en orden inverso:");
console.log(productosInvertidos);