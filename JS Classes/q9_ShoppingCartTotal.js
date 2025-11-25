"use strict";
// Cart class with coupon validation
class Cart {
  constructor() {
    this.items = []; // {name, price, quantity}
  }

  addItem(name, price, quantity = 1) {
    this.items.push({ name, price: Number(price), quantity: Number(quantity) });
  }

  getTotal() {
    return this.items.reduce((acc, it) => acc + it.price * it.quantity, 0);
  }

  // Coupon format: SAVE20 or DISC10 -> capture percentage
  applyCoupon(coupon) {
    if (!coupon) return { success: false, message: 'No coupon' };
    const match = /^(?:SAVE|DISC)(\d{1,2})$/.exec(coupon.toUpperCase());
    if (!match) return { success: false, message: 'Invalid coupon format' };
    const percent = Number(match[1]);
    if (Number.isNaN(percent) || percent <= 0 || percent > 100) return { success: false, message: 'Invalid coupon percent' };
    const total = this.getTotal();
    const discounted = +(total * (1 - percent / 100)).toFixed(2);
    return { success: true, originalTotal: total, finalTotal: discounted, percent };
  }
}

// Example
const cart = new Cart();
cart.addItem('Shoes', 80, 2);
cart.addItem('Jacket', 120, 1);
console.log('Cart total ->', cart.getTotal());
console.log('Apply coupon SAVE20 ->', cart.applyCoupon('SAVE20'));
console.log('Apply invalid coupon ->', cart.applyCoupon('BADCODE'));
