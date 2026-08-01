const { findSum, findMaximum, findMinimum } = require('./task3-module');

console.log('========== TASK 3: Array Utility ==========');
const numbers = [12, 45, 7, 23, 56, 34];
console.log(`Array: [${numbers}]`);
console.log(`Sum: ${findSum(numbers)}`);
console.log(`Maximum: ${findMaximum(numbers)}`);
console.log(`Minimum: ${findMinimum(numbers)}`);