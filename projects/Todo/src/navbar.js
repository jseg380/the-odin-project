import menuIcon from './icons/menu.svg';

const navbarDiv = document.createElement('nav');
navbarDiv.id = 'top-navbar';

const menuButton = document.createElement('button');
menuButton.id = 'menu-button';

const menuImg = document.createElement('img');
menuImg.setAttribute('src', menuIcon);

menuButton.appendChild(menuImg);

navbarDiv.appendChild(menuButton);

export default navbarDiv;
