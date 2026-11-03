document.getElementById("saludo").textContent = "Hola, soy Rocío";

let muchosParrafos = document.querySelectorAll(".mensaje");
console.log(muchosParrafos);

muchosParrafos.forEach(miParrafito =>{
    miParrafito.textContent = "soy un párrafo capturado por un querySelectorAll"
})

let hora = new Date().getHours() + ":" 
+ new Date ().getMinutes() + ":" 
+ new Date().getSeconds() + ". " 
+ new Date().getDate() + "/" 
+ (new Date().getMonth() +1) + "/" 
+ new Date().getUTCFullYear() + " aquí soy UTC: " 
+ new Date().toUTCString();

if (hora < "12:00")
    document.getElementById("saludo").textContent = "Buenos días. La hora actual es " + hora;
else if (hora < "18:00")
    document.getElementById("saludo").textContent = "Buenas tardes. La hora actual es " + hora;
else 
    document.getElementById("saludo").textContent = "Buenas noches. La hora actual es " + hora;

/*Función para mostrar la ficha del curso seleccionado*/
function mostrarCurso(opcion){
    const ficha = document.getElementById("ficha");

    if (opcion === "html"){
        ficha.innerHTML = "<h3>HTML esencial </h3>" +
        "<p> Aprende a estructurar páginas web.</p>" + 
        "<p>Este curso es fundamental para cualquier desarrollador web.</p>";
    }
    else {
        ficha.innerHTML = "<h3>JavaScript esencial </h3>" +
        "<p>Haz que tus páginas respondan.</p>";
    }
}



