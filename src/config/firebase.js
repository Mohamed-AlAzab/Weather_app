import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2j0Oi-PRpRSbo2o9u-v3dQfXjsTo4yA0",
  authDomain: "weatherapp-912de.firebaseapp.com",
  projectId: "weatherapp-912de",
  storageBucket: "weatherapp-912de.appspot.com",
  messagingSenderId: "74711989201",
  appId: "1:74711989201:web:b38d36b7f48cadb26bbef0",
  measurementId: "G-XWZ3X7DCE4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
