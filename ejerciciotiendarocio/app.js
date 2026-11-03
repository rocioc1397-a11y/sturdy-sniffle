let cantidad=2;
let precio=100;

/*primera condicion*/
if (cantidad>=5 && precio>0){
    console.log("Tenemos stock con un precio de " +precio+ "€");
    document.getElementById("stock").textContent= "Tenemos stock con un precio de " +precio+ "€";
}

/*alternativa a la primera condicion*/
else if (cantidad>=3 || precio>0){
    console.log("Quedan pocas unidades con un precio de" +precio+ " €");
    document.getElementById("stock").textContent= "Quedan pocas unidades con un precio de " +precio+ "€";
}

/*ultima opcion*/
else{
    console.log("No tenemos stock");
    document.getElementById("stock").textContent= "No tenemos stock";
}

