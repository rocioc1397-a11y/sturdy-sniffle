let precios = [10, 20, 50];

let preciosRebajados = precios.map(function(precio) {
  return precio * 0.85;
});

/*precios originales*/
console.log(precios);
/*precios rebajados al 85%*/
console.log(preciosRebajados);

let preciosCaros = precios.filter(function(precio) {
  return precio > 30;
});

/*precios mayores a 30*/
console.log(preciosCaros);

let precio30 = precios.find(function(precio) {
  return precio === 30;
});
console.log(precio30);

let precio20 = precios.findIndex(function(precio) {
  return precio === 20;
});
console.log(precio20);

let precio50 = precios.includes(50);
console.log(precio50);

const total = precios.reduce((suma,precio) => suma + precio, 0);
console.log(total);


let carrito = ["pan, leche, huevos"];
let eliminado = carrito.splice(1, 1);
console.log(eliminado);
console.log(carrito);

carrito.splice(1,0, "mantequilla, queso, tomate");
/*carrito actualizado*/
console.log(carrito);

carrito.splice(2,0, "harina");
console.log(carrito);
