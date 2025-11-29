const apiURL = "http://localhost:3006/users"; // Run db on port 3006

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const msg = document.getElementById("message");
    msg.innerHTML = "";
    
    // FIRST: CHECK IF EMAIL EXISTS
    axios.get(`${apiURL}?email=${email}`)
        .then(res => {
            if (res.data.length > 0) {
                msg.innerHTML = `<p class="error">Email already registered.</p>`;
                return;
            }

            // IF NOT FOUND → REGISTER USER
            axios.post(apiURL, {
                name,
                email,
                password
            })
            .then(() => {
                msg.innerHTML = `<p class="success">Registration successful!</p>`;
                document.getElementById("registerForm").reset();
            })
            .catch(() => {
                msg.innerHTML = `<p class="error">Registration failed. Try again.</p>`;
            });
        })
        .catch(() => {
            msg.innerHTML = `<p class="error">Could not connect to server.</p>`;
        });
});
