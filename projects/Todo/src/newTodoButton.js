import plusIcon from './icons/plus.svg';

const newTodoBtn = document.createElement('button');
newTodoBtn.id = 'new-todo-button';

const plusImg = document.createElement('img');
plusImg.setAttribute('src', plusIcon);
plusImg.setAttribute('title', 'Add a new To-Do');

newTodoBtn.appendChild(plusImg);

export default newTodoBtn;
