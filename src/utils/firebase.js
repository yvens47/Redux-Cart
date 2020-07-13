import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBFcSU9zI7U-4BropE1hO-VOStRvgXGrgQ",
  authDomain: "redcart-753c8.firebaseapp.com",
  databaseURL: "https://redcart-753c8.firebaseio.com",
  projectId: "redcart-753c8",
  storageBucket: "redcart-753c8.appspot.com",
  messagingSenderId: "308999722612",
  appId: "1:308999722612:web:61056dff2f97c0b013e321",
  measurementId: "G-NMZCQ7XHS7"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
