import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUxWCWF1Yf57c8w903D8RjzZnZZIejLtU",
    authDomain: "twitter-clone-b3ee7.firebaseapp.com",
    projectId: "twitter-clone-b3ee7",
    storageBucket: "twitter-clone-b3ee7.appspot.com",
    messagingSenderId: "907595232628",
    appId: "1:907595232628:web:c5a2ba31844f37f3c3a821"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;