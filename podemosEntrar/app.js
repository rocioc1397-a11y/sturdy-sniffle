let edad;
let mensaje; 

function comprobarAcceso (){
edad =  document.getElementById("edad").value
if (edad >=18){
    document.getElementById("mensaje").textContent = "🎉 ¡Bienvenido, puedes entrar!"
}

else{
    document.getElementById("mensaje").textContent = "⛔ No puedes entrar"
}
}