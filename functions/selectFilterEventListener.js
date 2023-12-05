import { productsFiltered, setProductsFiltered } from '../main';
import { article } from '../pages/article/article';

export function selectFilterEventListener(element) {
  element.addEventListener('change', (ev) => {
    let sellerSelected = ev.target.value;

    let arrayForProductsSelected = productsFiltered.filter(
      (product) => product.seller === sellerSelected
    );

    setProductsFiltered(arrayForProductsSelected);

    article(productsFiltered);
  });
}
