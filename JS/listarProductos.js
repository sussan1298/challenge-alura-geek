import { conexionesConApi } from './conexionesConAPI.js';
import crearCard from './crearCard.js';
import ValidacionForm from './ValidacionForm.js';
import manejarSubmit from './manejarSubmit.js';


document.addEventListener('DOMContentLoaded', async () => {

    //Recibe la lista de productos del JSON y le hace una cars a cada uno
    const productos = await conexionesConApi.listaDeProductos();
    const cardsContainer = document.getElementById('cards__container');

    if (productos.length === 0) {
        const noProductosContainer = document.createElement('div');
        noProductosContainer.className = 'noHayProductos__container';

        const noProductosMensaje = document.createElement('h2')
        noProductosMensaje.textContent = 'No se han agregado productos';

        const noProductosImagen = document.createElement('img')
        noProductosImagen.src = './assets/images/question-mark.png';
        noProductosImagen.alt = '¿Y los productos?';

        noProductosContainer.appendChild(noProductosImagen);
        noProductosContainer.appendChild(noProductosMensaje);
        cardsContainer.appendChild(noProductosContainer);
    } else {
        productos.forEach(product => crearCard(product));
    }

    ValidacionForm();
    manejarSubmit();

});
