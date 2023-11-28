import { article } from '../pages/article/article';
import { products } from '../components/productsArray';

export function resetAllFilters(buttonClick) {
  buttonClick.addEventListener('click', (ev) => {
    const evTargeted = ev.target;
    if (evTargeted) {
      article(products);

      const inputCheckbox = document.getElementsByClassName('checkbox_product');
      for (const individualInput of inputCheckbox) {
        individualInput.checked = false;
      }

      const inputPriceBox = document.getElementsByClassName('search');
      for (const inputPrice of inputPriceBox) {
        inputPrice.value = '';
        inputPrice.type = 'text';
        inputPrice.placeholder = 'Buscar por €';
        inputPrice.type = 'number';
      }
    }
  });
}
