import './style.css';
import { header } from './components/header';
import { section } from './components/section';
import { article } from './components/article';
import { footer } from './components/footer';
// import { selectSearchMobileEventListener } from './functions/selecSearchMobileEventListener';

const bodyApp = () => {
  header();
  section();
  // selectSearchMobileEventListener();
  article();
  footer();
};

bodyApp();
