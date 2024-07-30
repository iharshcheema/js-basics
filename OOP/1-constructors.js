 
function Book(title, author, year) {
    this.booktitle = title;
    this.bookauthor = author;
    this.printyear = year;
    this.summary = function () {
        return `the book,"${this.booktitle}" was written by ${this.bookauthor} in ${this.printyear}`
    }
}

// Instantiate an object 
let book1 = new Book('Book One ', 'John Doe', '2013');

console.log(book1);
console.log(book1.booktitle);






















