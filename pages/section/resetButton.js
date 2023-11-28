import { resetAllFilters } from '../../functions/resetAllFilters';
import { sectionFilter } from './section';

export const resetButton = () => {
  const resetButtonFilters = document.createElement('button');
  resetButtonFilters.className = 'reset_button_filter';
  resetButtonFilters.innerHTML = 'Resetear Filtros';
  sectionFilter.appendChild(resetButtonFilters);

  resetAllFilters(resetButtonFilters);

  return resetButtonFilters;
};
