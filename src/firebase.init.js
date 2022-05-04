// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpVhNiQTcyrOHaofkqXDsRg7P8g67CbZ0",
  authDomain: "accel-moto.firebaseapp.com",
  projectId: "accel-moto",
  storageBucket: "accel-moto.appspot.com",
  messagingSenderId: "498218379241",
  appId: "1:498218379241:web:3bda9dc944955d28e78d78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;