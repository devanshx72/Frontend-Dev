"use strict";

// Input for restaurant bill
let baseCost = 2300;
let isDiningIn = true;

// Calculate GST (5% of base)
let gst = (baseCost * 5) / 100;

// Service tax is 10% only if dining in
let serviceTax = 0;
if (isDiningIn) {
  serviceTax = (baseCost * 10) / 100;
}

// Subtotal including taxes but before tip
let subtotal = baseCost + gst + serviceTax;

// Tip is 8% only if subtotal > 2000
let tip = 0;
if (subtotal > 2000) {
  tip = (subtotal * 8) / 100;
}

// Final total with all components
let finalTotal = subtotal + tip;
let roundedFinal = finalTotal.toFixed(2);

// Print detailed bill summary
console.log("Base Amount:", baseCost);
console.log("GST (5%):", gst);
console.log("Service Tax (10% if dining in):", serviceTax);
console.log("Subtotal (with taxes):", subtotal);
console.log("Tip (if applicable):", tip);
console.log("Final Total (rounded):", roundedFinal);
