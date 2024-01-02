import { article } from '../pages/article/article';

export function allFiltersUnited(productos) {
  const select = document.querySelector('.select_mobile');
  let selectValue = select.value;
  const buttonSearch = document.querySelector('.search');
  let inputValue = buttonSearch.value;

  let arrayWithFiltersUnited = [];

  for (const product of productos) {
    const selectFilter = selectValue
      ? product.seller.includes(selectValue)
      : true;

    const priceFilter = inputValue !== '' ? inputValue >= product.price : true;

    if (selectFilter && priceFilter) {
      arrayWithFiltersUnited.push(product);
    }
  }

  article(arrayWithFiltersUnited);
}
