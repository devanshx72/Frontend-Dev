// Q8: Order Processing Flow - Async Retry Mechanism

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Order submitted successfully");
      } else {
        reject(new Error("Payment declined"));
      }
    }, 1000);
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`Attempt ${attempt}: Trying to submit order...`);
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return result;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed - ${err.message}`);
      if (attempt === 3) {
        throw new Error("Order could not be processed after 3 attempts");
      }
    }
  }
}

// Execute
processOrder()
  .then(msg => console.log(msg))
  .catch(err => console.error("Final failure:", err.message));