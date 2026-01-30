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