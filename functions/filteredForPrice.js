import { article } from '../components/article';
import { products } from '../components/productsArray';

let arrayForProductsSelected = [];
export function filteredForPrice() {
  const inputNumberSearch = document.querySelector('.search');
  const searchButton = document.querySelector('.search_button');

  searchButton.addEventListener('click', () => {
    const inputValue = inputNumberSearch.value;
    searchButton.dataset.value = inputValue;
    const value = searchButton.dataset.value;

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
