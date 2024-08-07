const myLibrary = [];

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

    for(book in myLibrary){
        
    }
}