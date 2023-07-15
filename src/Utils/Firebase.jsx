// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCQQYHvJFi20Eay-44kaKCn6t2aemcAWho",
    authDomain: "user-list-4de6d.firebaseapp.com",
    projectId: "user-list-4de6d",
    storageBucket: "user-list-4de6d.appspot.com",
    messagingSenderId: "601628285588",
    appId: "1:601628285588:web:7701b4e0bffc160359b281",
    measurementId: "G-559MRRL2LK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getDatabase(app);