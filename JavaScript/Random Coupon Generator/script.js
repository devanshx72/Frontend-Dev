"use strict";

// Generate a random integer between 1 and 100 (inclusive)
let couponNumber = Math.floor(Math.random() * 100) + 1;

// Decide reward message based on number range
let rewardMessage = "";
if (couponNumber <= 30) {
  rewardMessage = "You won a 10% discount";
} else if (couponNumber <= 60) {
  rewardMessage = "You won a 20% discount";
} else if (couponNumber <= 90) {
  rewardMessage = "You won a 30% discount";
} else {
  rewardMessage = "You won a 50% Mega Offer!";
}

// Simple prime check for bonus condition
let isPrime = true;
if (couponNumber <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(couponNumber); i++) {
    if (couponNumber % i === 0) {
      isPrime = false;
      break;
    }
  }
}

// Print coupon and reward, with prime bonus if applicable
console.log("Coupon Number:", couponNumber);
console.log("Reward:", rewardMessage);
if (isPrime) {
  console.log("Prime number bonus applied");
}
