// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCBMciZSM9SPDdoEkvyiWgt4Pd8eCdigwY",
//   authDomain: "netflixgpt-b809a.firebaseapp.com",
//   projectId: "netflixgpt-b809a",
//   storageBucket: "netflixgpt-b809a.appspot.com",
//   messagingSenderId: "817486366476",
//   appId: "1:817486366476:web:7304b61f57450912a0eb29",
//   measurementId: "G-TX6JJ38N5C",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2UTvo-4PCwxv3qbgWUaMqicWmFizK3yc",
  authDomain: "mygpt-44738.firebaseapp.com",
  projectId: "mygpt-44738",
  storageBucket: "mygpt-44738.appspot.com",
  messagingSenderId: "374294211964",
  appId: "1:374294211964:web:985bd7a685025d1e4ec8f9",
  measurementId: "G-DDM2MBBFFT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
