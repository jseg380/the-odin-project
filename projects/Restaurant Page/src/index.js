import { navbar } from './navbar.js';
import { footer } from './footer.js';
import { contentDiv as mainPage } from './main-page.js';
import { contentDiv as menuPage } from './menu-page.js';
import { contentDiv as contactPage } from './contact-page.js';
import './style.css';

const pages = {
  main: mainPage,
  menu: menuPage,
  contact: contactPage
};

const body = document.querySelector('body');
const contentDiv = document.querySelector('div#content');

body.insertBefore(navbar, contentDiv);
contentDiv.innerHTML = mainPage.innerHTML;
body.appendChild(footer);


const pageLinks = document.querySelectorAll('.link-page');
let loaded = 'main';

pageLinks.forEach(link => link.addEventListener('click', e => {
  const module = e.target.dataset.page.substring(0, e.target.dataset.page.indexOf('-'));

  if (module === loaded) return;

  contentDiv.innerHTML = pages[module].innerHTML;
  loaded = module;
}));

const logo = document.querySelector('#logo');
logo.addEventListener('click', () => {
  document.querySelector('li[data-page="main-page"]').click();
});
