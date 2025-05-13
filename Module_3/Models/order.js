export class Order {
  constructor(Id, customer, items, status) {
    this.Id = Id;
    this.customer = customer; // Reference to the Customer object
    this.items = []; // Array to hold product items in the order
    this.status = status;
  }

  

calculateTotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.product.price * item.quantity; // Calculate total price for the order
    }
    return total;
  }

  markAsPaid() {
    this.status = 'Paid'; // Update order status to 'Paid'
  }
}   

