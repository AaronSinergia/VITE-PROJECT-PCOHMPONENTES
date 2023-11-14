import { selectedProductBucle } from './productsBucleAndCreate';

export function filterEventListener(element) {
  element.addEventListener('change', (ev) => {
    const divIMGRemove = document.querySelectorAll('.div_product');
    divIMGRemove.forEach((div) => {
      div.remove();
    });

    if (!ev.target.checked) {
      location.reload();
    }

    selectedProductBucle();
  });
}
