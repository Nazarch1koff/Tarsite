console.log("Firebase подключился");

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAuOxXXlpVb0-kR5JW5c2BjWkK2uIVkdI",
  authDomain: "saitiknazarch1ka.firebaseapp.com",
  projectId: "saitiknazarch1ka",
  storageBucket: "saitiknazarch1ka.firebasestorage.app",
  messagingSenderId: "951951654419",
  appId: "1:951951654419:web:6ce11f398f920ad23209e6",
  measurementId: "G-VF7D176ETT"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

document
.getElementById("googleLogin")
.addEventListener("click", async ()=>{

    try{

        const result = await signInWithPopup(auth,provider);

        alert("Добро пожаловать, " + result.user.displayName);

        console.log(result.user);

    }

    catch(error){

        console.error(error);

        alert("Ошибка входа");

    }

});
