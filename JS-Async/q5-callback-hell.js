// Q5: Frontend Rush - Avoiding Callback Hell

// 1. Callback Hell Version (Bad Practice)
function design(callback) {
  setTimeout(() => {
    console.log("Design completed");
    callback();
  }, 1000);
}

design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => {
          console.log("All done with callbacks!");
        });
      });
    });
  });
});

function build(cb) { setTimeout(() => { console.log("Build completed"); cb(); }, 1000); }
function test(cb) { setTimeout(() => { console.log("Test completed"); cb(); }, 1000); }
function deploy(cb) { setTimeout(() => { console.log("Deploy completed"); cb(); }, 1000); }
function celebrate(cb) { setTimeout(() => { console.log("Celebrate!"); cb(); }, 1000); }

// 2. Clean async/await version
async function runPipeline() {
  try {
    await new Promise(r => setTimeout(() => { console.log("Design completed"); r(); }, 1000));
    await new Promise(r => setTimeout(() => { console.log("Build completed"); r(); }, 1000));
    await new Promise(r => setTimeout(() => { console.log("Test completed"); r(); }, 1000));
    await new Promise(r => setTimeout(() => { console.log("Deploy completed"); r(); }, 1000));
    await new Promise(r => setTimeout(() => { console.log("Celebrate!"); r(); }, 1000));
    console.log("Pipeline completed cleanly with async/await!");
  } catch (err) {
    console.error("Pipeline failed");
  }
}

runPipeline();

// async/await is much more readable, linear, and easier to debug than nested callbacks.