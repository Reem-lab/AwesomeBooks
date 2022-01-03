const btn = document.querySelector('.add');
const heading = document.querySelector('.heading');

const bookContainer = document.createElement('div');
bookContainer.classList.add('bookContainer');
heading.appendChild(bookContainer);

const titleBook = document.createElement('label');
titleBook.classList.add('titleBook');
titleBook.appendChild(bookContainer);

const authorBook = document.createElement('label');
authorBook.classList.add('authorBook');
authorBook.appendChild(bookContainer);


const books = [
    {
        title : 'Natural',
        author : 'Reem',
    },
    {
        title : 'intro to js',
        author : 'Fernando',
    }
]



btn.addEventListener('click', function(e){
    e.preventDefault();
   console.log(e.target)
   const title = document.querySelector('.title').value;
   const author = document.querySelector('.author').value;
    books.push({title , author})
    console.log(books);
});
