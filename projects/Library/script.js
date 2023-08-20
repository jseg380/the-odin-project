const libraryElement = document.querySelector('#library');
const myLibrary = [];


class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read);
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'already read' : 'not read yet'}`;
  }

  toggleRead() {
    this.read = !this.read;
  }
};


function addBookToLibrary(form) {
  const formDivs = Array.from(form.children).filter(el => el.tagName === 'DIV');

  let bookInfo = {
    title: 'a',
    author: 'b',
    pages: 1,
    read: false 
  };

  for (let i = 0; i < formDivs.length; i++) {
    const input = formDivs[i].children[formDivs[i].children.length - 1];
    if (input.getAttribute('type') === 'checkbox') {
      bookInfo[input.getAttribute('name')] = input.checked;
    }
    else {
      bookInfo[input.getAttribute('name')] = input.value;
    }
    input.innerText = '';
  }

  const newBook = new Book(bookInfo.title, bookInfo.author, bookInfo.pages, bookInfo.read);

  myLibrary.push(newBook);
}


function refreshView() {
  libraryElement.textContent = '';
  for (let i = 0; i < myLibrary.length; i++) {
    const bookElement = document.createElement('div');
    const book = myLibrary[i];
    bookElement.classList.add('book');
    bookElement.dataset.book = i;
    bookElement.innerHTML = `
      <img src="https://placehold.co/100/ccc0ff/black?text=Cover+\n+Placeholder" alt="Placeholder for the book cover">
      <p>${book.title}</p>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      <div class="t-f-check">
        <p>Read</p>
        <input type="checkbox" class="read" ${book.read ? 'checked' : ''}>
      </div>
      <button type="button" class="remove">Remove</button>
    `;

    libraryElement.appendChild(bookElement);
  }

  const readCheckboxes = document.querySelectorAll('div.book input.read');

  readCheckboxes.forEach(checkbox => checkbox.addEventListener('click', (e) => {
    myLibrary[e.target.parentNode.parentNode.dataset.book].toggleRead();

    refreshView();
  }));

  const removeButtons = document.querySelectorAll('div.book button.remove');

  removeButtons.forEach(button => button.addEventListener('click', (e) => {
    myLibrary.splice(e.target.parentNode.dataset.book, 1);

    refreshView();
  }));
}

function sendErrorMessage(input) {
  const emptyField = input.getAttribute('name');

  const errorDialog = document.querySelector('#error-dialog');
  errorDialog.innerText = `The book's ${emptyField} cannot be empty!`;
  errorDialog.classList.remove('hidden');

  const body = document.querySelector('body');
  /* If no timeout is set, it inmediately adds the class hidden. 
   * The problem is propagation */
  setTimeout(() => {
    body.addEventListener('mousedown', () => {
      errorDialog.classList.add('hidden');
    }, { once: true });
  }, 5);
}

const addButton = document.querySelector('#new-book');

addButton.addEventListener('click', (e) => e.preventDefault());
addButton.addEventListener('mousedown', (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll('form input[required]');
  let valid = true;
  inputs.forEach(input => {
    if (input.value === '' && valid) {
      sendErrorMessage(input);
      valid = false;
    }
  });

  if (!valid) return;

  addBookToLibrary(e.target.form);

  refreshView();
});
