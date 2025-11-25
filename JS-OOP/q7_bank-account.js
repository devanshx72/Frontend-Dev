// Q7: Bank Account with Private #balance

class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ₹${amount}. New balance: ₹${this.#balance}`);
    }
  }

  withdraw(amount) {
    try {
      if (amount > this.#balance) {
        throw new Error("Insufficient balance!");
      }
      this.#balance -= amount;
      console.log(`Withdrew ₹${amount}. Remaining: ₹${this.#balance}`);
    } catch (error) {
      console.error("Withdrawal Failed:", error.message);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

// Demo
const acc = new BankAccount("Devansh");
acc.deposit(10000);
acc.withdraw(5000);
acc.withdraw(8000); // Will throw error
console.log("Final Balance:", acc.getBalance());