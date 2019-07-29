const contenedorEjemplo = document.getElementById('contenedor-ejemplo');

for (let i = 0; i < 9; i++) {
    let caja = document.createElement('div');
    caja.classList.add('box');
    caja.onclick = function () {
        alert('Hola');
    }
    contenedorEjemplo.appendChild(caja);
}

caja.appendChild(caja.cloneNode());

contenedorEjemplo.appendChild(caja.cloneNode(true));