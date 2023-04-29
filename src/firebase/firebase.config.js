// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAexJXk8EdUtUN3DdT0ptvxXXHgxzpeqdU",
  authDomain: "emafi-with-firebase-auth.firebaseapp.com",
  projectId: "emafi-with-firebase-auth",
  storageBucket: "emafi-with-firebase-auth.appspot.com",
  messagingSenderId: "825213245090",
  appId: "1:825213245090:web:089134dc1a43844303a9fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;