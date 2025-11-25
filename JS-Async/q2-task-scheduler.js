// Q2: Task Scheduler - Micro vs Macro Challenge

console.log("Start");

// Synchronous log
console.log("Synchronous log");

// Microtask (Promise.then)
Promise.resolve().then(() => {
  console.log("Promise callback (microtask)");
});

// Macrotask (setTimeout)
setTimeout(() => {
  console.log("Timeout callback (macrotask)");
}, 0);

console.log("End");

// Explanation:
// Microtasks (Promise.then, queueMicrotask) are executed after the current script
// and before macrotasks (setTimeout, setInterval).
// Event Loop Priority: Script → Microtasks → Render → Macrotasks
// So output will be:
// Start → Synchronous log → End → Promise callback → Timeout callback