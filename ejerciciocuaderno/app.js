/*abel>Nombre <input id="nombre" type="text"></label>
  <label>Nota <input id="nota" type="number"></label>
  <button onclick="guardarAlumno()">Guardar alumno</button>
  <p id="contador">Alumnos registrados: 0</p>
  <button onclick="mostrarNotas()">Mostrar notas</button>
  <p id="mensaje"></p>
  <p id="resultado"></p>*/


let alumnos = [];
let notas = [];

function guardarAlumno(){
    let nombre = document.getElementById("nombre").value;
    let nota = document.getElementById("nota").value;
    alumnos.push(nombre);
    notas.push(nota);

    /*mostrar la cantidad de notas que tenemos en el array notas*/
    document.getElementById("contador").textContent = "Alumnos registrados: " + alumnos.length;
}

function mostrarNotas(){
    let mensaje = "";
    for (let i=0; i<alumnos.length; i++){
        mensaje += alumnos[i] + ": " + notas[i];
    }
    document.getElementById("mensaje").textContent = mensaje;
}




let arrayFrutas = ["fresa","manzana","naranja","pera"];

function agregarFruta(){
    let fruta = document.getElementById("agregarFruta").value;
    arrayFrutas.push(fruta);
}

function mostrarFrutas(){
    let mensajeConFrutas = " ";
    for (let i=0; i<arrayFrutas.length; i++){
        mensajeConFrutas += arrayFrutas[i] + " ";
    }
    document.getElementById("frutas").textContent = mensajeConFrutas;
}