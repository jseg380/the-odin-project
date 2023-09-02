import inboxIcon from './icons/inbox-outline.svg';
import todayIcon from './icons/calendar-today-outline.svg';
import upcomingIcon from './icons/calendar-clock-outline.svg';
import plusIcon from './icons/plus.svg';

const menuOptions = [
  {icon: inboxIcon, value: 'Inbox'},
  {icon: todayIcon, value: 'Today'},
  {icon: upcomingIcon, value: 'Upcoming'}
];

const sidebarDiv = document.createElement('nav');
sidebarDiv.id = 'sidebar';

const menuUl = document.createElement('ul');

menuOptions.forEach(option => {
  const menuLi = document.createElement('li');
  menuLi.classList.add('sidebar-option');
  menuLi.dataset.page = option.value.toLowerCase();

  const icon = document.createElement('img');
  icon.src = option.icon;
  icon.classList.add('sidebar-icon');
  menuLi.appendChild(icon);
  
  const text = document.createElement('span');
  text.textContent = option.value;
  text.classList.add('sidebar-text');
  menuLi.appendChild(text);

  menuUl.appendChild(menuLi);
});

sidebarDiv.appendChild(menuUl);

const separatorDiv = document.createElement('div');
separatorDiv.classList.add('sidebar-title');

const projectsTitle = document.createElement('span');
projectsTitle.textContent = 'Projects';
projectsTitle.style.width = '62%';
separatorDiv.appendChild(projectsTitle);

const createProjectBtn = document.createElement('button');
createProjectBtn.id = 'new-project-button';
createProjectBtn.classList.add('circular-button');

const plusImg = document.createElement('img');
plusImg.src = plusIcon;
plusImg.title = 'Add new project';

createProjectBtn.appendChild(plusImg);
separatorDiv.appendChild(createProjectBtn);

sidebarDiv.appendChild(separatorDiv);

const projectsUl = document.createElement('ul');
projectsUl.id = 'projects-list';

sidebarDiv.appendChild(projectsUl);

export default sidebarDiv;
