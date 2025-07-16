// script.js

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", function () {
        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("mes").value.trim();

        // Email validation pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all the fields.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Show success message
        alert(`Thank you, ${name}! Your message has been sent.`);

        // Log details (for dev/debug)
        console.log({
            Name: name,
            Email: email,
            Message: message
        });

        // Clear the form
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mes").value = "";
    });
});
