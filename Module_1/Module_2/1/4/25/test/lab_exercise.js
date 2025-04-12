
//Create four functions, one for each main math function (add, subtract, multiply, divide)

function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

function subtract(a, b) {
    return a - b;
}
console.log(subtract(5, 2)); // Output: 3

function multiply(a, b) {
    return a * b;
}
console.log(multiply(7, 7));

function divide(a, b) {
    return a / b;
} 
console.log(divide(10, 2)); // Output: 5

//Greeting function

function greeting(name) {
    return 'Hello, ' + name + '!';
}
console.log(greeting('Lane'));

//Array practice
let fruits = ['apple', 'banana', 'cherry', 'mango', 'orange'];
console.log(fruits[0]); // Output: apple

fruits[1] = 'blueberry';
fruits[4] = 'kiwi';
fruits.unshift('grape');
fruits.pop();

console.log(fruits); // Output: ['grape', 'blueberry', 'cherry', 'mango', 'kiwi']

//JSON practice
const book = {
    "title" : "Red Rising",
    "author" : "Pierce Brown",
    "pages" : 368,
    "genre" : "Science Fiction",
}

console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.genre);
console.log(book);

book.sequel = "Golden Son";
console.log(book.sequel);

let books = new Array(
    {
        "title" : "Red Rising",
        "author" : "Pierce Brown",
        "pages" : 368,
        "genre" : "Science Fiction",
    },
    {
        "title" : "Golden Son",
        "author" : "Pierce Brown",
        "pages" : 464,
        "genre" : "Science Fiction",
    },
    {
        "title" : "Morning Star",
        "author" : "Pierce Brown",
        "pages" : 544,
        "genre" : "Science Fiction",
    }
);
console.log(books);


/*const books = [
    {
        "title" : "Red Rising",
        "author" : "Pierce Brown",
        "pages" : 368,
        "genre" : "Science Fiction",
    },
    {
        "title" : "Golden Son",
        "author" : "Pierce Brown",
        "pages" : 464,
        "genre" : "Science Fiction",
    },
    {
        "title" : "Morning Star",
        "author" : "Pierce Brown",
        "pages" : 544,
        "genre" : "Science Fiction",
    }
]; */