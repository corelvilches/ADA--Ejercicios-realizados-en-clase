/**
 * - Crear una variable biblioteca, que sea un array que contenga
 * tres arrays
 * - Hacer que cuando se haga click en uno de los elementos "seleccion"
 * a ese elemento se le agregue la clase "seleccionado", y a los otros
 * elementos que tengan esa clase que se la saque
 * - Crear una variable libroSeleccionado, y hacer que cuando se haga
 * click en uno de los libros seleccionables, se guarde en dicha variable el
 * libro que contiene
 * - Hacer que cuando se haga click en uno de los elementos con clase "estante", se agregue
 * al array correspondiente el libro guardado en la variable libroSeleccionado,
 * hasta un maximo de 5 libros por estante
 * - Hacer una funcion actualizarBiblioteca, que recorra el array biblioteca
 * y vaya agregando a los nodos de clase "estante" un elemento div de clase "libro"
 * con los items del array
 */

const biblioteca = [[], [], []];

const librosSeleccionables = document.getElementsByClassName('libro-seleccionable');
const estantes = document.getElementsByClassName('estante');
let libroSeleccionado = '';


for (let libro of librosSeleccionables) {
    libro.onclick = function () {
        for (seleccionado of librosSeleccionables) {
            seleccionado.classList.remove('seleccionado');
        }
        libroSeleccionado = libro.innerHTML;
        libro.classList.add('seleccionado');
    }
}

for (let i = 0; i < estantes.length; i++) {
    estantes[i].onclick = function () {
        if (biblioteca[i].length < 5) {
            biblioteca[i].push(libroSeleccionado);
            actualizarBiblioteca();
        }
    }
}

const actualizarBiblioteca = function () {
    for (let i = 0; i < biblioteca.length; i++) {
        estantes[i].innerHTML = null;
        for (let j = 0; j < biblioteca[i].length; j++) {
            const libro = document.createElement('div');
            libro.classList.add('libro');
            libro.innerHTML = biblioteca[i][j];
            estantes[i].appendChild('libro');
        }
    }
}