import { products } from '../utils/productsArray';
import { allFiltersUnited } from './allFiltersUnited';

export function filteredForPrice(element) {
  element.addEventListener('click', () => allFiltersUnited(products));
}
