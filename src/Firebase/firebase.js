// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsgaGPKYEWaWVtd3omAXGyfKZKpWOMwrw",
    authDomain: "willcodes-portfolio.firebaseapp.com",
    databaseURL: "https://willcodes-portfolio-default-rtdb.firebaseio.com",
    projectId: "willcodes-portfolio",
    storageBucket: "willcodes-portfolio.appspot.com",
    messagingSenderId: "219776973449",
    appId: "1:219776973449:web:981511415c1f37a1f9a458",
    measurementId: "G-PSN0TYFHRH"
};

// Initialize Firebase

export default firebaseConfig;