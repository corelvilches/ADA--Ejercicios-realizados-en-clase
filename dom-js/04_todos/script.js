/**
 * - Crear una función agregarTodo que appendee al elemento con id todos-container
 * el siguiente html:
 *
 * `<div class="card mb-3">
 *     <div class="card-header">
 *         Titulo Tarea
 *     </div>
 *     <div class="card-body">
 *         <p class="card-text">Descripcion tarea</p>
 *     </div>
 * </div>`
 * 
 * Donde "Titulo tarea" y "Descripcion tarea" son reemplazados por los valores
 * de los inputs correspondientes. Si alguno de los campos está vacío, no debe 
 * agregar el todo.
 * 
 * - Crear una función eliminarTodos que borre todos los todos del elemento todos-container
 * - Bindear las funciones con los botones correspondientes
 */

let todosContainer = document.getElementById('todos-container');


let agregarTodo = function () {

    let input = document.getElementById('todo-title');
    let title = input.value;

    let textArea = document.getElementById('todo-description');
    let description = textArea.value;

    if (input.length > 0 || description.length > 0) {
        todosContainer.innerHTML += `<div class="card mb-3">
        <div class="card-header">
            ${title}
        </div>
        <div class="card-body">
            <p class="card-text">${description}</p>
        </div>
    </div>`;

    } else {
        todosContainer.innerHTML = `<div class="col-6" id="todos-container">
        </div>`
    }
}

let eliminarTodos = function () {
    todosContainer.innerHTML = `<div class="col-6" id="todos-container">
                                </div>`
}