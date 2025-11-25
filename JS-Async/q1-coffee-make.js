// Q1: The Startup Morning - Async Coffee Maker

function boilWater() {
  return new Promise((resolve, reject) => {
    console.log("Boiling water...");
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve("Water boiled");
      } else {
        reject(new Error("Boiler exploded!"));
      }
    }, 1500);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    console.log("Brewing coffee...");
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve("Coffee brewed");
      } else {
        reject(new Error("Coffee grounds spilled!"));
      }
    }, 2000);
  });
}

function pourIntoCup() {
  return new Promise((resolve, reject) => {
    console.log("Pouring coffee into cup...");
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve("Coffee poured");
      } else {
        reject(new Error("Cup cracked!"));
      }
    }, 1000);
  });
}

// Promise chaining with error handling
boilWater()
  .then(result => {
    console.log(result);
    return brewCoffee();
  })
  .then(result => {
    console.log(result);
    return pourIntoCup();
  })
  .then(result => {
    console.log(result);
    console.log("Coffee ready for the team!");
  })
  .catch(err => {
    console.error("Coffee making failed:", err.message);
  });