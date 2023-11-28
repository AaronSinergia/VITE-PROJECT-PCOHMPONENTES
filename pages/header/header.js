import { navBar } from './navBar';
import { pcohmLogo } from './pcohmLogo';
import { threeStripes } from './threeStripes';

export const header = () => {
  const divApp = document.querySelector('#app');
  const header = document.createElement('header');
  header.className = 'header';

  const menuStripes = threeStripes();
  const principalLogo = pcohmLogo();
  const nav = navBar();

  header.appendChild(menuStripes);
  header.appendChild(principalLogo);
  header.appendChild(nav);

  divApp.appendChild(header);

  document.body.appendChild(divApp);
};
