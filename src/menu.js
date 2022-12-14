function menu(){
    const title = document.createElement('div');
    const content = document.createElement('div');
    const menu = document.createElement('div');

    title.classList.add('title');
    content.classList.add('inner-content');


    menu.classList.add('menu');
    title.innerHTML = 'Menu';

    menu.innerHTML = "Reprehenderit adipisicing esse occaecat dolore dolor esse anim occaecat enim Lorem aliquip non duis. Magna anim esse ipsum magna id do. Culpa do aliqua laborum aute sunt consectetur qui eiusmod minim nisi sit. Amet mollit enim ipsum aliqua labore magna sit deserunt officia. Deserunt tempor duis culpa qui consectetur. Elit amet magna nulla do Lorem culpa qui qui. Aliqua elit cupidatat mollit aliqua. Fugiat magna minim anim ad reprehenderit sit cupidatat dolore qui occaecat esse cillum. Commodo deserunt proident exercitation irure Lorem veniam. Cillum sit laboris in non esse.";
    
    content.appendChild(title);
    content.appendChild(menu);
    return content;
}

export {menu}