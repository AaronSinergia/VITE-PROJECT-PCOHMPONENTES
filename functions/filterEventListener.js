import { article } from '../pages/article/article';
import { products } from '../components/productsArray';

let arrayForProductsChecked = [];
export function filterEventListener(element) {
  element.addEventListener('change', (ev) => {
    let sellerCheked = ev.target.checked;
    let sellerSelected = ev.target.value;
    let arrayForProductsSelected = [];

    if (sellerSelected) {
      if (!arrayForProductsSelected.includes(sellerSelected)) {
        arrayForProductsSelected.push(sellerSelected);
      }
      const arrayFiltered = [];
      arrayForProductsSelected.forEach((selectedSeller) => {
        products.forEach((product) => {
          if (product.seller === selectedSeller) {
            arrayFiltered.push(product);
          }
        });
      });
      article(arrayFiltered);
    }

    if (!sellerCheked) {
      const arrayFilteredQuitCheck = [];

      const valueToRemove = arrayForProductsChecked.indexOf(sellerSelected);

      if (valueToRemove !== -1) {
        arrayForProductsChecked.splice(valueToRemove, 1);
      }

      arrayForProductsChecked.forEach((sellerCheked) => {
        products.forEach((product) => {
          if (product.seller === sellerCheked) {
            arrayFilteredQuitCheck.push(product);
          }
        });
      });

      if ((arrayFilteredQuitCheck.length += 0)) {
        article(arrayFilteredQuitCheck);
      }
    } else {
      if (!arrayForProductsChecked.includes(sellerSelected)) {
        arrayForProductsChecked.push(sellerSelected);
      }
      const arrayFilteredByCheck = [];
      arrayForProductsChecked.forEach((selectedSellerTwo) => {
        products.forEach((product) => {
          if (product.seller === selectedSellerTwo) {
            arrayFilteredByCheck.push(product);
          }
        });
      });
      article(arrayFilteredByCheck);
    }
  });
}
