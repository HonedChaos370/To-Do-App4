import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcBjWCeCKcgwPKR3osJN64is7ZBIlkySg",
  authDomain: "to-do-app4.firebaseapp.com",
  databaseURL: "https://to-do-app4.firebaseio.com",
  projectId: "to-do-app4",
  storageBucket: "to-do-app4.appspot.com",
  messagingSenderId: "708742697905",
  appId: "1:708742697905:web:253308e1adbd2a7379a390",
  measurementId: "G-7LDH5E79SQ"
};

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();

export const todosRef = databaseRef.child("todos");
