const apiURL = "http://localhost:3002/employees"; // Run q2_db.json on port 3002

document.addEventListener("DOMContentLoaded", loadEmployees);

function loadEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiURL);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const employees = JSON.parse(xhr.responseText);
            renderEmployees(employees);
        }
    };
    xhr.send();
}

function renderEmployees(list) {
    const table = document.getElementById("employeeTable");
    table.innerHTML = "";

    list.forEach(emp => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${emp.name}</td>
            <td class="${emp.status}">${emp.status}</td>
            <td>
                <button onclick="toggleStatus(${emp.id}, '${emp.status}', this)">
                    Toggle
                </button>
            </td>
        `;

        table.appendChild(row);
    });
}

function toggleStatus(id, currentStatus, btn) {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    const row = btn.parentElement.parentElement;
    const statusCell = row.children[1];

    // Update UI instantly
    statusCell.textContent = newStatus;
    statusCell.className = newStatus;

    // SEND PATCH REQUEST
    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", `${apiURL}/${id}`);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status !== 200) {
            // Revert changes if PATCH fails
            statusCell.textContent = currentStatus;
            statusCell.className = currentStatus;
            showError("Failed to update status. Try again.");
        }
    };

    xhr.onerror = function () {
        // Revert changes if request fails
        statusCell.textContent = currentStatus;
        statusCell.className = currentStatus;
        showError("Network error occurred!");
    };

    xhr.send(JSON.stringify({ status: newStatus }));
}

function showError(msg) {
    document.getElementById("errorBox").textContent = msg;
    setTimeout(() => {
        document.getElementById("errorBox").textContent = "";
    }, 3000);
}
