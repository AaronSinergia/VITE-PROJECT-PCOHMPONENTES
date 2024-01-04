import { header } from './pages/HEADER/header';
import { article } from './pages/ARTICLE/article';
import { section } from './pages/SECTION/section';
import { footer } from './pages/FOOTER/footer';

const bodyApp = () => {
  const divApp = document.querySelector('#app');
  const printHeader = header();
  const printSection = section();
  const printGalleryArticle = article();
  const printFooter = footer();

  divApp.appendChild(printHeader);
  divApp.appendChild(printSection);
  divApp.appendChild(printGalleryArticle);
  divApp.appendChild(printFooter);

  return divApp;
};

bodyApp();
