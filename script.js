import { auth } from "./firebaseConsole.js";

// Listen for the signup button click
document.getElementById("signup-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validate that passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Create a new user in Firebase
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Signup successful! Welcome to Luke's Help.");
            window.location.href = "index.html"; // Redirect to login
        })
        .catch((error) => {
            let errorMessage;
            switch (error.code) {
                case "auth/email-already-in-use":
                    errorMessage = "This email is already in use. Try logging in instead.";
                    break;
                case "auth/invalid-email":
                    errorMessage = "Please enter a valid email address.";
                    break;
                case "auth/weak-password":
                    errorMessage = "Password must be at least 6 characters.";
                    break;
                default:
                    errorMessage = error.message;
            }
            alert("Error: " + errorMessage);
        });
});
