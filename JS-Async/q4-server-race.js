// Q4: DevOps Delay - Async Timeout Race

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3 ? resolve("Server A responded") : reject("Server A failed");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3 ? resolve("Server B responded") : reject("Server B failed");
    }, 3000);
  });
}

// Promise.race - fastest one wins
Promise.race([serverA(), serverB()])
  .then(winner => {
    console.log("Fastest response:", winner);
  })
  .catch(err => console.log("Race failed early:", err));

// Promise.all - wait for both
Promise.all([serverA().catch(() => "Server A failed"), serverB().catch(() => "Server B failed")])
  .then(results => {
    console.log("Deployment completed for all servers");
    results.forEach(res => console.log(res));
  });