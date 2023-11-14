import './style.css';
import { header } from './components/header';
import { section } from './components/section';
import { article } from './components/article';
import { footer } from './components/footer';

const bodyApp = () => {
  header();
  section();
  article();
  footer();
};

bodyApp();
