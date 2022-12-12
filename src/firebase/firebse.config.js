// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsopZECkLnuxmtZxOqsBo5jJ7l9c2g1DA",
  authDomain: "address-book-99a43.firebaseapp.com",
  projectId: "address-book-99a43",
  storageBucket: "address-book-99a43.appspot.com",
  messagingSenderId: "1035939225127",
  appId: "1:1035939225127:web:140d3eb51c10b62323f802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;