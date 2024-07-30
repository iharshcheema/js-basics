class Book{
constructor(title,author,year){
    this.booktitle = title;
    this.bookauthor = author;
    this.printyear = year;
}

getSummary(){
    return `the book,"${this.booktitle}" was written by ${this.bookauthor} in ${this.printyear}`
}

static bookStore(){
    return `this is just a static method`
}
}



// Instantiate an object 
const book1= new Book('Book one', 'John Doe', '2009')
console.log(book1)
console.log(book1.getSummary())


// this is how we can use a static method
console.log(Book.bookStore())








