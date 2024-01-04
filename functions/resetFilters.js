import { products } from '../utils/productsArray';

function resetFilters() {
  const article = document.querySelector('.products_article');
  article.innerHTML = '';

  products.forEach((product) => {
    const divProduct = document.createElement('div');
    const imgProduct = document.createElement('img');
    const imgTitle = document.createElement('h2');
    const imgPrice = document.createElement('h2');
    const imgStars = document.createElement('h2');
    const imgSeller = document.createElement('h2');

    divProduct.className = 'div_product';
    imgProduct.className = 'img_product';
    imgTitle.className = 'img_title';
    imgPrice.className = 'img_price';
    imgStars.className = 'img_stars';
    imgSeller.className = 'img_seller';

    imgProduct.alt = product.name;
    imgProduct.src = product.image;

    imgTitle.innerHTML = product.name;
    imgPrice.innerHTML = product.price + '€';
    imgStars.innerHTML = 'Opinión: ' + product.stars.join('');
    imgSeller.innerHTML = 'Vendido por: ' + product.seller;

    divProduct.appendChild(imgProduct);
    divProduct.appendChild(imgTitle);
    divProduct.appendChild(imgPrice);
    divProduct.appendChild(imgStars);
    divProduct.appendChild(imgSeller);
    article.appendChild(divProduct);
  });
}

export default resetFilters;
