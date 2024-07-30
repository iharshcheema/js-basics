function Book(title, author, year) {
    this.booktitle = title;
    this.bookauthor = author;
    this.printyear = year;
}


// Summary 
Book.prototype.summary = function () {
    return `the book,"${this.booktitle}" was written by ${this.bookauthor} in ${this.printyear}`
}




// Construct a constructor function named magazine

function Magazine(title, author, month) {
    Book.call(this,title, author);   //  it inhereted the properties of book function 
    this.printmonth = month;
}




// Instantiate a magazine mag1
let mag1 = new Magazine('magazine-one', 'John', 'January');
console.log(mag1);







