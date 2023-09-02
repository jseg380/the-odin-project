import navbarDiv from './navbar.js';
import contentDiv from './content.js';
import sidebarDiv from './sidebar.js';
import newTodoBtn from './newTodoButton.js';
import { dialog as newTodoDialog , priorities } from './newTodoDialog.js';
import showTodoDialog from './showTodoDialog.js';
import Todo from './todo.js';
import Project from './project.js';
import './style.css';
import trashIcon from './icons/trash-can-outline.svg';

const body = document.body;

body.appendChild(navbarDiv);
body.appendChild(sidebarDiv);
body.appendChild(contentDiv);
body.appendChild(newTodoBtn);
body.appendChild(newTodoDialog);
body.appendChild(showTodoDialog);


// Declarations

const pages = document.querySelectorAll('.sidebar-option');
const menuButton = document.querySelector('#menu-button');
const newProjectBtn = document.querySelector('#new-project-button');
const createTodoBtn = document.querySelector('#create-todo-button');
const cancelTodoBtn = document.querySelector('#cancel-todo-button');
const titleTodo = document.querySelector('#title');
const projectTodo = document.querySelector('#project-select');
const descTodo = document.querySelector('#description');
const dateTodo = document.querySelector('#date');
const priorityTodo = document.querySelectorAll('#priority input[type="radio"]');
const todoList = document.querySelector('#todo-list');
let projectsLi = document.querySelectorAll('.sidebar-project');
let removeProjectBtns = document.querySelectorAll('.remove-project-tmp');
let activeInput = false;
let minimized = false;
const smallWidth = 800;


// Default values
let currentPage = 'inbox';
let currentProject = 0;

let projects = [new Project('Default')];
const projectsUl = document.querySelector('#projects-list');

refreshView();

let selectedOption = document.querySelector(`.sidebar-option[data-page="${currentPage}"]`);
selectedOption.classList.add('selected');

let selectedProject = document.querySelector(`.sidebar-project[data-project="${currentProject}"]`);
selectedProject.classList.add('selected');

const contentTitle = document.querySelector('#content .title');
contentTitle.textContent = currentPage[0].toUpperCase() + currentPage.slice(1);


// Event listeners

if (window.innerWidth < smallWidth) {
    sidebarDiv.classList.add('hidden');
    contentDiv.classList.add('full');
    minimized = true;
}

window.addEventListener('resize', () => {
  if (window.innerWidth < smallWidth) {
    sidebarDiv.classList.add('hidden');
    contentDiv.classList.add('full');
    minimized = true;
  }
  else if (minimized) {
    sidebarDiv.classList.remove('small');
    sidebarDiv.classList.remove('hidden');
    contentDiv.classList.remove('full');
    minimized = false;
  }
  else {
    sidebarDiv.classList.remove('small');
  }
});

pages.forEach(el => el.addEventListener('click', (e) => {
  let targetPage = e.target.dataset.page;

  // Clicked a child of the li element
  if (targetPage === undefined)
    targetPage = e.target.parentNode.dataset.page;

  if (targetPage === currentPage) return;

  currentPage = targetPage;
  
  // Remove selected class from old selected option
  selectedOption.classList.remove('selected');
  selectedOption = document.querySelector(`.sidebar-option[data-page="${currentPage}"]`);
  selectedOption.classList.add('selected');

  // Render the page targeted
  // this line should go in refreshView (separate functions)
  contentTitle.textContent = currentPage[0].toUpperCase() + currentPage.slice(1);
  refreshView();
}));



menuButton.addEventListener('click', () => {
  if (sidebarDiv.classList.contains('small')) {
    console.log('menu while small');
    sidebarDiv.classList.toggle('hidden');
    contentDiv.classList.toggle('full');
  }
  else {
    sidebarDiv.classList.toggle('hidden');
    contentDiv.classList.toggle('full');
  }
});


newTodoBtn.addEventListener('click', () => {
  newTodoDialog.classList.add('shown');
  newTodoDialog.showModal();

  // Refresh the available projects in the select
  const projectSelect = document.querySelector('#project-select');
  projectSelect.textContent = '';

  // Create option elements for each project in the select
  projects.forEach((el, index) => {
    const selectOption = document.createElement('option');
    selectOption.value = el.name;
    selectOption.textContent = el.name;
    selectOption.dataset.project = index;

    projectSelect.appendChild(selectOption);
  });
});


createTodoBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Check validity of input fields
  if (!titleTodo.checkValidity()) {
    alert('Title cannot be empty');
    return;
  }

  if (!projectTodo.checkValidity()) {
    alert('The selected project is not valid');
    return;
  }

  if (!priorityTodo[0].checkValidity()) {
    alert('The project must have a priority level');
    return;
  }
  
  const projectIndex = projectTodo.selectedOptions[0].dataset.project;
  const title = titleTodo.value;
  const description = descTodo.value;
  const dueDate = dateTodo.value;
  const priority = Array.from(priorityTodo).filter(el => el.checked)[0].value;

  projects[projectIndex].push(new Todo(title, description, dueDate, priority));

  refreshView();
  // TODO: remake this (calling cancel to clean up input fields)
  cancelTodoBtn.click();
});


cancelTodoBtn.addEventListener('click', (e) => {
  e.preventDefault();

  newTodoDialog.classList.remove('shown');
  newTodoDialog.close();
  titleTodo.value = '';
  projectTodo.value = projectTodo.options.item(0);
  descTodo.value = '';
  dateTodo.value = '';
  priorityTodo.forEach(el => el.checked = false);
});


newProjectBtn.addEventListener('click', () => {
  if (activeInput) return;

  activeInput = true;

  selectedProject = document.querySelector(`.sidebar-project[data-project="${currentProject}"]`);
  if (selectedProject !== null)
    selectedProject.classList.remove('selected');
  
  const projectInput = document.createElement('input');
  projectInput.classList.add('project-input');

  projectsUl.appendChild(projectInput);

  const projectLi = document.createElement('li');
  projectLi.classList.add('confirm-input');

  const acceptBtn = document.createElement('button');
  acceptBtn.id = 'accept-input-button';
  acceptBtn.classList.add('accept-button');
  acceptBtn.textContent = 'Accept';
  projectLi.appendChild(acceptBtn);

  const cancelBtn = document.createElement('button');
  cancelBtn.id = 'cancel-input-button';
  cancelBtn.classList.add('cancel-button');
  cancelBtn.textContent = 'Cancel';
  projectLi.appendChild(cancelBtn);

  projectsUl.appendChild(projectLi);

  acceptBtn.addEventListener('click', () => {
    const projectName = projectInput.value;
    
    if (projectName === '') {
      alert('Project name cannot be empty');
    }
    else {
      projects.push(new Project(projectName));
    }
  
    removeInput();
    activeInput = false;
  }, { once : true });

  cancelBtn.addEventListener('click', () => {
    removeInput();
    activeInput = false;
  }, { once : true });

  function removeInput() {
    projectsUl.removeChild(projectInput);
    projectsUl.removeChild(projectLi);
    refreshView();
  };
});



// Functions 

function refreshView() {
  // Projects
  projectsUl.textContent = '';

  projects.forEach((project, index) => {
    const projectLi = document.createElement('li');
    projectLi.dataset.project = index;
    projectLi.classList.add('sidebar-project');
    projectLi.textContent = project.name;

    // Allow project deletion only
    if (projects.length > 1) {
      const trashImg = document.createElement('img');
      trashImg.src = trashIcon;
      trashImg.title = 'Remove project';
      const removeProjectBtn = document.createElement('button');
      removeProjectBtn.classList.add('remove-project-tmp');
      removeProjectBtn.classList.add('circular-button');
      removeProjectBtn.appendChild(trashImg);
      projectLi.appendChild(removeProjectBtn);
    }

    if (index === currentProject) {
      projectLi.classList.add('selected');
    }

    projectsUl.appendChild(projectLi);
    projectsLi = document.querySelectorAll('.sidebar-project');

    projectsLi.forEach(el => el.addEventListener('click', (e) => {
      if (activeInput) document.querySelector('#cancel-input-button').click();

      let targetProject = Number(e.target.dataset.project);

      if (targetProject === currentProject) return;

      // Remove selected class from old selected project
      selectedProject = document.querySelector(`.sidebar-project[data-project="${currentProject}"]`);
      if (selectedProject !== null)
        selectedProject.classList.remove('selected');

      currentProject = targetProject;

      selectedProject = document.querySelector(`.sidebar-project[data-project="${currentProject}"]`);
      selectedProject.classList.add('selected');

      refreshView();
    }));
  });

  removeProjectBtns = document.querySelectorAll('.remove-project-tmp');
  removeProjectBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.stopPropagation();
    let index;

    // Clicked the button itself
    if (e.target.parentNode.dataset.project !== undefined)
      index = e.target.parentNode.dataset.project;
    // Clicked the img in the button
    else
      index = e.target.parentNode.parentNode.dataset.project;

    projects.splice(index, 1);

    // If the project removed was the selected one, switch selection focus
    if (Number(index) === currentProject) {
      currentProject = 0;
    }

    // Refresh projects after deleting
    refreshView();
  }));


  // Todos
  todoList.textContent = '';

  // There are no projects
  if (currentProject === -1) return;

  projects[currentProject].todoArray(currentPage).forEach((todoEl, index) => {
    // Array already filtered according to the current option selected
    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-element');
    todoLi.dataset.todoNumber = todoEl.id;

    const completedButton = document.createElement('div');
    completedButton.classList.add('circular-div');
    completedButton.classList.add('completed-button');

    todoLi.appendChild(completedButton);

    const titleSpan = document.createElement('span');
    titleSpan.classList.add('todo-title');
    titleSpan.textContent = todoEl.title;

    todoLi.appendChild(titleSpan);

    if (todoEl.dueDate !== null) {
      const dateSpan = document.createElement('span');
      dateSpan.classList.add('todo-date');
      dateSpan.textContent = todoEl.formattedDate();

      todoLi.appendChild(dateSpan);
    }

    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('circular-div');
    const priority = priorities.filter(prio => prio.value === todoEl.priority);
    priorityDiv.style.backgroundColor = priority[0].color;

    todoLi.appendChild(priorityDiv);

    todoList.appendChild(todoLi);
  });

  const todoEls = document.querySelectorAll('#todo-list .todo-element');
  todoEls.forEach(el => el.addEventListener('click', (e) => {
    let todoId = e.target.dataset.todoNumber;

    if (todoId === undefined)
      todoId = e.target.parentNode.dataset.todoNumber;

    const currentTodo = projects[currentProject].getById(todoId);

    showTodoDialog.classList.add('shown');
    showTodoDialog.showModal();

    const title = document.querySelector('#show-todo-dialog #todo-title');
    const priorityName = document.querySelector('#show-todo-dialog #todo-priority-name');
    const priorityColor = document.querySelector('#show-todo-dialog #todo-priority-circle');
    const dateSpan = document.querySelector('#show-todo-dialog #todo-date');
    const descriptionPar = document.querySelector('#show-todo-dialog #todo-description');

    title.textContent = currentTodo.title;
    priorityName.textContent = currentTodo.formattedPriority();
    priorityColor.style.backgroundColor = priorities.filter(prio => {
      return prio.value === currentTodo.priority;
    })[0].color;
    dateSpan.textContent = currentTodo.formattedDate();
    if (currentTodo.description !== null) {
      descriptionPar.textContent = currentTodo.description;
    }
    else {
      descriptionPar.innerHTML = '<em style="color: darkgrey;">No description available</em>';
    }

    const closeDialogButton = document.querySelector('#close-dialog-button');
    closeDialogButton.addEventListener('click', () => {
      showTodoDialog.classList.remove('shown');
      showTodoDialog.close();
    });
  }));

  const completeButtons = document.querySelectorAll('#todo-list .completed-button');
  completeButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const todoId = e.target.parentNode.dataset.todoNumber;
    projects[currentProject].remove(todoId);

    refreshView();
  }));
}

/*

Make a folder components, put there the components
Make a UI.js module, with a loadHomepage() function that starts everything
Make a refreshView function in UI.js

Make files for components that are created with javascript dinamically, i.e.
Project (.sidebar-project)
Todo Element (.todo-element)
so whenever one of those is needed all there is to do is something like
new ComponentName(info, info2)

Separate logic from DOM things, right now everything is in index.js
Allegdely well made project:
https://github.com/michalosman/todo-list/tree/main/src

*/
