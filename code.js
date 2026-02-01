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
    

    const read = document.createElement("label")
    read.className = "read"
    const readStatus = document.createElement("input")
    const readP = document.createElement("p")
    readP.textContent = "Read"
    readStatus.type = 'checkbox'
    readStatus.checked = book.read
    read.appendChild(readP)
    read.appendChild(readStatus)
    
    const deleteBtn = document.createElement("button")
    const trashImg = document.createElement("img")
    trashImg.className = "delete-btn"
    trashImg.src = "Images/trash-can-outline.svg"
    trashImg.alt = "trash image for delete button"

    deleteBtn.appendChild(trashImg)
    deleteBtn.addEventListener("click", () =>{
        const index = myLibrary.findIndex(b => b.id === book.id)
        myLibrary.splice(index, 1)
        displayBook(myLibrary)
    })

    const editBtn = document.createElement("button")
    const editImg = document.createElement("img")
    editImg.className = "edit-btn"
    editImg.src = "Images/book-edit-outline.svg"
    editImg.alt = "pencil and paper image for edit button"

    editBtn.appendChild(editImg)
    editBtn.addEventListener("click", () =>{
        bookDialog.showModal()
        titleInput.value = book.title
        
    })

    const cardAction = document.createElement("div")
    cardAction.className = "card-action"
    cardAction.appendChild(editBtn)
    cardAction.appendChild(deleteBtn)

    card.append(title, author, pages, read, cardAction)
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