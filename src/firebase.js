// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDdpPb5h5oDp2YrHz9qHR_TnGFOwyTU74",
    authDomain: "e-commerce-app-94b64.firebaseapp.com",
    projectId: "e-commerce-app-94b64",
    storageBucket: "e-commerce-app-94b64.appspot.com",
    messagingSenderId: "900959113914",
    appId: "1:900959113914:web:c324fc4088f0676617a883",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
