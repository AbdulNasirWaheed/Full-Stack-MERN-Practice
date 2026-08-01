const { calculateYearlySalary, calculateBonus } = require('./task4-module');

console.log('========== TASK 4: Employee Salary ==========');
const monthlySalary = 5000;
const yearly = calculateYearlySalary(monthlySalary);
const bonus = calculateBonus(monthlySalary);

console.log(`Monthly Salary: $${monthlySalary}`);
console.log(`Yearly Salary: $${yearly}`);
console.log(`Annual Bonus (2 months): $${bonus}`);