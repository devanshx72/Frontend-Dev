// Q7: The Lazy Loader - Promise.allSettled()

function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve("Profile Loaded") : reject("Profile failed");
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve) => setTimeout(() => resolve("Posts Loaded"), 1500));
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Messages failed to load"), 1000); // Forced failure
  });
}

async function loadDashboard() {
  const start = Date.now();

  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
  ]);

  results.forEach((result, i) => {
    const module = ["Profile", "Posts", "Messages"][i];
    if (result.status === "fulfilled") {
      console.log(`${module}: ${result.value} (Success)`);
    } else {
      console.log(`${module}: Failed - ${result.reason} (Failed)`);
    }
  });

  const timeTaken = Date.now() - start;
  console.log(`Total time taken: ${timeTaken}ms`);
}

loadDashboard();