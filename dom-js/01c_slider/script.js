/**
 - Crear una variable imagenActual, e iniciarla en 1
 - Crear una funcion avanzarImagen, que lo que haga es subir en 1 imagenActual,
 si imagenActual esta en 5, debe cambiarla a 1, luego debe llamar a
 la funcion actualizarImagen
 - Crear una funcion retrocederImagen, que lo que haga es disminuir en 1 imagenActual,
 si imagenActual esta en 1, debe cambiarla a 5, luego debe llamar a
 la funcion actualizarImagen
 - Crear una funcion actualizarFuncion, que obtenga el elemento html con
 id "imagen-animal" y reemplace su atributo "src" por "imagen_X.jpg", donde X
 es el valor de la variable imagenActual
 */

let imagenActual = 1;

let actualizarImagen = function () {
    let image = document.getElementById('imagen-animal');
    image.src = `imagen_${imagenActual}.jpg`;
}

let actualizarFuncion = function () {
    let title = document.getElementById(`title_${imagenActual}`);
    title.classList.toggle("hidden");
}

let avanzarImagen = function () {
    actualizarFuncion();
    if (imagenActual === 5) {
        imagenActual = 1;
    } else {
        imagenActual++;
    }
    actualizarFuncion();
    actualizarImagen();
}

let retrocederImagen = function () {
    actualizarFuncion();
    if (imagenActual === 1) {
        imagenActual = 5;
    } else {
        imagenActual--;
    }
    actualizarFuncion();
    actualizarImagen();
}
