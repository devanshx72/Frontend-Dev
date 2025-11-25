"use strict";
// Q2 - Employee Bonus Calculator
// Convert salary/years, compute bonuses, and print formatted output with validation.

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

console.log('Q2 - Employee Bonus Calculator');

for (let i = 0; i < employees.length; i++) {
  const emp = employees[i];
  try {
    if (!emp || !emp.name) throw new Error('Missing employee record or name');

    // strict conversion
    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (Number.isNaN(salary) || Number.isNaN(years)) throw new Error('ConversionError: salary/years not numeric');

    const rate = (years > 3) ? 0.1 : 0.05;
    const bonus = salary * rate;

    console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);
  } catch (err) {
    console.log(`Error processing employee at index ${i}:`, err.message);
  }
}

// Observation: 'use strict' prevents implicit globals (e.g., accidentally doing total = 0 would throw). Using let/const keeps scope explicit.
// debugger; // place a breakpoint here to inspect 'employees' and individual conversions

console.log('Q2 complete.');
