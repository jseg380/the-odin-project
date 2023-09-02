const dialog = document.createElement('dialog');
dialog.id = 'new-todo-dialog';
const form = document.createElement('form');
const formTitle = document.createElement('h2');
formTitle.textContent = 'New Todo';
form.appendChild(formTitle);

const label = document.createElement('label');
label.htmlFor = 'title';
label.textContent = 'Title';
form.appendChild(label.cloneNode(true));

const titleInput = document.createElement('input');
titleInput.id = 'title';
titleInput.required = true;
titleInput.type = 'text';

form.appendChild(titleInput);

label.htmlFor = 'project-select';
label.textContent = 'Project';
form.appendChild(label.cloneNode(true));

const projectSelect = document.createElement('select');
projectSelect.id = 'project-select';
projectSelect.required = true;

form.appendChild(projectSelect);

label.htmlFor = 'description';
label.textContent = 'Description';
form.appendChild(label.cloneNode(true));

const descInput = document.createElement('textarea');
descInput.id = 'description';
descInput.cols = '20';
descInput.style.resize = 'vertical';

form.appendChild(descInput);


label.htmlFor = 'date';
label.textContent = 'Due date';
form.appendChild(label.cloneNode(true));

const dateInput = document.createElement('input');
dateInput.id = 'date';
dateInput.type = 'date';

form.appendChild(dateInput);


const priorityFieldset = document.createElement('fieldset');
priorityFieldset.id = 'priority';

const priorityLegend = document.createElement('legend');
priorityLegend.textContent = 'Priority';
priorityFieldset.appendChild(priorityLegend);

const priorities = [
  {value: 'low', color: '#A4FCB4'},
  {value: 'normal', color: '#44BBFC'},
  {value: 'high', color: '#FC3523'}
];

priorities.forEach(el => {
  const priorityDiv = document.createElement('div');

  const priorityRadio = document.createElement('input');
  priorityRadio.type = 'radio';
  priorityRadio.name = 'priority';
  priorityRadio.value = el.value;
  priorityRadio.id = el.value;
  priorityRadio.required = true;

  priorityDiv.appendChild(priorityRadio);

  label.htmlFor = el.value;
  label.textContent = el.value.charAt(0).toUpperCase() + el.value.slice(1);

  priorityDiv.appendChild(label.cloneNode(true));

  const colorDiv = document.createElement('div');
  colorDiv.style.backgroundColor = el.color;

  priorityDiv.appendChild(colorDiv);

  priorityFieldset.appendChild(priorityDiv);
});

form.appendChild(priorityFieldset);

const buttonsDiv = document.createElement('div');
const createBtn = document.createElement('button');
createBtn.id = 'create-todo-button';
createBtn.textContent = 'Create';
createBtn.classList.add('accept-button');
buttonsDiv.appendChild(createBtn);

const cancelBtn = document.createElement('button');
cancelBtn.id = 'cancel-todo-button';
cancelBtn.textContent = 'Cancel';
cancelBtn.classList.add('cancel-button');
buttonsDiv.appendChild(cancelBtn);

form.appendChild(buttonsDiv);

dialog.appendChild(form);
export { dialog , priorities };
