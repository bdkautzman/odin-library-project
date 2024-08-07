function Book(title, author, pages, read, plot) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.plot = plot;
    this.info = function() {
        let readString;
        this.read ? readString = "already read" : readString = "not read yet"; 
        return (this.title + "by" + this.author +", " + this.pages + "pages, " + readString)
    }
}

const book = new Book("A Song of Fire and Ice", "George R. R. Martin", 1375, false,);
console.log(book.info());