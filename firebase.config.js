import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// better take this in .env
const firebaseConfig = {
  apiKey: "AIzaSyDDHFFux9TpLoLBzPXFzWpML50R3A6LuQg",
  authDomain: "l-firebase-8f9e1.firebaseapp.com",
  projectId: "l-firebase-8f9e1",
  storageBucket: "l-firebase-8f9e1.appspot.com",
  messagingSenderId: "352697241445",
  appId: "1:352697241445:web:f9f4369f757ebe99dc1b8c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
