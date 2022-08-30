const paragraph = document.createElement('p');

paragraph.textContent = "Im a brand new paragraph";

const todolist = document.querySelector('ul');
const newTodo = document.createElement('li');
newTodo.textContent = 'Do homework';

todolist.appendChild(newTodo);

//add begining of the list

const anotherTodo=document.createElement('li');
anotherTodo.textContent='Pay bills';

todolist.insertBefore(anotherTodo,todolist.firstElementChild);

//remove

todolist.removeChild(todolist.lastElementChild);