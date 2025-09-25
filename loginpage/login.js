function handleLogin(e) {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;

            const storedEmail = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("password");

            if (email === storedEmail && password === storedPassword) {
                alert("Login successful!");
                window.location.href = "../main-index.html"; // ✅ Redirect on success
            } else {
                alert("Invalid email or password!");
            }
        }