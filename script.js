import { auth } from "./firebaseConsole.js";

document.getElementById("signup-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Use Firebase Authentication to create a user
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signup successful
            alert("Signup successful! Welcome to Luke's Help.");
            window.location.href = "index.html"; // Redirect after signup
        })
        .catch((error) => {
            // Handle Firebase errors here
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

        // Redirect to signup.html when the Sign Up button is clicked
document.getElementById("signup-btn").addEventListener("click", () => {
    window.location.href = "signup.html"; // Redirect to the signup page
});

});
