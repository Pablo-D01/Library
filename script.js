const submitButton = document.querySelector('button[type="submit"]');
const bookContainer = document.querySelector('.books-container');
const bookForm = document.getElementById('bookForm');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal')


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
    if (condition) {
        
    } else {
        
    }
    addBookToLibrary()
    renderBooks()
});




function renderBooks(){
    bookContainer.innerHTML = '';

    for (var i=0; i < myLibrary.length; i++){
        const book = myLibrary[i];

        const singleBook = document.createElement('div');

        const bookTitle = createBookElement('p', 'book-title', book.title);
        singleBook.appendChild(bookTitle);

        const bookAuthor = createBookElement('p', 'book-author', book.author);
        singleBook.appendChild(bookAuthor);

        const bookPages = createBookElement('p', 'book-pages', book.pages);
        singleBook.appendChild(bookPages);

        const bookRead = createBookElement('p', 'book-read', book.read);
        bookRead.textContent = readOrNo(book.read)
        singleBook.appendChild(bookRead);

        singleBook.classList.add('singleBook');
        bookContainer.appendChild(singleBook);
    }
};


function createBookElement(elementType, className, textContent){
    var bookElement = document.createElement(elementType);
    bookElement.classList.add(className);
    bookElement.textContent = textContent;
    return bookElement;
}

function readOrNo(readValue){
    if (readValue === 'yes') {
        return 'Read';
    } else {
        return 'Not read';
    }
}


// close/open form
openBtn.addEventListener("click", () =>{
    closeModal()
});

function closeModal() {
    modal.classList.toggle("open")
}




renderBooks()

