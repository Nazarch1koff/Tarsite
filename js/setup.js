import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

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

        description:bio.value,

        created:Date.now()

    };

    localStorage.setItem("profile",JSON.stringify(profile));

    location.href="profile.html";

});
