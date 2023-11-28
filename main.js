import './style.css';
import { header } from './pages/header/header';
import { section } from './pages/section/section';
import { article } from './pages/article/article';
import { footer } from './pages/footer/footer';
import { products } from './components/productsArray';

const bodyApp = () => {
  header();
  section(products);
  article(products);
  footer();
};

bodyApp();
