import { products } from '../utils/productsArray';
import { allFiltersUnited } from './allFiltersUnited';

export function selectFilterEventListener(element) {
  element.addEventListener('change', () => allFiltersUnited(products));
}
