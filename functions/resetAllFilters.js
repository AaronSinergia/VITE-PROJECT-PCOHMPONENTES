import { article } from '../components/article';

let isResetButtonClicked = false;

export function resetAllFilters(ev) {
  ev.addEventListener('click', () => {
    if (!isResetButtonClicked) {
      const articleContainer = document.querySelector('.products_article');
      articleContainer.innerHTML = article();
      isResetButtonClicked = true;
    }
  });
}
