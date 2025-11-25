"use strict";
// Q1: greetUser with callback flow
function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  if (typeof callback === 'function') callback();
}

function showEndMessage() {
  console.log('Welcome to the course!');
}

// Demonstration
greetUser('Amit', showEndMessage);
