import { sectionFilter } from './section';

export const h2Filter = () => {
  const h2 = document.createElement('h2');
  h2.className = 'title_filter';
  h2.innerHTML = 'Filtrar';

  sectionFilter.appendChild(h2);

  return h2;
};
