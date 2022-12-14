const homePage = () =>{
  const title = document.createElement('div');
  const content = document.createElement('div');
  const home = document.createElement('div');
  
  title.classList.add('title');
  content.classList.add('inner-content');
  
  home.classList.add('Home');
  title.innerHTML = 'Home';

  home.innerHTML = "Reprehenderit adipisicing esse occaecat dolore dolor esse anim occaecat enim Lorem aliquip non duis. Magna anim esse ipsum magna id do. Culpa do aliqua laborum aute sunt consectetur qui eiusmod minim nisi sit. Amet mollit enim ipsum aliqua labore magna sit deserunt officia. Deserunt tempor duis culpa qui consectetur. Elit amet magna nulla do Lorem culpa qui qui. Aliqua elit cupidatat mollit aliqua. Fugiat magna minim anim ad reprehenderit sit cupidatat dolore qui occaecat esse cillum. Commodo deserunt proident exercitation irure Lorem veniam. Cillum sit laboris in non esse.";
  
  content.appendChild(title);
  content.appendChild(home);
  return content;
}

export {homePage}
