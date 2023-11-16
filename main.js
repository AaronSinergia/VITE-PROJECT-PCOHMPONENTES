import './style.css';
import { header } from './components/header';
import { section } from './components/section';
import { article } from './components/article';
import { footer } from './components/footer';
import { products } from './components/productsArray';

const bodyApp = () => {
  header();
  section(products);
  article(products);
  footer();
};

bodyApp();
