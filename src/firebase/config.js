import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCViylTNzlOnNimRXEIkR4zf2jYaohnUcw",
  authDomain: "furits-shop-website.firebaseapp.com",
  projectId: "furits-shop-website",
  storageBucket: "furits-shop-website.appspot.com",
  messagingSenderId: "663527595750",
  appId: "1:663527595750:web:105708f6cdbe6e38c52527",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const user = auth.currentUser;
