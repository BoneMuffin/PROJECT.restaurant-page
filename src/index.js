console.log('yello');

import initWebsite from './modules/initial-loadPage';
import renderHome from './modules/home';
import renderMenu from './modules/menu';
import renderContact from './modules/contact';

initWebsite();

// event listeners and tab-switching logic

function addNavEvents() {
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');
  
    homeBtn.addEventListener('click', renderHome);
    menuBtn.addEventListener('click', renderMenu);
    contactBtn.addEventListener('click', renderContact);
  };

  /*
function initWebsite() {
    loadPage();
    renderHome();
    addNavEvents();
};
*/
