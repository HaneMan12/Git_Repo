export class Payment {
  constructor(order, amount, paymentMethod) {
    this.order = order; // Reference to the Order object
    this.amount = amount; // Amount paid
    this.paymentMethod = paymentMethod; // Payment method used (e.g., credit card, PayPal)
    this.isSuccessful = 'Pending'; // Initial status of the payment
  }

  getPaymentDetails() {
    return `Order ID: ${this.orderId}, Amount: $${this.amount}, Method: ${this.paymentMethod}, Status: ${this.status}`;
  }
}