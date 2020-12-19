import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB0tsQfLpWOK1_lx10VHUKGKAfMMpTSVFE",
    authDomain: "crwn-db-b0eb4.firebaseapp.com",
    projectId: "crwn-db-b0eb4",
    storageBucket: "crwn-db-b0eb4.appspot.com",
    messagingSenderId: "58011317766",
    appId: "1:58011317766:web:1c6d90624ad2765e5fb587",
    measurementId: "G-PESZRG0DSC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

