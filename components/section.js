import { selectSearchMobileEventListener } from '../functions/selecSearchMobileEventListener';
import { products } from './productsArray';

export const section = () => {
  const divApp = document.querySelector('#app');
  const sectionFilter = document.createElement('section');
  const h2 = document.createElement('h2');
  const logoFilter = document.createElement('img');
  const selectSearchMobile = document.createElement('select');
  const divSearchFullSize = document.createElement('div');
  const inputSearch = document.createElement('input');
  const resetButtonFilters = document.createElement('button');

  const firstOption = document.createElement('option');
  firstOption.innerHTML = 'MARCAS';
  firstOption.disabled = true;
  firstOption.selected = true;
  selectSearchMobile.appendChild(firstOption);

  // LOOP FOR SELECT PRODUCTS MOBILE AND FULLSIZE WEB
  let oneNameForLabelOption = new Set();

  products.forEach((product) => {
    if (!oneNameForLabelOption.has(product.seller)) {
      oneNameForLabelOption.add(product.seller);
      const selectOptions = document.createElement('option');
      const divCheckBox = document.createElement('div');
      const input = document.createElement('input');
      const spanNameProduct = document.createElement('span');
      const spanAmountProduct = document.createElement('span');

      selectOptions.className = 'selected_option';

      const cantidadElementos = products.filter(
        (item) => item.seller === product.seller
      ).length;

      spanAmountProduct.innerHTML = `(${cantidadElementos})`;

      selectOptions.innerHTML = product.seller;
      spanNameProduct.innerHTML = product.seller;

      input.type = 'checkbox';

      input.className = 'checkbox_product';
      spanNameProduct.className = 'span_name_product';
      spanAmountProduct.className = 'span_amount_product';

      selectSearchMobile.appendChild(selectOptions);
      divCheckBox.appendChild(input);
      divCheckBox.appendChild(spanNameProduct);
      divCheckBox.appendChild(spanAmountProduct);
      divSearchFullSize.appendChild(divCheckBox);
    }
  });

  sectionFilter.className = 'section_filter section_filter_fullsize';
  h2.className = 'title_filter';
  logoFilter.className = 'logo_filter';
  selectSearchMobile.className = 'select_mobile';
  divSearchFullSize.className = 'div_full_size';
  inputSearch.className = 'search';
  resetButtonFilters.className = 'reset_button_filter';

  inputSearch.type = 'number';
  inputSearch.placeholder = 'Buscar por €';

  h2.innerHTML = 'Filtrar';

  resetButtonFilters.innerHTML = 'Resetear Filtros';

  logoFilter.alt = 'img_filter';
  logoFilter.src = './assets/6488674.png';

  sectionFilter.appendChild(h2);
  sectionFilter.appendChild(logoFilter);
  sectionFilter.appendChild(divSearchFullSize);
  sectionFilter.appendChild(selectSearchMobile);
  sectionFilter.appendChild(inputSearch);
  sectionFilter.appendChild(resetButtonFilters);
  divApp.appendChild(sectionFilter);

  selectSearchMobileEventListener(selectSearchMobile);
  selectSearchMobileEventListener(divSearchFullSize);

  document.body.appendChild(divApp);
};
