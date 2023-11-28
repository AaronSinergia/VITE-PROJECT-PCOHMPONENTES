import { sectionFilter } from './section';

export const logoFilter = () => {
  const logoFilter = document.createElement('img');
  logoFilter.className = 'logo_filter';
  logoFilter.alt = 'img_filter';
  logoFilter.src = './assets/6488674.png';

  sectionFilter.appendChild(logoFilter);

  return logoFilter;
};
