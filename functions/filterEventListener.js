import { selectedProductBucle } from './productsBucleAndCreate';

export function filterEventListener(element) {
  element.addEventListener('change', () => {
    const divIMGRemove = document.querySelectorAll('.div_product');
    divIMGRemove.forEach((div) => {
      div.remove();
    });

    selectedProductBucle();
  });
}
