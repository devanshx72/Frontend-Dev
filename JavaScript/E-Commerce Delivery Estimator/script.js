"use strict";

// Input variables for order details
let orderAmount = 450;        // example amount
let isPremium = false;        // true if premium member
let isRemote = true;          // true if remote address

// Initialize delivery fee and time with base values
let deliveryFee = 0;
let deliveryDays = 3;

// Apply delivery fee based on order amount and premium status
if (orderAmount < 500 && !isPremium) {
  deliveryFee = 50;
} else {
  deliveryFee = 0;
}

// Adjust delivery days if address is remote
if (isRemote) {
  deliveryDays += 2;
}

// Calculate total cost including delivery fee
let totalCost = orderAmount + deliveryFee;

// Print final cost and estimated delivery time
console.log("Order Amount:", orderAmount);
console.log("Is Premium:", isPremium);
console.log("Is Remote Address:", isRemote);
console.log("Delivery Fee:", deliveryFee);
console.log("Total Cost:", totalCost);
console.log("Estimated Delivery Time (days):", deliveryDays);
