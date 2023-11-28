import { footerLogos } from './footerLogos';

export const footer = () => {
  const divApp = document.querySelector('#app');
  const footerDiv = document.createElement('div');
  const footerTitle = document.createElement('h3');

  footerTitle.innerHTML = '© Creado por Aaron Carrasco Romero - 2023';
  footerDiv.className = 'footer_div';
  footerTitle.className = 'footer_title';

  const footerRRSS = footerLogos();

  footerDiv.appendChild(footerRRSS);
  footerDiv.appendChild(footerTitle);

  divApp.appendChild(footerDiv);
  document.body.appendChild(divApp);
};
