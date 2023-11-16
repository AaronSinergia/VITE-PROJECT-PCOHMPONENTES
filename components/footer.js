export const footer = () => {
  const divApp = document.querySelector('#app');
  const footerDiv = document.createElement('div');
  const footerTitle = document.createElement('h3');
  const divRRSS = document.createElement('div');
  const githubLogo = document.createElement('img');
  const githubLink = document.createElement('a');
  const linkedinLogo = document.createElement('img');
  const linkedinLink = document.createElement('a');
  const netlifyLogo = document.createElement('img');
  const netlifyLink = document.createElement('a');

  githubLink.href = 'https://github.com/AaronSinergia';
  linkedinLink.href = 'https://www.linkedin.com/in/aaron-carrasco-romero/';
  netlifyLink.href = 'https://app.netlify.com/teams/aaronsinergia/overview';

  githubLogo.alt = 'github';
  linkedinLogo.alt = 'linkedin';
  netlifyLogo.alt = 'netlify';

  githubLogo.src = './img/GitHubLogo.png';
  linkedinLogo.src = './img/1384014.png';
  netlifyLogo.src = './img/netlify_logo_icon_169924.png';

  githubLogo.className = 'github_logo';
  linkedinLogo.className = 'linkedin_logo';
  netlifyLogo.className = 'netlify_logo';
  divRRSS.className = 'div_rrss';
  footerDiv.className = 'footer_div';
  footerTitle.className = 'footer_title';

  footerTitle.innerHTML = '© Creado por Aaron Carrasco Romero - 2023';

  netlifyLink.appendChild(netlifyLogo);
  linkedinLink.appendChild(linkedinLogo);
  githubLink.appendChild(githubLogo);
  divRRSS.appendChild(netlifyLink);
  divRRSS.appendChild(linkedinLink);
  divRRSS.appendChild(githubLink);
  footerDiv.appendChild(divRRSS);
  footerDiv.appendChild(footerTitle);

  divApp.appendChild(footerDiv);
  document.body.appendChild(divApp);
};
