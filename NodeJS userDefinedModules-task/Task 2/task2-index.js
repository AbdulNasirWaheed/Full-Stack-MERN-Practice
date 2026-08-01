const { calculateTotal, calculatePercentage, calculateGrade } = require('./task2-module');

console.log('========== TASK 2: Student Result ==========');
const m1 = 85, m2 = 72, m3 = 90;
const total = calculateTotal(m1, m2, m3);
const percentage = calculatePercentage(total);
const grade = calculateGrade(percentage);

console.log(`Marks: ${m1}, ${m2}, ${m3}`);
console.log(`Total Marks: ${total}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Grade: ${grade}`);