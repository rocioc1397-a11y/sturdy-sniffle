/*Combinar arrays y objetos*/
const productos = [
  { nombre: "Ratón", precio: 15, cantidad: 2 },
  { nombre: "Teclado", precio: 30, cantidad: 3 },
  { nombre: "Monitor", precio: 150, cantidad: 4 }
];

for (const producto of productos){
    console.log("este es el nombre de producto: " + producto.nombre)
    console.log("este es el precio de producto: " + producto.precio)
    console.log("este es la cantidad de producto: " + producto.cantidad)
}

/*Consultar un producto concreto*/
productos[1].nombre;
console.log(productos[1]);

/*Cuántos productos cuestan más de 20€*/
let contador = 0;
for (const producto of productos){
    if (producto.precio >20){
        contador++;
    }
}
console.log("Productos que cuestan más de 20€: " + contador)

/*Localizar un producto que cueste más de 20€*/
const encontrado = productos.find (producto => producto.precio >20);
console.log(encontrado);

/*Localizar productos que cuesten más de 25€*/
const productosCaros = productos.filter (producto => producto.precio >25);
console.log(productosCaros);

/*Bucle que entra en el array de productos caros y lo recorre*/
for (const producto of productosCaros) {
    console.log("Producto caro: " + producto.nombre)
} 

/*Añadir un elemento al array*/
productos.push({
    nombre: "Impresora",
    precio: 90,
    cantidad: 2,
})
console.log(productos);

/*Mostrar las propiedades*/
for (const propiedad in productos [3]){
    console.log(productos);
}

/*Mostrar los valores del producto 3*/
for (const propiedad in productos [3]){
    console.log(productos[3][propiedad]);
}

/*Aprendemos object key, object values y object entries*/
let falda ={
    nombre: "Falda",
    cantidad: 10,
    precio: 25
}
/*Nos muestra las propiedades del objeto*/
console.log(Object.keys(falda));

/*Nos muestra los valores del objeto*/
console.log(Object.values(falda));

/*Noes muestra los pares [propiedad, valor] del objeto*/
console.log(Object.entries(falda));