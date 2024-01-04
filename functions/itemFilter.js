function itemFilter(productos) {
  const optionClicked = document.querySelector('.select_mobile');
  let eventSelect = optionClicked.value;

  const inputSearched = document.querySelector('.search');
  let eventInput = inputSearched.value;

  const article = document.querySelector('.products_article');
  article.innerHTML = ``;

  let filtersUnited = [];

  for (const product of productos) {
    const sellerFiltered = eventSelect
      ? product.seller.includes(eventSelect)
      : true;

    const priceFiltered =
      eventInput !== '' ? eventInput >= product.price : true;

    if (sellerFiltered && priceFiltered) {
      filtersUnited.push(product);
    }
  }

  filtersUnited.forEach((product) => {
    const divProduct = document.createElement('div');
    const imgProduct = document.createElement('img');
    const imgTitle = document.createElement('h2');
    const imgPrice = document.createElement('h2');
    const imgStars = document.createElement('h2');
    const imgSeller = document.createElement('h2');
    divProduct.className = 'div_product';
    imgProduct.className = 'img_product';
    imgTitle.className = 'img_title';
    imgPrice.className = 'img_price';
    imgStars.className = 'img_stars';
    imgSeller.className = 'img_seller';
    imgProduct.alt = product.name;
    imgProduct.src = product.image;
    imgTitle.innerHTML = product.name;
    imgPrice.innerHTML = product.price + '€';
    imgStars.innerHTML = 'Opinión: ' + product.stars.join('');
    imgSeller.innerHTML = 'Vendido por: ' + product.seller;
    divProduct.appendChild(imgProduct);
    divProduct.appendChild(imgTitle);
    divProduct.appendChild(imgPrice);
    divProduct.appendChild(imgStars);
    divProduct.appendChild(imgSeller);
    article.appendChild(divProduct);
  });
}

export default itemFilter;
