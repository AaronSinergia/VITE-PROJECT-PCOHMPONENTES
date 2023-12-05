import { productsFiltered, setProductsFiltered } from '../main';
import { article } from '../pages/article/article';

export function filteredForPrice(element) {
  element.addEventListener('click', () => {
    const inputNumberSearch = document.querySelector('.search');
    const value = inputNumberSearch.value;

    const arrayPrices = productsFiltered.filter(
      (product) => product.price <= value || product.price == value
    );

    setProductsFiltered(arrayPrices);

    article(productsFiltered);
  });
}
