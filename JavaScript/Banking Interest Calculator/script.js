"use strict";

// Input variables for account and deposit
let accountType = "savings"; // "savings" or "fd"
let amount = 120000;         // deposit amount
let years = 5;               // duration in years

// Base interest rate based on account type
let rate = 0;
if (accountType === "savings") {
  rate = 4;
} else if (accountType === "fd") {
  rate = 6.5;
}

// Apply bonus interest if amount exceeds 1,00,000
if (amount > 100000) {
  rate += 1;
}

// Calculate total balance using compound interest formula
let total = amount * Math.pow((1 + rate / 100), years);

// Round to two decimals
let roundedTotal = total.toFixed(2);

// Print full calculation details
console.log("Account Type:", accountType);
console.log("Principal Amount:", amount);
console.log("Years:", years);
console.log("Applied Rate (%):", rate);
console.log("Final Balance:", roundedTotal);
