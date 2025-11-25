// Q3: Bug Tracker - Callback to Promise Migration

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.3; // 30% failure rate
      if (!shouldFail) {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      } else {
        reject(new Error("API is down"));
      }
    }, 1000);
  });
}

// Using the Promise-based version
getBugs()
  .then(bugs => {
    console.log("Bugs fetched successfully:");
    console.table(bugs.map((bug, i) => ({ No: i + 1, Bug: bug })));
  })
  .catch(err => {
    console.error("Failed to fetch bugs:", err.message);
  });