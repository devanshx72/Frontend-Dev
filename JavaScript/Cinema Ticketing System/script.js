"use strict";

// Input variables for booking
let showTime = "evening"; // "morning" or "evening"
let isStudent = true;
let age = 19;
let ticketCount = 4;

// Base ticket price based on show time
let basePricePerTicket = showTime === "morning" ? 120 : 180;

// Calculate base total price before discount or fees
let baseTotal = basePricePerTicket * ticketCount;

// Determine discount rate based on student or senior
let discountRate = 0;
if (isStudent) {
  discountRate = 10;
} else if (age > 60) {
  discountRate = 20;
}

// Calculate discounted total
let discountAmount = (baseTotal * discountRate) / 100;
let discountedTotal = baseTotal - discountAmount;

// Apply service fee if more than 3 tickets
let serviceFee = 0;
if (ticketCount > 3) {
  serviceFee = 50;
}

// Final amount after adding service fee
let finalAmount = discountedTotal + serviceFee;

// Print ticket summary
console.log("Show Time:", showTime);
console.log("Ticket Count:", ticketCount);
console.log("Base Price Per Ticket:", basePricePerTicket);
console.log("Base Total:", baseTotal);
console.log("Discount Rate (%):", discountRate);
console.log("Discounted Total:", discountedTotal);
console.log("Service Fee:", serviceFee);
console.log("Final Amount:", finalAmount);
