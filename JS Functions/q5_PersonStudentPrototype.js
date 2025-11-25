"use strict";
// Q5: Person and Student constructors with prototype inheritance
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function() {
  console.log('Name ->', this.name);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.getBranch = function() {
  console.log('Branch ->', this.branch);
};

const s = new Student('Mina', 'CSE');
s.getName();
s.getBranch();
// Prototype chain: s -> Student.prototype -> Person.prototype
