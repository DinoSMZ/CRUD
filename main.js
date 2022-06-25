const input = document.getElementById('input');

function imprimeValorInput() {
    console.log(input.value);
}

const seleccionClase = [...document.getElementsByClassName('clase')];

const seleccionQuery = document.querySelector('#input.clase');


//Eventos
let miBoton = document.getElementById('boton1');

function miFuncion(event) {
    // Con innerHTML
    divImagenes.innerHTML += `<img src ="${src}" style = "${style}" />`;
    /* miBoton = document.getElementById('boton1');
    miBoton.addEventListener('click', miFuncion) */
    ;
}

miBoton.addEventListener('click', miFuncion);


const TareaForm = document.getElementById('Tarea-form');
const inputTitulo = document.getElementById('inputTitulo');
const inputDescp = document.getElementById('inputDescp');
const inputHora = document.getElementById('inputHora');
const bodyTabla = document.getElementById('body-tabla');
const Tareas = [{
        Titulo: '',
        Descripcion: '',
        Hora: '',
    },
    {
        Titulo: '',
        Descripcion: '',
        Hora: '',
    },
];


function agregarTarea(Titulo, Descripcion, Hora) {
    Tareas.push({
        Titulo,
        Descripcion:Descripcion,
        Hora: Hora,
    })
}

function eliminarTarea(indice) {
    Tareas.splice(indice, 1)
    mostrarTareas();


}

function mostrarTareas() {
    bodyTabla.innerHTML = '';
    Tareas.sforEach(function(Tarea, indice) {
        bodyTabla.innerHTML += `<tr>
        <th scope="row">${indice + 1}</th>
        <td>${Tareas.Titulo}</td>
        <td>${Tareas.Descripcion}</td>
        <td>${Tareas.Hora}</td>
        <td>
        <button class="btn btn-warning" onclick="editarTarea(${indice})">editar</button>
        <button class="btn btn-danger" onclick="eliminarTarea(${indice})">eliminar</button>        
        </td>
        </tr>`
    })
}

function editarTarea(indice) {
    Tareas[indice].nombre = prompt('Actualiza el Título de tarea.');
    Tareas[indice].apellido = prompt('Modifica la descripción de la Tarea');
    Tareas[indice].telefono = prompt('Remplaza el horario');

    mostrarTareas();
}


TareaForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (inputTitulo.value.trim() !== '' && inputDescp.value.trim() !== '' && inputHora.value.trim() !== '') {

        bodyTabla.innerHTML = '';

        agregarTarea(inputTitulo.value, inputDescp.value, inputHora.value);

        mostrarTareas();

        event.target.reset();
    } else {
        alert('Los 3 campos son obligatorios');
    }
});

mostrarTareas();