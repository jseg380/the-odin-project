const footer = document.createElement('footer');
const profileLink = document.createElement('a');

profileLink.setAttribute('href', 'https://github.com/jseg380');
profileLink.textContent = 'jseg380';

footer.innerHTML = `Copyright © &nbsp; ${profileLink.outerHTML}&nbsp; 2023`;

export { footer };
