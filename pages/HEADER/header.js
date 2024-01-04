import { threeStripes } from './secondaryLogos/threeStripes';
import { pcohmLogo } from './principalLogo/pcohmLogo';
import { navBar } from '../NAVBAR/navbar';

export const header = () => {
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
