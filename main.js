import './style.css';
import { header } from './pages/header/header';
import { section } from './pages/section/section';
import { article } from './pages/article/article';
import { footer } from './pages/footer/footer';
import { products } from './utils/productsArray';

export let productsFiltered = products;

export const setProductsFiltered = (newProducts) => {
  productsFiltered = [...newProducts];
};

const bodyApp = () => {
  header();
  section(productsFiltered);
  article(productsFiltered);
  footer();
};

bodyApp();
