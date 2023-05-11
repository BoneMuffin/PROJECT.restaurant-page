function createHomePageHero() {
    const home = document.createElement('div');
    home.classList.add('home');

    // Create hero and append title and subtitle
    const homeHero = document.createElement('div');
    homeHero.classList.add('home-hero')
  
    home.appendChild(homeHero);

    const subtitle = document.createElement('p');
    subtitle.classList.add = ('subtitle');
    subtitle.textContent = 'This is';

    home.appendChild(subtitle);

    const heroTitle = document.createElement('h1');
    heroTitle.classList.add('hero-title');
    heroTitle.textContent = 'Gourmet Madness';

    home.appendChild(heroTitle);

    const redLine = document.createElement('hr');
    redLine.classList.add('line');

    home.appendChild(redLine);

    const titleSubtext = document.createElement('p');
    titleSubtext.classList.add('title-subtext');
    titleSubtext.textContent = 'Elevate your palate';

    home.appendChild(titleSubtext);

    const heroBtnDiv = document.createElement('div');
    heroBtnDiv.classList.add('btn-container');

    home.appendChild(heroBtnDiv);

    const heroBtn = document.createElement('button');
    heroBtn.classList.add('btn-hero');
    heroBtn.textContent = 'Begin';

    home.appendChild(heroBtn);
  
    return home;
  }
  
  function renderHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHomePageHero());
  }
  
  export default renderHome;
  