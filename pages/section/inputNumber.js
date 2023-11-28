import { sectionFilter } from './section';

export const inputNumber = () => {
  const inputNumberSearch = document.createElement('input');
  inputNumberSearch.className = 'search';
  inputNumberSearch.type = 'number';
  inputNumberSearch.placeholder = 'Buscar por €';
  sectionFilter.appendChild(inputNumberSearch);

  return inputNumberSearch;
};
