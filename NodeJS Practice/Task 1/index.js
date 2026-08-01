// Import all functions from module.js
const mathUtils = require('./module');

console.log('========== TASK 1: Calculator ==========');
const a = 10, b = 5;
console.log(`add(${a}, ${b}) = ${mathUtils.add(a, b)}`);
console.log(`subtract(${a}, ${b}) = ${mathUtils.subtract(a, b)}`);
console.log(`multiply(${a}, ${b}) = ${mathUtils.multiply(a, b)}`);
console.log(`divide(${a}, ${b}) = ${mathUtils.divide(a, b)}`);
console.log();

console.log('========== TASK 2: Student Result ==========');
const m1 = 85, m2 = 72, m3 = 90;
const total = mathUtils.calculateTotal(m1, m2, m3);
const percentage = mathUtils.calculatePercentage(total);
const grade = mathUtils.calculateGrade(percentage);
console.log(`Marks: ${m1}, ${m2}, ${m3}`);
console.log(`Total Marks: ${total}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Grade: ${grade}`);
console.log();

console.log('========== TASK 3: Array Utility ==========');
const numbers = [12, 45, 7, 23, 56, 34];
console.log(`Array: [${numbers}]`);
console.log(`Sum: ${mathUtils.findSum(numbers)}`);
console.log(`Maximum: ${mathUtils.findMaximum(numbers)}`);
console.log(`Minimum: ${mathUtils.findMinimum(numbers)}`);
console.log();

console.log('========== TASK 4: Employee Salary ==========');
const monthlySalary = 5000;
const yearly = mathUtils.calculateYearlySalary(monthlySalary);
const bonus = mathUtils.calculateBonus(monthlySalary);
console.log(`Monthly Salary: $${monthlySalary}`);
console.log(`Yearly Salary: $${yearly}`);
console.log(`Annual Bonus (2 months): $${bonus}`);