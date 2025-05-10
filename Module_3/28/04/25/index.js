/* const employees = new Map();

employees.set("Alice", "Sales");
employees.set("Bob", "IT");
employees.set("Charlie", "HR");
employees.set("Nathan", "Finance");
employees.set("Fiona", "IT");
employees.set("Josh", "IT");
employees.set("Lucy", "Finance");
employees.set("Daisy", "Marketing");


for(const [name, department] of employees) {
    console.log(`Employee ${name} works in ${department} department`);
}

const employees2 = new Map();
employees2.set("Sales", "Alice");
employees2.set("IT", "Bob");
employees2.set("HR", "Charlie");
employees2.set("Finance", "Nathan");
employees2.set("IT", "Fiona");
employees2.set("IT", "Josh");
employees2.set("Finance", "Lucy");
employees2.set("Marketing", "Daisy");
*/

const libraryBooks = new Map();
libraryBooks.set("Alice", []);
libraryBooks.set("Bob", []);
libraryBooks.set("Daisy", []);
libraryBooks.set("Ethan", []);

libraryBooks.get("Alice").push("Harry Potter", "Pride and Prejudice");
libraryBooks.get("Bob").push("The Hobbit", "Lord of the Rings");
libraryBooks.get("Daisy").push("1984");
libraryBooks.get("Ethan").push("To Kill a Mockingbird");




for (const [name, []] of libraryBooks) {
    console.log(`${name} borrowed ${libraryBooks.get(name)}`);
}

console.log();

let booksReadByAlice = libraryBooks.get("Alice");
console.log(`Books read by Alice: ${booksReadByAlice}`);