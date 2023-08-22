const infoElements = [
  {name: 'E-mail', value: 'anEmail@email.com'},
  {name: 'Phone number', value: '(415) 555 - 4288'},
  {name: 'Twitter', value: '@fakeRestaurant'},
  {name: 'Mastodon', value: '@fakeAccount'},
];

const contentDiv = document.createElement('div');
const contactDiv = document.createElement('div');
contactDiv.id = 'contact-div';

const infoUl = document.createElement('ul');
infoElements.forEach(el => {
  const infoLi = document.createElement('li');
  const namePar = document.createElement('p');
  namePar.textContent = el.name;
  infoLi.appendChild(namePar);
  const valuePar = document.createElement('p');
  valuePar.textContent = el.value;
  infoLi.appendChild(valuePar);

  infoUl.appendChild(infoLi);
});

contactDiv.appendChild(infoUl);
contentDiv.appendChild(contactDiv);

export { contentDiv };
