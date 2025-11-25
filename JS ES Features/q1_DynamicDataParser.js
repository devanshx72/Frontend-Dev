"use strict";
// Q1 - Dynamic Data Parser
// Converts mixed API data to Number, Boolean, and String forms.
// Logs valid numeric conversions and collects invalid entries separately.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumeric = []; // stores numeric values converted successfully
const invalidEntries = []; // stores entries identified as invalid numbers

// Helper: determine if original string is a clear numeric token
function isClearlyNumericToken(value) {
  if (value === null || value === undefined) return false;
  const s = String(value).trim();
  if (s === "") return false;
  // Accept numeric representations like "25", "3.14", but reject things with letters like "100px"
  // Also reject the literal string "NaN"
  if (/^[+-]?(\d+)(\.\d+)?$/.test(s)) return true;
  return false;
}

console.log('Q1 - Dynamic Data Parser');

for (let i = 0; i < apiData.length; i++) {
  const original = apiData[i];
  // Convert forms
  const asString = String(original);
  const asBoolean = Boolean(original);
  const asNumber = Number(original);

  // Collect invalid numbers: explicit NaN, empty-string-like, or non-numeric suffixes
  if (!isClearlyNumericToken(original) || Number.isNaN(asNumber)) {
    invalidEntries.push({ index: i, original, asString, asBoolean, asNumber });
    console.log(`Entry #${i + 1} -> INVALID NUMBER:`, original, 'asString="' + asString + '"', 'asBoolean=' + asBoolean, 'asNumber=' + asNumber);
  } else {
    validNumeric.push({ index: i, original, asString, asBoolean, asNumber });
    console.log(`Entry #${i + 1} -> VALID:`, original, 'asString="' + asString + '"', 'asBoolean=' + asBoolean, 'asNumber=' + asNumber);
  }
}

console.log('\nSummary Report Q1:');
console.log('Valid numeric values (count=' + validNumeric.length + '):');
for (const v of validNumeric) {
  console.log(` - [idx ${v.index}] original=${v.original} -> Number=${v.asNumber}`);
}

console.log('Invalid entries (count=' + invalidEntries.length + '):');
for (const e of invalidEntries) {
  console.log(` - [idx ${e.index}] original=${e.original} -> Number=${e.asNumber}`);
}

// Hoisting / debug note:
// Using function declarations (like isClearlyNumericToken) are hoisted. Variables declared with let/const above are block-scoped and not hoisted to the same accessible state.
// Add a debugger statement to let you inspect arrays and conversions:
// debugger; // <-- uncomment to use a breakpoint in VS Code

console.log('Q1 complete.');
