function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');
  
    const locationHeader = document.createElement('h3');
    locationHeader.classList.add = ('h-medium');
    locationHeader.textContent = 'Location';
    contact.appendChild(locationHeader);

    const location = document.createElement('p');
    location.textContent = '678 Phony Ave, Bologna';
    contact.appendChild(location);

    const hoursHeader = document.createElement('h3');
    hoursHeader.classList.add = ('h-medium');
    hoursHeader.textContent = 'Opening hours';
    contact.appendChild(hoursHeader);

    const days = document.createElement('p');
    days.textContent = 'Monday - Saturday';
    contact.appendChild(days);

    const hours = document.createElement('p');
    hours.textContent = '10am - 4 pm | 6pm - 11pm';
    contact.appendChild(hours);

    const contactHeader = createElement('h3');
    contactHeader.classList.add('h-medium');
    contactHeader.textContent = 'Contact';
    contact.appendChild(contactHeader);

    const phone = createElement('p');
    phone.textContent = '(333)-444 555';
    contact.appendChild(phone);

    const email = createElement('p');
    email.textContent = 'sorrynotreal@hotdog.com';
    contact.appendChild(email);
  
    return contact
  }
  
  function renderContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
  }
  
  export default renderContact;
