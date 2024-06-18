import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhFgfaYfxzBJJFIRygiz_AB8Ao6IFVrTA",
    authDomain: "animal-pet-15bca.firebaseapp.com",
    projectId: "animal-pet-15bca",
    storageBucket: "animal-pet-15bca.appspot.com",
    messagingSenderId: "489765989542",
    appId: "1:489765989542:web:36daa3f10043f673859867"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };