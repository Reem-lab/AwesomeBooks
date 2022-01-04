let books = [];
function Book (title, author) {
    this.title = title;
    this.author = author;
}

const deleteBook = (title, author) => {
    books.filter((book) => book.title !== title || book.author !== author);
}

const bookContainer = document.querySelector('.book-container');

function showBook(book) {
    const bookDiv = document.createElement('div');
    const titleBook = document.createElement('p');
    const authorBook = document.createElement('p');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';    

    titleBook.textContent = book.title;
    authorBook.textContent = book.author;
    

    bookDiv.appendChild(titleBook);
    bookDiv.appendChild(authorBook);
    bookDiv.appendChild(deleteBtn);

    bookContainer.appendChild(bookDiv);

    deleteBtn.addEventListener('click', () => {
        deleteBook(book.title, book.author);
        bookContainer.removeChild(bookDiv);
    });
}



const inpTitle = document.querySelector('#title');
const inpAutor = document.querySelector('#author');

function saveBooks () {
    const book = new Book(inpTitle.value, inpAutor.value);    
    books.push(book);    
    showBook(book);
}

//Local storage
function saveLocalStore() {
    const data = {
      title: inpTitle.value,
      author: inpAutor.value,
    };
    localStorage.setItem('data', JSON.stringify(data));
  }


inpTitle.addEventListener('input', saveLocalStore);
inpAutor.addEventListener('input', saveLocalStore);


window.addEventListener('load', () => {
    const data = JSON.parse(localStorage.getItem('data'));
    inpTitle.value = data.title;
    inpAutor.value = data.author;
  });

const form = document.querySelector('.form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    saveBooks();
});

document.addEventListener('DOMContentLoaded', () => {    
    
});





