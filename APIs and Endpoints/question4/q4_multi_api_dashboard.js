const usersURL = "http://localhost:3004/users";
const ordersURL = "http://localhost:3004/orders";
const productsURL = "http://localhost:3004/products";

document.addEventListener("DOMContentLoaded", () => {
    loadDashboard();
});

function loadDashboard() {
    const fetchUsers = fetch(usersURL).then(res => {
        if (!res.ok) throw "Users API failed";
        return res.json();
    });

    const fetchOrders = fetch(ordersURL).then(res => {
        if (!res.ok) throw "Orders API failed";
        return res.json();
    });

    const fetchProducts = fetch(productsURL).then(res => {
        if (!res.ok) throw "Products API failed";
        return res.json();
    });

    Promise.all([fetchUsers, fetchOrders, fetchProducts])
        .then(([users, orders, products]) => {
            document.getElementById("usersCount").textContent = users.length;
            document.getElementById("ordersCount").textContent = orders.length;
            document.getElementById("productsCount").textContent = products.length;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("warning").textContent =
                "Some data could not be loaded.";

            // show fallback values instead of skeletons
            document.getElementById("usersCount").textContent = "-";
            document.getElementById("ordersCount").textContent = "-";
            document.getElementById("productsCount").textContent = "-";
        });
}
