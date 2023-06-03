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
  const menuDiv = document.createElement('div');
  menuDiv.className = 'menu';

  const heroDiv = document.createElement('div');
  heroDiv.className = 'hero';
  menuDiv.appendChild(heroDiv);

  const menuHeaderDiv = document.createElement('div');
  menuHeaderDiv.className = 'menu-header';
  heroDiv.appendChild(menuHeaderDiv);

  const h1 = document.createElement('h1');
  h1.className = 'h-large';
  h1.textContent = 'Menu';
  menuHeaderDiv.appendChild(h1);

  const menuContainerDiv = document.createElement('div');
  menuContainerDiv.className = 'menu-container';
  menuDiv.appendChild(menuContainerDiv);

  // create an array of menu sections
  const sections = [
    { title: 'Main course', items: menuItems.slice(0, 2) },
    { title: 'Soups & salads', items: menuItems.slice(2, 4) },
    { title: 'Desserts', items: menuItems.slice(4, 6) },
    { title: 'Drinks', items: menuItems.slice(6) },
  ];

  // Create a heading for the section
  sections.forEach((section) => {
    const sectionHeader = document.createElement('h3');
    sectionHeader.className = 'h-medium';
    sectionHeader.textContent = section.title;
    menuContainerDiv.appendChild(sectionHeader);

  // Create a div for the section's menu items
    const menuSectionDiv = document.createElement('div');
    menuSectionDiv.className = 'menu-section';
    menuContainerDiv.appendChild(menuSectionDiv);

  // Iterate over each menu item in the section and create the necessary HTML structure
    section.items.forEach((item) => {
      const menuItemDiv = document.createElement('div');
      menuItemDiv.className = 'menu-item';
      menuSectionDiv.appendChild(menuItemDiv);

      const itemNameSpan = document.createElement('span');
      itemNameSpan.className = 'item-name';
      itemNameSpan.textContent = item.title;
      menuItemDiv.appendChild(itemNameSpan);

      const itemDecoSpan = document.createElement('span');
      itemDecoSpan.className = 'item-deco';
      menuItemDiv.appendChild(itemDecoSpan);

      const priceSpan = document.createElement('span');
      priceSpan.className = 'price';
      priceSpan.textContent = item.price;
      menuItemDiv.appendChild(priceSpan);

      const descriptionP = document.createElement('p');
      descriptionP.className = 'description';
      descriptionP.textContent = item.description;
      menuSectionDiv.appendChild(descriptionP);
    });
  });

  return menuDiv;
}

function renderMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default renderMenu;

