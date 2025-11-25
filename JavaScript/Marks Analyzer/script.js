"use strict";

// Marks of five subjects in an array
let marks = [92, 78, 65, 35, 48];

// Sum all marks using a loop
let sum = 0;
let failedSubjects = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
  if (marks[i] < 40) {
    failedSubjects++;
  }
}

// Calculate average and percentage (same for /5 here)
let average = sum / marks.length;
let percentage = average;

// Determine grade based on percentage
let grade = "";
if (percentage >= 90 && percentage <= 100) {
  grade = "A+";
} else if (percentage >= 75) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else if (percentage >= 40) {
  grade = "C";
} else {
  grade = "Fail";
}

// Check repeat year rule for multiple failed subjects
let statusMessage = "Promoted";
if (failedSubjects >= 2) {
  statusMessage = "Repeat Year";
}

// Print detailed report
console.log("Marks:", marks);
console.log("Total:", sum);
console.log("Average:", average);
console.log("Percentage:", percentage);
console.log("Grade:", grade);
console.log("Failed Subjects Count:", failedSubjects);
console.log("Final Status:", statusMessage);
