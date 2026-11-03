/*
  PRÁCTICA: EVALUADOR DE CALIFICACIONES

  Completa los apartados indicados.
  Utilizaremos IF, ELSE IF, ELSE y SWITCH.

  La función evaluarNota() ya está preparada.
  No necesitas modificarla ni entender todavía
  cómo se crean las funciones.
*/

function evaluarNota() {
  // 1. OBTENER LOS DATOS DEL HTML
  const nombre = document.getElementById("nombre").value;
  const notaTexto = document.getElementById("nota").value;
  const nota = Number(notaTexto);

  // 2. DECLARAR VARIABLES
  let calificacion = "";
  let mensaje = "";

  // 3. COMPROBAR QUE LA NOTA ES VÁLIDA
  // Esta parte ya está resuelta.
  if (notaTexto.trim() === "" || nota < 0 || nota > 10) {
    document.getElementById("resultado").textContent =
      "Introduce una nota válida entre 0 y 10.";
    document.getElementById("mensaje").textContent = "";
    return;
  }

  // 4. TU TURNO: IF...ELSE IF...ELSE
  // Escribe aquí las condiciones para asignar calificacion.

if(nota>=9){
    calificacion = "Sobresaliente";
}
else if(nota>=7){
    calificacion = "Notable";
}
else if(nota>=6){
    calificacion = "Bien";
}
else if(nota>=5){
    calificacion = "Suficiente";
}
else{
    calificacion = "Suspenso";
}


  // 5. TU TURNO: SWITCH
  // Escribe aquí los casos para asignar mensaje.

switch(calificacion){
    case "Sobresaliente":
        mensaje= "Excelente trabajo";
        break;
}
switch(calificacion){
    case "Notable":
        mensaje= "Muy buen resultado";
        break;
}
switch(calificacion){
    case "Bien":
        mensaje= "Buen trabajo";
        break;
}
switch(calificacion){
    case "Suficiente":
        mensaje= "Has conseguido aprobar";
        break;
}
switch(calificacion){
    case "Suspenso":
        mensaje= "Necesitas seguir practicando";
        break;
}


  // 6. MOSTRAR RESULTADOS EN HTML
  // Esta parte ya está resuelta.
  document.getElementById("resultado").textContent =
    nombre + ", has obtenido un " + calificacion +
    " con una nota de " + nota + ".";
  document.getElementById("mensaje").textContent = mensaje;
}