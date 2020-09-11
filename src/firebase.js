import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCbG7V3a4ROuTujZQmoqYrMe3eKUf3eCO4",
  authDomain: "clone-5c0fb.firebaseapp.com",
  databaseURL: "https://clone-5c0fb.firebaseio.com",
  projectId: "clone-5c0fb",
  storageBucket: "clone-5c0fb.appspot.com",
  messagingSenderId: "1063792382454",
  appId: "1:1063792382454:web:ad15afb92e5cbf03df37d7",
  measurementId: "G-K8XK08G8CW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
