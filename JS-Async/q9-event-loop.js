// Q9: Debugging the Event Loop

// Predicted order:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// Explanation:
// - Synchronous code runs first: "Script start" → "Script end"
// - Then all microtasks are cleared: Promise.then → "Promise callback"
// - Only then macrotasks: setTimeout → "Timeout callback"
// This is how the JavaScript Event Loop works: Microtasks > Macrotasks