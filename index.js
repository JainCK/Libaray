const myLibrary = [];

class Book {
	constructor(title, author, pages, read) {
	  this.title = title;
	  this.author = author;
	  this.pages = pages;
	  this.read = read;
	}
  }

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  const bookContainer = document.getElementById("book-container");
  bookContainer.innerHTML = ""; // Clear the container before adding books

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? "Yes" : "No"}</p>
      <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
      <button onclick="removeBook(${index})">Remove</button>
    `;
    bookContainer.appendChild(bookCard);
  });
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

// Add a new book to the library when the form is submitted
const form = document.getElementById("book-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  addBookToLibrary(title, author, pages, read);
  form.reset();
  displayBooks();
});

// Initial books for demonstration
addBookToLibrary("Book 1", "Author 1", 300, true);

// Display the initial books
displayBooks();
