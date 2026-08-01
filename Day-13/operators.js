let studentName = "Alice";
let marks = 85; 
let grade; 

if (marks >= 90) {
    grade = "A+";
} else if (marks >= 80) {
    grade = "A";
} else if (marks >= 70) {
    grade = "B";
} else if (marks >= 60) {
    grade = "C";
} else if (marks >= 50) {
    grade = "D";
} else {
    grade = "F (Fail)";
}

console.log("------- Student Result System -------");
console.log("Student Name : " + studentName);
console.log("Marks Scored : " + marks);
console.log("Final Grade  : " + grade);
console.log("-------------------------------------");

document.getElementById("result-display").innerText = `${studentName} scored ${marks} marks. Final Grade: ${grade}`;