<<<<<<< HEAD
const campoTitulo = document.getElementById('inputTitulo');
const campodescripcion = document.getElementById('inputDescp');
const campoHora = document.getElementById('InputHora');
const formulariotareas = document.getElementById('form');
const cuerpoTabla = document.getElementById('cuerpoTabla');
const datosModal = document.getElementById('datosModal');
let Tareas = [];

const guardarLocalStorage = (datos) => {
    localStorage.setItem('Tareas', JSON.stringify(datos))
};

const recuperarLocalStorage = () => {
    Tareas = JSON.parse(localStorage.getItem('Tareas'));
    if (Tareas == null) Tareas = [];
    mostrarTareas();
};
//! CREATE
const guardarTarea = (datostareas) => {
    Tareas.push(datostareas);
=======
//const input = document.getElementById('input');

//function imprimeValorInput() {
//   console.log(input.value);
//}

//const seleccionClase = [...document.getElementsByClassName('clase')];

//const seleccionQuery = document.querySelector('#input.clase');


//Eventos
//let miBoton = document.getElementById('boton1');

//function miFuncion(event) {
// Con innerHTML
//  divImagenes.innerHTML += `<img src ="${src}" style = "${style}" />`;
/* miBoton = document.getElementById('boton1');
miBoton.addEventListener('click', miFuncion) */
//;
//}
//let miBoton = document.getElementById('buton1')
//miBoton.addEventListener('click', miFuncion);


const TareaForm = document.getElementById('Tarea-form');
const inputTitulo = document.getElementById('inputTitulo');
const inputDescp = document.getElementById('inputDescp');
const inputHora = document.getElementById('inputHora');
const bodyTabla = document.getElementById('body-tabla');
const Tareas = [{
    Titulo: '',
    Descripcion: '',
    Hora: '',
}];



function agregarTarea(Titulo, Descripcion, Hora) {
    Tareas.push({
        Titulo: Titulo,
        Descripcion: Descripcion,
        Hora: Hora,
    })
}


//function eliminarTarea(indice) {
//  Tareas.splice(indice, 1)
//mostrarTareas();

let miBoton = document.getElementById('buton1')
miBoton.addEventListener('click', mostrarTareas);
//}

function mostrarTareas() {
    bodyTabla.innerHTML = '';
    Tareas.forEach(function(Tarea, indice) {
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
    Tareas[indice].Titulo = prompt('Actualiza el Título de tarea.');
    Tareas[indice].Descripcion = prompt('Modifica la descripción de la Tarea');
    Tareas[indice].Hora = prompt('Remplaza el horario');

>>>>>>> df97a823c7fb268bbb01fea7b109c2cc5ac50ff8
    mostrarTareas();
};

<<<<<<< HEAD
//!READ
const mostrarTareas = () => {
    if (Tareas.length === 0) {
        return;
=======

TareaForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (inputTitulo.value.trim() !== '' && inputDescp.value.trim() !== '' && inputHora.value.trim() !== '') {

        bodyTabla.innerHTML = '';

        agregarTarea(Titulo.value, Descp.value, Hora.value);

        mostrarTareas();

        event.target.reset();
    } else {
        alert('Los 3 campos son obligatorios');
>>>>>>> df97a823c7fb268bbb01fea7b109c2cc5ac50ff8
    }
    cuerpoTabla.innerHTML = Tareas.reduce((tit, tarea, index) => {
        return tit + `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${tarea.Titulo}</td>
            <td>${tarea.Descripcion}</td>
            <td>${tarea.Hora}</td>
            <td>
            
            <button class="btn btn-warning" onclick="editarTarea(${index})">Editar</button>
            <button class="btn btn-danger" onclick="eliminarTarea(${index})">Eliminar</button></td>
        </tr>
        `
    }, '');

   
    guardarLocalStorage(Tareas)
};

//! UPDATE
const editarTarea = (indice) => {
    const { Titulo, Descripcion, Hora } = Tareas[indice];
    const nuevoTitulo = prompt('Cambiar nombre de la tarea', Titulo);
    const nuevaDescrp = prompt('cambiar comentarios en la tarea', Descripcion);
    const nuevaHora = prompt('Agregar nueva hora "00:00 (am-pm)"', Hora)
    
    Tareas[indice] = {
        Titulo: nuevoTitulo,
        Descripcion: nuevaDescrp,
        Hora: nuevaHora,
    }
    mostrarTareas();
    alert('Se actualizó correctamente.')
};
//! DELETE
const eliminarTarea = (indice) => {
    if (confirm('¿Desea eliminar el elemento?')) {
        Tareas.splice(indice, 1);
        mostrarTareas();
        alert('Se eliminó correctamente.')
    }
};

formulariotareas.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!campoTitulo.value || !campodescripcion.value) {
        alert('Oye, ambos datos son requeridos.')
        return;
    }
    guardarTarea({
        Titulo: campoTitulo.value,
        Descripcion: campodescripcion.value,
        Hora: campoHora.value,
    });
    formulariotareas.reset();
});

recuperarLocalStorage();