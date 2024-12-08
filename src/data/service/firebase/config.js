
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy0K148UWNHSfXEhxgGJpoAsL1BblsQ9c",
  authDomain: "ecomerce-cndf.firebaseapp.com",
  projectId: "ecomerce-cndf",
  storageBucket: "ecomerce-cndf.firebasestorage.app",
  messagingSenderId: "937345242869",
  appId: "1:937345242869:web:21fe95b089a9b443ed57bc",
  measurementId: "G-DHSYB5T0E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);