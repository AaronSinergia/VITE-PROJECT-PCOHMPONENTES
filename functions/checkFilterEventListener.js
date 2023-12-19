// import { productsFiltered, setProductsFiltered } from '../main';
// import { article } from '../pages/article/article';

// let arrayForProductsChecked = [];
// export function checkFilterEventListener(element) {
//   element.addEventListener('click', (ev) => {
//     let sellerSelected = ev.target.value;
//     let sellerChecked = ev.target.checked;
//     console.log(sellerSelected);

//     // if (sellerChecked) {
//     //   arrayForProductsChecked.push(sellerSelected);
//     // } else {
//     //   arrayForProductsChecked.filter((seller) => seller !== sellerSelected);
//     // }

//     let arrayProducts = productsFiltered.filter((product) =>
//       arrayForProductsChecked.includes(product.seller)
//     );

//     arrayProducts.sort((a, b) => {
//       if (a.seller < b.seller) return -1;
//       if (a.seller > b.seller) return 1;
//       return 0;
//     });

//     setProductsFiltered(arrayProducts);

//     article(productsFiltered);
//   });
// }
