// Q1: Student Result Processing using Classes + reduce()

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks; // array of numbers
  }

  calculateAverage() {
    return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return 'A';
    else if (avg >= 75) return 'B';
    else if (avg >= 50) return 'C';
    else return 'F';
  }

  displayResult() {
    console.log(`Student: ${this.name}`);
    console.log(`Marks: ${this.marks.join(', ')}`);
    console.log(`Average: ${this.calculateAverage().toFixed(2)}`);
    console.log(`Grade: ${this.getGrade()}\n`);
  }
}

// Test with 3 students
const s1 = new Student("Devansh", [95, 88, 92, 87, 99]);
const s2 = new Student("Priya", [78, 82, 75, 80, 85]);
const s3 = new Student("Rahul", [45, 52, 38, 60, 49]);

s1.displayResult();
s2.displayResult();
s3.displayResult();