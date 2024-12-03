import { auth, signInWithPopup, GoogleAuthProvider } from "./firebaseConfig.js";

document.addEventListener("DOMContentLoaded", () => {
    const googleSignUpButton = document.getElementById("googleSignUpButton");
    const backToLoginButton = document.getElementById("backToLoginButton");

    // Google Sign-Up
    googleSignUpButton.addEventListener("click", () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log("User signed up:", user.email);
                alert("Account created successfully! Redirecting to your dashboard...");
                window.location.href = "dashboard.html"; // Redirect to dashboard
            })
            .catch((error) => {
                console.error("Error during Google signup:", error.message);
                alert("Failed to sign up. Please try again.");
            });
    });

    // Back to Login Button
    backToLoginButton.addEventListener("click", () => {
        window.location.href = "index.html"; // Redirect back to login page
    });

    document.getElementById("signupButton").addEventListener("click", () => {
        window.location.href = "signup.html"; // Redirect to signup page
    });
    
});
