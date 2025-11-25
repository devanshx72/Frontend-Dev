"use strict";
// Q7: makeMultiplier closure example
function makeMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15
// Closure explanation (comment): the returned function retains access to 'multiplier' from the outer scope even after makeMultiplier has returned.
