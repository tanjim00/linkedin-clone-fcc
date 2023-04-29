// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg1jb1KrciizDbjasw-aRZ0oQld-phUIE",
  authDomain: "linkedin-clone-651b3.firebaseapp.com",
  projectId: "linkedin-clone-651b3",
  storageBucket: "linkedin-clone-651b3.appspot.com",
  messagingSenderId: "1089658012968",
  appId: "1:1089658012968:web:a8f4144c9473e823743c1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };