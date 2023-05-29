function createHomepage() {
    const home = document.createElement('div');
    home.classList.add('home');
    
    // append title and subtitle
    const homeHero = document.createElement('div');
    homeHero.classList.add('home-hero');
    home.appendChild(homeHero);

            // n //
    const subtitle = document.createElement('p');
    subtitle.classList.add('subtitle');
    subtitle.textContent = 'This is';
    homeHero.appendChild(subtitle);

    const heroTitle = document.createElement('h1');
    heroTitle.classList.add('hero-title');
    heroTitle.textContent = 'Gourmet Madness';
    homeHero.appendChild(heroTitle);

    const redLine = document.createElement('hr');
    redLine.classList.add('line');
    homeHero.appendChild(redLine);

    const titleSubtext = document.createElement('p');
    titleSubtext.classList.add('title-subtext');
    titleSubtext.textContent = 'Elevate your palate';
    homeHero.appendChild(titleSubtext);

    const heroBtnDiv = document.createElement('div');
    heroBtnDiv.classList.add('btn-container');
    homeHero.appendChild(heroBtnDiv);

    const heroBtn = document.createElement('button');
    heroBtn.classList.add('btn-hero');
    heroBtn.textContent = 'Begin';
    heroBtnDiv.appendChild(heroBtn);
  
    return home;
  }

function renderHome() {
  const mainElement = document.getElementById('main');
  mainElement.textContent = '';
  mainElement.appendChild(createHomepage());
};
  
export default renderHome;
  