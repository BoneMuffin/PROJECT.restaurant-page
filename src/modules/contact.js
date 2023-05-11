function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')
  
    const locationHeader = document.createElement('h3')
    locationHeader.classList.add = ('h-medium');
    locationHeader.textContent = 'Location';
    
    const location = document.createElement('p');
    location.textContent = '678 Phony Ave, Bologna';

    const hoursHeader = document.createElement('h3');
    hoursHeader.classList.add = ('h-medium');
    hoursHeader.textContent = 'Opening hours';

    const days = document.createElement('p');
    days.textContent = 'Monday - Saturday';
    
    const hours = document.createElement('p');
    hours.textContent = '10am - 4 pm | 6pm - 11pm';

    const contactHeader = createElement('h3');
    contactHeader.classList.add('h-medium');
    contactHeader.textContent = 'Contact';

    const phone = createElement('p');
    phone.textContent = '(333)-444 555';

    const email = createElement('p');
    email.textContent = 'sorrynotreal@hotdog.com';

    contact.appendChild(locationHeader)
    contact.appendChild(location)
    contact.appendChild(hoursHeader)
    contact.appendChild(days)
    contact.appendChild(hours)
    contact.appendChild(contactHeader)
    contact.appendChild(phone)
    contact.appendChild(email)
  
    return contact
  }
  
  function renderContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
  }
  
  export default renderContact