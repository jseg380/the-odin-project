import closeIcon from './icons/close-thick.svg';

const dialog = document.createElement('dialog');
dialog.id = 'show-todo-dialog';

const title = document.createElement('h2');
title.id = 'todo-title';

dialog.appendChild(title);

const closeDialogButton = document.createElement('button');
closeDialogButton.classList.add('circular-button');
closeDialogButton.id = 'close-dialog-button';

const closeImg = document.createElement('img');
closeImg.src = closeIcon;
closeImg.alt = 'Close window';

closeDialogButton.appendChild(closeImg);

dialog.appendChild(closeDialogButton);

const priorityDiv = document.createElement('div');

const priorityCircle = document.createElement('div');
priorityCircle.id = 'todo-priority-circle';
priorityCircle.classList.add('circular-div');

priorityDiv.appendChild(priorityCircle);

const prioritySpan = document.createElement('span');
prioritySpan.id = 'todo-priority-name';

priorityDiv.appendChild(prioritySpan);

const dateSpan = document.createElement('div');
dateSpan.id = 'todo-date';

priorityDiv.appendChild(dateSpan);

dialog.appendChild(priorityDiv);

const descriptionPar = document.createElement('p');
descriptionPar.id = 'todo-description';

dialog.appendChild(descriptionPar);

export default dialog;
