import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

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

const avatar = document.getElementById("avatar");
const preview = document.getElementById("preview");
const bio = document.getElementById("bio");
const button = document.getElementById("createProfile");

let avatarBase64 = "";

avatar.addEventListener("change",(e)=>{

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = ()=>{

        avatarBase64 = reader.result;

        preview.src = avatarBase64;

    };

    reader.readAsDataURL(file);

});

button.addEventListener("click",()=>{

    const user = auth.currentUser;

    if(!user){

        alert("Необходимо войти через Google");

        return;

    }

    const profile = {

        uid:user.uid,

        name:user.displayName,

        email:user.email,

        avatar:avatarBase64,

        banner: "img/default-banner.jpg",
        
        description:bio.value,

        created:Date.now()

    };

    localStorage.setItem("profile",JSON.stringify(profile));

    location.href="profile.html";

});
