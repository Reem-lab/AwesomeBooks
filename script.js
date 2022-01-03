const btn = document.querySelector('.add');
const heading = document.querySelector('.heading');





/*const titleBook = document.createElement('label');
titleBook.classList.add('titleBook');
titleBook.appendChild(bookContainer);

const authorBook = document.createElement('label');
authorBook.classList.add('authorBook');
authorBook.appendChild(bookContainer);*/


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

const displayInformation = function (){
    for (let i=0; i<books.length; i += 1) {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('bookContainer');
        bookContainer.innerHTML = `
        <label>Title: </label>
        <p id="titleBook">${books[i].title}</p>
        <label>Author:  </label>
        <p id="authorBook">${books[i].author}</p>
        `;
        heading.append(bookContainer);
    }
}





btn.addEventListener('click', function(e){
    e.preventDefault();
   console.log(e.target)
   const title = document.querySelector('.title').value;
   const author = document.querySelector('.author').value;
    books.push({title , author})
    displayInformation();
});

console.log(books);
