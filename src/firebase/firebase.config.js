// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCURNDF7gjGur3fGJv4o4g3iEAxqJCt72c",
  authDomain: "module-51-auth-moha-milo-180d4.firebaseapp.com",
  projectId: "module-51-auth-moha-milo-180d4",
  storageBucket: "module-51-auth-moha-milo-180d4.appspot.com",
  messagingSenderId: "187966858162",
  appId: "1:187966858162:web:9e999d5ab88a2bbebbbaab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;