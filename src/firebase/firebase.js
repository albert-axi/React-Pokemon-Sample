import firebase from 'firebase';

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBEinzX3VoskpbPG-vViOjGf-kszB68ygY",
  authDomain: "pokemon-react-286be.firebaseapp.com",
  projectId: "pokemon-react-286be",
  storageBucket: "pokemon-react-286be.appspot.com",
  messagingSenderId: "665547111412",
  appId: "1:665547111412:web:ff61e88f8a81f5151017a1",
  measurementId: "G-N4BEN62SK6"
};
firebase.initializeApp(config);
export const firebaseEmailAuthProvider = firebase.auth.EmailAuthProvider
export const auth = firebase.auth()
export const db = firebase.firestore()