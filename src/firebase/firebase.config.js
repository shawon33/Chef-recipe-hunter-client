// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLsco_hpmnuMy-FbrCyFYy_Kszb0A8wKY",
  authDomain: "chef-projct.firebaseapp.com",
  projectId: "chef-projct",
  storageBucket: "chef-projct.appspot.com",
  messagingSenderId: "1088094577841",
  appId: "1:1088094577841:web:ce5b6fe8404ffd31ef2e90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;