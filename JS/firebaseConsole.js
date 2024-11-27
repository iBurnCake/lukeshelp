// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDD1nHLFLlEZzfmPLNITGv0jtQ0wKUZ11k",
    authDomain: "lukeshelp.firebaseapp.com",
    projectId: "lukeshelp",
    storageBucket: "lukeshelp.firebasestorage.app",
    messagingSenderId: "1099033563606",
    appId: "1:1099033563606:web:f41f2bed1fd270d7119477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
