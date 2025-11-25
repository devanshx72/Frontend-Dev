"use strict";
// Q6 - Pyramid Pattern Generator
// Generates a pyramid of '*' with configurable limit and demonstrates var vs let behavior.

function generatePyramid(limit = 5) {
  console.log(`Q6 - Pyramid (limit=${limit})`);
  for (let i = 1; i <= limit; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '* ';
    }
    console.log(row.trim());
  }
}

generatePyramid();

console.log('\nNow with var (observe scoping differences)');
function generatePyramidVar(limit = 4) {
  for (var i = 1; i <= limit; i++) {
    var row = '';
    for (var j = 1; j <= i; j++) {
      row += '* ';
    }
    console.log(row.trim());
  }
  // Note: i and j remain accessible here due to var scoping (function-scoped), which can be a source of bugs
  console.log('After loop var i=', i); // i still exists
}

generatePyramidVar();

// Debugging step: set breakpoint inside loops to observe variable reuse and value changes
// debugger;

console.log('Q6 complete.');
