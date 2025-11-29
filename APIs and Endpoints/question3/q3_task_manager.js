$(document).ready(function () {

    const apiURL = "http://localhost:3003/tasks"; // JSON Server on port 3003

    loadTasks();

    // FILTER HANDLER
    $("#filterSelect").on("change", function () {
        loadTasks();
    });

    function loadTasks() {
        let filter = $("#filterSelect").val();
        let url = apiURL;

        if (filter === "completed") {
            url = `${apiURL}?completed=true`;
        } else if (filter !== "") {
            url = `${apiURL}?priority=${filter}`;
        }

        $.ajax({
            url: url,
            method: "GET",
            success: function (data) {
                renderTasks(data);
            }
        });
    }

    function renderTasks(tasks) {
        $("#taskList").html("");

        tasks.forEach(task => {
            let taskDiv = `
                <div class="task">
                    <div>
                        <input type="checkbox" class="taskCheck" data-id="${task.id}" ${task.completed ? "checked" : ""}>
                        <span class="${task.completed ? 'completed-text' : ''}">${task.title}</span>
                    </div>

                    <span class="priority ${task.priority.toLowerCase()}">${task.priority}</span>
                </div>
            `;

            $("#taskList").append(taskDiv);
        });

        // Add toggle listeners
        $(".taskCheck").on("change", function () {
            const id = $(this).data("id");
            const completed = $(this).is(":checked");
            updateTask(id, completed);
        });
    }

    function updateTask(id, completed) {
        $.ajax({
            url: `${apiURL}/${id}`,
            method: "PATCH",
            contentType: "application/json",
            data: JSON.stringify({ completed }),
            success: function () {
                loadTasks(); // reload list
            }
        });
    }
});
