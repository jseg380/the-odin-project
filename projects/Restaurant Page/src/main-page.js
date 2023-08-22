import restaurantImage from './restaurant.jpg';

const contentDiv = document.createElement('div');

const imageSection = document.createElement('section');

const imageDiv = document.createElement('div');
imageDiv.classList.add('image');

const image = document.createElement('img');
image.setAttribute('src', restaurantImage);
image.setAttribute('alt', 'Image of a restaurant');
imageDiv.appendChild(image);

const imageCredit = document.createElement('p');
imageCredit.innerHTML = `Image by <a href="https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1837150">Pexels</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1837150">Pixabay</a>`;
imageDiv.appendChild(imageCredit);

imageSection.appendChild(imageDiv);

const imageText = document.createElement('p');
imageText.textContent = 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.';

imageSection.appendChild(imageText);

contentDiv.appendChild(imageSection);

const main = document.createElement('main');
const mainTitle = document.createElement('h2');
mainTitle.textContent = 'History of the restaurant';
main.appendChild(mainTitle);

const mainText = document.createElement('p');
mainText.textContent = 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.';
main.appendChild(mainText);

contentDiv.appendChild(main);

export { contentDiv };
