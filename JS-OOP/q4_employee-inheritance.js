// Q4: Employee → Manager Inheritance + Runtime Polymorphism

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} is working in ${this.department} department.`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name, department);
  }

  // Method Overriding - Runtime Polymorphism
  work() {
    console.log(`${this.name} (Manager) is leading the ${this.department} team.`);
  }
}

// Polymorphism in action
const emp1 = new Employee("Amit", "Development");
const mgr1 = new Manager("Devansh", "Engineering");

const workers = [emp1, mgr1];

workers.forEach(worker => worker.work()); // Same call, different behavior