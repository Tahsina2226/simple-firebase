// Firebase.init.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // Uncomment if you use analytics

const firebaseConfig = {
    apiKey: "AIzaSyA12qlNljpTMD_0_Kq79Hpy02hYFkHPPEo",
    authDomain: "simple-firebase-b9e54.firebaseapp.com",
    projectId: "simple-firebase-b9e54",
    storageBucket: "simple-firebase-b9e54.firebasestorage.app",
    messagingSenderId: "30157105762",
    appId: "1:30157105762:web:488b58fc27b55311d9ff3b",
    measurementId: "G-RF9WYTNHGN"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Uncomment if using analytics

const auth = getAuth(app);

export default auth; // Use default export