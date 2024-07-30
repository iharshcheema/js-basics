class Book {
    constructor(title, author, year) {
        this.booktitle = title;
        this.bookauthor = author;
        this.printyear = year;
    }

    getSummary() {
        return `the book,"${this.booktitle}" was written by ${this.bookauthor} in ${this.printyear}`
    }

    static bookStore() {
        return `this is just a static method`
    }
}

class Magazine extends Book{
    constructor(title, year ,author,  month){
        super(title, author,year);
        this.printmonth= month;
    }
}

let mag1= new Magazine('Book one', 'John Doe', '2013', 'January');

console.log(mag1);
console.log(mag1.getSummary())

