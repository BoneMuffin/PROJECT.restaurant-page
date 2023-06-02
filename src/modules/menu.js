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

function renderMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

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

  const mainCourseH3 = document.createElement("h3");
  mainCourseH3.classList.add("h-medium");
  mainCourseH3.textContent = "Main course";

  menuContainerDiv.appendChild(mainCourseH3);

  const mainCourseSectionDiv = document.createElement("div");
  mainCourseSectionDiv.classList.add("menu-section");

  menuItems.forEach((menuItem) => {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-item");

    const itemNameSpan = document.createElement("span");
    itemNameSpan.classList.add("item-name");
    itemNameSpan.textContent = menuItem.title;

    const itemDecoSpan = document.createElement("span");
    itemDecoSpan.classList.add("item-deco");

    const priceSpan = document.createElement("span");
    priceSpan.classList.add("price");
    priceSpan.textContent = menuItem.price;

    menuItemDiv.appendChild(itemNameSpan);
    menuItemDiv.appendChild(itemDecoSpan);
    menuItemDiv.appendChild(priceSpan);

    const descriptionP = document.createElement("p");
    descriptionP.classList.add("description");
    descriptionP.textContent = menuItem.description;

    mainCourseSectionDiv.appendChild(menuItemDiv);
    mainCourseSectionDiv.appendChild(descriptionP);
  });

  menuContainerDiv.appendChild(mainCourseSectionDiv);
  menuDiv.appendChild(menuContainerDiv);

  return menuDiv;
}

export default renderMenu;
