import { conexionesConApi } from './conexionesConAPI.js';

//funcion que crea cada una de las cards de los productos
export default function crearCard(product){
    //Se llama al cards__container y se coloca en una variable
    const cardsContainer = document.getElementById('cards__container');

    //Se crea un container para los detalles de cada card
    const productCard = document.createElement('div');
    productCard.className = 'product__card';

    //Se crean los detalles
    const productImage = document.createElement('img');
    productImage.src = product.imagen;
    productImage.alt = product.nombre;
    productImage.className = 'img__product';

    const productName = document.createElement('h3');
    productName.textContent = product.nombre;

    // --También un div para el icono de basura y el precio
    const valueContainer = document.createElement('div');
    valueContainer.className = 'card__container__value';

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.precio}`;

    const trashIcon = document.createElement('img');
    trashIcon.src = './assets/images/icon_trash.png';
    trashIcon.alt = 'Eliminar producto';
    //Añadir al icono de basura la funcionalidad de borrar el producto
    trashIcon.addEventListener('click', () => conexionesConApi.eliminarProducto(product.id))

    //Se añaden los detalles al card
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    //Container para precio e icono:
    productCard.appendChild(valueContainer);

    //El precio e icono a su div correspondiente
    valueContainer.appendChild(productPrice);
    valueContainer.appendChild(trashIcon);

    //Se añade todo el card al cards__container
    cardsContainer.appendChild(productCard);
}

