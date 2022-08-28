import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAayYlH7De5iFUpyKjB7SRt_nLzTtMC4vE",
  authDomain: "linkedin-clone-yt-86ddd.firebaseapp.com",
  projectId: "linkedin-clone-yt-86ddd",
  storageBucket: "linkedin-clone-yt-86ddd.appspot.com",
  messagingSenderId: "14034086167",
  appId: "1:14034086167:web:8edf4f2fc167d11b1eaf52"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};
