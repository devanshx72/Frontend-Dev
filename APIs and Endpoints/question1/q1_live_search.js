$(document).ready(function () {
    const apiURL = "http://localhost:3001/products"; // Run q1_db.json on port 3001

    $("#searchBox").on("input", function () {
        const query = $(this).val();

        $("#loading").show();
        $("#results").html("");

        $.ajax({
            url: `${apiURL}?q=${query}`,
            method: "GET",
            success: function (data) {
                $("#loading").hide();

                if (data.length === 0) {
                    $("#results").html("<p>No products found.</p>");
                    return;
                }

                let display = "";
                data.forEach(item => {
                    display += `
                        <div class="product">
                            <img src="${item.image}" alt="${item.name}" />
                            <div>
                                <h3>${item.name}</h3>
                                <p>Price: ₹${item.price}</p>
                            </div>
                        </div>
                    `;
                });

                $("#results").html(display);
            },
            error: function () {
                $("#loading").hide();
                $("#results").html("<p>Error loading products.</p>");
            }
        });
    });
});
