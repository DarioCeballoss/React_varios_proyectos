import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCfK9A5aWVNU1wuwgnY9pUnFgZ52yakDxM",
  authDomain: "ejemplofirestore-8c713.firebaseapp.com",
  projectId: "ejemplofirestore-8c713",
  storageBucket: "ejemplofirestore-8c713.appspot.com",
  messagingSenderId: "88975548552",
  appId: "1:88975548552:web:efd36a3c0ce128d6587f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();