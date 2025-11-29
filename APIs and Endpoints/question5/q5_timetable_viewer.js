const apiURL = "http://localhost:3005/timetable"; // Port 3005

document.addEventListener("DOMContentLoaded", () => {
    loadTimetable("Monday");

    document.getElementById("daySelect").addEventListener("change", function () {
        loadTimetable(this.value);
    });
});

function loadTimetable(day) {
    fetch(`${apiURL}?day=${day}`)
        .then(res => res.json())
        .then(data => renderTimetable(data))
        .catch(() => {
            document.getElementById("timetableList").innerHTML =
                "<p class='no-class'>Failed to load timetable.</p>";
        });
}

function renderTimetable(classes) {
    const output = document.getElementById("timetableList");
    output.innerHTML = "";

    if (classes.length === 0) {
        output.innerHTML = "<p class='no-class'>No classes today.</p>";
        return;
    }

    classes.forEach(cls => {
        const div = document.createElement("div");
        div.className = "class-box";

        div.innerHTML = `
            <h3>${cls.subject}</h3>
            <p><strong>Faculty:</strong> ${cls.faculty}</p>
            <p><strong>Time:</strong> ${cls.time}</p>
        `;

        output.appendChild(div);
    });
}
