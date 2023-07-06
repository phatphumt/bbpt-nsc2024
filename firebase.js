// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrCQB1NQnbdUqi27Q822cDfAD74fRkOKw",
    authDomain: "bbpt-nsc2024.firebaseapp.com",
    projectId: "bbpt-nsc2024",
    storageBucket: "bbpt-nsc2024.appspot.com",
    messagingSenderId: "990812073456",
    appId: "1:990812073456:web:c8c8e1649a623704a68135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase_auth = getAuth(app)

export { app, firebase_auth }