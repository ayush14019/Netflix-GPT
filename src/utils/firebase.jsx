// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7_4bXwIYK5EpVkExCTdfOzdILS2U47Uw",
  authDomain: "netflixgpt-3f0dd.firebaseapp.com",
  projectId: "netflixgpt-3f0dd",
  storageBucket: "netflixgpt-3f0dd.firebasestorage.app",
  messagingSenderId: "139535505815",
  appId: "1:139535505815:web:04099b2dc61d940061ccd2",
  measurementId: "G-9J2RK41HWF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
