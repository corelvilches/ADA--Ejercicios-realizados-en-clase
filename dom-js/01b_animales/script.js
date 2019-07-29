/**
 * Hacer un programa que pida por un animal
 * y dependiendo del que se elija, cambiar
 * el atributo src del elemento con id "imagen-animal"
 * con el nombre del archivo correspondiente a ese animal 
 */
//mejor ejercicio del mundo? si
 let animal = prompt("Ingrese el nombre del animal que desea ver:");

 let image = document.getElementById('imagen-animal');
 
 switch (animal) {

    case "gato" :
            image.src = 'gato.jpg';
    break;
    case "perro" :
            image.src = 'perro.jpg';
    break;
    case "erizo" :
            image.src = 'erizo.jpg';
    break;
    case "foca" :
            image.src = 'foca.jpg';
    break;
    case "panda" :
            image.src = 'panda.jpg';
    break;
    default:
            alert("Ese animal no está en el catálogo.");
 }