import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyDEPqv6ileN9fJT3WYbAVAAue3PkLDqi60",
    authDomain: "vindicated-c2b4b.firebaseapp.com",
    databaseURL: "https://vindicated-c2b4b.firebaseio.com",
    projectId: "vindicated-c2b4b",
    storageBucket: "vindicated-c2b4b.appspot.com",
    messagingSenderId: "92501807886",
    appId: "1:92501807886:web:9dfe9abadf54855b9bfd5f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  export const provider = new firebase.auth.GoogleAuthProvider();