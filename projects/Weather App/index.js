const WEATHER_API_KEY = '';
const IMAGE_API_KEY = '';
const DEFAULT_LOCATION = 'Paris';

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const weatherButton = document.querySelector('.js-get-weather');
const weatherInput = document.querySelector('.main__search__input');
const loader = document.querySelector('.lds-roller');
const weatherDisplay = {
  main: document.querySelector('.js-display'),
  switch: document.querySelector('.js-switch-units'),
  icon: document.querySelector('.js-icon'),
  location: document.querySelector('.js-location'),
  time: document.querySelector('.js-time'),
  temperature: document.querySelector('.js-temperature'),
  feelsLike: document.querySelector('.js-feels'),
  description: document.querySelector('.js-description'),
  humidity: document.querySelector('.js-humidity'),
  cloud: document.querySelector('.js-cloud'),
};
let data;

hideLoader();

weatherButton.addEventListener('click', () => {
  const location = formatString(weatherInput.value);
  showLoader();
  if (location === '') {
    hideLoader();
    return;
  }

  getData(location).then(hideLoader);
});

weatherInput.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;

  weatherButton.click();
});

weatherDisplay.switch.addEventListener('click', () => {
  if (weatherDisplay.switch.textContent === 'ºF') {
    weatherDisplay.switch.textContent = 'ºC';
    weatherDisplay.temperature.textContent = data.temperature.imperial;
    weatherDisplay.feelsLike.textContent = data.feelsLike.imperial;
  }
  else {
    weatherDisplay.switch.textContent = 'ºF';
    weatherDisplay.temperature.textContent = data.temperature.metric;
    weatherDisplay.feelsLike.textContent = data.feelsLike.metric;
  }
});

window.addEventListener('load', () => {
  weatherInput.value = '';
  showLoader();
  getData(DEFAULT_LOCATION).then(hideLoader);
});


// Functions

function hideLoader() {
  loader.classList.add('hidden');
  weatherDisplay.main.classList.remove('main__display--loading');
}

function showLoader() {
  loader.classList.remove('hidden');
  weatherDisplay.main.classList.add('main__display--loading');
}

function darkMode() {
  weatherDisplay.main.classList.add('main__display--dark');
  header.classList.add('header--dark');
  weatherInput.classList.add('main__search__input--dark');
  weatherButton.classList.add('main__search__button--dark');
}

function lightMode() {
  weatherDisplay.main.classList.remove('main__display--dark');
  header.classList.remove('header--dark');
  weatherInput.classList.remove('main__search__input--dark');
  weatherButton.classList.remove('main__search__button--dark');
}

function formatString(str) {
  const strList = str.split(' ');
  let newStr = '';

  // Normalize strings to get rid of capital letters and diacritics
  strList.forEach((el) => {
    newStr += el.toLowerCase().normalize('NFD').replaceAll(/\p{Diacritic}/gu, "") + '+';
  });

  // Slice to remove the trailing '+'
  return newStr.slice(0, newStr.length - 1);
}

async function getData(location) {
  try {
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}`);
    let dataJSON = await response.json();

    data = {
      location: {
        short: dataJSON.location.name,
        country: dataJSON.location.country,
        long: dataJSON.location.name + ', ' + dataJSON.location.country,
      },
      localTime: dataJSON.location.localtime.slice(-5),
      humidity: 'Humidity: ' + dataJSON.current.humidity + '%',
      cloud: 'Cloud: ' + dataJSON.current.cloud + '%',
      isDay: dataJSON.current.is_day === 1,
      condition: {
        text: dataJSON.current.condition.text,
        iconUrl: 'http:' + dataJSON.current.condition.icon,
      },
      temperature: {
        metric: dataJSON.current.temp_c + 'ºC',
        imperial: dataJSON.current.temp_f + 'ºF',
      },
      feelsLike: {
        metric: 'Feels like ' + dataJSON.current.feelslike_c + 'ºC',
        imperial: 'Feels like ' + dataJSON.current.feelslike_f + 'ºF',
      },
    };
    
    await showData(data);
  } catch (error) {
    console.error(error);
  }
}

async function showData(data) {
  weatherDisplay.location.textContent = data.location.long;
  weatherDisplay.time.textContent = data.localTime;
  weatherDisplay.icon.src = data.condition.iconUrl;
  weatherDisplay.temperature.textContent = data.temperature.metric;
  weatherDisplay.feelsLike.textContent = data.feelsLike.metric;
  weatherDisplay.description.textContent = data.condition.text;
  weatherDisplay.humidity.textContent = data.humidity;
  weatherDisplay.cloud.textContent = data.cloud;
  weatherDisplay.switch.textContent = 'ºF';

  if (data.isDay) lightMode();
  else darkMode();

  let imageSrc = await getImage(data.location, data.isDay);
  main.style.backgroundImage = `url(${imageSrc})`;

  return data;
}

async function getImage(location, isDay) {
  let time = isDay ? 'day' : 'night';
  let query = `${formatString(location.short)}+${time}`;

  try {
    let response = await fetch(`https://pixabay.com/api/?key=${IMAGE_API_KEY}&q=${query}&image_type=photo`);
    let dataJSON = await response.json();

    if (dataJSON.hits.length === 0) {
      query = `${formatString(location.country)}+${time}`;
      response = await fetch(`https://pixabay.com/api/?key=${IMAGE_API_KEY}&q=${query}&image_type=photo`);
      dataJSON = await response.json();
    }

    return dataJSON.hits[0].largeImageURL;

  } catch (error) {
    console.error(error);
  }
}
