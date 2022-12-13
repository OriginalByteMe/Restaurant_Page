import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

function mainComponent() {
  
  const nav = document.createElement('ul');
  const home = document.createElement('li');
  const homeLink = document.createElement('a');
  const menuLink = document.createElement('li');
  const contactLink = document.createElement('li');
  
  homeLink.innerHTML = 'Home';
  homeLink.addEventListener('click', () => {
    body.appendChild(home());
  });
  home.appendChild(homeLink);
  menuLink.innerHTML = 'Menu';
  menuLink.addEventListener('click', () => {
    menu();
  });
  contactLink.innerHTML = 'Contact';
  contactLink.addEventListener('click', () => {
    body.appendChild(contact());
  });

  nav.appendChild(homeLink);
  nav.appendChild(menuLink);
  nav.appendChild(contactLink);



  const body = document.createElement('div');
  const container = document.createElement('div');
  body.appendChild(nav);
  body.appendChild(container);
  return body;
}

document.body.appendChild(mainComponent());