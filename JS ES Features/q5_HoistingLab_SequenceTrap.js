"use strict";
// Q5 - Hoisting Lab: The Sequence Trap
// Predict hoisting states, then fix, then rewrite using arrow functions.

console.log('Q5 - Hoisting Lab');

// Problematic snippet (prediction):
// console.log(score); // undefined due to var hoisting (declaration hoisted, initialization not)
// announce(); // function declaration hoisted -> works
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame(); // ReferenceError because status is in TDZ for let
// function startGame() { console.log(status); }

console.log('\nPredicted behavior:');
console.log(' - score is hoisted as var -> undefined before assignment');
console.log(' - announce function hoisted -> callable before its declaration');
console.log(' - let status is in temporal dead zone -> accessing before declaration causes ReferenceError');

console.log('\nRunning fixed version:');
// Fixed code (safe ordering)
function announce() { console.log('Game started'); }
let score = 50;
announce();
let status = 'ready';
function startGame() { console.log('status ->', status); }
startGame();

// Arrow function rewrite and hoisting comment
const announceArrow = () => console.log('Game started (arrow)');
const startGameArrow = () => console.log('status (arrow) ->', status);
announceArrow();
startGameArrow();

// Hoisting explanation (comment):
// - Function declarations are hoisted entirely (definition available before declaration).
// - var declarations are hoisted (initialized to undefined) but assignment happens later.
// - let/const are not accessible before declaration (TDZ). Arrow functions assigned to const/let are not hoisted as callable functions.

// debugger; // set breakpoint to inspect variables and call stack

console.log('Q5 complete.');
