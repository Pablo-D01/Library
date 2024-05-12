const submitButton = document.querySelector('button[type="submit"]');
const bookContainer = document.querySelector(".books-container");
const bookForm = document.getElementById("bookForm");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

bookForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Zatrzymuje domyślne zachowanie formularza (czyli odświeżanie strony)
});

let myLibrary = [
  //   {
  //     id: 1,
  //     title: "The Hobbit",
  //     author: "J.R.R. Tolkien",
  //     pages: "295",
  //     read: "not",
  //   },
];

class Book {
  constructor(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  get info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, already read?: ${this.read}`;
  }
}

myLibrary.push(new Book(1, "The Hobbit", "J.R.R. Tolkien", "295", "not"));

/*  new Book(1,'The Hobbit','J.R.R. Tolkien','295','not');
  const firstBook = new Book(1,'The Hobbit','J.R.R. Tolkien','295','not');
  myLibrary.push(firstBook); */

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value.toLowerCase();
  const id = myLibrary.length + 1;
  const newBook = new Book(id, title, author, pages, read);
  //   myLibrary.push(newBook);
  myLibrary.push(new Book(id, title, author, pages, read));
}

submitButton.addEventListener("click", function () {
  if (validateForm()) {
    addBookToLibrary();
    renderBooks();
    clearForm();
    closeModal();
  } else {
  }
});

function validateForm() {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");

  if (
    titleInput.value.trim() === "" ||
    authorInput.value.trim() === "" ||
    pagesInput.value.trim() === ""
  ) {
    alert("Please complete all form fields.");
    return false;
  }

  if (parseInt(pagesInput.value) <= 0) {
    alert("Liczba stron musi być dodatnia.");
    return false;
  }
  return true;
}

function clearForm() {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const readSelect = document.getElementById("read");

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readSelect.value = "Not";
}

// close/open form
openBtn.addEventListener("click", () => {
  closeModal();
});

overlay.addEventListener("click", () => {
  closeModal();
});

/* function openModal(){
    modal.classList.add("open")
} */

function closeModal() {
  overlay.classList.toggle("active");
  // openBtn.classList.toggle("active")
  modal.classList.toggle("open");
}

function renderBooks() {
  bookContainer.innerHTML = "";

  for (var i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const singleBook = document.createElement("div");
    singleBook.setAttribute("data-id", book.id);
    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btnGroup");

    const bookTitle = createBookElement("p", "book-title", book.title);
    singleBook.appendChild(bookTitle);

    const bookAuthor = createBookElement("p", "book-author", book.author);
    singleBook.appendChild(bookAuthor);

    const bookPages = createBookElement(
      "p",
      "book-pages",
      book.pages + " pages"
    );
    singleBook.appendChild(bookPages);

    // const bookRead = createBookElement('p', 'book-read', book.read);
    // bookRead.textContent = readOrNo(book.read)
    // singleBook.appendChild(bookRead);

    singleBook.classList.add("singleBook");
    bookContainer.appendChild(singleBook);
    singleBook.appendChild(btnGroup);

    const readBtn = createBookElement(
      "button",
      "read-btn",
      readOrNo(book.read)
    );
    readBtn.setAttribute("data-id", book.id);
    singleBook.appendChild(readBtn);
    readBtn.addEventListener("click", () => {
      readChange(book.id);
    });

    const removeBtn = createBookElement("button", "remove-btn", "Remove");
    removeBtn.setAttribute("data-id", book.id);
    singleBook.appendChild(removeBtn);
    removeBtn.addEventListener("click", () => {
      removeBook(book.id);
    });
    readColor(book.id);

    btnGroup.appendChild(readBtn);
    btnGroup.appendChild(removeBtn);
  }
}

function createBookElement(elementType, className, textContent) {
  var bookElement = document.createElement(elementType);
  bookElement.classList.add(className);
  bookElement.textContent = textContent;
  return bookElement;
}

function readOrNo(readValue) {
  if (readValue === "yes") {
    return "Read";
  } else {
    return "Not read";
  }
}

/* function removeBook(button) {
    const dataId = button.getAttribute('data-id');
    console.log(dataId);
    // const indexToRemove = myLibrary.findIndex(book => book.id === bookIdToRemove);
    
} */

function removeBook(bookId) {
  // console.log(bookId)
  const bookToRemove = myLibrary.findIndex((book) => book.id === bookId);
  console.log(bookToRemove);
  myLibrary.splice(bookToRemove, 1);
  console.log(myLibrary);
  renderBooks();
}

function readChange(bookId) {
  const bookToRead = myLibrary.findIndex((book) => book.id === bookId);
  const read = myLibrary[bookToRead].read;
  const id = bookId;
  if (read === "not") {
    myLibrary[bookToRead].read = "yes";
  } else {
    myLibrary[bookToRead].read = "not";
  }
  renderBooks();
}

function readColor(btnId) {
  const button = document.querySelector(`button.read-btn[data-id="${btnId}"]`);

  if (button) {
    if (button.innerHTML.toLowerCase() === "read") {
      button.classList.remove("notRead");
      button.classList.add("read");
    } else {
      button.classList.add("notRead");
      button.classList.remove("read");
    }
  } else {
    console.error("Button not found");
  }
}

renderBooks();
