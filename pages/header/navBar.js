export const navBar = () => {
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
