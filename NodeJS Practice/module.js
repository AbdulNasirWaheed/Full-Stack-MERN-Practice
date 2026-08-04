// ------------------------------
// Task 1: Calculator Module
// ------------------------------
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
}

// ------------------------------
// Task 2: Student Result Module
// ------------------------------
function calculateTotal(mark1, mark2, mark3) {
  return mark1 + mark2 + mark3;
}

function calculatePercentage(totalMarks) {
  // Assuming maximum marks for each subject is 100, total max = 300
  return (totalMarks / 300) * 100;
}

function calculateGrade(percentage) {
  if (percentage >= 80) return 'A';
  if (percentage >= 60) return 'B';
  if (percentage >= 40) return 'C';
  return 'F';
}

// ------------------------------
// Task 3: Array Utility Module
// ------------------------------
function findSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function findMaximum(array) {
  if (array.length === 0) return undefined;
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function findMinimum(array) {
  if (array.length === 0) return undefined;
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

// ------------------------------
// Task 4: Employee Salary Module
// ------------------------------
function calculateYearlySalary(monthlySalary) {
  return monthlySalary * 12;
}

function calculateBonus(monthlySalary) {
  // Annual bonus equal to two months' salary
  return monthlySalary * 2;
}

// ------------------------------
// Export all functions
// ------------------------------
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculateTotal,
  calculatePercentage,
  calculateGrade,
  findSum,
  findMaximum,
  findMinimum,
  calculateYearlySalary,
  calculateBonus
};