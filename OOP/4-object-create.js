let bookprotos= {
     Summary : function () {
        return `the book,"${this.booktitle}" was written by ${this.bookauthor} in ${this.printyear}`;
    }
}



let book1= Object.create(bookprotos,
    {
    booktitle : {value: 'Book one'},
    bookauthor : {value: 'John Doe'},
    bookyear : {value: '2013'},
}
)

console.log(book1.Summary);