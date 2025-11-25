"use strict";
// Q3 - Transaction Validator
// Validate transactions, throw custom errors for negative/missing/null entries

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

console.log('Q3 - Transaction Validator');

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  try {
    if (tx === null) throw new Error('NullEntryError');
    if (typeof tx !== 'object') throw new Error('InvalidEntryError');
    if (!('id' in tx) || !('amount' in tx)) throw new Error('MissingFieldError');
    if (typeof tx.amount !== 'number') throw new Error('InvalidAmountType');
    if (tx.amount < 0) throw new Error('NegativeAmountError');

    // passed all checks
    valid.push(tx);
    console.log(`Transaction ${tx.id} succeeded: amount=${tx.amount}`);
  } catch (err) {
    invalid.push({ index: i, entry: tx, error: err.message });
    console.log(`Transaction at index ${i} failed ->`, err.message);
  }
}

console.log('\nQ3 Summary:');
console.log('Valid transactions count:', valid.length);
console.log('Invalid transactions count:', invalid.length);
for (const it of invalid) console.log(` - idx ${it.index}: error=${it.error} entry=`, it.entry);

// Debug: use 'debugger;' to set a breakpoint and inspect 'valid' and 'invalid' arrays and current 'tx' variable states.
// debugger;

console.log('Q3 complete.');
