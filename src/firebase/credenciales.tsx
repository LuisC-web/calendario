// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

	apiKey: "AIzaSyDpA37FrljSjwX7z8X7daxdb7aluBxf0ns",

	authDomain: "calendar-5d537.firebaseapp.com",

	projectId: "calendar-5d537",

	storageBucket: "calendar-5d537.appspot.com",

	messagingSenderId: "531546152674",

	appId: "1:531546152674:web:af18ab79c5b5402ebb88bb"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);