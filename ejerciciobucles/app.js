let condicion = 1;

while (condicion<6){
    console.log("La condición es menor que 6");
    console.log(condicion);
    condicion = condicion +1; //actualizo el contador
}

let numeroAleatorio = 8;
let numeroIntroducido= Number(prompt("Introduce un número menor que 10"));

while (numeroIntroducido!=numeroAleatorio){
    numeroIntroducido = Number(prompt("Introduce un número menor que 10"));
}
alert ("¡Has adivinado el número!");