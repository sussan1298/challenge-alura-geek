import { conexionesConApi } from './conexionesConAPI.js';

async function manejarSubmit() {

    const form = document.querySelector('.agregar__producto__form')
    const botonSubmit = form.querySelector('button[type="submit"]');
    const botonReset = form.querySelector('button[type="reset"]');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nuevoProducto = {
            //como la estructura del json
            //form.name.value
            id: Date.now().toString(), //Para crear un id unico
            nombre: form.nombre.value,
            precio: form.precio.value,
            imagen: form.imagen.value,
        };

        form.reset();
        botonSubmit.disabled = true;
        botonReset.disabled = true;

        conexionesConApi.AgregarProducto(nuevoProducto);
    })

}

export default manejarSubmit;