let historial;
let contador = 0;
function lanzarDado(){
    /*Lanzar el dado*/
    let dado = Math.floor(Math.random() * 6) + 1;
    /*Mostrar el resultado del dado*/
    document.getElementById("resultado").textContent = "Tu dado es " + dado;
    /*Mostrar mensaje según resultado*/
    let mensaje = "";

if(dado===6){
    mensaje = "¡Enhorabuena! Has ganado";
    document.getElementById("mensaje").textContent = mensaje;
}
else{
    mensaje = "No has sacado un 6. Intentalo de nuevo";
    document.getElementById("mensaje").textContent = mensaje;
}
contador++
historial = "Lanzamiento " + contador + ": tu resultado es " + dado;
document.getElementById("historial").textContent = historial;
}







