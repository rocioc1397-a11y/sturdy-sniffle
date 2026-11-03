let edad=20;
let plazas=15;
let precio=20;
let estudiante= false;
let descuento=true;

if(plazas<5){
    console.log("¡Últimas plazas!");
    document.getElementById("plazas").textContent="¡Últimas plazas!";
}

else if(plazas>5 && edad>=18){
    console.log("Puedes reservar");
    document.getElementById("edad").textContent="Puedes reservar";
}

if(edad<18){
    console.log("Tienes que ser mayor de edad");
    document.getElementById("edad").textContent="Debes ser mayor de edad"
}

else{
    console.log("Plazas disponibles");
    document.getElementById("plazas").textContent= "Plazas disponibles"
}


let mensaje;
mensaje= estudiante? "Tienes descuento estudiante" : "Tienes que pagar el precio estándar";
document.getElementById("precio").textContent=mensaje;