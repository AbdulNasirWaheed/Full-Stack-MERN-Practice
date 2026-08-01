const { add, subtract, multiply, divide } = require('./task1-module');

console.log('========== TASK 1: Calculator ==========');
const a = 10, b = 5;
console.log(`add(${a}, ${b}) = ${add(a, b)}`);
console.log(`subtract(${a}, ${b}) = ${subtract(a, b)}`);
console.log(`multiply(${a}, ${b}) = ${multiply(a, b)}`);
console.log(`divide(${a}, ${b}) = ${divide(a, b)}`);