import './style.css';

const products = [
  {
    name: 'DIV Essentials AMD',
    price: 993,
    stars: ['⭐'],
    reviews: 250,
    seller: 'KeyChony',
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg',
  },

  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: ['⭐', '⭐', '⭐', '⭐'],
    reviews: 250,
    seller: 'Agapito S.L',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1074/10745697/1538-msi-katana-15-b12vfk-1412xes-intel-core-i7-12650h-16gb-1tb-ssd-rtx-4060-156.jpg',
  },
  {
    name: 'URL Essentials 255 G8 AMD',
    price: 333,
    stars: ['⭐', '⭐', '⭐'],
    reviews: 250,
    seller: 'Razor',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1074/10745702/153-msi-thin-gf63-12uc-688xes-intel-core-i7-12650h-16gb-1tb-ssd-rtx-3050-156.jpg',
  },
  {
    name: 'H3 Essentials 255 G8 AMD',
    price: 444,
    stars: ['⭐', '⭐', '⭐', '⭐'],
    reviews: 250,
    seller: 'KeyChony',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1064/10649003/1606-lenovo-v15-g2-itl-intel-core-i5-1135g7-16-gb-512gb-ssd-156.jpg',
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 333,
    stars: ['⭐', '⭐', '⭐', '⭐', '⭐'],
    reviews: 250,
    seller: 'Agapito S.L',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1073/10733294/1616-hp-victus-16-s0011ns-amd-ryzen-7-7840hs-32gb-1tb-ssd-rtx-4060-161.jpg',
  },
  {
    name: 'DELL Essentials 255 G8 AMD',
    price: 444,
    stars: ['⭐', '⭐', '⭐', '⭐', '⭐'],
    reviews: 250,
    seller: 'Pc-Ohmponentes',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1042/10428540/1794-hp-15s-fq5085ns-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg',
  },

  {
    name: 'DIV Essentials AMD',
    price: 289,
    stars: ['⭐', '⭐', '⭐', '⭐'],
    reviews: 250,
    seller: 'KeyChony',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1065/10658853/1442-asus-tuf-gaming-f15-fx507zc4-hn002-intel-core-i7-12700h-16gb-512gb-ssd-rtx-3050-156.jpg',
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: ['⭐', '⭐', '⭐'],
    reviews: 250,
    seller: 'Razor',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1073/10733252/1611-asus-vivobook-f1605pa-mb143-intel-core-i7-11370h-8gb-512gb-ssd-16.jpg',
  },
  {
    name: 'DELL Essentials 255 G8 AMD',
    price: 999,
    stars: ['⭐', '⭐'],
    reviews: 250,
    seller: 'Pc-Ohmponentes',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1058/10587152/1755-acer-aspire-3-a315-59-56gv-intel-core-i5-1235u-8gb-512gb-ssd-156.jpg',
  },
  {
    name: 'DIV Essentials AMD',
    price: 289,
    stars: ['⭐'],
    reviews: 993,
    seller: 'Agapito S.L',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1067/10678504/1215-lg-gram-15z90r-gaa75b-intel-evo-core-i7-1360p-16gb-512gb-ssd-15.jpg',
  },
];

const divApp = document.querySelector('#app');

const header = () => {
  const header = document.createElement('header');
  const threeStripes = document.createElement('img');
  const imgLogo = document.createElement('img');
  const userNav = document.createElement('nav');
  const h2Compromisos = document.createElement('a');
  const h2MiCuenta = document.createElement('a');
  const logoSellBox = document.createElement('img');

  header.className = 'header';
  threeStripes.className = 'three_stripes';
  imgLogo.className = 'main_logo';
  userNav.className = 'user_nav';
  h2Compromisos.className = 'compromisos';
  h2MiCuenta.className = 'mi_cuenta';
  logoSellBox.className = 'sell_logo';

  threeStripes.alt = 'three_stripes';
  imgLogo.alt = 'main_logo';
  logoSellBox.alt = 'sell_logo';

  threeStripes.src = './assets/743930_button_512x512.png';
  imgLogo.src = './assets/image.png';
  logoSellBox.src =
    './assets/7ad7c76da9a0cd7d2b01b64b2590617b-icono-de-carrito-de-compras-icono-de-carrito-de-compras.png';

  h2Compromisos.href = '/';
  h2MiCuenta.href = '/';

  h2Compromisos.innerHTML = 'Compromisos';
  h2MiCuenta.innerHTML = 'Mi cuenta';

  header.appendChild(threeStripes);
  header.appendChild(imgLogo);
  userNav.appendChild(h2Compromisos);
  userNav.appendChild(h2MiCuenta);
  userNav.appendChild(logoSellBox);
  header.appendChild(userNav);

  divApp.appendChild(header);

  document.body.appendChild(divApp);
};

const section = () => {
  const sectionFilter = document.createElement('section');
  const h2 = document.createElement('h2');
  const logoFilter = document.createElement('img');
  const selectSearchMobile = document.createElement('select');
  const divSearchFullSize = document.createElement('div');
  const inputSearch = document.createElement('input');
  const resetButtonFilters = document.createElement('button');

  // LOOP FOR SELECT PRODUCTS IN MOBILE
  let oneNameForLabelOption = new Set();

  products.forEach((product) => {
    if (!oneNameForLabelOption.has(product.name)) {
      oneNameForLabelOption.add(product.name);
      const selectOptions = document.createElement('option');
      const divCheckBox = document.createElement('div');
      const input = document.createElement('input');
      const spanNameProduct = document.createElement('span');
      const spanAmountProduct = document.createElement('span');

      const cantidadElementos = products.filter(
        (item) => item.name === product.name
      ).length;
      spanAmountProduct.innerHTML = `(${cantidadElementos})`;

      selectOptions.innerHTML = product.name;
      spanNameProduct.innerHTML = product.name;

      input.type = 'checkbox';

      input.className = 'checkbox_product';
      spanNameProduct.className = 'span_name_product';
      spanAmountProduct.className = 'span_amount_product';

      selectSearchMobile.appendChild(selectOptions);
      divCheckBox.appendChild(input);
      divCheckBox.appendChild(spanNameProduct);
      divCheckBox.appendChild(spanAmountProduct);
      divSearchFullSize.appendChild(divCheckBox);
    }
  });

  sectionFilter.className = 'section_filter section_filter_fullsize';
  h2.className = 'title_filter';
  logoFilter.className = 'logo_filter';
  selectSearchMobile.className = 'select_mobile';
  divSearchFullSize.className = 'div_full_size';
  inputSearch.className = 'search';
  resetButtonFilters.className = 'reset_button_filter';

  inputSearch.type = 'number';
  inputSearch.placeholder = 'Buscar por €';

  h2.innerHTML = 'Filtrar';

  resetButtonFilters.innerHTML = 'Resetear Filtros';

  logoFilter.alt = 'img_filter';
  logoFilter.src = './assets/6488674.png';

  sectionFilter.appendChild(h2);
  sectionFilter.appendChild(logoFilter);
  sectionFilter.appendChild(divSearchFullSize);
  sectionFilter.appendChild(selectSearchMobile);
  sectionFilter.appendChild(inputSearch);
  sectionFilter.appendChild(resetButtonFilters);
  divApp.appendChild(sectionFilter);

  document.body.appendChild(divApp);
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

  divApp.appendChild(article);
  document.body.appendChild(divApp);
};

const footer = () => {
  const footerDiv = document.createElement('div');
  const footerTitle = document.createElement('h3');
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
  footerDiv.className = 'footer_div';
  footerTitle.className = 'footer_title';

  footerTitle.innerHTML = '© Creado por Aaron Carrasco Romero - 2023';

  netlifyLink.appendChild(netlifyLogo);
  linkedinLink.appendChild(linkedinLogo);
  githubLink.appendChild(githubLogo);
  divRRSS.appendChild(netlifyLink);
  divRRSS.appendChild(linkedinLink);
  divRRSS.appendChild(githubLink);
  footerDiv.appendChild(divRRSS);
  footerDiv.appendChild(footerTitle);

  divApp.appendChild(footerDiv);
  document.body.appendChild(divApp);
};

const bodyApp = () => {
  header();
  section();
  article();
  footer();
};

bodyApp();
