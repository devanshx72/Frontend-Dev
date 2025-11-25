"use strict";
// Q9 - JSON Audit
// Parse raw JSON strings, detect invalid JSON and missing keys, convert age to Number and filter under-18.

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

console.log('Q9 - JSON Audit');

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const obj = JSON.parse(line);
    // check required keys
    if (!('user' in obj) || !('age' in obj)) throw new Error('MissingKeys');
    // convert age
    const ageNum = Number(obj.age);
    if (Number.isNaN(ageNum)) throw new Error('InvalidAge');
    obj.age = ageNum;
    clean.push(obj);
    console.log(`Line ${i + 1} parsed OK ->`, obj);
  } catch (err) {
    errors.push({ line: i + 1, raw: line, error: err.message });
    console.log(`Line ${i + 1} ERROR: ${err.message} -> raw: ${line}`);
  }
}

console.log('\nClean entries:', clean.length);
for (const c of clean) console.log(' -', c);

console.log('Errors found:', errors.length);
for (const e of errors) console.log(` - line ${e.line}: ${e.error}`);

// Bonus: filter under-18
const under18 = clean.filter(c => c.age < 18);
console.log('Under-18 users (count):', under18.length);

// debugger; // set to inspect 'clean' and 'errors' arrays step-by-step

console.log('Q9 complete.');
