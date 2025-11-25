// Q2: Online Food Ordering - map + reduce + Error Handling

const menu = {
  pizza: 599,
  burger: 199,
  pasta: 349,
  coke: 79,
  salad: 149
};

function calculateBill(orderItems) {
  try {
    if (!Array.isArray(orderItems) || orderItems.length === 0) {
      throw new Error("Order is empty!");
    }

    const prices = orderItems.map(item => {
      const price = menu[item.toLowerCase()];
      if (!price) throw new Error(`Item '${item}' not found in menu!`);
      return price;
    });

    const total = prices.reduce((sum, price) => sum + price, 0);
    console.log("Order:", orderItems.join(", "));
    console.log("Total Bill: ₹" + total);
    return total;
  } catch (error) {
    console.error("Order Failed:", error.message);
  }
}

// Test cases
calculateBill(["Pizza", "Coke", "Burger"]);
calculateBill(["Pasta", "Salad"]);
calculateBill(["Pizza", "Biryani"]); // Invalid item
calculateBill([]); // Empty order