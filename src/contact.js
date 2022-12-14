function contact(){
  const title = document.createElement('div');
  const form = document.createElement('form');
  const content = document.createElement('div');

  title.classList.add('title');
  title.innerHTML = 'Contact';

  form.innerHTML = `<label for="name">Name:</label><br>`;
  form.innerHTML += `<input type="text" id="name" name="name"><br>`;
  form.innerHTML += `<label for="email">Email:</label><br>`;
  form.innerHTML += `<input type="text" id="email" name="email"><br>`;
  form.innerHTML += `<label for="message">Message:</label><br>`;
  form.innerHTML += `<textarea id="message" name="message" rows="4" cols="50"></textarea><br>`;
  form.innerHTML += `<input type="submit" value="Submit">`;
  

  content.appendChild(title);
  content.appendChild(form);

  return content;

}

export {contact}