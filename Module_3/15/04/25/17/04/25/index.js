/*

class students {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}




const student1 = new students("John", 20, "A");
const student2 = new students("Jane", 22, "B");
const student3 = new students("Jim", 21, "C");
const student4 = new students("Jack", 23, "D");
const student5 = new students("Jill", 19, "E");
const student6 = {name: "Joe", age: 24, grade: "F", pass: "No"};
const student7 = {name: "Jenny", age: 25, grade: "A", pass: "Yes"};

let studentsArray = [student1, student2, student3, student4, student5, student6, student7];

console.log(studentsArray);
 */

const books = [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949
    },
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      year: 2003
    },
    {
      title: "The Fault in Our Stars",
      author: "John Green",
      year: 2012
    }
  ];


/*
const getBooksAfter2000 = (books) => {
    return books.filter(book => book.year > 2000);
}

console.log(getBooksAfter2000(books));

const findBookByTitle = (books, title) => {
    return books.find(book => book.title === title);
}
console.log(findBookByTitle(books, "The Fault in Our Stars"));


*/

const sortBooksByYear = (books) => { 
    return books.sort((a, b) => a.year - b.year);
}
console.log(sortBooksByYear(books));

function hasBook(title) {
    return books.some(book => book.title === title);
}
console.log(hasBook("The Hobbit"));
console.log(hasBook("The Great Gatsby"));