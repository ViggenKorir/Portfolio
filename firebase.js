import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC37THWmcoYYI-YaNAA78q4zN9p7D8Ul4Y",
  authDomain: "portfolio-korir.firebaseapp.com",
  projectId: "portfolio-korir",
  storageBucket: "portfolio-korir.firebasestorage.app",
  messagingSenderId: "798582419784",
  appId: "1:798582419784:web:8543d344e7e6fd8724037d",
  measurementId: "G-0LB8ZKG1ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);