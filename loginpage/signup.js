function handleSignup(e) {
            e.preventDefault();

            const fname = document.getElementById("fname").value.trim();
            const lname = document.getElementById("lname").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const password = document.getElementById("password").value;
            const cpassword = document.getElementById("cpassword").value;

            if (password !== cpassword) {
                alert("Passwords do not match!");
                return;
            }

            // Store user data temporarily (only for demo/testing)
            localStorage.setItem("username", email);
            localStorage.setItem("password", password);
            localStorage.setItem("firstName", fname);
            localStorage.setItem("lastName", lname);
            localStorage.setItem("phone", phone);

            alert("Signup successful! Redirecting to login...");
            window.location.href = "login.html"; // ✅ Redirect to login
        }