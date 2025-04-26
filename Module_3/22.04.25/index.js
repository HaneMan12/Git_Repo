/*function Menu(name, price, category, availableToday) { // constructor function
    //this = {}; // implicitly
    this.name = name;
    this.price = price;
    this.category = category;
    this.availableToday = availableToday;


let menu = [
    {name: "Sandwich", price: 10, category: "Snack",availableToday: true},
    {name: "Pie",   price: 8, category: "Snack", availableToday: true},
    {name: "Coffee", price: 5, category: "Drink", availableToday: true},
    {name: "Ice Cream", price: 4, category: "Dessert", availableToday: false},
    {name: "Tea", price: 3, category: "Drink", availableToday: true}
];

let newItem = {name: "Soda", price: 2, category: "Drink", availableToday: true};

menu.push(newItem);

menu.forEach(item => {
  if (item.availableToday) {
    console.log("- " + item.name);
  }
});

let totalPrice = menu.reduce((total, item) => total + item.price, 0);
console.log("Total price of all items: $" + totalPrice);

const d = new Date("2023-04-25T10:00:00Z");
console.log("Date: " + d.toLocaleDateString() + " " + d.toLocaleTimeString());


*/

let student = function(id, name, score, dob) { 
    this.id = id;
    this.name = name;
    this.score = score;
    this.dob = dob;
}

let studentArr = [
    new student(1, "Jason", 50, "27/01/1990"),
    new student(2, "Teddy", 80, "27/03/1989"),
    new student(3, "Alberto", 60, "11/01/1995"),
    new student(4, "Alex", 95, "18/12/1992"),
    new student(5, "David", 88, "07/05/1997"),
    new student(6, "James", 20, "20/02/1986"),
  ]

  console.log(studentArr);