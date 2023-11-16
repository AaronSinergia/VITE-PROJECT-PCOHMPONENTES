import { filterEventListener } from '../functions/filterEventListener';
import { filteredForPrice } from '../functions/filteredForPrice';
import { resetAllFilters } from '../functions/resetAllFilters';

const divApp = document.querySelector('#app');
const sectionFilter = document.createElement('section');
sectionFilter.className = 'section_filter section_filter_fullsize';

export const section = (array) => {
  const h2 = document.createElement('h2');
  const logoFilter = document.createElement('img');
  const selectSearchMobile = document.createElement('select');
  const ulSearchFullSize = document.createElement('ul');
  const inputNumberSearch = document.createElement('input');
  const buttonSearch = document.createElement('button');
  const resetButtonFilters = document.createElement('button');

  const firstOption = document.createElement('option');
  firstOption.innerHTML = 'MARCAS';
  firstOption.disabled = true;
  firstOption.selected = true;
  selectSearchMobile.appendChild(firstOption);

  // LOOP FOR SELECT PRODUCTS MOBILE AND FULLSIZE WEB
  let oneNameForLabelOption = new Set();

  array.forEach((product) => {
    if (!oneNameForLabelOption.has(product.seller)) {
      oneNameForLabelOption.add(product.seller);
      const selectOptions = document.createElement('option');
      const liCheckBox = document.createElement('li');
      const inputCheckBox = document.createElement('input');
      const spanNameProduct = document.createElement('span');
      const spanAmountProduct = document.createElement('span');

      const cantidadElementos = array.filter(
        (item) => item.seller === product.seller
      ).length;

      selectOptions.className = 'selected_option';
      inputCheckBox.className = 'checkbox_product ' + product.seller;
      liCheckBox.className = product.seller;

      spanAmountProduct.innerHTML = `(${cantidadElementos})`;
      selectOptions.innerHTML = product.seller;
      spanNameProduct.innerHTML = product.seller;

      inputCheckBox.type = 'checkbox';
      inputCheckBox.value = product.seller;

      spanNameProduct.className = 'span_name_product';
      spanAmountProduct.className = 'span_amount_product';

      selectSearchMobile.appendChild(selectOptions);
      liCheckBox.appendChild(inputCheckBox);
      liCheckBox.appendChild(spanNameProduct);
      liCheckBox.appendChild(spanAmountProduct);
      ulSearchFullSize.appendChild(liCheckBox);

      filterEventListener(liCheckBox);
    }
  });

  h2.className = 'title_filter';
  logoFilter.className = 'logo_filter';
  selectSearchMobile.className = 'select_mobile';
  ulSearchFullSize.className = 'ul_full_size';
  inputNumberSearch.className = 'search';
  buttonSearch.className = 'search_button';
  resetButtonFilters.className = 'reset_button_filter';

  inputNumberSearch.type = 'number';
  inputNumberSearch.placeholder = 'Buscar por €';

  h2.innerHTML = 'Filtrar';
  buttonSearch.innerHTML = 'BUSCAR';
  resetButtonFilters.innerHTML = 'Resetear Filtros';

  logoFilter.alt = 'img_filter';
  logoFilter.src = './img/6488674.png';

  sectionFilter.appendChild(h2);
  sectionFilter.appendChild(logoFilter);
  sectionFilter.appendChild(ulSearchFullSize);
  sectionFilter.appendChild(selectSearchMobile);
  sectionFilter.appendChild(inputNumberSearch);
  sectionFilter.appendChild(buttonSearch);
  sectionFilter.appendChild(resetButtonFilters);
  divApp.appendChild(sectionFilter);

  resetAllFilters(resetButtonFilters);
  filteredForPrice(buttonSearch);
  filterEventListener(selectSearchMobile);

  document.body.appendChild(divApp);
};
