const contentDiv = document.createElement('div');
contentDiv.id = 'content';

const title = document.createElement('h2');
title.classList.add('title');

contentDiv.appendChild(title);

const todosUl = document.createElement('ul');
todosUl.id = 'todo-list';

contentDiv.appendChild(todosUl);

export default contentDiv;
