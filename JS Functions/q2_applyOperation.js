"use strict";
// Q2: applyOperation(numbers, operation) - operation is a callback applied to each element
function applyOperation(numbers, operation) {
  if (!Array.isArray(numbers)) throw new Error('First argument must be an array');
  if (typeof operation !== 'function') throw new Error('Operation must be a function');
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i], i, numbers));
  }
  return result;
}

const arr = [1,2,3,4];
const doubled = applyOperation(arr, n => n * 2);
console.log('Doubled ->', doubled);
const squared = applyOperation(arr, n => n * n);
console.log('Squared ->', squared);
