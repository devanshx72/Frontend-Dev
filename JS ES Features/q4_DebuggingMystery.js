"use strict";
// Q4 - Debugging Mystery
// Original code threw because under strict mode assigning to an undeclared variable is illegal.

console.log('Q4 - Debugging Mystery (before fix)');
try {
  function showMessageBad() {
    // greeting = "Welcome"; // this would throw in strict mode (ReferenceError)
    // console.log(greeting);
  }
  // showMessageBad(); // left commented to avoid runtime error
  console.log('Original would throw: assigning to undeclared variable under strict mode.');
} catch (e) {
  console.log('Caught error:', e.message);
}

// Fix: declare the variable explicitly (scope controlled)
function showMessage() {
  let greeting = "Welcome"; // declared with let: no strict-mode error
  console.log('Fixed output ->', greeting);
  // debugger; // set a watch on 'greeting' to observe call stack
}

showMessage();

// Debug observation comment:
// Under non-strict mode, assigning to an undeclared identifier creates a global property on the global object.
// Strict mode forbids this and throws a ReferenceError, encouraging explicit declarations and preventing accidental globals.

console.log('Q4 complete.');
