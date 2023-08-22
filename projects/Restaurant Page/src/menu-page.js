const menuCard = (name, description, allergens, price) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const namePar = document.createElement('p');
  namePar.textContent = name;
  card.appendChild(namePar);

  const descPar = document.createElement('p');
  if (description === '') {
    descPar.textContent = 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim.';
  }
  else {
    descPar.textContent = description;
  }
  card.appendChild(descPar);

  const allergensInfo = document.createElement('p');
  if (allergens.length === 0) {
    allergensInfo.textContent = 'No allergens';
    card.appendChild(allergensInfo);
  }
  else {
    allergensInfo.textContent = 'Allergens:';
    card.appendChild(allergensInfo);
    const allergensUl = document.createElement('ul');
    allergens.forEach(el => {
      const allergenLi = document.createElement('li');
      allergenLi.textContent = el;
      allergensUl.appendChild(allergenLi);
    });
    card.appendChild(allergensUl);
  }

  const pricePar = document.createElement('p');
  pricePar.textContent = price + '€';
  card.appendChild(pricePar);

  return card;
};

const menuList = [
  menuCard('Something', '', [], '13.50'), 
  menuCard('Other thing', '', ['soy', 'sulfites'], '12.00'),
  menuCard('Another one', '', ['eggs'], '8.50'),
  menuCard('Something 2.0', '', ['peanuts'], '13.80'),
  menuCard('New dish', '', ['soy', 'eggs', 'sulfites'], '14.20'),
  menuCard('Old dish', '', ['eggs', 'peanuts'], '20.00')
];


const contentDiv = document.createElement('div');

const cardContainer = document.createElement('div');
cardContainer.id = 'card-container';
menuList.forEach(el => cardContainer.appendChild(el));
contentDiv.appendChild(cardContainer);

export { contentDiv };
