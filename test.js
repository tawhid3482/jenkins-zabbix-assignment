console.log("Running test...");

const result = 2 + 2;

if (result === 4) {
  console.log("Test Passed!");
  process.exit(0);
} else {
  console.log("Test Failed!");
  process.exit(1);
}