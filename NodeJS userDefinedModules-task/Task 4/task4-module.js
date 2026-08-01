// Task 4: Employee Salary Module
function calculateYearlySalary(monthlySalary) {
  return monthlySalary * 12;
}

function calculateBonus(monthlySalary) {
  // Annual bonus equal to two months' salary
  return monthlySalary * 2;
}

module.exports = { calculateYearlySalary, calculateBonus };