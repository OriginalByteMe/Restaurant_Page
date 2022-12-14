import {homePage} from './home.js';
import {menu} from './menu.js';
import {contact} from './contact.js';
import './style.css';

function mainComponent() {
  const body = document.createElement('div');
  body.classList.add('content');
  const nav = document.createElement('div');
  const homeLink = document.createElement('button');
  const menuLink = document.createElement('button');
  const contactLink = document.createElement('button');
  const content = document.createElement('div');

  content.innerHTML =  "Reprehenderit adipisicing esse occaecat dolore dolor esse anim occaecat enim Lorem aliquip non duis. Magna anim esse ipsum magna id do. Culpa do aliqua laborum aute sunt consectetur qui eiusmod minim nisi sit. Amet mollit enim ipsum aliqua labore magna sit deserunt officia. Deserunt tempor duis culpa qui consectetur. Elit amet magna nulla do Lorem culpa qui qui. Aliqua elit cupidatat mollit aliqua. Fugiat magna minim anim ad reprehenderit sit cupidatat dolore qui occaecat esse cillum. Commodo deserunt proident exercitation irure Lorem veniam. Cillum sit laboris in non esse.";

  homeLink.innerHTML = 'Home';
  homeLink.addEventListener('click', () => {
    body.innerHTML = "";
    body.appendChild(nav);
    body.appendChild(homePage());
  });
  menuLink.innerHTML = 'Menu';
  menuLink.addEventListener('click', () => {
    body.innerHTML = "";
    body.appendChild(nav);
    body.appendChild(menu());
  });
  contactLink.innerHTML = 'Contact';
  contactLink.addEventListener('click', () => {
    body.innerHTML = "";
    body.appendChild(nav);
    body.appendChild(contact());
  });

  nav.appendChild(homeLink);
  nav.appendChild(menuLink);
  nav.appendChild(contactLink);

  body.appendChild(nav);
  body.appendChild(content);
  return body;
}

document.body.appendChild(mainComponent());