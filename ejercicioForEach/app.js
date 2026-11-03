/*Declaración de arrays*/
let precios = ["10,20,30,40"];

precios.forEach(function(precio) {
    let precioIva = precio * 1.21;
    precioIva.push(precioIva);
    console.log(precioIva);
});


