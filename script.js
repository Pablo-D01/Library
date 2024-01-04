const submitButton = document.querySelector('button[type="submit"]');
const bookContainer = document.querySelector('.books-container');
const bookForm = document.getElementById('bookForm');



bookForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Zatrzymuje domyślne zachowanie formularza (czyli odświeżanie strony)
});

const myLibrary = [
    {
        title:'The Hobbit',
        author:'J.R.R. Tolkien',
        pages:'295',
        read: 'not',
        info: function() {
            console.log(this.title,'by',this.author,',', this.pages,'pages,', this.read)
            // console.log;(this.title)
        },
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(this.title,'by',this.author,',', this.pages,'pages,', this.read)
        // console.log;(this.title)
    };
  };

function addBookToLibrary(){
    console.log('taking data...')
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value.toLowerCase();

    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    console.log(title, 'should be in library!')
};

submitButton.addEventListener('click', function() {
    addBookToLibrary()
    renderBooks()
});


function renderBooks(){
    bookContainer.innerHTML = '';

    for (var i=0; i < myLibrary.length; i++){
        var book = myLibrary[i];

        var singleBook = document.createElement('div');

        var bookTitle = document.createElement('p');
        bookTitle.classList.add('book-title');
        bookTitle.textContent = book.title;
        singleBook.appendChild(bookTitle);

        var bookAuthor = document.createElement('p');
        bookAuthor.classList.add('book-title');
        bookAuthor.textContent = book.author;
        singleBook.appendChild(bookAuthor);

        var bookPages = document.createElement('p');
        bookPages.classList.add('book-title');
        bookPages.textContent = book.pages;
        singleBook.appendChild(bookPages);

        var bookRead = document.createElement('p');
        bookRead.classList.add('book-title');
        bookRead.textContent = readOrNo(book.read)
        singleBook.appendChild(bookRead);

        singleBook.classList.add('singleBook');
        bookContainer.appendChild(singleBook);
    }
};

function readOrNo(readValue){
    if (readValue === 'yes') {
        return 'Read';
    } else {
        return 'Not read';
    }
}

renderBooks()

