const bookContainer = document.querySelector('.book-container');
const inpTitle = document.querySelector('#title');
const inpAutor = document.querySelector('#author');

class Book {
    static collection = [];

    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    static setLocalStorage=() => {
      const data = JSON.stringify(Book.collection);
      localStorage.setItem('books', data);
    }

    deleteBook = (title, author) => {
      Book.collection = Book.collection.filter((book) => book.title !== title
      || book.author !== author);
    }

    showBook(book) {
      const bookDiv = document.createElement('DIV');
      const bookTitle = document.createElement('p');
      const deleteBtn = document.createElement('BUTTON');
      deleteBtn.classList.add('btn-remove');

      const title = `"${book.title}" by ${book.author}`;
      bookTitle.textContent = title;

      deleteBtn.textContent = 'Remove';

      bookDiv.appendChild(bookTitle);
      bookDiv.appendChild(deleteBtn);
      bookContainer.appendChild(bookDiv);

      deleteBtn.addEventListener('click', () => {
        this.deleteBook(book.title, book.author);
        Book.setLocalStorage(Book.collection);
        bookContainer.removeChild(bookDiv);
      });
    }

    iterateBooks() {
      Book.collection.forEach((book) => {
        this.showBook(book);
      });
    }

    saveBooks() {
      const book = new Book(inpTitle.value, inpAutor.value);
      Book.collection.push(book);
      Book.setLocalStorage(Book.collection);
      this.showBook(book);
    }
}

const book = new Book();
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  book.saveBooks();

let books = [];
function Book(title, author) {
  this.title = title;
  this.author = author;
}

const deleteBook = (title, author) => {
  books = books.filter((book) => book.title !== title || book.author !== author);
};

const setLocalStorage = (books) => {
  const data = JSON.stringify(books);
  localStorage.setItem('books', data);
};

const bookContainer = document.querySelector('.book-container');

function showBook(book) {
  const bookDiv = document.createElement('DIV');
  const titleBook = document.createElement('P');
  const authorBook = document.createElement('P');
  const deleteBtn = document.createElement('BUTTON');
  const hr = document.createElement('hr');
  deleteBtn.textContent = 'Remove';

  titleBook.textContent = book.title;
  authorBook.textContent = book.author;

  bookDiv.appendChild(titleBook);
  bookDiv.appendChild(authorBook);
  bookDiv.appendChild(deleteBtn);
  bookDiv.appendChild(hr);

  bookContainer.appendChild(bookDiv);

  deleteBtn.addEventListener('click', () => {
    deleteBook(book.title, book.author);
    setLocalStorage(books);
    bookContainer.removeChild(bookDiv);
  });
}

function iterateBooks() {
  books.forEach((book) => {
    showBook(book);
  });
}

const inpTitle = document.querySelector('#title');
const inpAutor = document.querySelector('#author');

function saveBooks() {
  const book = new Book(inpTitle.value, inpAutor.value);
  books.push(book);
  setLocalStorage(books);
  showBook(book);
}

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  saveBooks();
  inpTitle.value = '';
  inpAutor.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('books') !== null) {
    const myBooks = JSON.parse(localStorage.getItem('books'));

    Book.collection = myBooks;
  }
  book.iterateBooks();
});

    books = myBooks;
  }
  iterateBooks();
});
