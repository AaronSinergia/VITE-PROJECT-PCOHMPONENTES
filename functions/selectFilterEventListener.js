import { productsFiltered, setProductsFiltered } from '../main';
import { article } from '../pages/article/article';

export function selectFilterEventListener(element) {
  element.addEventListener('change', (ev) => {
    if (element.tagName === 'SELECT') {
      let sellerSelected = ev.target.value;
      let arrayForProductsSelected = productsFiltered.filter(
        (product) => product.seller === sellerSelected
      );

      // setProductsFiltered(arrayForProductsSelected);
      console.log(arrayForProductsSelected);
      article(arrayForProductsSelected);
    } //else if (element.tagName === 'LI') {
    //   let sellerChecked = ev.target.checked;
    //   let sellerSelected = ev.target.value;
    //   let arrayForProductsSelected = productsFiltered.filter(
    //     (product) => product.seller === sellerSelected
    //   );
    //   article(arrayForProductsSelected);
    // }
  });
}
