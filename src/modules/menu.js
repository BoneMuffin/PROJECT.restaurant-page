class Item {
    constructor(title, price, description) {
      this.title = title;
      this.price = price;
      this.description = description;
    }
  };

  const item1 = new Item(
    'Carbonara',
    '$30',
    'spaghetti + bacon + garlic + eggs + Parmesan',
  );

  const item2 = new Item(
    'Simple Lamb Ragù',
    '$24',
    'ground lamb + red wine  + thyme + rosemary + pappardelle',
  );

  const item3 = new Item(
    'Antipasto Salad',
    '$25',
    'cured meat + marinated vegetables + cheese',
  );

  const item4 = new Item(
    'Wedding Soup',
    '$28',
    'umini chicken meatballs + little pasta nuggets + vegetables',
  );

  const item5 = new Item(
    'Concord Grape Granita',
    '$12',
    'Concord grape juice + sugar + water',
  );

  const item6 = new Item(
    'Tiramisu Icebox Pie',
    '$15',
    'ladyfingers + coffee + mascarpone',
  );

  const item7 = new Item(
    'Campari',
    '$7',
    'pink grapefruit juice + blood orange slice + herbs',
  );

  const item8 = new Item(
    'Bellini',
    '$10',
    'puréed white peaches + Prosecco',
  );

  const menuItems = [item1, item2, item3, item4, item5, item6, item7, item8];

  function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    
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
      itemDescription.classList.add('idescription');
      itemDescription.textContent = item.description;
      itemText.appendChild(itemDescription);
    });
  };

function renderMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
  };
  
export default renderMenu;

