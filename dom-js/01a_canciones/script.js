/**
 * Hacer un programa que pida por el nombre de la playlista, y luego actualice
 * el elemento con id "playlist" con dicho valor.
 * Luego, debe preguntar cuantas canciones se desee agregar
 * y que vaya pidiendo una por una, preguntando por el nombre de la banda y la cancion. 
 * A medida que se ingresa cada cancion, debe ir agregando al elemento html con id 
 * "songs-container" el siguiente html:
 * 
 * `<div class="card mb-3">
 *     <div class="card-header">
 *         Nombre Banda
 *     </div>
 *     <div class="card-body">
 *         <p class="card-text">Nombre cancion</p>
 *     </div>
 * </div>`
 * 
 *  Donde "Nombre banda" y "Nombre cancion" se reemplaza por el numero
 *  por los valores ingresados, correspondientemente
 */

let playlistTitle = prompt("Ingrese el nombre de la playlist");

let playlistElem = document.getElementById('playlist');

playlistElem.innerHTML = playlistTitle;

let songQuantity = parseInt(prompt("Ingrese la cantidad de canciones que quiere agregar"));

for (i = 1; i <= songQuantity; i++) {
    let bandName = prompt("Ingrese el nombre de la banda");
    let songName = prompt("Ingrese el nombre de la canción");
    let playlistList = document.getElementById('songs-container');
    playlistList.innerHTML +=
        `<div class="card mb-3">
        <div class="card-header">
        ${bandName}
        </div>
        <div class="card-body">
          <p class="card-text">${songName}</p>
        </div>
    </div>`
}
