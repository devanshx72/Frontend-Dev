"use strict";
// Q6: Constructor chain Person -> Faculty -> Professor
function Person(name) {
  this.personName = name;
}
Person.prototype.personInfo = function() { console.log('Person name ->', this.personName); };

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.facultyInfo = function() { console.log('Department ->', this.department); };

function Professor(name, department, title) {
  Faculty.call(this, name, department);
  this.title = title;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.professorInfo = function() { console.log('Title ->', this.title); };

const prof = new Professor('Dr. Rao', 'Physics', 'Associate Professor');
prof.personInfo();
prof.facultyInfo();
prof.professorInfo();
