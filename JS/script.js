import { auth } from "./firebaseConsole.js";

document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Log in existing users
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful! Welcome to Luke's Help.");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

document.getElementById("signup-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Sign up new users
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Signup successful! You can now log in.");
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
