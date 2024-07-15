//js encargado de hacer las peticiones al API

async function listaDeProductos() {
    try {
        const response = await fetch('http://localhost:3000/productos');
        const productos = await response.json();

        return productos;

    } catch (error) {
        console.error('Error fetching products:', error);
        return[];
    }
}

async function AgregarProducto(nuevoProducto) {

    try {
        const response = await fetch('http://localhost:3000/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoProducto)
        });

        if (response.ok) {
            const productoAgregado = await response.json();
            return (productoAgregado)
        } else {
            console.error('Failed to add product:', response.statusText);
        }
    } catch (error) {
        console.error('Error adding product:', error);
    }

}

async function eliminarProducto(id) {

    try {
        const response = await fetch(`http://localhost:3000/productos/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            //FALTA DE CODIGO
        } else {
            console.error('Failed to add video');
        }
    } catch (error) {
        console.error('Error adding video:', error);
    }


}

export const conexionesConApi = { listaDeProductos, AgregarProducto, eliminarProducto }

