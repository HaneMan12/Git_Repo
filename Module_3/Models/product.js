export class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.id = id;
    this.stock = stock;
  }
}
 
reduceStock(quantity);{
  if (this.stock >= quantity) {
    this.stock -= quantity;
  } else {
    throw new Error('Insufficient stock available');
  }
}