"use strict";
// Q10 - Nested Hoisting and Closures
// Demonstrate hoisting behavior and how nested functions create separate memory contexts.

console.log('Q10 - Nested Hoisting and Closures');

function outer() {
  console.log('outer before var count ->', count); // due to hoisting, this logs 'undefined'
  var count = 5;
  function inner() {
    console.log('inner before var count ->', count); // inner var count is hoisted within inner scope -> undefined
    var count = 10;
    console.log('inner after var count ->', count); // 10
  }
  inner();
  console.log('outer after inner ->', count); // 5 (outer's count)
}

outer();

// Explanation (hoisting):
// - In 'outer', 'var count' declaration is hoisted to the top of its function scope, but initialization happens where assigned -> so first log shows undefined.
// - In 'inner', its own 'var count' is hoisted within inner scope, shadowing outer 'count', producing undefined at first inner log, then 10 after initialization.

// Convert inner to arrow function and show behavior
function outerWithArrow() {
  var count = 5;
  const innerArrow = () => {
    // Arrow functions do not create their own 'this' or arguments, but they still have their own lexical scope for variables.
    // If we declare var count inside arrow, it will behave similarly with hoisting inside that function body.
    // Let's declare using let to avoid TDZ issues:
    // console.log(count); // would reference outer's count (5) if we don't shadow it with a new declaration
    console.log('innerArrow sees outer count ->', count);
  };
  innerArrow();
}

outerWithArrow();

// Debug: place a breakpoint inside 'inner' to inspect separate memory contexts and call stack.
// debugger;

console.log('Q10 complete.');
