"use strict";
// Product class for e-commerce admin operations
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = Number(price);
    this.category = category;
  }

  // Apply a percentage discount to the product price (e.g., 10 for 10%)
  applyDiscount(percent) {
    if (typeof percent !== 'number' || Number.isNaN(percent)) throw new Error('Invalid discount percent');
    this.price = +(this.price * (1 - percent / 100)).toFixed(2);
  }

  // Return a formatted product details string
  details() {
    return `Product [${this.id}] ${this.name} - ${this.category} : $${this.price.toFixed(2)}`;
  }
}

// Create sample products and store in array
const productList = [
  new Product(1, 'Laptop Pro', 1500, 'Electronics'),
  new Product(2, 'Wireless Mouse', 35, 'Peripherals'),
  new Product(3, 'Office Chair', 250, 'Furniture'),
  new Product(4, 'Smartphone X', 1200, 'Electronics'),
  new Product(5, '4K Monitor', 800, 'Peripherals')
];

// Apply a 10% discount to product id 4 to demonstrate method
productList[3].applyDiscount(10);

// Filter and display products with price > 1000
const expensiveProducts = productList.filter(p => p.price > 1000);
for (const p of expensiveProducts) {
  console.log(p.details());
}

// Debug note: class declarations are hoisted differently than function declarations; however, the class binding is not initialized until evaluation, so attempting to use the class before its declaration will throw.
