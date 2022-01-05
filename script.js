const bookContainer = document.querySelector('.book-container');
const inpTitle = document.querySelector('#title');
const inpAutor = document.querySelector('#author');
class Book {
    static collection = [];

    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    static setLocalStorage = () => {
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
function addMessage() {
  const alert = document.createElement('p');  
  const parent = document.querySelector('.btnAdd');
  alert.textContent = "Book already added";
  alert.classList.add('alert');
  parent.appendChild(alert);
}

function checkRepetition(book) {
  for (let i = 0; i < Book.collection.length; i += 1) {
    const currentBook = Book.collection[i];
    if (currentBook.title.toLowerCase() === book.title.toLowerCase()
    && currentBook.author.toLowerCase() === book.author.toLowerCase()) {
      setTimeout(addMessage(), 3000);     
      
      //alert('Book already added');
      return false;
    }
  }
  return true;
}

function addBookToLibrary() {
  const inputTitleValue = inpTitle.value;
  const inputAuthorValue = inpAutor.value;
  const book = new Book(inputTitleValue, inputAuthorValue);
  if (checkRepetition(book)) {
    book.saveBooks();
  }
}

const book = new Book();
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
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