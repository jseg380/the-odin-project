function createGrid(number) {
  let gridColumnRows = `repeat(${number}, 1fr)`;
  container.style.gridTemplateColumns = gridColumnRows;
  container.style.gridTemplateRows = gridColumnRows;

  const element = document.createElement('div');
  element.classList.add('grid-element');
  element.style.backgroundColor = '#FFFFFF';

  // Square grid, number^2 elements
  for (let i = 0; i < number * number; i++) {
    element.id = `ge-${i}`;
    container.appendChild(element.cloneNode(false));
  }

  // Add event listeners to the element for updating them
  const gridElements = document.querySelectorAll('.grid-element');

  gridElements.forEach(element => {
    element.addEventListener('mouseenter', e => {
      // Only paint if the left click is pressed
      if (e.buttons === 1) {
        e.target.style.backgroundColor = getColor(e.target);
      }
    });
    element.addEventListener('mousedown', e => {
      e.target.style.backgroundColor = getColor(e.target);
    });
  });

  // Prevent elements from being draggable
  gridElements.forEach(element => element.addEventListener('dragstart', e => {
    e.preventDefault();
  }));
}


function resetGrid() {
  // Delete current grid
  // Faster than using .innerHTML since the HTML parser is not called
  container.textContent = '';

  // Recreate the grid
  createGrid(slider.value);
}


function getColor(element) {
  const mode = document.querySelector('#mode').value;
  let color;

  switch (mode) {
    case 'plain':
      color = '#000000';
      break;
    case 'advanced':
      color = getAdvancedColor(element);
      break;
    case 'random':
      color = getRandomColor();
      break;
    default:
      color = getColorPlain();
      break;
  }

  return color;
}

// Extra credit 1
function getRandomColor() {
  let color = '';

  // RGB values
  for (let i = 0; i < 3; i++)
    color += `${Math.floor(Math.random() * 256)}, `;

  // Slice to get rid of the ugly and unnecessary trailing ', '
  return `rgb(${color.slice(0, -2)})`
}

// Extra credit 2
function getAdvancedColor(element) {
  const backgroundColor = window.getComputedStyle(element)['backgroundColor'];
  const color = '0, 0, 0';
  let alpha = 0.1;
  
  // Get alpha from the background color if it was in rgba
  if (backgroundColor.toLowerCase().includes('rgba'))
    alpha = backgroundColor.split(', ').at(-1).replace(')', '');

  // If the background color was in rgba, set the same color more opaque
  if (backgroundColor.toLowerCase() !== `rgb(${color})`)
    return `rgba(${color}, ${Number(alpha) + 0.1})`;

  // If the background color is the desired color and is in rgb format
  // then it is completely opaque (1), so just keep it that way
  return `rgb(${color})`;
}



const container = document.querySelector('#container');
const sliderInfo = document.querySelector('#size-show');
const slider = document.querySelector('#size-slider');
const sliderButton = document.querySelector('#size-button');
const resetButton = document.querySelector('#reset-button');

// Set up the slider value for the first time
sliderInfo.innerText = slider.value;

// Show the slider value in real time
slider.addEventListener('input', e => sliderInfo.innerText = e.target.value);

sliderButton.addEventListener('click', () => resetGrid());
resetButton.addEventListener('click', () => resetGrid());

// Create grid for the first time
createGrid(slider.value);
