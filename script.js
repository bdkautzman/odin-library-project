const myLibrary = [];

const libraryVis = document.querySelector(".library");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readString;
        this.read ? readString = "already read" : readString = "not read yet"; 
        return (this.title + "by" + this.author +", " + this.pages + "pages, " + readString)
    }
}

function addBookToLibrary(title, author, pages, read) {
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    refreshLibrary();
}

function refreshLibrary() {
    let node = libraryVis.lastElementChild;
    while(node) {
        libraryVis.removeChild(node);
        node = libraryVis.lastElementChild;
    }

    for(const book of myLibrary){
        const newCard = genBookCard(book);
        libraryVis.appendChild(newCard);
    }
}

function genBookCard(book) {
    const card = document.createElement("div");
    card.className = "book";

    const title = document.createElement("div");
    title.textContent = book.title;
    card.appendChild(title);

    const author = document.createElement("div");
    author.textContent = book.author;
    card.appendChild(author);

    const pages = document.createElement("div");
    pages.textContent = book.pages;
    card.appendChild(pages);

    const read = document.createElement("div");
    if (book.read) {
        read.textContent = "Read";
    }else {
        read.textContent = "Not read";
    }
    card.appendChild(read);
    
    return card;
}

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", submitForm);

function submitForm(event) {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");

    addBookToLibrary(title.value, author.value, pages.value, read.value);

    title.value = "";
    author.value = "";
    pages.value = "";

    event.preventDefault();
}

addBookToLibrary("A Song of Fire and Ice", "George R R Martin", 1653, true);
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", 932, true);
addBookToLibrary("Hitchhikers Guide to the Galaxy", "????", 641, false);