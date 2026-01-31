const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = crypto.randomUUID()
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const book1 = new Book("ABC", "darren", 123, true)
const book2 = new Book("CDE", "yap", 456, false)

addBookToLibrary(book1)
addBookToLibrary(book2)

function displayBook(myLibrary){
    const bookcontainer = document.getElementById("book-container")
    bookcontainer.innerHTML = "";
    
    myLibrary.forEach((book) => {
    const card = document.createElement("div")
    card.classList.add("book-card")

    const title = document.createElement("h3")
    title.textContent = "Title: " + book.title

    const author = document.createElement("p")
    author.textContent = "Author: " + book.author

    const pages = document.createElement("p")
    pages.textContent = "Pages: " + book.pages

    card.append(title, author, pages)
    bookcontainer.appendChild(card)
    })
}

const addBook = document.getElementById("add-book")
const bookDialog = document.getElementById("book-dialog")
const confirmBtn = document.getElementById("confirm-btn")
const closeBtn = document.getElementById("close-btn")
const form = document.querySelector("#book-dialog form")

addBook.addEventListener("click", () =>{
    bookDialog.showModal()
})

closeBtn.addEventListener("click", () =>{
    bookDialog.close()
})

const titleInput = document.querySelector("#book-name input");
const authorInput = document.querySelector("#author-name input");
const pagesInput = document.querySelector("#page-count input");
const readCheckbox = document.querySelector("#read-status");

titleInput.addEventListener("input", () => {
  titleInput.setCustomValidity(
    titleInput.value.trim() === "" ? "Book title is required" : ""
  );
});

authorInput.addEventListener("input", () => {
  authorInput.setCustomValidity(
    authorInput.value.trim() === "" ? "Author's name is required" : ""
  );
});

pagesInput.addEventListener("input", () => {
  pagesInput.setCustomValidity(
    pagesInput.value.trim() === "" ? "Number of pages is required" : ""
  );
});

confirmBtn.addEventListener("click", (event) =>{

    event.preventDefault()

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const book1 = new Book(titleInput.value, authorInput.value, pagesInput.value, readCheckbox.checked)
    addBookToLibrary(book1)

    displayBook(myLibrary)
    form.reset()
    bookDialog.close()
})