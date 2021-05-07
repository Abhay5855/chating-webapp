import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIpwriIN9VHHb_X6C9VqDbGP8mtRno27g",
  authDomain: "chat-application-2f127.firebaseapp.com",
  projectId: "chat-application-2f127",
  storageBucket: "chat-application-2f127.appspot.com",
  messagingSenderId: "455779360995",
  appId: "1:455779360995:web:21e6aa08b6eac2f979e5d6"
});
// Initialize Firebase

const db = firebaseApp.firestore();

export default db;
