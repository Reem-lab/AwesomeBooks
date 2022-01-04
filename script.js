
const btn = document.querySelector('.add');
const heading = document.querySelector('.heading');

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
        <p class="info" id="titleBook">${books[i].title}</p>
        <p class="info" id="authorBook">${books[i].author}</p>
        <button id="remove" class="remove">Remove</button>
        <hr>
        `;
        heading.append(bookContainer);
    }
}

document.addEventListener('DOMContentLoaded', () => {
        displayInformation();
        const remove = document.querySelectorAll('.remove'); 
        remove.addEventListener('click', () => {
        alert("HIIII");
    });
});

btn.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e.target)
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    books.push({title , author})
    displayInformation();
});


/*var remove = function(removeID){
    var index = array.indexOf(removeID);
    if (index>-1) {
        array.splice(index, 1);
    }
}*/


