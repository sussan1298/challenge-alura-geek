function ValidacionForm() {

    //Guarda el form en una variable
    const form = document.querySelector('.agregar__producto__form')

    //Botones
    const botonSubmit = form.querySelector('button[type="submit"]');
    const botonReset = form.querySelector('button[type="reset"]');

    //Se añade un event listener para validar que los campos del form estén llenos, asignar valores y habilitar el boton de "Enviar":
    form.addEventListener('input', function () {

        //se hace un array de todos los inputs y se verifica que el value de cada uno NO esté vacío
        //si todos están llenos entonces allFilled = true
        const allFilled = Array.from(form.querySelectorAll('input')).every(input => input.value.trim() !== '');
        botonSubmit.disabled = !allFilled;
        botonReset.disabled = !allFilled;
        
    });
};

export default ValidacionForm;

