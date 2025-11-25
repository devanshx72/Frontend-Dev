"use strict";
// Employee class with salary methods and total annual payout
class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = Number(salary);
  }

  getAnnualSalary() {
    return +(this.salary * 12).toFixed(2);
  }

  applyBonus(percent) {
    if (typeof percent !== 'number' || Number.isNaN(percent)) throw new Error('Invalid percent');
    this.salary = +(this.salary * (1 + percent / 100)).toFixed(2);
  }
}

const employees = [
  new Employee(1, 'Amit', 'Sales', 3000),
  new Employee(2, 'Sara', 'HR', 2800),
  new Employee(3, 'Kiran', 'Dev', 4500),
  new Employee(4, 'Nina', 'Design', 3200),
  new Employee(5, 'Rohit', 'Support', 2500)
];

// Calculate annual salary for each and log
for (const emp of employees) console.log(`${emp.name} annual salary: $${emp.getAnnualSalary()}`);

// Use reduce to calculate company total annual payout
const totalAnnualPayout = employees.reduce((acc, e) => acc + e.getAnnualSalary(), 0);
console.log('Total annual payout: $' + totalAnnualPayout.toFixed(2));
