/*Definición de un objeto*/
function calcularTotal (){
    return this.precio * this.cantidad;
}


let producto1 = {
  nombre: "Falda",
  precio: 25,
  disponible: true,
  cantidad: 2,
  calcularTotal: calcularTotal
};

console.log(producto1.calcularTotal());

let producto2 = {
    nombre: "Pantalón",
    precio: 20,
    disponible: true,
    cantidad: 1,
    calcularTotal: calcularTotal
}

console.log(producto2.calcularTotal());

// producto.calcularTotal(producto);
// console.log(producto.calcularTotal(producto));

// console.log(producto);

// /*Accediendo a las propiedades del producto*/
// producto.nombre;
// producto.precio;
// producto.disponible;
// console.log(producto.nombre);
// console.log(producto.precio);
// console.log(producto.disponible);

// /*Añadiendo nuevas propiedades al objeto*/
// producto.talla = "M"; 
// console.log(producto.talla);

// /*Accediendo a la nueva propiedad*/
// producto.talla="XL";
// console.log(producto.talla);

// /*Borrar una propiedad del objeto*/
// delete producto.disponible;
// console.log(producto);



