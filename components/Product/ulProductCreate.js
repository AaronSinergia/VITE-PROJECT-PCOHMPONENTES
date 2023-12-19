import { sectionFilter } from '../../pages/section/section';

export const ulProductCreate = (
  product,
  oneNameForLabelOption,
  ulSearchFullSize,
  selectSearchMobile,
  selectFilterEventListener,
  array
) => {
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
    sectionFilter.appendChild(ulSearchFullSize);

    selectFilterEventListener(liCheckBox);
  }
};
