/* You are building the backend logic for an online store that sells physical products. 
The goal is to create a basic object-oriented system that can manage customers, products, orders, and payments. 
The system should reflect real-world behaviors, such as stock reduction, order tracking, and payment processing.

Core Features & Entities:

- Customer
Represents a person who makes purchases from the store.

Can place one or more orders.

Has an order history for reference and future features like loyalty programs.

- Product
Represents an item available for sale.

Has details like name, price, and available stock.

Must reduce stock when purchased to prevent overselling.

- Order
Represents a transaction initiated by a customer.

Contains a list of product items and their quantities.

Tracks status (e.g., pending, paid, shipped).

Can calculate the total value of all products in the order.

- Payment
Represents the payment process for an order.

Should verify if product stock is sufficient before completing.

Updates the order status upon success.

Logs a payment as successful or failed.

- Typical Flow in the System:
A Customer browses the store and selects several Products.
An Order is created that links the selected products and quantities to that customer.
A Payment is processed:
Validates stock availability for each product.

Deducts the ordered quantity from each product's stock.

Marks the order as "paid" if successful.

Stores the order in the customer's order history.

The system can now prepare the order for fulfillment (e.g., future feature: shipOrder()).

- Business Goals Simulated:
Prevent selling products that are out of stock.

Track customer purchasing behavior.

Allow auditing of order and payment activity.

Prepare foundation for extending features: returns, refunds, order history, discounts, etc. 

1. Product
Properties: id, name, price, stock
Methods:
reduceStock(quantity) – reduces stock after an order

2. Customer
Properties: id, name, email, orders (array)
Methods:
placeOrder(order) – adds the order to their list

3. Order
Properties: id, customer, items (array of { product, quantity }), status
Methods:
calculateTotal() – total price for the order
markAsPaid()

4. Payment
Properties: order, amount, method, isSuccessful
Method:
process() – simulates payment success and updates order status  */

import { Customer } from './customer.js';
import { Product } from './product.js';
import { Order } from './order.js';
import { Payment } from './payments.js';
import { v4 as uuidv4 } from 'uuid'; // Importing UUID for unique ID generation