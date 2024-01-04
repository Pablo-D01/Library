const submitButton = document.querySelector('button[type="submit"]');


const myLibrary = [
    {
        title:'The Hobbit',
        author:'J.R.R. Tolkien',
        pages:'295',
        read: false,
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
  }


function addBookToLibrary(){
    console.log('taking data...')
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value.toLowerCase();

    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    console.log(title, 'should be in library!')
}



submitButton.addEventListener('click', function() {
    addBookToLibrary()
});

//   na promtpach!
  /* function addBookToLibrary() {
    console.log('addBookToLibrary-working...');
    const title = prompt('title');
    const author = prompt('author');
    const pages = prompt('pages');
    let read; 
        while (true) {
            read = prompt('Czy przeczytane? (tak/nie)').toLowerCase();
            if (read === 'tak' || read === 'nie') {
                break;
            }
            alert('Proszę podać odpowiedź "tak" lub "nie".');
        }
        console.log(title);

    }  */
  

