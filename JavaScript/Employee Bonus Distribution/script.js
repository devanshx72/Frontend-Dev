"use strict";

// Input values for one employee
let baseSalary = 120000;
let rating = 4;
let experienceYears = 6;

// Base bonus rate from performance rating
let bonusRate = 0;
if (rating === 5) {
  bonusRate = 20;
} else if (rating === 4) {
  bonusRate = 15;
} else if (rating === 3) {
  bonusRate = 10;
} else {
  bonusRate = 0;
}

// Extra 5% for experience > 5 years
if (experienceYears > 5) {
  bonusRate += 5;
}

// Calculated bonus before capping
let calculatedBonus = (baseSalary * bonusRate) / 100;

// Apply bonus cap if salary is high and bonus exceeds limit
let finalBonus = calculatedBonus;
if (baseSalary > 100000 && finalBonus > 25000) {
  finalBonus = 25000;
}

// Total salary including final bonus
let totalSalaryAfterBonus = baseSalary + finalBonus;

// Print bonus distribution details
console.log("Base Salary:", baseSalary);
console.log("Rating:", rating);
console.log("Experience (years):", experienceYears);
console.log("Calculated Bonus:", calculatedBonus);
console.log("Final Bonus (after cap):", finalBonus);
console.log("Total Salary After Bonus:", totalSalaryAfterBonus);
