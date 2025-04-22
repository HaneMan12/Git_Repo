let menu = [
    {
        name: "Sandwich",
        price: 10,
        category: "Snack",
        availableToday: true
    },
    {
        name: "Pie",
        price: 8,
        category: "Snack",
        availableToday: true
    },
    {
        name: "Coffee",
        price: 5,
        category: "Drink",
        availableToday: true
    },
    {
        name: "Ice Cream",
        price: 4,
        category: "Dessert",
        availableToday: false
    },
    {
        name: "Tea",
        price: 3,
        category: "Drink",
        availableToday: true
    }
];

let newItem = {
    name: "Soda",
    price: 2,
    category: "Drink",
    availableToday: true
};

menu.push(newItem);

menu.forEach(item => {
  if (item.availableToday) {
    console.log("- " + item.name);
  }
});

let totalPrice = menu.reduce((total, item) => total + item.price, 0);
console.log("Total price of all items: $" + totalPrice);
