import { filteredForPrice } from '../../functions/filteredForPrice';
import { sectionFilter } from './section';

export const searchButton = () => {
  const buttonSearch = document.createElement('button');
  buttonSearch.className = 'search_button';
  buttonSearch.innerHTML = 'BUSCAR';
  sectionFilter.appendChild(buttonSearch);

  filteredForPrice(buttonSearch);

  return buttonSearch;
};
