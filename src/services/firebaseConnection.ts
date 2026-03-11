
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPNttTP1F5KOyJxx46QwuXNubDO5IDMvo",
  authDomain: "corrige-me-f5f7a.firebaseapp.com",
  projectId: "corrige-me-f5f7a",
  storageBucket: "corrige-me-f5f7a.firebasestorage.app",
  messagingSenderId: "1051140951313",
  appId: "1:1051140951313:web:3a630ba45bc7d1469cd0b0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db} ;