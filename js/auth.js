console.log("Firebase подключился");

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {

    apiKey: "ТВОЙ_APIKEY",
    authDomain: "ТВОЙ_AUTHDOMAIN",
    projectId: "ТВОЙ_PROJECTID",
    storageBucket: "ТВОЙ_STORAGE",
    messagingSenderId: "ТВОЙ_SENDER",
    appId: "ТВОЙ_APPID"

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
