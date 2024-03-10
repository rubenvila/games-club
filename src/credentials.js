// Import the functions you need from the SDKs you need 
import  { initializeApp } from "firebase/app"; 
import { getFirestore } from "@firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries 
 
// Your web app's Firebase configuration 
const firebaseConfig = { 
  apiKey: "AIzaSyBvY6Feq4PBJqyfEQmip5veAQ77Rai2Ifg", 
  authDomain: "games-club-project.firebaseapp.com", 
  projectId: "games-club-project", 
  storageBucket: "games-club-project.appspot.com", 
  messagingSenderId: "330314818590", 
  appId: "1:330314818590:web:171572d322dc186102ba0f" 
}; 
 
// Initialize Firebase 
const appFirebase = initializeApp(firebaseConfig); 
 
//const bd = firebase.firestore() 
export default appFirebase;