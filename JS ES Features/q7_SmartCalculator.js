"use strict";
// Q7 - Smart Calculator
// Switch-based operations with custom error handling and formatted console output.

class InvalidOperationError extends Error {}
class MathError extends Error {}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function operate(op, a, b) {
  switch (op) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'divide':
      if (b === 0) throw new MathError('DivideByZero');
      return a / b;
    case 'power':
      return Math.pow(a, b);
    case 'root':
      if (a < 0) throw new MathError('RootOfNegative');
      return Math.pow(a, 1 / b);
    default:
      throw new InvalidOperationError(op);
  }
}

console.log('Q7 - Smart Calculator');
for (const op of operations) {
  try {
    const result = operate(op, num1, num2);
    console.log(`Operation: ${op} -> ${result}`);
  } catch (err) {
    if (err instanceof MathError) console.log(`Operation: ${op} -> MathError: ${err.message}`);
    else if (err instanceof InvalidOperationError) console.log(`Operation: ${op} -> InvalidOperation: ${err.message}`);
    else console.log(`Operation: ${op} -> Error: ${err.message}`);
  }
}

console.log('Q7 complete.');
