// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNUrZdkQVczgNbKcF00qjF53DIkNGvETc",
  authDomain: "usersurvey-da50e.firebaseapp.com",
  databaseURL: "https://usersurvey-da50e-default-rtdb.firebaseio.com",
  projectId: "usersurvey-da50e",
  storageBucket: "usersurvey-da50e.appspot.com",
  messagingSenderId: "257156702397",
  appId: "1:257156702397:web:c05fb57653a4f5137b57d4",
  measurementId: "G-4M7CPGQ9XH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
