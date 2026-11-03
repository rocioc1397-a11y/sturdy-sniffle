let dinero=15;
let buenTiempo=true;
let tipoPlan;

/*Tomar una decisión*/
if(dinero>=20 && buenTiempo){
    tipoPlan= "excursion";
    console.log("tipoPlan");
}

else if (dinero>=10){
    tipoPlan = "cine";
    console.log("tipoPlan");
}

else {
    tipoPlan = "casa";
    console.log("tipoPlan");
}

/*Mostrar el resultado con un switch*/
switch(tipoPlan){
    case "excursion":
        mensaje = "¡Nos vamos de excursion!";
        console.log("¡Nos vamos de excursion!");
        break;

    case "cine":
        mensaje = "¡Vamos al cine!";
        console.log("¡Vamos al cine!");
        break;

    case "casa":
        mensaje ="Hoy toca plan en casa";
        console.log("Hoy toca plan en casa");
        break;
    
    default: 
    mensaje = "No hay ningún plan disponible";
    console.log("No hay ningún plan disponible");
}


   
