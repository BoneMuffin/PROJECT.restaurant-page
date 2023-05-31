class MenuItem {
  constructor(title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
  }
};

const menuItems = [
    new MenuItem('Carbonara', '$30', 'spaghetti + bacon + garlic + eggs + Parmesan'),
    new MenuItem('Simple Lamb Ragù', '$24', 'ground lamb + red wine  + thyme + rosemary + pappardelle'),
    new MenuItem('Antipasto Salad', '$25', 'cured meat + marinated vegetables + cheese'),
    new MenuItem('Wedding Soup', '$28', 'umini chicken meatballs + little pasta nuggets + vegetables'),
    new MenuItem('Concord Grape Granita', '$12', 'Concord grape juice + sugar + water'),
    new MenuItem('Tiramisu Icebox Pie', '$15', 'ladyfingers + coffee + mascarpone'),
    new MenuItem('Campari', '$7','pink grapefruit juice + blood orange slice + herbs'),
    new MenuItem('Bellini', '$10', 'puréed white peaches + Prosecco')
];

function createMenu() {
    // adding title before displaying the menu
    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    const menuHero = document.createElement('div');
    menuHero.classList.add('hero');
    menu.appendChild(menuHero);

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    menu.appendChild(menuHeader);

    const title = document.createElement('h1');
    title.classList.add('h-large');
    title.textContent = 'Menu';
    menuHeader.appendChild(title);

    // create the container for the menu
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    menuContainer.appendChild(menu);

    const menuTitle = document.createElement('h3');
    menuTitle.classList.add('h-medium');
    menuContainer.appendChild(menuTitle);

    // create menu
    menuItems.forEach(item => {
      const itemContainer = document.createElement('div');
      itemContainer.classList.add('menu-section');
      menu.appendChild(itemContainer);

      const itemText = document.createElement('div');
      itemText.classList.add('menu-item');
      itemContainer.appendChild(itemText);

      const itemName = document.createElement('span');
      itemName.classList.add('item-name');
      itemText.appendChild(itemName);

      const itemDeco = document.createElement('span');
      itemDeco.classList.add('item-deco');
      itemName.appendChild(itemDeco);

      const itemPrice = document.createElement('span');
      itemPrice.classList.add('price');
      itemPrice.textContent = item.price;
      itemName.appendChild(itemPrice);

      const itemDescription = document.createElement('p');
      itemDescription.classList.add('description');
      itemDescription.textContent = item.description;
      itemText.appendChild(itemDescription);
    });

    return menu
};

function renderMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
};
  
export default renderMenu;

