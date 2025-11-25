"use strict";

// Input values for the player
let level = 15;
let performanceScore = 30;
let missionsCompleted = true;

// Calculate base coins from level and performance
let coins = (level * 50) + (performanceScore * 10);

// Double coins if all missions are completed
if (missionsCompleted === true) {
  coins = coins * 2;
}

// Assign rank based on coin total
let rank = coins > 1000 ? "Elite" : "Regular";

// Print reward summary
console.log("Level:", level);
console.log("Performance Score:", performanceScore);
console.log("Missions Completed:", missionsCompleted);
console.log("Total Coins:", coins);
console.log("Assigned Rank:", rank);
