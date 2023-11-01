// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1OLwk0I_AfWlgnhMZ0i5pErW1wy4vg2Q",
  authDomain: "study-stream-yks.firebaseapp.com",
  projectId: "study-stream-yks",
  storageBucket: "study-stream-yks.appspot.com",
  messagingSenderId: "1036844554712",
  appId: "1:1036844554712:web:c90342975b0d1da2a8baad",
  measurementId: "G-0ZFTR8QEBR",
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
