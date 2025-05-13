export class Customer {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.orders = []; // Array to hold orders placed by the customer
  }

  

    placeOrder(order) {
        this.orders.push(order); // Adds the order to the customer's order history
    }
    }