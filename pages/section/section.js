import { h2Filter } from './h2Filter';
import { inputNumber } from './inputNumber';
import { logoFilter } from './logoFilter';
import { searchButton } from './searchButton';
import { resetButton } from './resetButton';
import { ulProductCreate } from '../../components/Product/ulProductCreate';

import { selectFilterEventListener } from '../../functions/selectFilterEventListener';
import { checkFilterEventListener } from '../../functions/checkFilterEventListener';

const divApp = document.querySelector('#app');
export const sectionFilter = document.createElement('section');
sectionFilter.className = 'section_filter section_filter_fullsize';

export const section = (array) => {
  const selectSearchMobile = document.createElement('select');
  selectSearchMobile.className = 'select_mobile';

  const firstOption = document.createElement('option');
  firstOption.innerHTML = 'MARCAS';
  firstOption.disabled = true;
  firstOption.selected = true;
  selectSearchMobile.appendChild(firstOption);

  h2Filter();
  logoFilter();

  // LOOP FOR SELECT PRODUCTS CHECKBOX
  let oneNameForLabelOption = new Set();

  array.forEach((product) => {
    ulProductCreate(
      product,
      oneNameForLabelOption,
      selectSearchMobile,
      checkFilterEventListener,
      array
    );
  });

  sectionFilter.appendChild(selectSearchMobile);
  inputNumber();
  searchButton();
  resetButton();

  divApp.appendChild(sectionFilter);

  selectFilterEventListener(selectSearchMobile);

  document.body.appendChild(divApp);
};
