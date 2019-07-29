/**
 Hacer que cuando se haga click en los puntos de control del slider,
 cambie a la imagen y al titulo correspondiente, y se ponga la clase
 "selected" en el punto de control clickeado y se elimine de los demás,
 usando para eso una funcion con nombre cambiarImagen, que tome por parámetro
 el número de la imagen a la que se desea cambiar
 */

let numeroImagenAnterior = 1;

let cambiarImagen = function(numeroImagen) {

    let image = document.getElementById('imagen-animal');
    image.src = `imagen_${numeroImagen}.jpg`;
   
    let dotAnt = document.getElementById(`dot_${numeroImagenAnterior}`);
    dotAnt.classList.remove("selected");

    let titleAnt = document.getElementById(`title_${numeroImagenAnterior}`);
    titleAnt.classList.add("hidden");

    let dot = document.getElementById(`dot_${numeroImagen}`);
    dot.classList.add("selected");

    let title = document.getElementById(`title_${numeroImagen}`);
    title.classList.remove("hidden");
    
    numeroImagenAnterior = numeroImagen;
}

