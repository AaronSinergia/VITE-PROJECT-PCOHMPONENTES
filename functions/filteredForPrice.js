import { article } from '../pages/article/article';
import { products } from '../components/productsArray';

let arrayForProductsSelected = [];

export function filteredForPrice(element) {
  element.addEventListener('click', () => {
    const inputNumberSearch = document.querySelector('.search');
    const value = inputNumberSearch.value;

    const arrayPrices = products.filter((product) => product.price <= value);

    for (const priceOfProductSelectedInBucle of products) {
      if (value === priceOfProductSelectedInBucle.price) {
        arrayPrices.push(priceOfProductSelectedInBucle);
      }
    }

    if (arrayPrices.length > 0) {
      if (!arrayForProductsSelected.includes(value)) {
        arrayForProductsSelected.push(value);
      }

      const filteredProducts = products.filter(
        (product) => product.price === value
      );

      arrayPrices.push(...filteredProducts);

      article(arrayPrices);
    }
  });
}
