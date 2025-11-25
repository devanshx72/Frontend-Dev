// Q6: E-Commerce Inventory - filter, sort, reduce, group

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 5 },
  { id: 2, name: "T-Shirt", category: "Clothing", price: 799, stock: 50 },
  { id: 3, name: "Phone", category: "Electronics", price: 25000, stock: 2 },
  { id: 4, name: "Jeans", category: "Clothing", price: 1999, stock: 3 },
  { id: 5, name: "Watch", category: "Accessories", price: 8999, stock: 8 }
];

function getLowStockProducts() {
  return products.filter(p => p.stock < 10);
}

function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((total, p) => total + (p.price * p.stock), 0);
}

function groupByCategory() {
  return products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) groups[category] = [];
    groups[category].push(product);
    return groups;
  }, {});
}

// Execute
console.log("Low Stock:", getLowStockProducts());
console.log("Sorted by Price:", sortProductsByPrice());
console.log("Total Value: ₹" + calculateTotalInventoryValue());
console.log("Grouped:", groupByCategory());