import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkCzDcJ_Tz5DwEBUmmpp6TNGuVL6cZGLU",
  authDomain: "bx-games.firebaseapp.com",
  projectId: "bx-games",
  storageBucket: "bx-games.appspot.com",
  messagingSenderId: "539894653698",
  appId: "1:539894653698:web:d31e6154463148c6e0d81b"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


