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
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const heroDiv = document.createElement("div");
  heroDiv.classList.add("hero");

  const menuHeaderDiv = document.createElement("div");
  menuHeaderDiv.classList.add("menu-header");

  const h1 = document.createElement("h1");
  h1.classList.add("h-large");
  h1.textContent = "Menu";

  menuHeaderDiv.appendChild(h1);
  heroDiv.appendChild(menuHeaderDiv);
  menuDiv.appendChild(heroDiv);

  const menuContainerDiv = document.createElement("div");
  menuContainerDiv.classList.add("menu-container");

  const sections = [
    {
      title: "Main course",
      items: menuItems.slice(0, 2),
    },
    {
      title: "Soups & salads",
      items: menuItems.slice(2, 4),
    },
    {
      title: "Desserts",
      items: menuItems.slice(4, 6),
    },
    {
      title: "Drinks",
      items: menuItems.slice(6, 8),
    },
  ];

  sections.forEach((section) => {
    const sectionH3 = document.createElement("h3");
    sectionH3.classList.add("h-medium");
    sectionH3.textContent = section.title;

    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("menu-section");

    section.items.forEach((menuItem) => {
      const menuItemP = document.createElement("p");
      menuItemP.classList.add("menu-item");

      const itemNameSpan = document.createElement("span");
      itemNameSpan.classList.add("item-name");
      itemNameSpan.textContent = menuItem.title;

      const itemDecoSpan = document.createElement("span");
      itemDecoSpan.classList.add("item-deco");

      const priceSpan = document.createElement("span");
      priceSpan.classList.add("price");
      priceSpan.textContent = menuItem.price;

      menuItemP.appendChild(itemNameSpan);
      menuItemP.appendChild(itemDecoSpan);
      menuItemP.appendChild(priceSpan);

      const descriptionP = document.createElement("p");
      descriptionP.classList.add("description");
      descriptionP.textContent = menuItem.description;

      sectionDiv.appendChild(menuItemP);
      sectionDiv.appendChild(descriptionP);
    });

    menuContainerDiv.appendChild(sectionH3);
    menuContainerDiv.appendChild(sectionDiv);
  });

  menuDiv.appendChild(menuContainerDiv);

  return menuDiv;
}

function renderMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default renderMenu;
