import { products } from './utils/productsArray';

const navBar = () => {
  const userNav = document.createElement('nav');
  const h2Compromisos = document.createElement('a');
  const h2MiCuenta = document.createElement('a');
  const logoSellBox = document.createElement('img');
  userNav.className = 'user_nav';
  h2Compromisos.className = 'compromisos';
  h2MiCuenta.className = 'mi_cuenta';
  logoSellBox.className = 'sell_logo';
  logoSellBox.alt = 'sell_logo';
  logoSellBox.src =
    './assets/7ad7c76da9a0cd7d2b01b64b2590617b-icono-de-carrito-de-compras-icono-de-carrito-de-compras.png';

  h2Compromisos.href = '/';
  h2MiCuenta.href = '/';

  h2Compromisos.innerHTML = 'Compromisos';
  h2MiCuenta.innerHTML = 'Mi cuenta';

  userNav.appendChild(h2Compromisos);
  userNav.appendChild(h2MiCuenta);
  userNav.appendChild(logoSellBox);

  return userNav;
};

const pcohmLogo = () => {
  const imgLogo = document.createElement('img');
  imgLogo.className = 'main_logo';
  imgLogo.alt = 'main_logo';
  imgLogo.src = './assets//image.png';

  return imgLogo;
};

const threeStripes = () => {
  const threeStripes = document.createElement('img');
  threeStripes.className = 'three_stripes';
  threeStripes.alt = 'three_stripes';
  threeStripes.src = './assets/743930_button_512x512.png';

  return threeStripes;
};

const header = () => {
  const header = document.createElement('header');
  header.className = 'header';

  const menuStripes = threeStripes();
  const principalLogo = pcohmLogo();
  const nav = navBar();

  header.appendChild(menuStripes);
  header.appendChild(principalLogo);
  header.appendChild(nav);
  return header;
};

const section = () => {
  const sectionFilter = document.createElement('section');
  sectionFilter.className = 'section_filter section_filter_fullsize';

  const h2 = document.createElement('h2');
  h2.className = 'title_filter';
  h2.innerHTML = 'Filtrar';

  const logoFilter = document.createElement('img');
  logoFilter.className = 'logo_filter';
  logoFilter.alt = 'img_filter';
  logoFilter.src = './assets/6488674.png';

  const inputNumberSearch = document.createElement('input');
  inputNumberSearch.className = 'search';
  inputNumberSearch.type = 'number';
  inputNumberSearch.placeholder = 'Buscar por €';

  const buttonSearch = document.createElement('button');
  buttonSearch.className = 'search_button';
  buttonSearch.innerHTML = 'BUSCAR';

  const resetButtonFilters = document.createElement('button');
  resetButtonFilters.className = 'reset_button_filter';
  resetButtonFilters.innerHTML = 'Resetear Filtros';

  const selectSearchMobile = document.createElement('select');
  selectSearchMobile.className = 'select_mobile';

  // const firstOption = document.createElement('option');
  // firstOption.innerHTML = 'MARCAS';
  // firstOption.disabled = true;
  // firstOption.selected = true;
  // selectSearchMobile.appendChild(firstOption);

  let oneNameForLabelOption = new Set();
  products.forEach((product) => {
    if (!oneNameForLabelOption.has(product.seller)) {
      oneNameForLabelOption.add(product.seller);
      const option = document.createElement('option');
      option.innerHTML = product.seller;
      selectSearchMobile.appendChild(option);
    }
  });

  const ulSearchFullSize = document.createElement('ul');
  ulSearchFullSize.className = 'ul_full_size';
  let arrayWithNoRepeatedSellers = [];

  for (const product of products) {
    if (!arrayWithNoRepeatedSellers.includes(product.seller)) {
      arrayWithNoRepeatedSellers.push(product.seller);
      const li = document.createElement('li');
      li.className = product.seller;
      const inputCheckBox = document.createElement('input');
      inputCheckBox.className = 'checkbox_product ' + product.seller;
      inputCheckBox.type = 'checkbox';
      inputCheckBox.value = product.seller;
      const spanNameProduct = document.createElement('span');
      spanNameProduct.innerHTML = product.seller;
      spanNameProduct.className = 'span_name_product';
      const cantidadElementos = products.filter(
        (item) => item.seller === product.seller
      ).length;
      const spanAmountProduct = document.createElement('span');
      spanAmountProduct.innerHTML = `(${cantidadElementos})`;
      spanAmountProduct.className = 'span_amount_product';
      li.appendChild(inputCheckBox);
      li.appendChild(spanNameProduct);
      li.appendChild(spanAmountProduct);
      ulSearchFullSize.appendChild(li);
    }
  }

  ulSearchFullSize.addEventListener('click', (ev) => {
    ulCheckedListFilter(products, ev);
  });

  selectSearchMobile.addEventListener('change', () => itemFilter(products));
  buttonSearch.addEventListener('click', () => itemFilter(products));

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
        eventInput !== '' ? parseFloat(eventInput) >= product.price : true;

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

  function ulCheckedListFilter(productos, ev) {
    const liClicked = ev.target.value;

    const inputSearched = document.querySelector('.search');
    const eventInput = inputSearched.value;

    const article = document.querySelector('.products_article');
    article.innerHTML = ``;

    let filtersUnited = [];

    for (const product of productos) {
      const liFiltered = liClicked ? product.seller.includes(liClicked) : true;

      const priceFiltered =
        eventInput !== '' ? parseFloat(eventInput) >= product.price : true;

      if (liFiltered && priceFiltered) {
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

  sectionFilter.appendChild(h2);
  sectionFilter.appendChild(logoFilter);
  sectionFilter.appendChild(selectSearchMobile);
  sectionFilter.appendChild(ulSearchFullSize);
  sectionFilter.appendChild(inputNumberSearch);
  sectionFilter.appendChild(buttonSearch);
  sectionFilter.appendChild(resetButtonFilters);

  return sectionFilter;
};

const article = () => {
  const article = document.createElement('article');
  article.className = 'products_article';

  products.forEach((product) => {
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

  return article;
};

const footer = () => {
  const footerDiv = document.createElement('div');
  const footerTitle = document.createElement('h3');

  footerTitle.innerHTML = '© Creado por Aaron Carrasco Romero - 2023';
  footerDiv.className = 'footer_div';
  footerTitle.className = 'footer_title';

  const divRRSS = document.createElement('div');
  const githubLogo = document.createElement('img');
  const githubLink = document.createElement('a');
  const linkedinLogo = document.createElement('img');
  const linkedinLink = document.createElement('a');
  const netlifyLogo = document.createElement('img');
  const netlifyLink = document.createElement('a');

  githubLink.href = 'https://github.com/AaronSinergia';
  linkedinLink.href = 'https://www.linkedin.com/in/aaron-carrasco-romero/';
  netlifyLink.href = 'https://app.netlify.com/teams/aaronsinergia/overview';

  githubLogo.alt = 'github';
  linkedinLogo.alt = 'linkedin';
  netlifyLogo.alt = 'netlify';

  githubLogo.src = './assets/GitHubLogo.png';
  linkedinLogo.src = './assets/1384014.png';
  netlifyLogo.src = './assets/netlify_logo_icon_169924.png';

  githubLogo.className = 'github_logo';
  linkedinLogo.className = 'linkedin_logo';
  netlifyLogo.className = 'netlify_logo';
  divRRSS.className = 'div_rrss';

  netlifyLink.appendChild(netlifyLogo);
  linkedinLink.appendChild(linkedinLogo);
  githubLink.appendChild(githubLogo);
  divRRSS.appendChild(netlifyLink);
  divRRSS.appendChild(linkedinLink);
  divRRSS.appendChild(githubLink);

  footerDiv.appendChild(divRRSS);
  footerDiv.appendChild(footerTitle);

  return footerDiv;
};

const bodyApp = () => {
  const divApp = document.querySelector('#app');
  const printHeader = header();
  const printSection = section();
  const printGalleryArticle = article();
  const printFooter = footer();

  divApp.appendChild(printHeader);
  divApp.appendChild(printSection);
  divApp.appendChild(printGalleryArticle);
  divApp.appendChild(printFooter);

  return divApp;
};
bodyApp();
