export const resetAllFilters = (resetButtonFilters) => {
  resetButtonFilters.addEventListener('click', () => {
    location.reload();
  });
};
