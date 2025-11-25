// Q10: The Final Delivery - Async Pipeline Debugger

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() > 0.2 ? resolve("Order taken") : reject("Customer canceled"), 1000 + Math.random() * 1000);
  });
}

function prepare() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() > 0.2 ? resolve("Food prepared") : reject("Burnt food"), 1500 + Math.random() * 500);
  });
}

function pack() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() > 0.2 ? resolve("Package ready") : reject("Bag torn"), 1000);
  });
}

function dispatch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() > 0.2 ? resolve("Out for delivery") : reject("Rider unavailable"), 1200);
  });
}

function deliver() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() > 0.2 ? resolve("Delivered successfully!") : reject("Wrong address"), 2000);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    const step1 = await takeOrder();
    console.log("Step 1:", step1);

    const step2 = await prepare();
    console.log("Step 2:", step2);

    const step3 = await pack();
    console.log("Step 3:", step3);

    const step4 = await dispatch();
    console.log("Step 4:", step4);

    const step5 = await deliver();
    console.log("Delivery completed!");
  } catch (error) {
    console.log("Pipeline failed!", error);
  }
}

// Run the pipeline
runPipeline();

// Event Loop Behavior:
// Each await pauses execution until the promise resolves.
// If any step rejects, catch block runs immediately.
// This is sequential async flow with proper error propagation.