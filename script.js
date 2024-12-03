import { auth } from "./firebaseConsole.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

document.addEventListener("DOMContentLoaded", () => {
    const googleSignInButton = document.getElementById("google-signin-btn");

    // Add a console log to confirm the button click is being detected
    googleSignInButton.addEventListener("click", () => {
        console.log("Google Sign-In button clicked!"); // Debugging log

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log("User signed in:", user);
                alert(`Welcome, ${user.displayName}!`);
                window.location.href = "dashboard.html"; // Redirect to dashboard or home page
            })
            .catch((error) => {
                console.error("Error during Google Sign-In:", error.message);
                alert("Google Sign-In failed. Please try again.");
            });
    });
});
