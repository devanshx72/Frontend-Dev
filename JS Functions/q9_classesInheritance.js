"use strict";
// Q9: Rewrite Person -> Student using ES6 classes and show equivalence with prototype version
// Prototype version
function PersonProto(name) { this.name = name; }
PersonProto.prototype.getName = function() { console.log('proto name ->', this.name); };
function StudentProto(name, branch) { PersonProto.call(this, name); this.branch = branch; }
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.getBranch = function() { console.log('proto branch ->', this.branch); };

const sp = new StudentProto('Arun', 'ECE');
sp.getName();
sp.getBranch();

// Class version
class PersonClass {
  constructor(name) { this.name = name; }
  getName() { console.log('class name ->', this.name); }
}
class StudentClass extends PersonClass {
  constructor(name, branch) { super(name); this.branch = branch; }
  getBranch() { console.log('class branch ->', this.branch); }
}

const sc = new StudentClass('Arun', 'ECE');
sc.getName();
sc.getBranch();

// Both versions expose similar behavior; class syntax is syntactic sugar over prototype-based inheritance.
