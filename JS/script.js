import { auth } from "./firebaseConsole.js";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

document.getElementById("signup-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Signup successful! You can now log in.");
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

// Phone number authentication
const recaptchaContainer = document.getElementById("recaptcha-container");
const recaptchaVerifier = new RecaptchaVerifier(recaptchaContainer, {
    size: "invisible",
    callback: (response) => {
        console.log("Recaptcha verified");
    },
}, auth);

document.getElementById("send-code-btn").addEventListener("click", () => {
    const phoneNumber = document.getElementById("phone").value;

    signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            alert("Code sent! Please check your phone.");
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

document.getElementById("verify-code-btn").addEventListener("click", () => {
    const code = document.getElementById("otp").value;

    window.confirmationResult.confirm(code)
        .then((result) => {
            alert("Phone login successful!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
