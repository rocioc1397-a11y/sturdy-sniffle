let colores = ["rojo", "verde", "azul"];

let frutas =[];

/*recorre los elementos del array*/
for (let i=0; i<colores.length; i++){
    console.log(colores[i]);
}

/*me devuelve los elementos del array*/
for (let elementoDelArray of colores){
    console.log(elementoDelArray);
}

/*me devuelve los indices del array*/
for (let elementoDelArray in colores){
    console.log(colores [elementoDelArray]);
}

frutas.push("manzana");