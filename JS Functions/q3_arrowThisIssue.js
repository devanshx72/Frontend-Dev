"use strict";
// Q3: Arrow function this issue and fix
const user = {
  name: 'John',
  showNameArrow: () => {
    // Arrow functions do not have their own 'this'; here 'this' is lexical (likely undefined in strict mode)
    console.log('arrow this.name ->', this && this.name);
  },
  showNameNormal: function() {
    console.log('normal this.name ->', this.name);
  }
};

console.log('Using arrow function method (expected undefined):');
user.showNameArrow();
console.log('Using normal function method (this bound to object):');
user.showNameNormal();
