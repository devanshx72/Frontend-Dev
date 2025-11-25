// Q3: Product Discount using Constructor + Prototype

function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Prototype method - Abstraction: hides discount logic
Product.prototype.applyDiscount = function(percent) {
  if (percent < 0 || percent > 100) {
    console.log("Invalid discount percentage!");
    return this.price;
  }
  const discountedPrice = this.price - (this.price * percent / 100);
  console.log(`${this.name}: ₹${this.price} → ₹${discountedPrice} (${percent}% off)`);
  return discountedPrice;
};

// Create products
const p1 = new Product("iPhone 15", 79999);
const p2 = new Product("MacBook Air", 109999);
const p3 = new Product("AirPods Pro", 24900);

p1.applyDiscount(10);
p2.applyDiscount(15);
p3.applyDiscount(5);

// Abstraction benefit: Same method works for all products without duplication