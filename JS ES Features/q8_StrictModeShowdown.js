"use strict";
// Q8 - Strict Mode Showdown
// Demonstrates behavior differences with duplicate parameter names and assignment/delete in strict mode.

console.log('Q8 - Strict Mode Showdown');

// The following function is invalid under strict mode: duplicate parameter names cause a SyntaxError in strict mode.
// We cannot declare function demo(a, a) in strict mode directly. To show the non-strict behavior, we construct a function dynamically (non-strict by default).

try {
  const nonStrictDemo = new Function('a', 'a', 'total = 10; delete total; return total;');
  // Running this will execute in non-strict mode (Function constructor creates non-strict functions),
  // so assigning to undeclared 'total' creates a global and delete may succeed/fail depending on environment.
  const res = nonStrictDemo(5, 10);
  console.log('Non-strict dynamic function result:', res);
} catch (err) {
  console.log('Error running dynamic non-strict function:', err.message);
}

// Correct strict-mode version using ES6 rules (unique parameter names and declared variables)
function demoCorrect(a, b) {
  'use strict';
  let total = 10;
  // delete total; // delete of declared variable is illegal; commented out intentionally
  console.log('demoCorrect total:', total);
}

demoCorrect(5, 10);

// Observations (console):
// - Strict mode disallows duplicate parameter names, forbids implicit globals, and prevents deleting declared variables.
// - Using unique parameter names and declaring variables prevents syntax/runtime errors under strict mode.

console.log('Q8 complete.');
