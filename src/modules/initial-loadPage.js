import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('restaurant-name');
  headerTitle.textContent = 'Gourmet Madness';

  header.appendChild(headerTitle);
  header.appendChild(createNav());

  return header;
}

// nav, header, footer are always present

function createNav() {
  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.classList.add('btn-nav');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(homeButton);
    renderHome();
  });

  const menuButton = document.createElement('button');
  menuButton.classList.add('btn-nav');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuButton);
    renderMenu();
  });

  const contactButton = document.createElement('button');
  contactButton.classList.add('btn-nav');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactButton);
    renderContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.btn-nav');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const footerText = document.createElement('p');

  // Text nodes
  const text1 = document.createElement('p');
  text1.textContent = `Built by`;

  const text2 = document.createElement('p');
  text2.textContent = 'BoneMuffin';

  // GitHub link
  const githubLink = document.createElement('a');
  githubLink.classList.add('footer-link');
  githubLink.target = '_blank';
  githubLink.setAttribute('href', 'https://github.com/BoneMuffin');


  githubLink.appendChild(text2);
  footerText.appendChild(text1);
  footerText.appendChild(githubLink);
  footer.appendChild(footerText);

  return footer;
}

function loadPage() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector('.btn-nav'));
  renderHome();
}

export default loadPage;