const navbar = document.createElement('nav');
const logo = document.createElement('p');
const ul = document.createElement('ul');
const ulElements = [
  {page: 'main-page', textContent: 'Main'},
  {page: 'menu-page', textContent: 'Menu'},
  {page: 'contact-page', textContent: 'Contact'}
];

logo.id = 'logo';
logo.textContent = 'The Restaurant';

navbar.appendChild(logo);

ulElements.forEach(el => {
  const listElement = document.createElement('li');
  listElement.dataset.page = el.page;
  listElement.textContent = el.textContent;
  listElement.classList.add('link-page');
  ul.appendChild(listElement);
});

navbar.appendChild(ul);

export { navbar };
