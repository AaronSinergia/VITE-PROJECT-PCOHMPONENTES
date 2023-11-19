export const header = () => {
  const divApp = document.querySelector('#app');
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
