let alumnos = [
    {nombre: "Juan", edad: 20},
    {nombre: "Maria", edad: 22},
    {nombre:"Pedro", edad: 21}
]
//mostramos en el navegador en el contenedor de "alumnos"//

const contenedorAlumnos = document.getElementById("alumnos");
alumnos = recuperarAlumnosLocal() || alumnos;

for (const alumno of alumnos){
    contenedorAlumnos.innerHTML += `<p>Nombre: ${alumno.nombre}, Edad: ${alumno.edad}</p>`;
}

function agregarAlumno(){
    /*obtenemos los valores de los inputs*/
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;

    /*agrega al alumno al nuevo array*/
    alumnos.push({nombre, edad});
    contenedorAlumnos.innerHTML +=`<p>Nombre: ${nombre}, Edad: ${edad}</p>`;

    guardarAlumnosLocal();
   
    /*limpiar los inputs despues de agregar el alumno*/
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
}

/*guardar alumnos en Local Storage con los metodos stringfy y setItem*/
function guardarAlumnosLocal(){
    const alumnosGuardadosJson = JSON.stringify(alumnos);
     localStorage.setItem("alumnosGuardadosLocal", alumnosGuardadosJson);
}

function recuperarAlumnosLocal(){
    const alumnosRecuperadosJson = localStorage.getItem("alumnosGuardadosLocal");

    if (alumnosRecuperadosJson){
        const alumnosRecuperados = JSON.parse(alumnosRecuperadosJson);
        alumnos = alumnosRecuperados;
}
}

guardarAlumnosLocal();
