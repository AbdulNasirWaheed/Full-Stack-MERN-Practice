// Task 2: Student Result Module
function calculateTotal(mark1, mark2, mark3) {
  return mark1 + mark2 + mark3;
}

function calculatePercentage(totalMarks) {
  // Assuming max marks per subject is 100 → total max = 300
  return (totalMarks / 300) * 100;
}

function calculateGrade(percentage) {
  if (percentage >= 80) return 'A';
  if (percentage >= 60) return 'B';
  if (percentage >= 40) return 'C';
  return 'F';
}

module.exports = { calculateTotal, calculatePercentage, calculateGrade };