import { products } from '../../utils/productsArray';
import itemFilter from '../../functions/itemFilter';
import resetFilters from '../../functions/resetFilters';

export const section = () => {
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

  let oneNameForLabelOption = new Set();
  products.forEach((product) => {
    if (!oneNameForLabelOption.has(product.seller)) {
      oneNameForLabelOption.add(product.seller);
      const option = document.createElement('option');
      option.innerHTML = product.seller;
      selectSearchMobile.appendChild(option);
    }
  });

  selectSearchMobile.addEventListener('change', () => itemFilter(products));
  buttonSearch.addEventListener('click', () => itemFilter(products));
  resetButtonFilters.addEventListener('click', () => resetFilters(products));

  sectionFilter.appendChild(h2);
  sectionFilter.appendChild(logoFilter);
  sectionFilter.appendChild(selectSearchMobile);
  sectionFilter.appendChild(inputNumberSearch);
  sectionFilter.appendChild(buttonSearch);
  sectionFilter.appendChild(resetButtonFilters);

  return sectionFilter;
};
