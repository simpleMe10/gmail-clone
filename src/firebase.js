import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBGluIdYWPPZdYhMD5skEbkWBX5zAQTf1U",
    authDomain: "clone-d2ef0.firebaseapp.com",
    projectId: "clone-d2ef0",
    storageBucket: "clone-d2ef0.appspot.com",
    messagingSenderId: "49131636065",
    appId: "1:49131636065:web:79629c51ce252b8b8bf120"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };